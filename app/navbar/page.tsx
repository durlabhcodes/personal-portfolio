import styles from "./Navbar.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar flex px-[2rem] lg:px-[20rem] py-[2rem] text-2xl sticky top-0 z-20 bg-white">
      <span className="cursor-pointer">Durlabh Sharma</span>
      <div className="hidden lg:flex nav-items-list  grow justify-end">
        <span className={styles["nav-items"]}>Home</span>
        <span className={styles["nav-items"]}>Services</span>
        <span className={styles["nav-items"]}>Blog</span>
        <span className={styles["nav-items"]}>Contact</span>
      </div>
      <div className="burger-nav flex lg:hidden grow justify-end">
        <FontAwesomeIcon icon={faBars} color="#4d76d1" width="24px" />
      </div>
    </div>
  );
}
