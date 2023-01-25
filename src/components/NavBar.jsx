import "./styles/NavBar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBarList">
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
