import React from "react";
import styles from "./footerHomepage.module.css";
import "../../scrollSpy.css";

export default function FooterHomepage({ hideHeader, showHeader }) {
  const footerWorksNav = [
    { social: "/ facebook", href: "https://www.facebook.com/Saint-Code-Bootcamp-114797186729898" },
    { social: "/ instagram", href: "https://www.instagram.com/saint_code_bootcamp" },
    { social: "/ вконтакте", href: "https://vk.com/public191201156" },
  ];

  return (
    <>
      <footer
        className={styles.footerHomepage}
        onMouseOver={hideHeader}
        onMouseOut={showHeader}
      >
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
              {new Date().getFullYear()} &copy; СТУДИЯ KOJO
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
