import React from "react";
import Button from "../button/Button";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.required}>
        <input
          type="text"
          required
          id="feedback-name"
          className={styles.input}
          name="Feedback[name]"
          placeholder="Имя"
        />
        {/* <p>Это поле обязательно</p> */}
      </div>
      <div>
        <input
          type="text"
          required
          id="feedback-email"
          className={styles.input}
          name="Feedback[email]"
          placeholder="Email"
        />
        {/* <p>Это поле обязательно</p> */}
      </div>
      <div>
        <textarea
          id="feedback-message"
          required
          className={styles.textarea}
          name="Feedback[message]"
          placeholder="Сообщение"
        ></textarea>
        {/* <p>Это поле обязательно</p> */}
      </div>
      <div className={styles.submitWrapper}>
        <Button title="Отправить" modificator="form_btn" />
      </div>
    </form>
  );
}
