import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:polisettygopikrishna325@gmail.com">polisettygopikrishna325@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} className={styles.icon} alt="Phone icon" />
          <a href="tel:+919912736874">9912736874</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/polisetty-gopikrishna-615785257/">linkedin.com/PolisettyGopiKrishna</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/PolisettyGopiKrishna">github.com/PolisettyGopiKrishna</a>
        </li>
      </ul>
    </footer>
  );
};
