import React from "react";
import style from "./Homepage.module.css";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
import Footer from "./footer/footer.jsx";
import Header from "../../layouts/header/homepage/Header";
import Navigation from "../navigation/Navigation";

export default function Homepage() {
  return (
    <>
      <div className={style.homepage}>
        <div className={style.blockLine}></div>
        <Header />
        <Title />
        <AboutUs />
        <MainForm />
        <Footer />
      </div>
    </>
  );
}
