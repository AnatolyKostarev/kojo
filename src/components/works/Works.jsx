import React from "react";
import Headerworks from "../../layouts/header/works/Headerworks";
import Footerworks from "../../layouts/footer/works/Footerworks";

import styles from "./Works.module.css";

export default function Works() {
  return (
    <>
      <Headerworks title="Работы" />
      <section className={styles.works}>
        <div className={styles.container}>
          <div className={styles.works__list}>
            <div className={styles.works__item}>
              <div className={styles.works__img}>
                <img
                  className={styles.works__pic}
                  src="/img/works/image_works-1.jpg"
                  width="840"
                  height="830"
                  alt=""
                />
              </div>
              <div className={styles.works__info}>
                <h2 className={styles.title}>ODS</h2>
                <p className={styles.counter}>наша гордость #16</p>
                <p className={styles.desc}>
                  Сайт Международного аэропорта "Одесса"
                </p>
                <p className={styles.action}>Дизайн & Код</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerworks />
    </>
  );
}
