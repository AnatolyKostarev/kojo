import React from "react";
import styles from "./Contacts.module.css";
import Form from "../Form/Form.jsx";

export default function Contacts() {
  const socialList = [
    { social: "Фэйсбук", href: "https://facebook.com/" },
    { social: "Инстаграм", href: "https://instagram.com/" },
    { social: "Беханс", href: "https://www.behance.net/" },
  ];

  const footerNav = [
    { social: "/ фэйсбук", href: "https://facebook.com" },
    { social: "/ инстаграм", href: "https://instagram.com" },
    { social: "/ вконтакте", href: "https://vk.com" },
  ];

  return (
    <>
      <section className={styles.contact}>
        <h1 className={styles.h1}>Контакты </h1>
        <div className={styles.contactInfo}>
          <div className={styles.contactRow}>
            <div className={styles.label}>
              <span>Основной:</span>
            </div>
            <div className={styles.value}>
              <div>
                <a href="mailto:mail@zipl.pro">
                  <span data-hover="mail@zipl.pro" className={styles.item}>
                    mail@zipl.pro
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.label}>
              <span>Продажи:</span>
            </div>
            <div className={styles.value}>
              <div>
                <a href="mailto:mail@zipl.pro">
                  <span data-hover="sales@zipl.pro" className={styles.item}>
                    sales@zipl.pro
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.label}>
              <span>Мы в сети:</span>
            </div>
            <div className={styles.value}>
              {socialList.map((elem, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.roll__link}>
                    <a href={elem.href} target="_blank" className={styles.item}>
                      {elem.social}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.infoTextRight}>
          Заполните поля ниже и мы свяжемся с вами как можно быстрее.
        </div>
        <div className={styles.infoTextLeft}>
          Кто-то из нашей команды работает даже на выходных. Пишите нам в любое
          время.
        </div>

        <div className={styles.formWrapper}>
          <Form />
        </div>
        <div className={styles.copyright}>
          {new Date().getFullYear()} &copy; "kojo" студия
        </div>
      </section>
      <footer>
        <div className={styles.footer__container}>
          <div className={styles.footer__footer}>
            <div className={styles.footer__social}>
              <p className={styles.footer__title}>Мы в сети:</p>
              <ul className={styles.footer__list}>
                {footerNav.map((elem, index) => (
                  <li className={styles.footer__item} key={index}>
                    <div className={styles.footer__roll__link}>
                      <a href={elem.href} className={styles.footer__link__top}>
                        {elem.social}
                      </a>
                      <a
                        href={elem.href}
                        className={styles.footer__link__bottom}
                      >
                        {elem.social}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footer__copyright}>
              {new Date().getFullYear()} &copy; "kojo" студия
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
