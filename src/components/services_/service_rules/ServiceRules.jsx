import React from "react";
import ServiceRulesInfo from "./ServiceRulesInfo";
import ServiceRulesList from "./ServiceRulesList";
import ServiceRulesImg from "./ServiceRulesImg";
import styles from "./ServiceRules.module.css";
import "../ServiceScrollBar.css";

const ServiceRules = ({ wheelUp }) => {
  return (
    <section
      id="service__rule"
      className={styles.service__rule}
      onWheel={wheelUp}
    >
      <div className={styles.container}>
        <div className={styles.service__rules}>
          <div className={styles.service__rules_left}>
            <div className={styles.empty}></div>
            <ServiceRulesInfo />
            <ServiceRulesList />
          </div>
          <div className={styles.service__rules_right}>
            <ServiceRulesImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRules;
