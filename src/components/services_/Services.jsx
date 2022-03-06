import React from "react";
import Headerservice from "../../layouts/header/services_/Headerservice";
import Navigation from "../navigation/Navigation";
import Footerworks from "../../layouts/footer/works/Footerworks";
import ServicesWeb from "./services_web/ServicesWeb";
import ServiceRules from "./service_rules/ServiceRules";
import NavigationMobile from "../navigation/NavigationMobile";
import { ServiceScrollBar } from "../services_/ServiceScrollBar";
import ServiceMobileNavBar from "./services_mobile/ServiceMobileNavBar";
import { Helmet } from "react-helmet";
import styles from "./Services.module.css";

export default function Services({
  showMenu,
  isOpen,
  btnColor,
  isWebContent,
  isRuleContent,
  toggleMobileMenu,
  changeWebBtn,
  changeRuleBtn,
}) {
  const [hide, setHide] = React.useState(true);
  const [isTitle, setTitle] = React.useState(false);

  const hideContent = () => {
    setHide(!hide);
    setTitle(0);
  };

  const toggleWheel = (e) => (e.deltaY > 0 ? setTitle(true) : setTitle(false));

  return (
    <div className={styles.service__scroll}>
      <Helmet>
        <meta
          name="description"
          content="Услуги по разработке сайтов. Использовать современные возможности React вместе с Wordpress"
        />
        <title>Услуги веб студии в Спб. Нанять программиста.</title>
      </Helmet>
      {hide && (
        <Headerservice
          title="Услуги"
          isTitle={isTitle}
          isOpen={isOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
      <main>
        {hide && showMenu && (
          <ServiceMobileNavBar
            btnColor={btnColor}
            webButton={changeWebBtn}
            rulesButton={changeRuleBtn}
          />
        )}
        {hide && showMenu && (
          <div className={styles.services__wraper}>
            <ServicesWeb
              toggleWheel={toggleWheel}
              isWebContent={isWebContent}
            />
            <ServiceRules
              toggleWheel={toggleWheel}
              isRuleContent={isRuleContent}
            />
          </div>
        )}
        {hide && showMenu && <ServiceScrollBar isTitle={isTitle} />}
        {!showMenu && <NavigationMobile toggleMobileMenu={toggleMobileMenu} />}
      </main>
      <Navigation hideContent={hideContent} />
      {showMenu && (
        <div id="service__footer" className={styles.footer}>
          {hide && <Footerworks />}
        </div>
      )}
    </div>
  );
}
