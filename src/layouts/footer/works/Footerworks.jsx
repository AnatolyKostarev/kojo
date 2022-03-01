import React from "react";
import { footerWorksNav } from "../../../store";
import styles from "./Footerworks.module.css";
import "../../../components/services_/ServiceScrollBar.css";

export default function Footerworks() {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.footer}>
            <div className={styles.social}>
              <p className={styles.title}>мы в сети:</p>
              <ul className={styles.list}>
                {footerWorksNav.map((elem, index) => (
                  <li className={styles.item} key={index}>
                    <div className={styles.roll__link}>
                      <a
                        href={elem.href}
                        className={styles.link__top}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {elem.social}
                      </a>
                      <a
                        href={elem.href}
                        className={styles.link__bottom}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {elem.social}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.copyright}>
              {new Date().getFullYear()} &copy; студия kojo
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
