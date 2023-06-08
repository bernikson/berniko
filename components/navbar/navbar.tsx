"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "@/assets/svgs/logo";
import { scroller, animateScroll } from "react-scroll";

const Navbar: React.FC = () => {
  //! useState
  const [navDrop, setNavDrop] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<boolean>(false);

  return (
    <nav className={styles["nav"]} id="home">
      <aside className={styles["nav_logo_area"]}>
        <Logo />
        <h3>Berniko</h3>
      </aside>
      <aside className={styles["nav_links"]}>
        <div className={styles["nav_ham"]}>
          <svg
            className={`${styles["ham"]} ${styles["hamRotate"]} ${
              styles["ham8"]
            } ${navDrop ? styles["active"] : undefined}`}
            viewBox="0 0 100 100"
            width="80"
            onClick={() => setNavDrop(!navDrop)}
          >
            <path
              className={`${styles["line"]} ${styles["top"]}`}
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path
              className={`${styles["line"]} ${styles["middle"]}`}
              d="m 30,50 h 40"
            />
            <path
              className={`${styles["line"]} ${styles["bottom"]}`}
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>
        <ul className={navDrop ? styles["nav_drop"] : ""}>
          <li onClick={() => animateScroll.scrollToTop()}>Home</li>
          <li
            onClick={() =>
              scroller.scrollTo("about", {
                duration: 500,
                smooth: true,
                offset: -130,
              })
            }
          >
            About
          </li>
          <li
            onClick={() =>
              scroller.scrollTo("skills", {
                duration: 500,
                smooth: true,
                offset: -50,
              })
            }
          >
            Skills
          </li>
          <li
            onClick={() =>
              scroller.scrollTo("projects", {
                duration: 500,
                smooth: true,
                offset: -100,
              })
            }
          >
            Projects
          </li>
          <li
            onClick={() =>
              scroller.scrollTo("services", {
                duration: 500,
                smooth: true,
                offset: -100,
              })
            }
          >
            Services
          </li>
          <li
            onClick={() =>
              scroller.scrollTo("contact", {
                duration: 500,
                smooth: true,
                offset: -100,
              })
            }
          >
            Contact
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
