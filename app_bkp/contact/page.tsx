import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const socials = [faLinkedin, faGithub, faTwitter, faInstagram];
  return <section className="contact-details flex-col"></section>;
}
