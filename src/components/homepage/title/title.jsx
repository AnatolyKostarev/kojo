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
          onMouseLeave={() => {
            setIndex(6);
          }}
        >
          <img src="/img/imgHomepage/webdev.svg" alt="webDesign" />

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
              + польза
              <span className={style.boxAnimation}></span>
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
              KOJO — мы концентрируемся на решении реальных проблем заказчика и
              его клиентов.<span className={style.boxAnimation}></span>
            </p>
            <p>
              Каждое наше решение должно приносить больше, чем вы затратили на
              разработку.<span className={style.boxAnimation}></span>
            </p>
          </div>
          <div
            className={style.itemText}
            onMouseOver={() => {
              setIndex(3);
            }}
          >
            <p>
              JavaScript<span className={style.boxAnimation}></span>
            </p>
            <p>
              React Gatsby<span className={style.boxAnimation}></span>
            </p>
            <p>
              Node/PHP<span className={style.boxAnimation}></span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Title;
