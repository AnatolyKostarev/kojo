import React from "react";
import styles from "./Buttonsmall.module.css";

export default function Buttonsmall({ title, addStyle, buttonPosition, href }) {
  let smallBtnIcon = (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className={styles.btn__icon}
        src="img/works/link.svg"
        alt="square arrow"
        width="26"
        height="26"
      />
    </a>
  );

  return (
    <>
      {buttonPosition === "left" && smallBtnIcon}
      <a href={href} target="_blank" rel="noreferrer">
        <button className={styles.btn} data-style={addStyle} data-text={title}>
          {title}
        </button>
      </a>
      {buttonPosition === "right" && smallBtnIcon}
    </>
  );
}
