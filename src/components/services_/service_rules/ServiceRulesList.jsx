import React from "react";
import { serviceRulesList } from "../../../store";
import styles from "./ServiceRules.module.css";

const ServiceRulesList = () => {
  return (
    <div className={styles.service__rules_list}>
      <ul>
        {serviceRulesList.map((elem, index) => (
          <li key={index}>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRulesList;
