import React from "react";
import styles from "./ServicesWeb.module.css";

export const ServicesImg = ({ width, height }) => {
  return (
    <div className={styles.service__img_wraper}>
      <div
        className={styles.service__img}
        screen-width={`${width} : ${height}`}
      ></div>
    </div>
  );
};
