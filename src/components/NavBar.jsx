import { Button } from "@mui/material";
import syringe from "../../public/syringe.png";
import styles from "./styles";

const NavBar = () => {
  return (
    <div className={styles.navbar.container}>
      <div className={styles.navbar.containerLeft}>
        <img src={syringe} className={styles.navbar.containerSyringe} />
        <h1>Covid-19 Statistics</h1>
      </div>
      <ul className={styles.navbar.navBarList}>
        <li>
          <Button variant="outlined">Donate To WHO</Button>
        </li>
        <li>
          <Button variant="outlined">Global News</Button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
