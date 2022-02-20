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
  const [isTitle, setTitle] = React.useState(0);

  const hideContent = () => {
    setHide(!hide);
  };

  const toggleWheel = (e) => (e.deltaY > 0 ? setTitle(100) : setTitle(0));

  return (
    <div className={styles.service__scroll}>
      {hide && <Headerservice title="Услуги" isTitle={isTitle} />}
      {hide && (
        <>
          <ServicesWeb toggleWheel={toggleWheel} />
          <ServiceRules toggleWheel={toggleWheel} />
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
