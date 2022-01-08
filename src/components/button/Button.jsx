import React from "react";
import styles from "./Button.module.css";

export default function Button({ title }) {
  return (
    <>
      <a className={styles.btn} href="/" data-text={title}>
        {title}
      </a>
    </>
  );
}
