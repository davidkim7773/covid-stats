import { useEffect, useState } from "react";
import GlobalStats from "./components/GlobalStats";
import NavBar from "./components/NavBar";
import "./app";

function App() {
  const [covidData, setCovidData] = useState(null);
  const [apiChoice, setApiChoice] = useState("");

  useEffect(() => {
    fetchCovidData();
  }, []);

  async function fetchCovidData() {
    const res = await fetch("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "X-RapidAPI-Key": "54ae129187msh083acae926b38a3p140d95jsn67a4fed5efc6",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    });
    // Catch Errors
    if (res.ok) {
      const newData = await res.json();
      setCovidData(newData.response);
    } else if (!res.ok) {
      const msg = `An error has occured with fetching Covid Data ${res.status}`;
      throw new Error(msg);
    }
  }

  console.log(covidData);

  // Test Function For United States only
  const unitedStatesData = (data) => {};

  return (
    <div>
      <NavBar />
      <GlobalStats covidData={covidData} />
    </div>
  );
}

export default App;
