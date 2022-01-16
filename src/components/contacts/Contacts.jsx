import React from "react";
import Headercontacts from "../../layouts/header/contacts/Headercontacts";
import Form from "../form/Form";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const socialList = [
    { social: "Фэйсбук", href: "https://facebook.com/" },
    { social: "Инстаграм", href: "https://instagram.com/" },
    { social: "Беханс", href: "https://www.behance.net/" },
  ];

  const contactsList = [
    { label: "основной", email: "mail@zipl.pro" },
    { label: "продажи", email: "sales@zipl.pro" },
  ];

  return (
    <>
      <section className={styles.contacts}>
        <div className={styles.container}>
          <Headercontacts title="контакты" />
          <div className={styles.contacts__wraper}>
            <div className={styles.contacts__wraper_left}>
              <ul className={styles.contacts__info}>
                {contactsList.map((elem, index) => (
                  <li className={styles.contacts__row_top} key={index}>
                    <p className={styles.contacts__label}>{elem.label}:</p>
                    <div className={styles.contacts__link}>
                      <a href={`mailto:${elem.email}`}>
                        <span
                          data-hover={elem.email}
                          className={styles.contacts__item}
                        >
                          {elem.email}
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.contacts__social}>
                <p className={styles.contacts__label}>Мы в сети:</p>
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
                Кто-то из нашей команды работает даже на выходных. Пишите нам в
                любое время.
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
      </section>
    </>
  );
}
