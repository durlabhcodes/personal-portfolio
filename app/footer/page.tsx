import styles from "./Footer.module.css";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const icons = [faLinkedin, faGithub, faTwitter, faInstagram];
  const socials = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/durlabhsharma/",
    },
    {
      icon: faGithub,
      link: "https://github.com/durlabhcodes",
    },
    {
      icon: faTwitter,
      link: "https://twitter.com/durlabhcodes",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/hannibal.holmes",
    },
  ];
  return (
    <footer className="h-[10vh] bg-[#4d76d1] flex justify-center items-center">
      {socials.map((social, index) => (
        <a href={social.link} key={index}>
          <FontAwesomeIcon
            icon={social.icon}
            className={styles.icon}
            color="white"
          />
        </a>
      ))}
    </footer>
  );
}
