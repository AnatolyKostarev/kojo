import React from "react";
import styles from "./Contacts.module.css";
import Form from "../Form/Form.jsx"

export default function Contacts() {
  return (
    // <section className={styles.contact}>
    //   <div className={styles.container}>
    //     <h1 className={styles.title}>CONTACTS</h1>
    //   </div>
    // </section>
    <div className={styles.mainWrapper}>
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
                  <span data-hover="mail@zipl.pro" className={styles.item}>mail@zipl.pro</span>
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
                  <span data-hover="sales@zipl.pro" className={styles.item}>sales@zipl.pro</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.label}>
              <span>Мы в сети:</span>
            </div>
            <div className={styles.value}>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <span data-hover="Фэйсбук" className={styles.item}>Фэйсбук</span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                >
                  <span data-hover="Беханс" className={styles.item}>Беханс</span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <span data-hover="Инстаграм" className={styles.item}>Инстаграм</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoTextRight} id="on-form">
          Заполните поля ниже и мы свяжемся с вами как можно быстрее.
        </div>
        <div className={styles.infoTextLeft}>
          Кто-то из нашей команды работает даже на выходных. Пишите нам в любое
          время.
        </div>

        <div className={styles.formWrapper}>
            <Form />
        </div>

      </section>
    </div>
  );
}
