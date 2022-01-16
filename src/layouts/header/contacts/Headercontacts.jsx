import React from "react";
import { Link } from "react-router-dom";
import styles from "./Headercontacts.module.css";

export default function Headercontacts({ title }) {
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
              <h1 className={styles.title}>
                <strong>{title}</strong>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
