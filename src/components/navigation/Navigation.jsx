import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  let navSideBar = [
    { linkto: "/", title: "Главная" },
    { linkto: "/works", title: "Работы" },
    { linkto: "/services", title: "Услуги" },
    { linkto: "/contacts", title: "Контакты" },
  ];

  return (
    <>
      <aside className={styles.nav__sidebar}>
        <nav>
          <ul className={styles.nav__list}>
            {navSideBar.map((elem, index) => (
              <li
                className={styles.nav__items}
                data-text={elem.title}
                key={index}
              >
                <Link to={elem.linkto}>{elem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
