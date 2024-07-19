import "./App.css";
import FootballListHeader from "./Components/FootballListHeader/FootballListHeader";
import FootballListItem from "./Components/FootballListItem/FootballListItem";

function App() {
  return (
    <>
      <FootballListHeader />
      <FootballListItem name={"Vickster"} />
      <FootballListItem name={"Bob"} />
    </>
  );
}

export default App;
