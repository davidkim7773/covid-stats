import { useSpring, animated } from "@react-spring/web";
import styles from "./styles";

const GlobalStats = (props) => {
  const { covidGlobalData } = props;

  // Cleaner Values
  const totalCases = covidGlobalData.confirmed;
  const totalDeaths = covidGlobalData.deaths;

  // Number Animation Function
  const numberAnimation = (num) => {
    const { number } = useSpring({
      from: { number: 100000 },
      number: num,
      delay: 100,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div className={styles.global.animation}>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    );
  };

  return (
    <div className={styles.global.container}>
      <div className={styles.global.globalContainerStats}>
        <h2>Global Cases</h2>
        {numberAnimation(totalCases)}
        <h2>Global Deaths</h2>
        {numberAnimation(totalDeaths)}
      </div>
    </div>
  );
};

export default GlobalStats;
