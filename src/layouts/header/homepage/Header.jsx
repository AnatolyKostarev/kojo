import React from "react";
import style from "./Header.module.css";
import "../../../components/homepage/scrollSpy.css";
import Button from "../../../components/buttonMax/button";
export default function Header() {
  return (
    <header className="headerMax">
      <h1 className={style.title}>HEADER</h1>
      <div className={style.logoWrapper}>
        <div className={style.logoWrapperBox}>
          <img src="./img/header/icon-logo.svg" alt=" " />
          <div className={style.logoBoxAnimate}></div>
        </div>
      </div>
      <div className={style.btnBlock}>
        {/* <a><button id={style.btnElement}></button></a> */}
        <Button />
      </div>
    </header>
  );
}
