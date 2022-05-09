import React from "react";
import { Link } from "react-router-dom";
import { MenuToggle } from "./MenuToggle";
import styles from "./Headercontacts.module.css";

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
                    src="img/header/kojo-logo.svg"
                    alt="KOJO"
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
