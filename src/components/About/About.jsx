import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/sci.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>FullStack DataScientist </h3>
              <p>
                I'm a FullStack DataScientist with experience in data analysis,trainging models
                and deploy for real time use.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/skill.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills:</h3>
              <p>
                <li><ul>Python,R,SQL,Excel</ul>
                <ul>DataVisualization using PowerBI,Tableau </ul>
                <ul>MachineLearning,DeepLearning</ul>
                </li>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/web.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>FullStack WebDeveloper</h3>
              <p>
                I have good knowledge in  developing fast and reponsive front-end applications optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/skill.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills:</h3>
              <p>
              <li><ul>HTML,CSS,JavaScript,React.js</ul>
                <ul>DataSturctures and Algorithms,Problem Understanding </ul>
                <ul>Django,Api's,MySql</ul>
                </li>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
