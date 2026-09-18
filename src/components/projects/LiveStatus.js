import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LiveStatus.css";

const LIVE_STATUS_URL = "https://plantagent-dev-470804671694.europe-west2.run.app/api/public/live-status";

function timeAgo(isoString) {
  if (!isoString) return "unknown";
  const diffMs = Date.now() - new Date(isoString).getTime();
  const mins = Math.round(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function moistureLabel(pct) {
  if (pct >= 50) return "healthy";
  if (pct >= 25) return "getting thirsty";
  return "needs water";
}

function LiveStatus() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    axios
      .get(LIVE_STATUS_URL)
      .then((res) => {
        const json = res.data;
        if (!cancelled && json && (json.rooms?.length || json.plants?.length)) {
          setData(json);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Nothing to show yet (still loading, endpoint offline, or no live sensors) — stay silent.
  if (!data) return null;

  return (
    <div className="live-status">
      <div className="live-status-header">
        <span className="live-dot" />
        <h2>Live from my flat</h2>
        <p>
          Real sensor data streaming out of{" "}
          <Link to="/blog/8">PlantAgent</Link>, the AI horticulturalist I built.
        </p>
      </div>
      <div className="live-status-grid">
        {data.rooms?.map((room, i) => (
          <div className="live-card" key={`room-${i}`}>
            <span className="live-card-label">{room.name}</span>
            <div className="live-card-readings">
              {room.temp_c != null && <span className="live-reading">{room.temp_c}°C</span>}
              {room.humidity_pct != null && <span className="live-reading">{room.humidity_pct}% humidity</span>}
            </div>
            <span className="live-card-updated">{timeAgo(room.updated_at)}</span>
          </div>
        ))}
        {data.plants?.map((plant, i) => (
          <div className="live-card" key={`plant-${i}`}>
            <span className="live-card-label">{plant.name}</span>
            <div className="live-card-readings">
              <span className="live-reading">{plant.moisture_pct}% soil moisture</span>
            </div>
            <span className={`live-card-status live-card-status--${plant.moisture_pct >= 50 ? "ok" : plant.moisture_pct >= 25 ? "warn" : "bad"}`}>
              {moistureLabel(plant.moisture_pct)} · {timeAgo(plant.updated_at)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveStatus;
