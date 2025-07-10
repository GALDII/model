import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ⬅️ Import Link for navigation
import "./Showcase.css";

const Showcase = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/models")
      .then(res => setModels(res.data))
      .catch(err => console.error("Error fetching models:", err));
  }, []);

  return (
    <div className="showcase-container">
      <h2 className="title">Meet Our Models</h2>

      {/* 🔙 Back to Home Button */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Link to="/" className="btn-home">← Back to Home</Link>
      </div>

      <div className="model-grid">
        {models.map((m, i) => (
          <div className="model-card" key={i}>
            <img
              src={`http://localhost:5000${m.photo}`}
              onError={(e) => e.target.src = "https://via.placeholder.com/300x400?text=No+Image"}
              alt={m.full_name}
              className="model-image"
            />
            <div className="model-details">
              <h5>{m.full_name}</h5>
              <p>{m.age} yrs | {m.gender}</p>
              <p className="location">{m.location}</p>
              <a href={m.portfolio} target="_blank" rel="noreferrer" className="btn-view">
                View Portfolio
              </a>
            </div>
          </div>
        ))}
        {models.length === 0 && (
          <p className="text-center text-muted">No models to show.</p>
        )}
      </div>
    </div>
  );
};

export default Showcase;
