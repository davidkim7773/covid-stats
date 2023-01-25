import { useEffect, useState } from "react";
import CountryStats from "./components/CountryStats";
import NavBar from "./components/NavBar";
import "./app";

function App() {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    fetchCovidData();
  }, []);

  const fetchCovidData = () => {
    fetch("https://coronavirus.m.pipedream.net")
      .then((res) => res.json())
      .then((data) => setCovidData(data));
  };

  return (
    <div>
      <NavBar />
      <CountryStats covidData={covidData} />
    </div>
  );
}

export default App;
