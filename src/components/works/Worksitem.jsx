import React from "react";
import Buttonsmall from "../button/Buttonsmall";
import styles from "./Works.module.css";

export default function Worksitem({
  imagePosition,
  buttonPosition,
  actionPosition,
  title,
  counter,
  desc,
  action,
  href,
  src,
  width,
  height,
  alt,
}) {
  let image = (
    <div
      className={
        imagePosition === "left" ? styles.works__img : styles.works__img_left
      }
    >
      <img
        className={styles.works__pic}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );

  let actionElem = (
    <p
      className={imagePosition === "left" ? styles.action : styles.action__left}
    >
      {action}
    </p>
  );

  return (
    <>
      <div className={styles.works__item}>
        {imagePosition === "left" && image}
        <div
          className={
            imagePosition === "left"
              ? styles.works__info
              : styles.works__info_left
          }
        >
          <h2 className={styles.title}>{title}</h2>
          <p
            className={
              imagePosition === "left" ? styles.counter : styles.counter__left
            }
          >
            {counter}
          </p>
          {actionPosition === "left" && actionElem}
          <p
            className={
              imagePosition === "left" ? styles.desc : styles.desc__left
            }
          >
            {desc}
          </p>
          {actionPosition === "right" && actionElem}

          <div
            className={
              imagePosition === "left"
                ? styles.btn__wraper
                : styles.btn__wraper_left
            }
          >
            <Buttonsmall
              title="смотр."
              href={href}
              buttonPosition={buttonPosition}
            />
          </div>
        </div>
        {imagePosition === "right" && image}
      </div>
    </>
  );
}
