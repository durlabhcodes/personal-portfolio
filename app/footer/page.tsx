import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const icons = [faLinkedin, faGithub, faTwitter, faInstagram];
  return (
    <footer className="h-[10vh] bg-[#60a5f9] flex justify-center items-center">
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className={styles.icon} />
      ))}
    </footer>
  );
}
