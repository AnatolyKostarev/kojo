import React, { useState } from "react";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
import { Header2 } from "../../layouts/header/homepage/headerMAx/Header2";
import Navigation from "../navigation/Navigation";
import FooterHomepage from "./footer/footerHomepage/footerHomepage";
import style from "./Homepage.module.css";
import ScrollSpy from "./scrollSpy/scrollSpy";
import HomePageMobile from "./HomePageMobil";

export default function Homepage({ showMenu, isOpen, toggleMobileMenu }) {
  // for header
  let [header, setHeader] = useState(true);
  const [hide, setHide] = useState(true);

  const hideHeader = () => {
    setHeader(false);
  };

  const showHeader = () => {
    setHeader(true);
  };

  const hideContent = () => {
    setHide(!hide);
  };

  return (
    <>
      <div className={style.homepage}>
        {hide && header && <Header2 />}
        {hide && <div className={style.vertical_line}></div>}

        {hide && <Title showHeader={showHeader} />}
        {hide && <AboutUs showHeader={showHeader} />}
        {hide && <MainForm hideHeader={hideHeader} />}
        <Navigation hideContent={hideContent} />
        {hide && <FooterHomepage />}
        {hide && <ScrollSpy />}
      </div>

      <HomePageMobile
        showMenu={showMenu}
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </>
  );
}
