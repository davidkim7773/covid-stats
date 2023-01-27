import { github, linkedIn } from "../assets";
import styles from "./styles";

const Footer = () => {
  return (
    <div className={styles.footer.container}>
      <ul className={styles.footer.footerList}>
        <li>Created By David Kim</li>
        <li>
          <img src={github} />
          <a href="https://github.com/davidkim7773" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <img src={linkedIn} />
          <a href="https://www.linkedin.com/in/davidkim7773/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
