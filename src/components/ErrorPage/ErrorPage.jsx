import React from "react";
import Headerworks from "../../layouts/header/works/Headerworks";
import Navigation from "../navigation/Navigation";
import NavigationMobile from "../navigation/NavigationMobile";
import Footerworks from "../../layouts/footer/works/Footerworks";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage({ showMenu, isOpen, toggleMobileMenu }) {
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
                <h1 className={styles.title}>404</h1>
                <div className={styles.errorpage__wraper}>
                  <div className={styles.errorpage__wraper_left}>
                    <h1 className={styles.title_m}>404</h1>
                    <p className={styles.errorpage_text}>очень жаль...</p>
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
        <div className={styles.footer}>{hide && <Footerworks />}</div>
      )}
    </>
  );
}
