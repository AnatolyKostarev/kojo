import React from "react";
import { NavLink } from "react-router-dom";
import { navSideBar } from "../../store";
import styles from "./Navigation.module.css";

export default function Navigation({ hideContent }) {
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
              <NavLink
                className={styles.nav__item}
                to={elem.linkto}
                key={index}
              >
                <li className={styles.nav__items} data-text={elem.title}>
                  {elem.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
