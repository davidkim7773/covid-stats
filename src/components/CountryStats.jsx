import {
  northAmericaData,
  europeData,
  asiaData,
  southAmericaData,
  africaData,
  oceaniaData,
} from "../lib/countryCovidData";
import styles from "./styles/CountryStats.module.scss";

const CountryStats = (props) => {
  const { covidCountryData } = props;

  return <h1 className={styles.test}>big text</h1>;
};

export default CountryStats;
