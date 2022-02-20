import React from "react";
import Headercontacts from "../../layouts/header/contacts/Headercontacts";
import Form from "../form/Form";
import Navigation from "../navigation/Navigation";
import { socialList, contactsList } from "../../store";
import styles from "./Contacts.module.css";
import NavigationMobile from "../navigation/NavigationMobile";

export default function Contacts() {
  const [hide, setHide] = React.useState(true);
  const [showMenu, setShowMenu] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);

  const hideContent = () => {
    setHide(!hide);
  };

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    setOpen(!isOpen);
  };

  return (
    <>
      {hide && (
        <Headercontacts toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
      )}
      {hide && (
        <section className={styles.contacts}>
          {showMenu && (
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
                            href={`mailto:${elem.email}`}
                            data-hover={elem.email}
                            className={styles.contacts__item_top}
                          >
                            {elem.email}
                          </a>
                          <a
                            href={`mailto:${elem.email}`}
                            data-hover={elem.email}
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
                      <span className={styles.contacts__span}>Мы в сети:</span>
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
                    Заполните поля ниже и мы свяжемся с вами как можно быстрее.
                  </p>
                  <div className={styles.contacts__form}>
                    <Form />
                  </div>
                  <p className={styles.contacts__copyright}>
                    {new Date().getFullYear()} &copy; "kojo" студия
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
      {!showMenu && <NavigationMobile />}
      <Navigation hideContent={hideContent} />
    </>
  );
}
