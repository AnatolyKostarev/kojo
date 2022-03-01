import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./ErrorPage.module.css";
import NavigationMobile from "../navigation/NavigationMobile";
import Footerworks from "../../layouts/footer/works/Footerworks";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import Headerworks from "../../layouts/header/works/Headerworks";

export default function Contacts({ showMenu, isOpen, toggleMobileMenu }) {
  const [hide, setHide] = React.useState(true);

  const hideContent = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide && (
        <Headerworks
          toggleMobileMenu={toggleMobileMenu}
          isOpen={isOpen}
          showMenu={showMenu}
        />
      )}
      {hide && (
        <section className={styles.errorpage}>
          {showMenu && (
            <>
              <div className={styles.container}>
                <h1 className={styles.title}>
                  <strong>404</strong>
                </h1>
                <div className={styles.errorpage__wraper}>
                  <div className={styles.errorpage__wraper_left}>
                    <h1 className={styles.title_m}>
                      <strong>404</strong>
                    </h1>
                    <p className={styles.errorpage_text}>
                      такого мы еще не сделали...
                    </p>
                    <div className={styles.tohome}>
                      <Link to="/">
                        <Button title="на главную" addStyle="animated_btn" />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.errorpage__wraper_right}>
                    <div className={styles.img}></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      )}
      {!showMenu && <NavigationMobile toggleMobileMenu={toggleMobileMenu} />}
      <Navigation hideContent={hideContent} />

      {showMenu && (
        <div className={styles.footer}>
          <Footerworks />
        </div>
      )}
    </>
  );
}
