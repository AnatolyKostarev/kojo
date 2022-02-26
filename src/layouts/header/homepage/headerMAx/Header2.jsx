import style from "./header2.module.css";
import Button from "../../../../components/buttonMax/button.jsx";

export function Header2() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <h1 id={style.h1}>WEB DEVELOPER</h1>
        <div className={style.logoWrapper}>
          <div className={style.logoWrapperBox}>
            <a href="#title">
              <img src="./img/header/icon-logo.svg" alt="kojo_logo" />
            </a>
            <div className={style.logoBoxAnimate}></div>
          </div>
        </div>
        <div className={style.btn_box}>
          <Button />
        </div>
      </div>
    </header>
  );
}
