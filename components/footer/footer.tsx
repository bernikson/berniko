import React from "react";
import styles from "./footer.module.css";
import Logo from "@/assets/svgs/logo";
import Telegram from "@/assets/svgs/telegram";
import Github from "@/assets/svgs/github";
import Discord from "@/assets/svgs/discord";
import Linkedin from "@/assets/svgs/linkedin";

const Footer: React.FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer_logo"]}>
        <Logo />
        <h4>Berniko</h4>
      </div>
      <div className={styles["footer_contact"]}>
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
    </footer>
  );
};

export default Footer;
