import React from "react";
import style from "./title.module.css";
import "../scrollSpy.css";

function Title() {
  let [index, setIndex] = React.useState(0);

  const img = [
    "./img/imgHomepage/1Home.jpg",
    "./img/imgHomepage/2Home.jpg",
    "./img/imgHomepage/3Home.jpg",
    "./img/imgHomepage/4Home.jpg",
    "./img/imgHomepage/5Home.jpg",
    "./img/imgHomepage/10Home.jpg",
    "./img/imgHomepage/14Home.jpg"
  ];

  return (
    <>
      <section className={style.title} id="title">
        <div
          className={style.mainImage}
          style={{
            backgroundImage: `url(${img[index]})`,
          }}
          alt="webDesign"
          onMouseOver={() => {
            setIndex(1);
          }}
          onClick={() => { setIndex(5) }}
          onDoubleClick={() => { setIndex(6) }}

        >
          <img src="https://zipl.pro/assets/ce6872b3/img/studio.svg" alt="webDesign" />

          <div className={style.boxAnimation}></div>
        </div>
        <div className={style.mainContent} >
          <div
            className={style.itemTitle}
            onMouseOver={() => {
              setIndex(0);
            }}
          >
            <p>DESIGN +              <div className={style.boxAnimation}></div>
            </p>
            <p> DEVELOPMENT             <div className={style.boxAnimation}></div>
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
              DESIGNERS.<div className={style.boxAnimation}></div>
            </p>
            <p>
              EVERY PROJECT IS A CHALLENGE TO DO BETTER THAN ANYTHING WE HAVE
              ALREADY DONE!<div className={style.boxAnimation}></div>
            </p>
          </div>
          <div
            className={style.itemText}
            onMouseOver={() => {
              setIndex(3);
            }}
          >
            <p>16+ <div className={style.boxAnimation}></div></p>
            <p>AWARDS <div className={style.boxAnimation}></div></p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Title;
