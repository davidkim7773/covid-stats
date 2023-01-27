import { useState } from "react";
import {
  northAmericaData,
  europeData,
  asiaData,
  southAmericaData,
  africaData,
  oceaniaData,
} from "../lib/covidContinentData";
import {
  Africa,
  Asia,
  Australia,
  Europe,
  northAmerica,
  southAmerica,
} from "../assets";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
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

  const handleChange = (event) => {
    setCurrentContinent(event.target.value);
  };

  return (
    <div className={styles.continent.container}>
      <div className={styles.continent.subText}>
        <h2>Covid Statistics By Continent</h2>
        <div className={styles.continent.subFeatures}>
          <img src={northAmerica} />
          <Box className={styles.continent.dropDown}>
            <FormControl sx={{ width: 100 }}>
              <InputLabel id="selectLabel">Select</InputLabel>
              <Select
                label="North America"
                value={covidContinentData}
                onChange={handleChange}
              >
                <MenuItem value={northAmericaData(covidContinentData)}>
                  North America
                </MenuItem>
                <MenuItem value={southAmericaData(covidContinentData)}>
                  South America
                </MenuItem>
                <MenuItem value={europeData(covidContinentData)}>
                  Europe
                </MenuItem>
                <MenuItem value={africaData(covidContinentData)}>
                  Africa
                </MenuItem>
                <MenuItem value={asiaData(covidContinentData)}>Asia</MenuItem>
                <MenuItem value={oceaniaData(covidContinentData)}>
                  Oceania
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
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
