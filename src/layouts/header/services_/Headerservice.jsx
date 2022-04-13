import React from "react";
import { Link } from "react-router-dom";
import { MenuToggle } from "../../../layouts/header/contacts/MenuToggle";
import Button from "../../../components/button/Button";
import styles from "./Headerservice.module.css";

const Headerservice = ({ title, isTitle, isOpen, toggleMobileMenu }) => {
  return (
    <>
      <header id="header__service" className={styles.header__service}>
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
                  <div className={styles.logo__animation}></div>
                </div>
              </Link>
              <MenuToggle isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
            </div>
            <div className={styles.header__title}>
              <h1 className={styles.title} data-title="Услуги">
                {title}
              </h1>
            </div>
            <div className={styles.header__subtitle}>
              <p
                style={
                  isTitle
                    ? {
                        transform: "translateY(-100%)",
                        transition: "0.8s ease-in-out",
                      }
                    : {
                        transform: "translateY(0)",
                        transition: "0.8s ease-in-out",
                      }
                }
              >
                веб
              </p>
              <p
                style={
                  isTitle
                    ? {
                        transform: "translateY(-100%)",
                        transition: "0.8s ease-in-out",
                      }
                    : {
                        transform: "translateY(0)",
                        transition: "0.8s ease-in-out",
                      }
                }
              >
                правила
              </p>
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
};

export default Headerservice;
