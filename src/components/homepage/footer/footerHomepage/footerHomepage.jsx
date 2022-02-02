import React from "react";
import styles from "./footerHomepage.module.css";
import "../../scrollSpy.css";

export default function FooterHomepage({ hideHeader, showHeader }) {
  const footerWorksNav = [
    { social: "/ фэйсбук", href: "https://facebook.com" },
    { social: "/ инстаграм", href: "https://instagram.com" },
    { social: "/ вконтакте", href: "https://vk.com" },
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
            {/* <div className="blockSpy">
                            <nav className={styles.scrollSpy}>
                                <a href="#title" id="title_btn"></a>

                                <a href="#about" id="about_btn"></a>

                                <a href="#form" id="form_btn"></a>
                                <span id="indicator"></span>
                            </nav>
                        </div> */}
            <div className={styles.copyright}>
              {new Date().getFullYear()} &copy; "kojo" студия
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
