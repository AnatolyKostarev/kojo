import React from "react";
import { ServicesImg } from "./ServicesImg";
import { ServicesInfo } from "./ServicesInfo";
import { ServicesList } from "./ServicesList";
import styles from "./ServicesWeb.module.css";
import "../ServiceScrollBar.css";
import "../services_mobile/ServiceMobileNavBar.css";

const ServicesWeb = ({ toggleWheel, isWebContent, width, height }) => {
  return (
    <section
      id="service"
      className={styles.services}
      onWheel={toggleWheel}
      style={isWebContent}
    >
      <div className={styles.container}>
        <div className={styles.service}>
          <div className={styles.service__left}>
            <div className={styles.empty}></div>
            <ServicesInfo />
            <ServicesList />
          </div>
          <div className={styles.service__right}>
            <ServicesImg width={width} height={height} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeb;
