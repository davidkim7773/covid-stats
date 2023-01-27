import { useState, useEffect } from "react";
import CountryStats from "../components/CountryStats";
import GlobalStats from "../components/GlobalStats";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../components/styles";

const MainContainer = () => {
  const [covidContinentData, setCovidContinentData] = useState(null);
  const [covidGlobalData, setGlobalCovidData] = useState(null);

  // Data Fetch
  useEffect(() => {
    fetchGlobalCovidData();
    fetchCovidContinentData();
  }, []);

  const fetchGlobalCovidData = async () => {
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
      const msg = `An error has occured with fetching global covid data ${res.status}`;
      throw new Error(msg);
    }
  };

  const fetchCovidContinentData = async () => {
    const res = await fetch("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "X-RapidAPI-Key": "54ae129187msh083acae926b38a3p140d95jsn67a4fed5efc6",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    });
    // Catch Errors
    if (res.ok) {
      const newData = await res.json();
      setCovidContinentData(newData.response);
    } else if (!res.ok) {
      const msg = `An error has occured with fetching Covid continent Data ${res.status}`;
      throw new Error(msg);
    }
  };

  return (
    <div className={styles.main.container}>
      <NavBar />
      <div>
        {covidGlobalData && (
          <GlobalStats covidGlobalData={covidGlobalData.data} />
        )}
        {covidContinentData && (
          <CountryStats covidContinentData={covidContinentData} />
        )}
        {covidContinentData && <Footer />}
      </div>
    </div>
  );
};

export default MainContainer;
