# lucasburgess.dev — project context

This is Luke Burgess's personal portfolio + blog site. There are **two repos**:

- **This repo** (`LucasBurgessDev.github.io`) — the frontend. A Create React App
  (React 17, react-router-dom v5, plain CSS, no CSS framework), deployed as a
  static site to GitHub Pages via `.github/workflows/github-pages.yml`.
  There is no server-side code here, no build-time data — everything blog-related
  is fetched client-side at runtime.
- **`LucasBurgessDev/lucasburgess.dev-backend`** — the backend. Not checked out
  in this working directory by default; clone it separately
  (`gh repo clone LucasBurgessDev/lucasburgess.dev-backend`) when you need to
  touch it. It deploys two Python Cloud Functions plus a LinkedIn cross-posting
  job, all in GCP project **`arboreal-avatar-415621`**, region **`europe-west2`**.

## Backend architecture

| Piece | What it is |
|---|---|
| `get-blog-info` (Cloud Function, gen2) | GET-only. Reads the `blog` Firestore collection, normalizes content, signs cover/inline image URLs, returns JSON. Entry point `get_blog_info` in `main.py`. |
| `user-write` (Cloud Function, gen2) | POST-only. Contact form handler — validates and writes to the `users` Firestore collection. Entry point `write_to_firestore` in `main.py`. |
| `linkedin_automation/` (Cloud Run Job) | Reads the *latest* blog post, asks Gemini (`gemini-2.5-flash`) to turn it into a LinkedIn post, posts it, tracks `last_blog_id` in the `automation_state` Firestore collection so it never reposts. **Read-only against `blog`** — it does not create posts. |
| Firestore (native mode, `europe-west2`) | Collections: `blog`, `users`, `automation_state`. |
| GCS bucket `lucasburgessdev-blogs-images` | Flat namespace of image files, referenced by bare filename (blob name) from Firestore docs, never by URL. `get-blog-info` turns each blob name into a v4 signed URL (24h expiry) at read time — the API response always has real signed URLs, but the DB itself only ever stores filenames. |

Both functions are deployed by GitHub Actions on push to `main` in the backend
repo (`.github/workflows/deploy-*.yml`), using a `GCP_SA_KEY` secret. **A push
to that repo's `main` redeploys production** — treat it like any other prod
deploy and confirm before pushing.

### Blog Firestore document schema

```json
{
  "id": 5,
  "title": "Post Title",
  "category": "Software Development",
  "sub_category": ["Tag1", "Tag2"],
  "author_name": "LucasBurgessDev",
  "author_avatar": "Luke Headshot.jpg",
  "cover": "some-image.jpg",
  "created_on": "<Firestore Timestamp>",
  "active": true,
  "content": [
    {"type": "text", "value": "..."},
    {"type": "header", "value": "..."},
    {"type": "image", "value": "some-inline-image.png"}
  ]
}
```

- `cover` and any `content` block with `type: "image"` store a **bare GCS blob
  name**, not a URL. `get_blog_info` signs it on the way out.
- `created_on` being in the future means the post is scheduled — the list
  query filters `created_on <= now`, so it simply won't appear until then.
- `active` is enforced server-side: the Firestore query in `get_blog_info`
  requires `active == True` (fixed 2026-09; previously stored but never
  filtered, so a `false` post would still have rendered — if you ever see
  posts leaking, check this filter is still in `main.py` after a redeploy).
- `get_blog_info` also defensively unwraps legacy shapes (stringified JSON
  content, `object_type`/`object_information` keys from an older schema) so
  older Firestore docs keep working. **New docs should always be written in
  the clean `{type, value}` shape above** — don't perpetuate the legacy shape.
- Requesting `?blog_id=N` requires the same `active == True` filter, so an
  inactive/draft post is not viewable via direct link either.

