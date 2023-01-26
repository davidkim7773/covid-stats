const GlobalStats = (props) => {
  const { covidGlobalData } = props;

  // Cleaner Values
  const totalCases = covidGlobalData.confirmed;
  const totalDeaths = covidGlobalData.deaths;

  return (
    <div>
      <div>
        <span>{totalCases.toLocaleString()}</span>
      </div>
      <div>
        <span>{totalDeaths.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default GlobalStats;
