import React from "react";
import styles from "./ServicesWeb.module.css";

export const ServicesImg = ({ width, height }) => {
  return (
    <div className={styles.service__img_wraper}>
      <div
        className={styles.service__img}
        screen-sizes={`${width} : ${height}`}
      ></div>
    </div>
  );
};
