import React from "react";
import styles from "./about.module.css";
import Logo from "@/assets/svgs/logo";

const About: React.FC = () => {
  return (
    <section className={styles["about"]} id="about">
      <h2>About me</h2>
      <div className={styles["about_main"]}>
        <aside className={styles["about_info"]}>
          <h4>Greetings!</h4>
          <p>
            I am full stack web developer, as well as web designer with{" "}
            <span>3-4</span> years of experience in this field. I was born in
            Georgia, Tbilisi.
          </p>
          <p>
            I am willing to advance in my career and become professional website
            developer.
          </p>
        </aside>
        <div>
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default About;
