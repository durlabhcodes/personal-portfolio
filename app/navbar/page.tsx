"use client";

import styles from "./Navbar.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navbar flex flex-col lg:flex-row px-[2rem] lg:px-[20rem] py-[2rem] text-2xl sticky top-0 z-20 bg-white">
      <div className="navbar-wrapper flex grow">
        <div className="cursor-pointer">Durlabh Sharma</div>
        <div className="hidden lg:flex nav-items-list grow justify-end">
          {/*<span className={styles["nav-items"]}>Home</span>*/}
          <span className={styles["nav-items"]}>Services</span>
          <span className={styles["nav-items"]}>Blog</span>
          <span className={styles["nav-items"]}>Contact</span>
        </div>
        <div
          className="burger-nav flex lg:hidden grow justify-end"
          onClick={toggleNav}
        >
          <FontAwesomeIcon icon={faBars} color="#4d76d1" width="24px" />
        </div>
      </div>
      <div
        className={`navbar-small-items  items-center  ${
          showNav ? "flex flex-col" : "hidden"
        }`}
      >
        <div>Services</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
