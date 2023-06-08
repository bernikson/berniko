import React from "react";
import styles from "./service.module.css";

const Service: React.FC = () => {
  return (
    <section className={styles["services"]} id="services">
      <h2>Services</h2>
      <section className={styles["services_main"]}>
        <aside>
          <div className={styles["services_info"]}>
            <h4>Web development</h4>
            <p>
              I have been web developer for 4-6 years, currently working as of
              full stack web developer. I can create full, best performance
              custom websites, price varies on the functionallities of the app
              itself
            </p>
          </div>
          <aside className={styles["services_illustration"]}></aside>
        </aside>
        <aside>
          <aside className={styles["services_illustration"]}></aside>
          <div className={styles["services_info"]}>
            <h4>Web design</h4>
            <p>
              I have been designing templates for few months. Technologies I use
              for design are Figma and adobe Xd. I can create Website design for
              you
            </p>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Service;
