import React, { useState } from "react";

import "./ReservePage.css";
import StudyLocationGrid from "../Components/StudyLocationGrid";
import LydonImg from "../assets/lydon.jpg";
import SouthwickImg from "../assets/southwick.jpg";
import OlsenImg from "../assets/olsen.jpg";

export default function ReservePage() {
  const locations = [
    { id: 1, name: "Lydon Library", description: "Quiet floors, group rooms, long study tables.", image: LydonImg },
    { id: 2, name: "Southwick Hall", description: "Great natural lighting and whiteboards.", image: SouthwickImg },
    { id: 3, name: "Olsen Hall", description: "Lounge seating, cafes, and open social areas.", image: OlsenImg },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div className="reserve-container">
      <h1 className="reserve-title">Study Space Reservation</h1>
      <input
        type="text"
        placeholder="Search for a location..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <StudyLocationGrid locations={filteredLocations} />
    </div>
  );
}
