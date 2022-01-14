import React from "react";
import style from "./Header.module.css";
import '../../components/homepage/scrollSpy.css';
import Button from "../button/button.jsx";
export default function Header() {
  return (
    <header className="header">
      <h1 className={style.title}>HEADER</h1>
      <div className={style.logoWrapper}>
        <img src="./img/header/icon-logo.svg" />
      </div>
      <div className={style.btnBlock}>
        {/* <a><button id={style.btnElement}></button></a> */}
        <Button/>
      </div>
    </header>
  );
}
