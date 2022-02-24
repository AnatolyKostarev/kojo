import React from "react";
import { NavLink } from "react-router-dom";
import { navSideBar, footerWorksNav } from "../../store";
import styles from "./NavigationMobile.module.css";
import Button from "../button/Button";

export default function NavigationMobile({ toggleMobileMenu }) {
  return (
    <>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navSideBar.map((elem, index) => (
              <NavLink
                to={elem.linkto}
                className={styles.nav__item}
                key={index}
                onClick={toggleMobileMenu}
              >
                <li className={styles.nav__items} data-text={elem.title}>
                  {elem.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <div class={styles.social}>
          {footerWorksNav.map((elem, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.link}>
                <a
                  href={elem.href}
                  className={styles.link__social}
                  target="_blank"
                  rel="noreferrer"
                >
                  {elem.social}
                </a>
              </div>
            </li>
          ))}
        </div>
        <Button title="заказать" />
        <p className={styles.contacts__copyright}>
          {new Date().getFullYear()} &copy; "kojo" студия
        </p>
      </div>
    </>
  );
}
