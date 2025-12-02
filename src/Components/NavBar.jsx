// src/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div to="/" className="nav-logo">StudyHere</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Locations">Study Locations</a></li>
        <li><a href="/Reserve">Reserve</a></li>
      </ul>
    </nav>
  );
}
