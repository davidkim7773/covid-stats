const CountryStats = (props) => {
  const { covidData } = props;

  // Covid Data Return
  const summaryStatsGlobal = () => {
    if (covidData) {
      return covidData.summaryStats.global.confirmed;
    }
  };

  return (
    <div>
      <p>{summaryStatsGlobal()}</p>
    </div>
  );
};

export default CountryStats;
