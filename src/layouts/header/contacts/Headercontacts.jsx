import React from "react";
import { Link } from "react-router-dom";
import styles from "./Headercontacts.module.css";
import { MenuToggle } from "./MenuToggle";

export default function Headercontacts({ toggleMobileMenu, isOpen }) {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.header__logo}>
              <Link to="/">
                <div className={styles.header__img}>
                  <img
                    src="img/header/icon-logo.svg"
                    alt="ZIPL"
                    className={styles.logo}
                  />
                </div>
              </Link>
            </div>
            <MenuToggle toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
          </div>
        </div>
      </header>
    </>
  );
}
