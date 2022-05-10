import Button from "../../../../components/buttonMax/button.jsx";
import logo from "./kojo-logo.svg";
import style from "./header2.module.css";

export function Header2() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <h1 id={style.h1}>WEB DEVELOPER</h1>
        <div className={style.logoWrapper}>
          <div className={style.logoWrapperBox}>
            <a href="#title">
              <img src={logo} alt="KOJO" />
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
