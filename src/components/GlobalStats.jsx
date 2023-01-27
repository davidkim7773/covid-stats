import styles from "./styles";

const GlobalStats = (props) => {
  const { covidGlobalData } = props;

  // Cleaner Values
  const totalCases = covidGlobalData.confirmed;
  const totalDeaths = covidGlobalData.deaths;

  return (
    <div className={styles.global.globalContainer}>
      <div className={styles.global.globalContainerStats}>
        <h2>Global Cases</h2>
        <h2>{totalCases.toLocaleString()}</h2>
        <h2>Global Deaths</h2>
        <h2>{totalDeaths.toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default GlobalStats;
