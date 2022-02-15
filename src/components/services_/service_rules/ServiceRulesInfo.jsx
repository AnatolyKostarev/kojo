import React from "react";
import { servicesRulesInfo } from "../../../store";
import styles from "./ServiceRules.module.css";

const ServiceRulesInfo = () => {
  return (
    <div className={styles.service__rules_info}>
      <ul>
        {servicesRulesInfo.map((elem, index) => (
          <li key={index}>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRulesInfo;
