import React from "react";
import { Link } from "react-router-dom";
import { navSideBar } from "../../store";
import styles from "./NavigationMobile.module.css";
import Button from "../button/Button";

export default function NavigationMobile({ toggleMobileMenu }) {
  return (
    <>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navSideBar.map((elem, index) => (
              <Link
                className={styles.nav__item}
                to={elem.linkto}
                key={index}
                onClick={toggleMobileMenu}
              >
                <li className={styles.nav__items} data-text={elem.title}>
                  {elem.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <Button title="заказать" />
      </div>
    </>
  );
}
