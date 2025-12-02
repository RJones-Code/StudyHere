import StudyLocationGrid from "./StudyLocationGrid.jsx"; // adjust path if needed

import LydonImg from "./assets/Lydon.jpg";
import SouthwickImg from "./assets/Southwick.jpg";
import OlsenImg from "./assets/Olsen.jpg";

function App() {
  const locations = [
  {
    id: 1,
    name: "Lydon Library",
    description: "Quiet floors, group rooms, and long study tables.",
    image: LydonImg
  },
  {
    id: 2,
    name: "Southwick Hall",
    description: "Great natural lighting and whiteboards.",
    image: SouthwickImg
  },
  {
    id: 3,
    name: "Olsen Hall",
    description: "Lounge seating, cafes, and open social areas.",
    image: OlsenImg
  }
  ];


  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6">
        Study Space Reservation
      </h1>

      <StudyLocationGrid locations={locations} />
    </>
  );
}

export default App;