import React, { useEffect, useState } from "react";
import style from "./Homepage.module.css";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
// import Footer from "./footer/footer.jsx"; we must delete this component
import { Header2 } from "../../layouts/header/homepage/headerMAx/Header2";
import Navigation from "../navigation/Navigation";
import ScrollSpy from "./scrollSpy/scrollSpy";
import FooterHomepage from './footer/footerHomepage/footerHomepage'

export default function Homepage() {
  // for header
  let [header, setHeader] = useState(true);
  const hideHeader = () => {
    setHeader(false);
    console.log(header)
  };
  const showHeader = () => {
          setHeader(true);
  };



  
  return (
    <>
      <div className={style.homepage}>
        {header && <Header2 />}
        <Title showHeader={showHeader}/>
        <AboutUs showHeader={showHeader}/>
        <MainForm hideHeader={hideHeader}  />
        <Navigation />
        <FooterHomepage />
        <ScrollSpy />
      </div>
    </>
  );
}
