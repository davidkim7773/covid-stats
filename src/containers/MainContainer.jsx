import { useState, useEffect } from "react";
import GlobalStats from "../components/GlobalStats";
import NavBar from "../components/NavBar";
import { northAmericaData, europeData } from "../lib/countryCovidData";
import { isoDateFunction } from "../lib/dateFunctions";

const MainContainer = () => {
  const [covidCountryData, setCovidCountryData] = useState(null);
  const [covidGlobalData, setGlobalCovidData] = useState(null);
  const [apiChoice, setApiChoice] = useState("");

  useEffect(() => {
    fetchCovidData();
    fetchGlobalCovidData();
  }, []);

  const fetchCovidData = async () => {
    const res = await fetch("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "X-RapidAPI-Key": "54ae129187msh083acae926b38a3p140d95jsn67a4fed5efc6",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    });
    // Catch Errors
    if (res.ok) {
      const newData = await res.json();
      setCovidCountryData(newData.response);
    } else if (!res.ok) {
      const msg = `An error has occured with fetching Covid Data ${res.status}`;
      throw new Error(msg);
    }
  };

  const fetchGlobalCovidData = async () => {
    const currentDate = new Date();
    console.log("datefunc", currentDate);
    const res = await fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
      {
        headers: {
          "X-RapidAPI-Key":
            "54ae129187msh083acae926b38a3p140d95jsn67a4fed5efc6",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      }
    );

    // Catch Errors
    if (res.ok) {
      const newData = await res.json();
      setGlobalCovidData(newData);
    } else if (!res.ok) {
      const msg = `An error has occured with fetching Global Covid Data ${res.status}`;
      throw new Error(msg);
    }
  };

  console.log(northAmericaData(covidCountryData));
  console.log(europeData(covidCountryData));
  console.log("global covid", covidGlobalData);

  return (
    <div>
      <NavBar />
      <GlobalStats covidCountryData={covidCountryData} />
    </div>
  );
};

export default MainContainer;
