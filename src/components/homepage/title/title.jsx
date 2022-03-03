import React from "react";
import { homepageBackgroundImages } from "../../../store";
import style from "./title.module.css";
import "../scrollSpy.css";

function Title({ showHeader }) {
  let [index, setIndex] = React.useState(0);

  return (
    <>
      <section className={style.title} id="title" onMouseOver={showHeader}>
        <div
          className={style.mainImage}
          style={{
            backgroundImage: `url(${homepageBackgroundImages[index]})`,
          }}
          alt="webDesign"
          onMouseOver={() => {
            setIndex(1);
          }}
          onClick={() => {
            setIndex(5);
          }}
          onDoubleClick={() => {
            setIndex(6);
          }}
        >
          <img
            src="https://zipl.pro/assets/ce6872b3/img/studio.svg"
            alt="webDesign"
          />

          <div className={style.boxAnimation}></div>
        </div>
        <div className={style.mainContent}>
          <div
            className={style.itemTitle}
            onMouseOver={() => {
              setIndex(0);
            }}
          >
            <p>
              Разработка<span className={style.boxAnimation}></span>
            </p>
            <p>
              + польза<span className={style.boxAnimation}></span>
            </p>
            <p>
              и ценность<span className={style.boxAnimation}></span>
            </p>
          </div>
          <div
            className={style.itemParagph}
            onMouseOver={() => {
              setIndex(2);
            }}
          >
            <p>
              KOJO — МЫ КОНЦЕНТРИРУЕМСЯ НА РЕШЕНИИ РЕАЛЬНЫХ ПРОБЛЕМ ЗАКАЗЧИКА И
              ЕГО КЛИЕНТОВ.<span className={style.boxAnimation}></span>
            </p>
            <p>
              КАЖДОЕ НАШЕ РЕШЕНИЕ ДОЛЖНО ПРИНОСИТЬ БОЛЬШЕ, ЧЕМ ВЫ ЗАТРАТИЛИ НА
              ЕГО РАЗРАБОТКУ.<span className={style.boxAnimation}></span>
            </p>
          </div>
          <div
            className={style.itemText}
            onMouseOver={() => {
              setIndex(3);
            }}
          >
            <p>
              16+ <span className={style.boxAnimation}></span>
            </p>
            <p>
              Awards<span className={style.boxAnimation}></span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Title;
