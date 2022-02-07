import React from "react";
import { Link } from "react-router-dom";
import { navSideBar } from "../../store";
import styles from "./Navigation.module.css";

export default function Navigation({ hideContent }) {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.fullscreenEnabled) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      <aside className={styles.nav__sidebar}>
        <nav>
          <ul
            className={styles.nav__list}
            onMouseOver={hideContent}
            onMouseOut={hideContent}
          >
            {navSideBar.map((elem, index) => (
              <Link className={styles.nav__item} to={elem.linkto} key={index}>
                <li className={styles.nav__items} data-text={elem.title}>
                  {elem.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className={styles.nav__screen} onClick={toggleFullScreen}></div>
      </aside>
    </>
  );
}
