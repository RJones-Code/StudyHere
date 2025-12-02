import React from "react";
import "./StudyCards.css";

export default function StudyLocationGrid({ locations }) {
  return (
    <div className="page-container">
      <div className="grid-container">
        {locations.map((loc) => (
          <div key={loc.id} className="card">
            <img src={loc.image} alt={loc.name} />
            <div className="card-content">
              <div className="card-title">{loc.name}</div>
              <div className="card-description">{loc.description}</div>
              <button className="card-button">Reserve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