The frontend (`src/services/api.js`, `getBlogInfo`) always receives the
already-normalized shape above — `content` is guaranteed to be a flat array
of `{type, value}` objects. Don't re-add recursive/defensive parsing on the
frontend for this; that logic used to exist in `BlogPost.js`/`BlogItem.js`
to cope with an old inconsistent backend format and was removed once the
backend was confirmed to always normalize (2026-09 cleanup). If you find
yourself wanting to parse stringified JSON out of `content` again, the bug is
almost certainly in the backend, not here.

## Publishing a new blog post (runbook)

There is **no public write endpoint** for the `blog` collection, deliberately —
an open POST for blog content would be a spam/injection vector. Publishing is
done with `scripts/publish_blog.py` in the backend repo, using the operator's
own `gcloud` credentials (currently `contact@lucasburgess.dev`, which has
`roles/owner` on the project).

When the user hands you raw copy to publish:

1. Clone/open the backend repo if you don't already have it locally:
   `gh repo clone LucasBurgessDev/lucasburgess.dev-backend`.
2. Turn the copy into a draft JSON matching `scripts/example_post.json`'s
   shape: `title`, `category`, `sub_category`, `author_name`, `author_avatar`,
   `content` (array of `{type: text|header, value}` or
   `{type: image, local_path}` blocks), and `cover_image_path` if there's a
   local cover image. Use your judgement to split the copy into `text`/
   `header` blocks — don't just dump one giant text block.
3. Confirm `gcloud auth list` shows an authenticated account with access to
   `arboreal-avatar-415621` (currently `contact@lucasburgess.dev`); if not,
   ask the user to re-run `gcloud auth login`.
4. Run `python scripts/publish_blog.py path/to/draft.json --dry-run` first
   and show the user the resolved document before writing anything.
5. On confirmation, re-run without `--dry-run`. It uploads any local images
   to the `lucasburgessdev-blogs-images` bucket, computes the next `id`, and
   writes the Firestore doc with `active: true` (or whatever the draft says).
6. Tell the user the live URL: `https://lucasburgess.dev/blog/<id>`.

Never write directly to Firestore ad hoc for a real post — always go through
the script so the `content`/`cover` shape stays consistent with what
`get_blog_info` expects.

## Known issues / things to watch

- **Security hygiene (backend repo):** the deployed Cloud Function source
  zips previously included the full `.git/` directory and a stray
  `gha-creds-*.json` (Workload Identity Federation config), because there was
  no `.gcloudignore`. Added one (2026-09) excluding `.git`, credentials files,
  and non-runtime files (`linkedin_automation/`, `scripts/`, tests, docs) from
  the deployed function source. If you ever see function deploys pulling in
  files they shouldn't, check `.gcloudignore` is still present and the
  `deploy-cloud-functions` GitHub Action is actually honoring it.
- CORS on both functions is locked to `https://www.lucasburgess.dev` /
  `https://lucasburgess.dev` (no localhost) — you can't hit prod from
  `npm start` directly. The CRA `proxy` field in `package.json` points at
  `localhost:5000`, implying local dev expects `functions-framework` running
  the backend locally (see the backend repo's README) — there's no local
  substitute checked into this repo.
- `addingcontent.md` in this repo describes the current schema reasonably
  accurately but predates the publish script above — treat this CLAUDE.md as
  the source of truth for the publishing workflow.

## Commands

- `npm start` — dev server (blog data won't load without a local backend or
  CORS access — see above).
- `npm test` — Jest/RTL tests (`CI=true npx react-scripts test --watchAll=false`
  for non-interactive runs).
- `npm run build` — production build.
- `npm run deploy` — `gh-pages -d build` (rarely needed manually; CI handles
  GitHub Pages deploys on push to the deploy branch, see
  `.github/workflows/github-pages.yml`).

## Visual/UI revamp

No design system in place yet — `App.css`/`index.css` are plain CSS with a
handful of CSS custom properties (`--accent-primary`, etc.), styling is
per-component/per-page CSS files. A full visual revamp is a separate,
open-ended effort — agree on direction (palette, layout, one page as a
pilot) with the user before reworking CSS broadly, rather than guessing.
