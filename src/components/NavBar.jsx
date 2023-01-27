import { Button } from "@mui/material";
import logo from "../assets/covidLogo.png";
import styles from "./styles";

const NavBar = () => {
  return (
    <div className={styles.navbar.container}>
      <div className={styles.navbar.containerLeft}>
        <img src={logo} className={styles.navbar.containerSyringe} />
        <h1>Information</h1>
      </div>
      <ul className={styles.navbar.navBarList}>
        <li>
          <Button color="inherit" variant="outlined">
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
              target="_blank"
            >
              Donate To WHO
            </a>
          </Button>
        </li>
        <li>
          <Button color="inherit" variant="outlined">
            <a
              href="https://www.cnn.com/specials/world/coronavirus-outbreak-intl-hnk"
              target="_blank"
            >
              Global Covid News
            </a>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
