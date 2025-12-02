import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to StudyHere</h1>
      <p className="home-description">
        Find and reserve the best study spaces on campus with ease. Quiet areas, group rooms, cafes, and more — all in one place.
      </p>
      <button className="home-button" onClick={() => navigate("/reserve")}>
        Go to Reserve Page
      </button>
    </div>
  );
}