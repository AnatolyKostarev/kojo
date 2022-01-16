import React from "react";
import Button from "../button/Button";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.required}>
        <input
          id="feedback-name"
          className={styles.input}
          type="text"
          name="Feedback[name]"
          placeholder="Имя"
          minLength="2"
          maxLength="50"
          required
        />
        {/* <p>Это поле обязательно</p> */}
      </div>
      <div>
        <input
          id="feedback-email"
          className={styles.input}
          type="email"
          name="Feedback[email]"
          placeholder="Email"
          required
        />
        {/* <p>Это поле обязательно</p> */}
      </div>
      <div>
        <textarea
          id="feedback-message"
          className={styles.textarea}
          name="Feedback[message]"
          placeholder="Сообщение"
          minLength="10"
          maxLength="500"
          required
        ></textarea>
        {/* <p>Это поле обязательно</p> */}
      </div>
      <div className={styles.submitWrapper}>
        <Button title="Отправить" addStyle="form_btn" />
      </div>
    </form>
  );
}
