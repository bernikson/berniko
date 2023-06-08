"use client";

import React, { useMemo, useState } from "react";
import styles from "./project.module.css";
import ProjectCard from "../projectCard/projectCard";

const Project: React.FC = () => {
  //! data
  const projectData = useMemo(
    () => [
      {
        name: "Bernswap",
        description:
          "Bernswap is a professional and user-friendly crypto exchange platformwith support for 600+ coins. It offers integrated discord and emailnotifications, along with transaction status tracking. Start swapping now!",
        type: "website",
        urlName: "bernswap.com",
        url: "https://bernswap.com/",
        frontend: ["html", "css", "typescript", "next.js"],
        backend: ["nest.js", "prisma", "postgressql"],
        video: "_hSn69KLPX8",
        color: "#0BE881",
      },
      {
        name: "Hedon.io",
        description:
          "Hedon.io is a cutting-edge crypto swap website meticulously developed for a client. With its exceptional speed, unwavering reliability, and intuitive user interface, Hedon.io sets a new standard for seamless cryptocurrency transactions. Designed to provide a hassle-free experience, this platform offers users an effortless and efficient means to exchange digital assets.",
        type: "website",
        urlName: "",
        url: "",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js", "mongodb"],
        video: "3I1Jzj_RQ7Q",
        color: "#6762f8",
      },
      {
        name: "fastcash.gg",
        description:
          "Fastcash.com is a trusted online platform that offers a seamless and efficient solution for purchasing FIAT currency using cryptocurrencies. With our user-friendly interface, customers can effortlessly select their preferred cryptocurrency, specify the desired amount, and provide their address. Our dedicated team ensures swift and secure transactions, guaranteeing that the money will be promptly delivered to your doorstep. Experience the convenience and speed of Fastcash.com, where your crypto can effortlessly transform into FIAT currency in no time.",
        type: "website",
        urlName: "fastcash.gg",
        url: "https://fastcash.gg/",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js", "mongodb"],
        video: "3XkVgEI30fY",
        color: "#c1d20b",
      },
      {
        name: "Hedon crash",
        description:
          "Hedon Crash is a cutting-edge online betting game that operates on a cryptocurrency platform. Offering a range of features, including manual and automatic betting options, interactive chat capabilities, comprehensive user profiles, detailed betting history tracking, and robust statistical analysis tools, Hedon Crash delivers an immersive and thrilling betting experience. With its array of functionalities, Hedon Crash sets itself apart as a premier online betting game that caters to the diverse preferences of cryptocurrency enthusiasts.",
        type: "website",
        urlName: "",
        url: "",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js", "mongodb"],
        video: "bpg6InkUhL8",
        color: "#6c5ce7",
      },
      {
        name: "Dice king",
        description:
          "Diceking is a captivating online dice game that operates on a cryptocurrency platform. With Diceking, players have the opportunity to create their own rooms and invite other participants to join in the excitement. The objective is to be the first player to reach three wins, securing the betted funds for themselves. Combining strategy, luck, and a competitive spirit, Diceking offers an engaging and thrilling gaming experience for cryptocurrency enthusiasts. Join the game, roll the dice, and test your luck to emerge as the victorious ruler of the kingdom of dice.",
        type: "website",
        urlName: "",
        url: "",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js", "mongodb"],
        video: "nQUSps5iSO8",
        color: "#0984e3",
      },
      {
        name: "Konogima",
        description:
          "Konogima is a successful Georgian anime streaming website that offers a wide selection of anime content. Users can filter, watch, and register on the platform, as well as leave comments and engage with a large community of anime enthusiasts. Join Konogima today to enjoy the immersive experience of watching your favorite anime with a dedicated audience.",
        type: "website",
        urlName: "konogima.com",
        url: "https://konogima.com/",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js", "mongodb"],
        video: "B8LT2JMKKVo",
        color: "#cf82e3",
      },
      {
        name: "Waffer shipping",
        description:
          "Streamline your shipping process and eliminate the hassle of customs duties with our exceptional courier services. Whether you're sending packages to loved ones or fulfilling international orders, we offer the quickest delivery times in the industry, all at an affordable price. Simplify your shipping experience by utilizing our efficient and cost-effective shipping labels, ensuring your items reach their destination swiftly and seamlessly.",
        type: "website",
        urlName: "",
        url: "",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js"],
        video: "jhlBFki_yUk",
        color: "#09a459",
      },
      {
        name: "Alum.gg",
        description:
          "Alum.gg is a dynamic online platform that offers users the chance to earn points effortlessly by engaging in various activities such as watching videos and completing surveys. These accumulated points can then be conveniently withdrawn as either cryptocurrency or fiat currency. With a user-friendly interface, Alum.gg also provides additional features including a chat function, leaderboard, and missions. This innovative platform presents an opportunity for individuals to generate income through internet",
        type: "website",
        urlName: "",
        url: "",
        frontend: ["html", "css", "javascript", "react.js"],
        backend: ["node.js", "express.js", "mongodb"],
        video: "ejESwBLMkD0",
        color: "#07bc0c",
      },
    ],
    []
  );

  //! useState
  const [projectFilter, setProjectFilter] = useState<number>(0);
  return (
    <section className={styles["project"]} id="projects">
      <div className={styles["project_header"]}>
        <h2>Projects</h2>
        <div className={styles["project_header_nav"]}>
          <span
            className={
              projectFilter === 0 ? styles["project_header_nav_active"] : ""
            }
            onClick={() => setProjectFilter(0)}
          >
            All
          </span>
          <span
            className={
              projectFilter === 1 ? styles["project_header_nav_active"] : ""
            }
            onClick={() => setProjectFilter(1)}
          >
            Web designs
          </span>
          <span
            className={
              projectFilter === 2 ? styles["project_header_nav_active"] : ""
            }
            onClick={() => setProjectFilter(2)}
          >
            Websites
          </span>
        </div>
      </div>
      {projectData.map((project, index) => (
        <ProjectCard project={project} index={index} key={index} />
      ))}
    </section>
  );
};

export default Project;
