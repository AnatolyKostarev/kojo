import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../store";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Personal from "../personalData/Personal";
import ModalError from "../modal/ModalError";
import Preloader from "../loader/Preloader";
import styles from "./Form.module.css";

function getFormValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues)
    return {
      email: "",
      message: "",
      name: "",
      phone: "",
    };
  return JSON.parse(storedValues);
}

export default function Form() {
  const [activeModal, setActiveModal] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const [isModalError, setModalError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState(getFormValues);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    setIsLoading(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((res) => {
        setActiveModal(true);
        setTimeout(setActiveModal, 2000);
        setIsLoading(false);
        localStorage.clear();
        setValues(getFormValues);
        setChecked(false);
      })
      .catch((err) => {
        setModalError(true);
        setTimeout(setModalError, 2000);
        setIsLoading(false);
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
        name="form"
        id="form"
        ref={form}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.borders}>
          <input
            name="name"
            {...register("name", {
              required: "?????? ???????? ??????????????????????",
              minLength: {
                value: 2,
                message: "?????????????? 2 ??????????????",
              },
              maxLength: {
                value: 50,
                message: "???????????????? 50 ????????????????",
              },
            })}
            id="name"
            className={styles.input}
            placeholder="??????"
            onChange={handleChange}
            value={values.name}
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
              required: "?????? ???????? ??????????????????????",
              maxLength: {
                value: 50,
                message: "???????????????? 50 ????????????????",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "???????????????????????? ???????????? email",
              },
            })}
            id="email"
            className={styles.input}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
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
          <input
            name="phone"
            {...register("phone", {
              required: "?????? ???????? ??????????????????????",
              pattern: {
                value: /^\+?7(\d{10})$/,
                message: "?????????????? ?? ?????????????? +7XXXXXXXXXX",
              },
            })}
            id="phone"
            className={styles.input}
            type="tel"
            placeholder="??????????????"
            onChange={handleChange}
            value={values.phone}
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
          <textarea
            name="message"
            {...register("message", {
              required: "?????? ???????? ??????????????????????",
              minLength: {
                value: 10,
                message: "?????????????? 10 ????????????????",
              },
              maxLength: {
                value: 500,
                message: "???????????????? 500 ????????????????",
              },
            })}
            id="message"
            className={styles.textarea}
            placeholder="??????????????????"
            onChange={handleChange}
            value={values.message}
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
            checked={checked}
            onChange={() => setChecked(!checked)}
            value={checked}
            {...register("consent", {
              required: "?????????????????????? ???????? ???????????????? ?????? ???????????????? ??????????",
            })}
            id="consent"
            className={styles.checkbox}
          />
          <span
            className={styles.checkfake}
            onClick={() => setChecked(!checked)}
          ></span>
          <span className={styles.policy_text}>
            ?? ?????? ???????????????? ???? ??????????????????&nbsp;
            <span
              onClick={openPersonal}
              style={{ color: "#1f1f1f", textDecoration: "underline" }}
            >
              ???????????????????????? ????????????
            </span>
          </span>
        </label>
        <div className={styles.focus_consent}>
          {errors?.consent && <p>{errors?.consent?.message || "Error!"}</p>}
        </div>
        <div className={styles.submitWrapper}>
          <div></div>
          <div className={styles.form__btn}>
            <Button
              title="??????????????????"
              addStyle="form_btn"
              type="submit"
              disabled={!isValid}
            />
          </div>
        </div>
      </form>
      <Modal active={activeModal} setActive={setActiveModal} />
      <ModalError active={isModalError} setActive={setModalError} />
      {isPersonal && <Personal closePersonal={closePersonal} />}
      {isLoading && <Preloader />}
    </>
  );
}
