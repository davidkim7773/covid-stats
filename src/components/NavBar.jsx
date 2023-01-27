import styles from "./styles";

const NavBar = () => {
  return (
    <div className={styles.navbar.container}>
      <ul className={styles.navbar.navBarList}>
        <li>
          <button>Covid Data</button>
        </li>
        <li>
          <button>Global News</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
