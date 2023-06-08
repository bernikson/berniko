import React from "react";
import styles from "./header.module.css";
import Arrow from "@/assets/svgs/arrow";
import Telegram from "@/assets/svgs/telegram";
import Github from "@/assets/svgs/github";
import Discord from "@/assets/svgs/discord";
import Linkedin from "@/assets/svgs/linkedin";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <section className={styles["header_main"]}>
        <div className={styles["header_contact"]}>
          <div>
            <Telegram />
          </div>
          <div>
            <Github />
          </div>
          <div>
            <Discord />
          </div>
          <div>
            <Linkedin />
          </div>
        </div>
        <h1>
          I am <span>Giorgi</span>
        </h1>
        <h2>Full stack Web developer & Web designer.</h2>
        <button>
          Projects <Arrow />
        </button>
      </section>
      <div className={styles["header_background"]}></div>
      <section className={styles["header_status"]}>
        <div>
          <h4>4+</h4>
          <span>Years experience</span>
        </div>
        <div>
          <h4>11+</h4>
          <span>Clients satisfied</span>
        </div>
        <div>
          <h4>13+</h4>
          <span>Completed projects</span>
        </div>
        <div>
          <h4>30K+</h4>
          <span>Lines coded</span>
        </div>
      </section>
    </header>
  );
};

export default Header;
