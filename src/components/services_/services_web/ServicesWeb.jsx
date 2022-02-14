import React from "react";
import { ServicesImg } from "./ServicesImg";
import { ServicesInfo } from "./ServicesInfo";
import { ServicesList } from "./ServicesList";
import styles from "./ServicesWeb.module.css";

const ServicesWeb = () => {
  return (
    <section id={styles.service}>
      <div className={styles.container}>
        <div className={styles.service}>
          <ServicesInfo />
          <ServicesList />
          <ServicesImg />
        </div>
      </div>
    </section>
  );
};

export default ServicesWeb;
