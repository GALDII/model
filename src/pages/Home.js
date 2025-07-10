import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to <span>Model Registering site</span></h1>
      <p className="home-subtitle">Launch your modeling journey with us today</p>
      <div className="home-buttons">
        <Link to="/signup" className="btn-register">Register</Link>
        <Link to="/showcase" className="btn-view">View Models</Link>
      </div>
    </div>
  );
};

export default Home;
