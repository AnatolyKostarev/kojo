import React from "react";
import styles from "./Button.module.css";

export default function Button({ title, modificator }) {
  return (
    <>
      <a
        className={styles.btn}
        data-btn={modificator}
        href="#"
        data-text={title}
      >
        {title}
      </a>
    </>
  );
}
