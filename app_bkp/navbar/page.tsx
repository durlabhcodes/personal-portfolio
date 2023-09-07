import styles from "./Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <nav className="flex justify-around md:h-[10vh] text-[2rem] /*bg-[#2a84d6]*/ shadow-2xl items-center">
        <div className="flex w-8/12">
          <div className="flex flex-col md:flex-row w-full justify-center md:justify-start md:w-4/5">
            <Link className="font-[700] font-Caprasimo md:text-5xl" href="/">
              <div className="navbar-name flex flex-col items-center md:flex-row">
                <span className="text-blue-400 ">Durlabh</span>
                <span className="hidden md:inline-block">&nbsp;Codes</span>
                <div className="md:hidden justify-center">Codes</div>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex w-1/5 text-center items-center">
            <Link
              className="w-1/2"
              href="https://durlabhsharma.com/"
              target="_blank"
            >
              Blog
            </Link>
            <Link href="/portfolio" className="w-1/2">
              Portfolio
            </Link>
            {/*<Link className="w-1/3" href="/contact">
            Contact
          </Link>*/}
          </div>
        </div>
      </nav>
      <div className="small-screen-menu flex md:hidden justify-center my-4">
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </div>
    </div>
  );
}
