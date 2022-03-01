import React from "react";
import Headercontacts from "../../layouts/header/contacts/Headercontacts";
import Form from "../form/Form";
import Navigation from "../navigation/Navigation";
import { socialList, contactsList } from "../../store";
import styles from "./Contacts.module.css";
import NavigationMobile from "../navigation/NavigationMobile";
import Footerworks from "../../layouts/footer/works/Footerworks";

export default function Contacts({ showMenu, isOpen, toggleMobileMenu }) {
  const [hide, setHide] = React.useState(true);

  const hideContent = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide && (
        <Headercontacts toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
      )}
      {hide && (
        <section className={showMenu ? styles.contacts : styles.styleLine}>
          {showMenu && (
            <>
              <div className={styles.container}>
                <h1 className={styles.title}>
                  <strong>контакты</strong>
                </h1>
                <div className={styles.contacts__wraper}>
                  <div className={styles.contacts__wraper_left}>
                    <ul className={styles.contacts__info}>
                      {contactsList.map((elem, index) => (
                        <li className={styles.contacts__row_top} key={index}>
                          <p className={styles.contacts__label}>
                            <span className={styles.contacts__span}>
                              {elem.label}:
                            </span>
                          </p>
                          <div className={styles.contacts__link}>
                            <a
                              href={elem.href}
                              data-hover={elem.email}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.contacts__item_top}
                            >
                              {elem.email}
                            </a>
                            <a
                              href={elem.href}
                              data-hover={elem.email}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.contacts__item_bottom}
                            >
                              {elem.email}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.contacts__social}>
                      <p className={styles.contacts__label}>
                        <span className={styles.contacts__span}>
                          Мы в сети:
                        </span>
                      </p>
                      <ul className={styles.contacts__list}>
                        {socialList.map((elem, index) => (
                          <li className={styles.contacts__row} key={index}>
                            <div className={styles.contacts__links}>
                              <a
                                href={elem.href}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.contacts__item_top}
                              >
                                {elem.social}
                              </a>
                              <a
                                href={elem.href}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.contacts__item_bottom}
                              >
                                {elem.social}
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className={styles.contacts__message}>
                      Кто-то из нашей команды работает даже на выходных. Пишите
                      нам в любое время.
                    </p>
                  </div>
                  <div className={styles.contacts__wraper_right}>
                    <p className={styles.contacts__text}>
                      Заполните поля ниже и мы свяжемся с вами как можно
                      быстрее.
                    </p>
                    <p className={styles.contacts__message_right}>
                      Кто-то из нашей команды работает даже на выходных. Пишите
                      нам в любое время.
                    </p>
                    <div className={styles.contacts__form}>
                      <Form />
                    </div>
                    <p className={styles.contacts__copyright}>
                      {new Date().getFullYear()} &copy; студия kojo
                    </p>
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
