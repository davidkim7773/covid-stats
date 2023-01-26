import {
  northAmericaData,
  europeData,
  asiaData,
  southAmericaData,
  africaData,
  oceaniaData,
} from "../lib/countryCovidData";
import styles from "./styles";

const CountryStats = (props) => {
  const { covidCountryData } = props;

  return <h1 className={styles.country.test}>big text</h1>;
};

export default CountryStats;
