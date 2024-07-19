import { useEffect, useState } from "react";
import "./App.css";
import FootballListHeader from "./Components/FootballListHeader/FootballListHeader";
import FootballListItem from "./Components/FootballListItem/FootballListItem";

function App() {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_SERVER_URL}/list`
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <FootballListHeader />
      <FootballListItem name={data.age} />
    </>
  );
}

export default App;
