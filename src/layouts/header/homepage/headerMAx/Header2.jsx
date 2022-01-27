import style from "./header2.module.css";
import Button from "../../../../components/buttonMax/button.jsx";

export function Header2() {
  return (
    <header className={style.header}>
      <div class={style.content}>
        <h1 id={style.h1}>WEB DEVELOPER</h1>
        {/* <div class={style.logotype}>
                <img src="./img/header/icon-logo.svg" alt=""/>
            </div> */}
        <div className={style.logoWrapper}>
          <div className={style.logoWrapperBox}>
            <img src="./img/header/icon-logo.svg" alt=" " />
            <div className={style.logoBoxAnimate}></div>
          </div>
        </div>
        <div class={style.btn_box}>
          {/* <button id={style.btn}>ЗАКАЗАТЬ</button> */}
          <Button />
        </div>
      </div>
    </header>
  );
}
