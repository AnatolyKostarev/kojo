import React, { useState } from "react";
import { Header2 } from "../../layouts/header/homepage/headerMAx/Header2";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
import HomePageMobile from "./HomePageMobil";
import Navigation from "../navigation/Navigation";
import FooterHomepage from "./footer/footerHomepage/footerHomepage";
import style from "./Homepage.module.css";
import ScrollSpy from "./scrollSpy/scrollSpy";

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
        {hide && header && showMenu && <Header2 />}
        {hide && showMenu && <div className={style.vertical_line}></div>}
        <main>
          {hide && showMenu && <Title showHeader={showHeader} />}
          {hide && showMenu && <AboutUs showHeader={showHeader} />}
          {hide && showMenu && <MainForm hideHeader={hideHeader} />}
          {showMenu && <Navigation hideContent={hideContent} />}
          {hide && showMenu && <ScrollSpy />}
        </main>
        {hide && showMenu && <FooterHomepage />}
      </div>

      <HomePageMobile
        showMenu={showMenu}
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </>
  );
}
