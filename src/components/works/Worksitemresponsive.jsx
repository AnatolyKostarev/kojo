import React from "react";
import Buttonsmall from "../button/Buttonsmall";
import styles from "./Worksitemresponsive.module.css";

export const Worksitemresponsive = ({ elem, showMenu }) => {
  return (
    <>
      {showMenu && (
        <div className={styles.works__list}>
          {elem.map((elem, index, arr) => (
            <div className={styles.works__item} key={index}>
              <h2 className={styles.title}>{elem.title}</h2>
              <div className={styles.works__img}>
                <img
                  className={styles.works__pic}
                  src={elem.src}
                  width={elem.width}
                  height={elem.height}
                  alt={elem.alt}
                />
              </div>
              <div className={styles.works__info}>
                <p className={styles.counter}>{`${elem.counter} ${Math.abs(
                  (index -= arr.length)
                )}`}</p>
                <p className={styles.desc}>{elem.desc}</p>
              </div>
              <div className={styles.btn__wraper}>
                <Buttonsmall
                  title="смотр."
                  href={elem.href}
                  addStyle="animated_btn"
                />
                <p className={styles.action}>{elem.action}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
