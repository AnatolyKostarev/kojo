import React from "react";
import { ServicesImg } from "./ServicesImg";
import { ServicesInfo } from "./ServicesInfo";
import { ServicesList } from "./ServicesList";
import styles from "./ServicesWeb.module.css";
import "../ServiceScrollBar.css";

const ServicesWeb = ({ toggleWheel }) => {
  return (
    <section id="service" className={styles.services} onWheel={toggleWheel}>
      <div className={styles.container}>
        <div className={styles.service}>
          <div className={styles.service__left}>
            <div className={styles.empty}></div>
            <ServicesInfo />
            <ServicesList />
          </div>
          <div className={styles.service__right}>
            <ServicesImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeb;
