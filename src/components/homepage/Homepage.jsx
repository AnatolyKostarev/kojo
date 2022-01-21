import React from "react";
import style from "./Homepage.module.css";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
import Footer from "./footer/footer.jsx";
import { Header2 } from "../../layouts/header/homepage/headerMAx/Header2";
import Form from "../form/Form";
// import Header from "../../layouts/header/homepage/Header";

export default function Homepage() {
  return (
    <>
      <div className={style.homepage}>
        {/* <div className={style.blockLine}></div> */}
        {/* <Header /> */}
        <Header2/>
        <Title />
        <AboutUs />
        <MainForm />
        {/* <Form/> */}
        <Footer />
      </div>
    </>
  );
}
