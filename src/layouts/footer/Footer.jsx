import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerNav = [
    { social: "/ facebook", href: "https://facebook.com" },
    { social: "/ instagram", href: "https://instagram.com" },
    { social: "/ youtube", href: "https://youtube.ru" },
  ];

  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.footer}>
            <div className={styles.social}>
              <p className={styles.title}>socials:</p>
              <ul className={styles.list}>
                {footerNav.map((elem, index) => (
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
              {new Date().getFullYear()} &copy; "kojo" studio
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
