import { useState, useEffect } from "react";
import CountryStats from "../components/CountryStats";
import GlobalStats from "../components/GlobalStats";
import NavBar from "../components/NavBar";
import { northAmericaData, europeData } from "../lib/countryCovidData";

const MainContainer = () => {
  const [covidCountryData, setCovidCountryData] = useState("");
  const [covidGlobalData, setGlobalCovidData] = useState("");

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

  const fetchGlobalCovidData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "54ae129187msh083acae926b38a3p140d95jsn67a4fed5efc6",
        "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      },
    };
    fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
      options
    )
      .then((res) => res.json())
      .then((res) => res && setGlobalCovidData(res))
      .catch((err) => console.log(`Issue with fetchGlobalCovidData ${err}`));
  };

  return (
    <div className="">
      <NavBar />
      <div className>
        {covidGlobalData && (
          <GlobalStats covidGlobalData={covidGlobalData.data} />
        )}
        {covidCountryData && (
          <CountryStats covidCountryData={covidCountryData} />
        )}
      </div>
    </div>
  );
};

export default MainContainer;
