import React from "react";
import styles from "./projectCard.module.css";
import YouTube from "react-youtube";

interface IProject {
  name: string;
  description: string;
  type: string;
  urlName: string;
  url: string;
  frontend: string[];
  backend: string[];
  video: string;
  color: string;
}

const ProjectCard: React.FC<{ project: IProject; index: number }> = ({
  project,
  index,
}) => {
  return (
    <article
      className={`${styles["project_card"]} ${
        index % 2 === 1 ? styles["project_card_resp"] : ""
      }`}
    >
      {index % 2 === 0 ? (
        <>
          {" "}
          <YouTube
            videoId={project.video}
            className={styles["project_image"]}
            style={{
              outline: `3px solid ${project.color}`,
              borderRadius: "10px",
            }}
          />
          <aside className={styles["project_details"]}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.url && (
              <h5>
                <span className={styles["project_url"]}>URL:</span>

                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => window.open(project.url, "_blank")}
                >
                  {project.urlName}
                </span>
              </h5>
            )}
            {project.frontend.length !== 0 && (
              <h5>
                <span className={styles["project_frontend"]}>Front end:</span>
                {project.frontend.join(" , ")}
              </h5>
            )}
            {project.backend.length !== 0 && (
              <h5>
                <span className={styles["project_backend"]}>Back end:</span>
                {project.backend.join(" , ")}
              </h5>
            )}
          </aside>
        </>
      ) : (
        <>
          <aside className={styles["project_details"]}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.url && (
              <h5>
                <span className={styles["project_url"]}>URL:</span>

                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => window.open(project.url, "_blank")}
                >
                  {project.urlName}
                </span>
              </h5>
            )}
            {project.frontend.length !== 0 && (
              <h5>
                <span className={styles["project_frontend"]}>Front end:</span>
                {project.frontend.join(" , ")}
              </h5>
            )}
            {project.backend.length !== 0 && (
              <h5>
                <span className={styles["project_backend"]}>Back end:</span>
                {project.backend.join(" , ")}
              </h5>
            )}
          </aside>
          <YouTube
            videoId={project.video}
            className={styles["project_image"]}
            style={{
              outline: `3px solid ${project.color}`,
              borderRadius: "10px",
            }}
          />
        </>
      )}
    </article>
  );
};

export default ProjectCard;
