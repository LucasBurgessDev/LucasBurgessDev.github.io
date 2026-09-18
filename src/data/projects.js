// Real personal projects. Updated by hand — these change rarely enough
// that a Firestore-backed pipeline (like the blog's) would be overkill.
export const projects = [
  {
    id: "plantagent",
    title: "PlantAgent",
    tagline: "An AI horticulturalist that actually knows your home",
    tech: ["Google ADK", "Gemini", "FastAPI", "Firestore", "BigQuery", "Home Assistant"],
    summary:
      "A multi-agent AI app that gives tailored plant care advice for your actual collection and actual home — not generic care cards. Specialist agents handle diagnosis, repotting, propagation, and a seasonal planner tuned for the UK climate, backed by a ~500-species RAG knowledge base. Home Assistant pushes live soil moisture and room sensor readings in over a webhook, which update Firestore instantly, log to BigQuery, and automatically recalculate every affected plant's watering schedule.",
    repoUrl: null,
    status: "Private — read the write-up",
    blogId: 8,
  },
  {
    id: "ai-fitness",
    title: "AI Cycling Coach",
    tagline: "A conversational coach backed by your real Garmin data",
    tech: ["Google ADK", "Gemini", "BigQuery", "Garmin Connect", "Cloud Run"],
    summary:
      "A Cloud Run job pulls biometrics and activity data from Garmin Connect every 30 minutes into BigQuery — weight, sleep, HRV, VO2 max, TSS, Normalised Power. A Gemini-powered chat app sits on top with direct BigQuery access, so it can answer real questions about actual training load instead of generic advice, plus Google Calendar sync and push notifications for recovery check-ins.",
    repoUrl: "https://github.com/LucasBurgessDev/AI_Fitness",
    status: "Public repo",
  },
  {
    id: "football-agent",
    title: "Football Club Data Agent",
    tagline: "What if a football club's entire data estate was queryable in plain English",
    tech: ["Google ADK", "BigQuery", "Python"],
    summary:
      "A Google ADK agent sitting over a modelled football club data warehouse — 18 tables spanning matches, player stats, injuries, transfers, fan and ticketing records, sponsorships, and youth academy data. Built to explore how far natural-language querying can go once an entire club's operations are sitting in BigQuery, from \"who scored last weekend\" to \"which sponsorship deals are up for renewal.\"",
    repoUrl: "https://github.com/LucasBurgessDev/football-agent",
    status: "Public repo",
  },
  {
    id: "temperature-data-stream",
    title: "Temperature Data Stream",
    tagline: "The IoT provisioning infra behind the original home sensor setup",
    tech: ["Terraform", "Azure IoT", "Key Vault"],
    summary:
      "Terraform-managed Azure IoT Device Provisioning Service, Key Vault, and storage for streaming home sensor data — temperature, and later the room/soil readings PlantAgent now consumes via Home Assistant. The precursor project that got the home automation habit started.",
    repoUrl: "https://github.com/LucasBurgessDev/PortfolioAWSTerraform",
    status: "Public repo",
  },
  {
    id: "sports-camera-calibration",
    title: "Sports Camera Calibration",
    tagline: "Pose estimation and tracking on sports footage",
    tech: ["YOLO", "OpenCV", "Computer Vision"],
    summary:
      "A computer vision pipeline using YOLO pose estimation to track player positioning from match footage — the practical follow-up to the computer vision write-up on this blog, applied to an actual sport-tracking use case rather than the theory.",
    repoUrl: "https://github.com/LucasBurgessDev/sports_camera_calibration",
    status: "Public repo",
    blogId: 2,
  },
];
