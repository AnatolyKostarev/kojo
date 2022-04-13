import React from "react";
import styles from "./Modal.module.css";

function ModalError({ active, setActive }) {

  return (
    <div
      className={
        active ? [styles.layout, styles.active].join(" ") : styles.layout
      }
      onClick={() => setActive(false)}
    >
      <div className={styles.window}>
        <span className={styles.success}>
          Не удалось отправить данные, попробуйте позже 😥
        </span>
      </div>
    </div>
  );
}

export default ModalError;