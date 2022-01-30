import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import styles from "./Form.module.css";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.borders}>
        <input
          name="Feedback[name]"
          {...register("name", {
            required: "Это поле обязательно",
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            maxLength: {
              value: 50,
              message: "Максимум 50 символов",
            },
          })}
          id="feedback-name"
          className={styles.input}
          placeholder="Имя"
        />
        <div className={styles.focus}>
          {errors?.name && (
            <p style={{ marginBottom: "20px" }}>
              {errors?.name?.message || "Error!"}
            </p>
          )}
        </div>
      </div>
      <div className={styles.borders}>
        <input
          name="Feedback[email]"
          {...register("email", {
            required: "Это поле обязательно",
            maxLength: {
              value: 50,
              message: "Максимум 50 символов",
            },
            pattern: {
              value:
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
              message: "Недопустимый формат email",
            },
          })}
          id="feedback-email"
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        <div className={styles.focus}>
          {errors?.email && (
            <p style={{ marginBottom: "20px" }}>
              {errors?.email?.message || "Error!"}
            </p>
          )}
        </div>
      </div>
      <div className={styles.borders}>
        <textarea
          name="Feedback[message]"
          {...register("message", {
            required: "Это поле обязательно",
            minLength: {
              value: 10,
              message: "Минимум 10 символа",
            },
            maxLength: {
              value: 500,
              message: "Максимум 500 символов",
            },
          })}
          id="feedback-message"
          className={styles.textarea}
          placeholder="Сообщение"
        ></textarea>
        <div className={styles.focus}>
          {errors?.message && (
            <p style={{ marginBottom: "20px" }}>
              {errors?.message?.message || "Error!"}
            </p>
          )}
        </div>
      </div>
      <label className={styles.consent}>
        <input
          name="Feedback[consent]"
          type="checkbox"
          {...register("consent", {
            required: "И это тоже",
          })}
          id="feedback-consent"
          className={styles.checkbox}
        />
        <span className={styles.checkfake}></span>
        <span className={styles.policy_text}>
          Я соглашаюсь с политикой о <Link to="/">персональных данных</Link>
        </span>
        <div className={styles.focus_consent}>
          {errors?.consent && <p>{errors?.consent?.message || "Error!"}</p>}
        </div>
      </label>
      <div className={styles.submitWrapper}>
        <Button title="Отправить" addStyle="form_btn" />
      </div>
    </form>
  );
}
