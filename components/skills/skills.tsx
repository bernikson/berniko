import React from "react";
import styles from "./skills.module.css";
import Html from "@/assets/svgs/html";
import CSS from "@/assets/svgs/css";
import Javascript from "@/assets/svgs/javascript";
import Redux from "@/assets/svgs/redux";
import ReactIcon from "@/assets/svgs/react";
import Typescript from "@/assets/svgs/typescript";
import Next from "@/assets/svgs/next";
import Node from "@/assets/svgs/node";
import Express from "@/assets/svgs/express";
import Postgres from "@/assets/svgs/postgres";
import Mongodb from "@/assets/svgs/mongodb";
import Nest from "@/assets/svgs/nest";
import Prisma from "@/assets/svgs/prisma";

const Skills: React.FC = () => {
  return (
    <section className={styles["skills"]} id="skills">
      <aside>
        <h2>Front end</h2>
        <div className={styles["skills_content_wrapper"]}>
          <aside className={styles["skills_tech"]}>
            <div>
              <Html />
              <h6>HTML</h6>
            </div>
            <div>
              <CSS />
              <h6>CSS</h6>
            </div>
            <div>
              <Javascript />
              <h6>Javascript</h6>
            </div>
            <div>
              <Redux />
              <h6>Redux.js</h6>
            </div>
            <div>
              <ReactIcon />
              <h6>React.js</h6>
            </div>
            <div>
              <Typescript />
              <h6>Typescript</h6>
            </div>
            <div>
              <Next />
              <h6>Next.js</h6>
            </div>
          </aside>
          <aside className={styles["skills_illustration"]}></aside>
        </div>
      </aside>
      <aside>
        <h2>Back end</h2>
        <div className={styles["skills_content_wrapper"]}>
          <aside className={styles["skills_illustration"]}></aside>
          <aside className={styles["skills_tech"]}>
            <div>
              <Node />
              <h6>Node.js</h6>
            </div>
            <div>
              <Express />
              <h6>Express.js</h6>
            </div>
            <div>
              <Postgres />
              <h6>Postgresql</h6>
            </div>
            <div>
              <Mongodb />
              <h6>MongoDB</h6>
            </div>
            <div>
              <Nest />
              <h6>Nest</h6>
            </div>
            <div>
              <Prisma />
              <h6>Prisma</h6>
            </div>
          </aside>
        </div>
      </aside>
    </section>
  );
};

export default Skills;
