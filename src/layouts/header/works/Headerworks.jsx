import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import styles from "./Headerworks.module.css";

export default function Headerworks({ title }) {
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
                  <div className={styles.logo__animation}></div>
                </div>
              </Link>
              <div>
                <h1 className={styles.title} data-title="Работа">
                  {title}
                </h1>
              </div>
            </div>
            <div className={styles.header__btn}>
              <Link to="/contacts">
                <Button title="Заказать" addStyle="animated_btn" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
