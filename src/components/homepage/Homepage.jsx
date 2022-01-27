import React, { useState } from "react";
import style from "./Homepage.module.css";
import Title from "./title/title";
import AboutUs from "./about/aboutUs";
import MainForm from "./form/form.jsx";
import Footer from "./footer/footer.jsx";
import { Header2 } from "../../layouts/header/homepage/headerMAx/Header2";
// import Form from "../form/Form";
// import Header from "../../layouts/header/homepage/Header";

export default function Homepage() {
  let [header, setHeader] = useState(true);
  const cnahgeHeader= ()=>{setHeader(!header)};
  return (
    <>
      <div className={style.homepage}>
        {/* <div className={style.blockLine}></div> */}
        {/* <Header /> */}
        {/* {header ?  <Header2 />: null} */}
        <Header2 />
        <Title />
        <AboutUs />
        <MainForm cnahgeHeader={cnahgeHeader}/>
        {/* <Form/> */}
        <Footer />
      </div>
    </>
  );
}
