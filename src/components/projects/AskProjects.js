import React, { useState } from "react";
import axios from "axios";
import "./AskProjects.css";

const ASK_PROJECTS_URL = "https://europe-west2-arboreal-avatar-415621.cloudfunctions.net/ask-projects";

const SUGGESTIONS = [
  "How does the PlantAgent watering schedule auto-update?",
  "What's the tech stack behind the AI cycling coach?",
  "How would I build something like the football data agent?",
];

function AskProjects() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const ask = async (q) => {
    const trimmed = q.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const res = await axios.post(ASK_PROJECTS_URL, { question: trimmed });
      setAnswer(res.data.answer);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong asking that — try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ask(question);
  };

  return (
    <div className="ask-projects">
      <h2>Ask about my projects</h2>
      <p className="ask-projects-intro">
        A small Gemini-powered Q&amp;A grounded in the real write-ups above — ask how
        something works and it'll explain it well enough to build yourself.
      </p>
      <form onSubmit={handleSubmit} className="ask-projects-form">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. How does the Home Assistant webhook work?"
          maxLength={400}
        />
        <button type="submit" className="btn btn--primary btn--medium" disabled={loading}>
          {loading ? "Asking…" : "Ask"}
        </button>
      </form>
      <div className="ask-projects-suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="ask-suggestion-chip" onClick={() => { setQuestion(s); ask(s); }}>
            {s}
          </button>
        ))}
      </div>
      {loading && <p className="ask-projects-status">Thinking…</p>}
      {error && <p className="ask-projects-error">{error}</p>}
      {answer && <p className="ask-projects-answer">{answer}</p>}
    </div>
  );
}

export default AskProjects;
