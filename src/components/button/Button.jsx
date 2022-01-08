import React from "react";
import styles from "./Button.module.css";

export default function Button({ title }) {
  return (
    <>
      {/* <button className={styles.btn__left}>
          <a className={styles.btn__link} href="/contacts" data-text={title}>
            {title}
          </a>
        </button> */}
      <div className={styles.btn}>
        <a
          className={styles.btn__right}
          href="https://rbc.ru"
          data-text={title}
        >
          {title}
        </a>
      </div>
    </>
  );
}
