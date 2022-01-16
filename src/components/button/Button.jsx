import React from "react";
import styles from "./Button.module.css";

export default function Button({ title, addStyle }) {
  return (
    <>
      <button className={styles.btn} data-style={addStyle} data-text={title}>
        {title}
      </button>
    </>
  );
}
