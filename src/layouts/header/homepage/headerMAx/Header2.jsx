import style from "./header2.module.css";
import Button from "../../../../components/buttonMax/button.jsx";
// import Button from '../../../../components/button/Button';

export function Header2({ state }) {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <h1 id={style.h1}>WEB DEVELOPER</h1>
        <div className={style.logoWrapper}>
          <div className={style.logoWrapperBox}>
            <a href="#title">
            <img src="./img/header/icon-logo.svg" alt=" " />

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
