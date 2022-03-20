import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../store";
import styles from "./Form.module.css";
import Personal from "../personalData/Personal";
import ModalError from "../modal/ModalError"

export default function Form() {
  const [activeModal, setActiveModal] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const form = useRef();
  const [isModalError, setModalError] = useState(false)

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
        setTimeout(setActiveModal, 5000);
      })
      .catch((err) => {
        setModalError(true)
        setTimeout(setModalError, 5000)
      });
    reset();
  };

  const openPersonal = () => {
    setIsPersonal(true);
  };
  const closePersonal = () => {
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
            name="phone"
            {...register("phone", {
              required: "Это поле обязательно",
              pattern: {
                value:
                  /^\+?7(\d{10})$/,
                message: "Недопустимый формат телефона",
              },
            })}
            id="feedback-phone"
            className={styles.input}
            type="tel"
            placeholder="Телефон в формате +7XXXXXXXXXX"
          />
          <div>
            {errors?.phone && (
              <p className={styles.focus}>
                {errors?.phone?.message || "Error!"}
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
                  /\S+@\S+\.\S+/,
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
      <ModalError active={isModalError} setActive={setModalError} />
      {isPersonal && <Personal closePersonal={closePersonal} />}
    </>
  );
}
