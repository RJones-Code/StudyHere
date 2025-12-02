import React, { useState } from "react";
import LydonImg from "../assets/lydon.jpg";
import SouthwickImg from "../assets/southwick.jpg";
import OlsenImg from "../assets/olsen.jpg";
import "./LocationsPage.css";

const locations = [
  {
    id: 1,
    name: "Lydon Library",
    description: "Quiet floors, group rooms, long study tables.",
    details:
      "Lydon Library has multiple floors dedicated to quiet study. It offers private rooms for group work, free Wi-Fi, and plenty of power outlets.",
    image: LydonImg,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.398913399666!2d-71.32909682387552!3d42.65290127116724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a45a776d2e1d%3A0x8a94890f11869fc3!2sLydon%20Library!5e0!3m2!1sen!2sus!4v1764653486824!5m2!1sen!2sus"
  },
  {
    id: 2,
    name: "Southwick Hall",
    description: "Great natural lighting and whiteboards.",
    details:
      "Southwick Hall is perfect for collaborative projects. Large tables, plenty of whiteboards, and bright natural light make it ideal for group work.",
    image: SouthwickImg,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.5955931496146!2d-71.32596446306663!3d42.653251845287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a45a85b3b9dd%3A0x2f560f6d44da0c1!2sSouthwick%20Hall!5e0!3m2!1sen!2sus!4v1764653742468!5m2!1sen!2sus"
  },
  {
    id: 3,
    name: "Olsen Hall",
    description: "Lounge seating, cafes, and open social areas.",
    details:
      "Olsen Hall offers a more relaxed study environment with lounge seating, cafes, and open areas for informal meetings and group discussions.",
    image: OlsenImg,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.5854944697284!2d-71.3263748410459!3d42.654107981649446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a4508d06e59d%3A0x272c0c1630f00f79!2sOlsen%20Hall!5e0!3m2!1sen!2sus!4v1764653832469!5m2!1sen!2sus"
  }
];

export default function LocationsPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="locations-container">
      <h1 className="locations-title">Campus Study Locations</h1>
      <div className="locations-list">
        {locations.map((loc) => (
          <div key={loc.id} className="location-card">
            <div className="location-header" onClick={() => toggleExpand(loc.id)}>
              <img src={loc.image} alt={loc.name} className="location-thumb" />
              <div className="location-info">
                <h2>{loc.name}</h2>
                <p>{loc.description}</p>
              </div>
              <span className="expand-icon">{expandedId === loc.id ? "▲" : "▼"}</span>
            </div>
            {expandedId === loc.id && (
              <div className="location-details">
                <p>{loc.details}</p>
                <iframe
                  src={loc.mapEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name + " map"}
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
