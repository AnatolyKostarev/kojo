import React from "react";
import Headerservice from "../../layouts/header/services_/Headerservice";
import Navigation from "../navigation/Navigation";
import Footerworks from "../../layouts/footer/works/Footerworks";
import styles from "./Services.module.css";
import ServicesWeb from "./services_web/ServicesWeb";
import ServiceRules from "./service_rules/ServiceRules";
import { ServiceScrollBar } from "../services_/ServiceScrollBar";
import "./ServiceScrollBar.css";

export default function Services() {
  const [hide, setHide] = React.useState(true);

  const hideContent = () => {
    setHide(!hide);
  };

  return (
    <div className={styles.service__scroll}>
      {hide && <Headerservice title="Услуги" />}
      {hide && (
        <>
          <ServicesWeb />
          <ServiceRules />
        </>
      )}
      <Navigation hideContent={hideContent} />
      <div id="service__footer" className={styles.footer}>
        {hide && <Footerworks />}
      </div>
      {hide && <ServiceScrollBar />}
    </div>
  );
}
