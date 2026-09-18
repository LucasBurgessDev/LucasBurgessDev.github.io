# Adding Content to Your Portfolio

Since your site fetches data from your Google Cloud Backend, adding content involves ensuring your backend API serves data in the correct format.

## Blog Post Schema

Your frontend expects blog data in the following JSON structure:

```json
{
  "id": "unique-id",
  "title": "Blog Title",
  "category": "Main Category",
  "sub_category": ["Tag1", "Tag2"],
  "cover": "https://path-to-cover-image.jpg",
  "created_on": "December 22, 2025",
  "author_name": "Lucas Burgess",
  "author_avatar": "https://path-to-avatar.jpg",
  "para1": "Short description for the listing view.",
  "content": [
    {
      "type": "text",
      "value": "This is the first paragraph of your blog."
    },
    {
      "type": "header",
      "value": "This is a Section Heading"
    },
    {
      "type": "image",
      "value": "https://path-to-image.jpg",
      "caption": "Optional caption for the image",
      "alt": "Alt text for accessibility"
    },
    {
      "type": "text",
      "value": "You can follow up with as much text as you need here."
    }
  ]
}
```

### Flexible Ordering
The blog will render the `content` array in the exact order you provide. You can mix and match any number of `text`, `header`, and `image` blocks.

## Adding Images and Videos

1.  **Images**: You can host images in `src/images` and import them if you are hardcoding, or plug in a URL from your cloud storage.
2.  **Videos**: Currently, videos are supported in the Hero section (`src/videos`). To add a new video background, upload the file to `src/videos` and update `src/features/home/HeroSection.js`.

## Publishing

There is no admin UI or public write endpoint — deliberately, since an open
POST for blog content would be a spam vector. New posts are published with
`scripts/publish_blog.py` in the `lucasburgess.dev-backend` repo, which
writes directly to Firestore and uploads any local images to the
`lucasburgessdev-blogs-images` bucket. See that repo's `scripts/example_post.json`
for the draft format, or just hand your copy to Claude — see `CLAUDE.md` in
this repo for the full runbook.
