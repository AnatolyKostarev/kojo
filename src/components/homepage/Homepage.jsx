import React, { useState } from "react";
import style from "./Homepage.module.css";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
import Footer from "./footer/footer.jsx";
import { Header2 } from "../../layouts/header/homepage/headerMAx/Header2";
import Navigation from "../navigation/Navigation";
// import { Transition } from 'react-transition-group';

export default function Homepage() {
  // for header
  let [header, setHeader] = useState(true);
  const hideHeader = () => {
    setHeader(false);
  };
  const showHeader = () => {
    setHeader(true);
  };
  // transition group
  //  let [state, setState] = useState(false);

  return (
    <>
      <div className={style.homepage}>
        {header && <Header2 />}

        {/* <Header2 /> */}
        <Title />
        <AboutUs />
        <MainForm hideHeader={hideHeader} showHeader={showHeader} />
        <Navigation />
        <Footer />
      </div>
    </>
  );
}
