import React from "react";
import { servicesInfo } from "../../../store";
import styles from "./ServicesWeb.module.css";

export const ServicesInfo = () => {
  return (
    <div className={styles.service__info}>
      <ul>
        {servicesInfo.map((elem, index) => (
          <li key={index}>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
};
