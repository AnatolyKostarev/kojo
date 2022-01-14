import React from "react";
import styles from "./Footerworks.module.css";

export default function Footerworks() {
  const footerWorksNav = [
    { social: "/ фэйсбук", href: "https://facebook.com" },
    { social: "/ инстаграм", href: "https://instagram.com" },
    { social: "/ вконтакте", href: "https://vk.com" },
  ];
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
                      <a href={elem.href} className={styles.link__top}>
                        {elem.social}
                      </a>
                      <a href={elem.href} className={styles.link__bottom}>
                        {elem.social}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.copyright}>
              {new Date().getFullYear()} &copy; "kojo" студия
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
