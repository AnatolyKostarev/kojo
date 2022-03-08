import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../store";
import styles from "./Form.module.css";
import Personal from "../personalData/Personal";

export default function Form() {
  const [activeModal, setActiveModal] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const form = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((res) => {
        setActiveModal(true);
      })
      .catch((err) => console.log(err));
    reset();
  };

  const openPersonal = () => {
    document.body.style.overflow = "hidden";
    setIsPersonal(true);
  };
  const closePersonal = () => {
    document.body.style.overflow = "";
    setIsPersonal(false);
  };

  return (
    <>
      <form
        ref={form}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.borders}>
          <input
            name="name"
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
          <div>
            {errors?.name && (
              <p className={styles.focus}>
                {errors?.name?.message || "Error!"}
              </p>
            )}
          </div>
        </div>
        <div className={styles.borders}>
          <input
            name="email"
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
          <div>
            {errors?.email && (
              <p className={styles.focus}>
                {errors?.email?.message || "Error!"}
              </p>
            )}
          </div>
        </div>
        <div className={styles.borders}>
          <textarea
            name="message"
            {...register("message", {
              required: "Это поле обязательно",
              minLength: {
                value: 10,
                message: "Минимум 10 символов",
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
          <div>
            {errors?.message && (
              <p className={styles.focus}>
                {errors?.message?.message || "Error!"}
              </p>
            )}
          </div>
        </div>
        <label className={styles.consent}>
          <input
            name="consent"
            type="checkbox"
            {...register("consent", {
              required: "Подтвердите свое согласие для отправки формы",
            })}
            id="feedback-consent"
            className={styles.checkbox}
          />
          <span className={styles.checkfake}></span>
          <span className={styles.policy_text}>
            Я даю согласие на обработку&nbsp;
            <span
              onClick={openPersonal}
              style={{ color: "#1f1f1f", textDecoration: "underline" }}
            >
              персональных данных
            </span>
          </span>
        </label>
        <div className={styles.focus_consent}>
          {errors?.consent && <p>{errors?.consent?.message || "Error!"}</p>}
        </div>
        <div className={styles.submitWrapper}>
          <div></div>
          <div className={styles.form__btn}>
            <Button title="Отправить" addStyle="form_btn" />
          </div>
        </div>
      </form>
      <Modal active={activeModal} setActive={setActiveModal} />
      {isPersonal && <Personal closePersonal={closePersonal} />}
    </>
  );
}
