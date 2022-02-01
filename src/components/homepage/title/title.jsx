import React from "react";
import style from "./title.module.css";
import "../scrollSpy.css";

function Title({ showHeader }) {
  let [index, setIndex] = React.useState(0);

  const img = [
    "./img/imgHomepage/1Home.webp",
    "./img/imgHomepage/2Home.webp",
    "./img/imgHomepage/3Home.webp",
    "./img/imgHomepage/4Home.webp",
    "./img/imgHomepage/5Home.webp",
    "./img/imgHomepage/10Home.webp",
    "./img/imgHomepage/14Home.webp",
  ];

  return (
    <>
      <section className={style.title} id="title"
        onMouseOver={showHeader}
      >
        <div
          className={style.mainImage}
          style={{
            backgroundImage: `url(${img[index]})`,
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
              DESIGN + <span className={style.boxAnimation}></span>
            </p>
            <p>
              {" "}
              DEVELOPMENT <span className={style.boxAnimation}></span>
            </p>
          </div>
          <div
            className={style.itemParagph}
            onMouseOver={() => {
              setIndex(2);
            }}
          >
            <p>
              ZIPL STUDIO IS A HIGH-QUALIFIED TEAM OF TALENTED DEVELOPERS AND
              DESIGNERS.<span className={style.boxAnimation}></span>
            </p>
            <p>
              EVERY PROJECT IS A CHALLENGE TO DO BETTER THAN ANYTHING WE HAVE
              ALREADY DONE!<span className={style.boxAnimation}></span>
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
              AWARDS <span className={style.boxAnimation}></span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Title;
