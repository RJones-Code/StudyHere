import "./StudyCards.css";

export default function StudyLocationGrid({ locations }) {
  return (
    <div className="grid-container">
      {locations.map((loc) => (
        <StudyLocationCard key={loc.id} location={loc} />
      ))}
    </div>
  );
}

function StudyLocationCard({ location }) {
  return (
    <div className="card">
      {location.image && (
        <img src={location.image} alt={location.name} />
      )}
      <div className="card-content">
        <h2 className="card-title">{location.name}</h2>
        <p className="card-description">{location.description}</p>
        <button className="card-button">Reserve</button>
      </div>
    </div>
  );
}