import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation({ hideContent }) {
  const navSideBar = [
    { linkto: "/", title: "Главная" },
    { linkto: "/works", title: "Работы" },
    { linkto: "/services", title: "Услуги" },
    { linkto: "/contacts", title: "Контакты" },
  ];

  const [isIcon, setIcon] = React.useState(true);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.fullscreenEnabled) {
        document.exitFullscreen();
      }
    }
    setIcon(!isIcon);
  };

  return (
    <>
      <aside className={styles.nav__sidebar}>
        <nav>
          <ul className={styles.nav__list}>
            {navSideBar.map((elem, index) => (
              <Link
                className={styles.nav__item}
                to={elem.linkto}
                key={index}
                onMouseOver={hideContent}
                onMouseOut={hideContent}
              >
                <li className={styles.nav__items} data-text={elem.title}>
                  {elem.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className={styles.nav__screen} onClick={toggleFullScreen}>
          {isIcon ? (
            <img src="/img/header/fullscreen.svg" alt="icon" />
          ) : (
            <img src="/img/header/fullscreen_close.svg" alt="icon" />
          )}
        </div>
      </aside>
    </>
  );
}
