import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ReservePage from "./Pages/ReservePage.jsx";
import LocationsPage from "./Pages/LocationsPage.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;