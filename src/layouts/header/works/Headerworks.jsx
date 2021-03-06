import React from "react";
import { Link } from "react-router-dom";
import { MenuToggle } from "../contacts/MenuToggle";
import logo from "./kojo-logo.svg";
import Button from "../../../components/button/Button";
import styles from "./Headerworks.module.css";

export default function Headerworks({
  title,
  toggleMobileMenu,
  showMenu,
  isOpen,
}) {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.header__logo}>
              <Link to="/">
                <div className={styles.header__img}>
                  <img src={logo} alt="KOJO" className={styles.logo} />
                  <div className={styles.logo__animation}></div>
                </div>
              </Link>
              {showMenu && (
                <div>
                  <h1 className={styles.title} data-title="Работа">
                    {title}
                  </h1>
                </div>
              )}
            </div>

            {showMenu && (
              <div className={styles.header__btn}>
                <Link to="/contacts">
                  <Button title="Заказать" addStyle="animated_btn" />
                </Link>
              </div>
            )}
            <div className={styles.header__burger}>
              <MenuToggle toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
