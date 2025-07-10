import React from "react";
import { Link } from "react-router-dom";
import "./Success.css"; // ✅ Add this import

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <i className="bi bi-check-circle-fill success-icon"></i>
        <h1 className="success-title">🎉 Application Submitted Successfully!</h1>
        <p className="success-message">
          Thank you for applying to <strong>ModelConnect</strong>.<br />
          Our team will review your application and get back to you within 3–5 business days.
        </p>
        <div className="success-buttons">
          <Link to="/" className="btn-home">
            <i className="bi bi-house-door me-2"></i>Back to Home
          </Link>
          <Link to="/showcase" className="btn-view">
            <i className="bi bi-person-video3 me-2"></i>View Other Models
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
