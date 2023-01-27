import { useState } from "react";

import {
  northAmericaData,
  europeData,
  asiaData,
  southAmericaData,
  africaData,
  oceaniaData,
} from "../lib/covidContinentData";
import { numberWithCommas } from "../lib/numberFunctions";
import styles from "./styles";

const CountryStats = (props) => {
  const { covidContinentData } = props;

  const [currentContinent, setCurrentContinent] = useState(
    northAmericaData(covidContinentData)
  );

  // Conversion Function for values with null data type
  const conversionFunc = (value) => {
    if (value === null) {
      return "N/A";
    } else {
      return value;
    }
  };

  return (
    <div className={styles.continent.container}>
      <div className={styles.continent.subText}>
        <h2>Covid Statistics By Continent</h2>
        <button
          onClick={() => setCurrentContinent(europeData(covidContinentData))}
        >
          click
        </button>
      </div>
      <div className={styles.continent.continentStats}>
        <table>
          <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Cases</th>
            <th>Deaths</th>
          </tr>
          {currentContinent.map((val, key) => {
            return (
              <tr key={key} className={styles.continent.tableKey}>
                <td>{val.country}</td>
                <td>{conversionFunc(val.population).toLocaleString()}</td>
                <td>{conversionFunc(val.cases.total).toLocaleString()}</td>
                <td>{conversionFunc(val.deaths.total).toLocaleString()}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CountryStats;
