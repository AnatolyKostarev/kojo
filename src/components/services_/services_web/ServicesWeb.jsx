import React from "react";
import { ServicesImg } from "./ServicesImg";
import { ServicesInfo } from "./ServicesInfo";
import { ServicesList } from "./ServicesList";
import styles from "./ServicesWeb.module.css";

const ServicesWeb = () => {
  const elemetScroll = () => console.log("scroll");

  return (
    <section id={styles.service} onScroll={elemetScroll}>
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
