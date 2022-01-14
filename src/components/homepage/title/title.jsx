import React from "react";
import style from "./title.module.css";
import "../scrollSpy.css";
// import style from '../footer/footer.module.css'

function Title() {
  // let [image, setImage] = React.useState();
  return (
    <>
      <section className={style.title} id="title">
        <div className={style.mainImage}>
          <img src="https://zipl.pro/assets/ce6872b3/img/studio.svg" />
        </div>
        <div className={style.mainContent}>
          <div className={style.itemTitle}>
            <p>DESIGN + </p>
            <p> DEVELOPMENT</p>
          </div>
          <div className={style.itemParagph}>
            <p>
              ZIPL STUDIO IS A HIGH-QUALIFIED TEAM OF TALENTED DEVELOPERS AND
              DESIGNERS.
            </p>
            <p>
              EVERY PROJECT IS A CHALLENGE TO DO BETTER THAN ANYTHING WE HAVE
              ALREADY DONE!
            </p>
          </div>
          <div className={style.itemText}>
            <p>16+ </p>
            <p>AWARDS</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Title;
