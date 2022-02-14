import React from "react";
import { servicesList } from "../../../store";
import styles from "./ServicesWeb.module.css";

export const ServicesList = () => {
  return (
    <div className={styles.service__list}>
      <ul>
        {servicesList.map((elem, index) => (
          <li key={index}>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
};
