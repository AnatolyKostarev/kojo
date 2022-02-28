import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import { MenuToggle } from "../contacts/MenuToggle";
import styles from "./HeaderErrorPage.module.css";

export default function HeaderErrorPage({
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
                  <img
                    src="img/header/icon-logo.svg"
                    alt="ZIPL"
                    className={styles.logo}
                  />
                  <div className={styles.logo__animation}></div>
                </div>
              </Link>
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