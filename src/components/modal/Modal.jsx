import React from "react";
import styles from "./Modal.module.css";

function Modal({ active, setActive}) {
const image ="/img/modal/image_modal.webp"

  return (
    <div 
    className={active ? [styles.layout, styles.active].join(' ') : styles.layout} 
    onClick={() => setActive(false)}>
      <div 
      className={styles.window}
      >
      <img src = {image}></img>
       <span
       className={styles.success}
       >Спасибо! Мы получили ваше сообщение</span>
      </div>
    </div>
  );
}

export default Modal;