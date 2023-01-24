import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import styles from "styles.scss";

function App() {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    fetchCovidData();
  }, []);

  const fetchCovidData = () => {
    fetch("https://coronavirus.m.pipedream.net")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return <NavBar />;
}

export default App;
