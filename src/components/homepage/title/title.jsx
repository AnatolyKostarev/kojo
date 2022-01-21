import React from "react";
import style from "./title.module.css";
import "../scrollSpy.css";
// import style from '../footer/footer.module.css'



function Title() {
  let [index, setIndex] = React.useState(0);

  const img = ['https://zipl.pro/assets/ce6872b3/img/mainBg/18.jpg', 'https://zipl.pro/assets/ce6872b3/img/mainBg/5.jpg', 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg', 'https://klike.net/uploads/posts/2021-01/1611131113_2.jpg', 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg']

  return (
    <>
      <section className={style.title} id="title"  >
        <div className={style.mainImage} style={{
          backgroundImage: `url(${img[index]})`
        }}
          alt="" onMouseOver={()=>{setIndex(1)}}>
          <img src="https://zipl.pro/assets/ce6872b3/img/studio.svg" />


          <div className={style.boxAnimation}></div>
        </div>
        <div className={style.mainContent}>
          <div className={style.itemTitle} onMouseOver={()=>{setIndex(0)}}>
            <p>DESIGN + </p>
            <p> DEVELOPMENT</p>
          </div>
          <div className={style.itemParagph} onMouseOver={()=>{setIndex(2)}} >
            <p>
              ZIPL STUDIO IS A HIGH-QUALIFIED TEAM OF TALENTED DEVELOPERS AND
              DESIGNERS.
            </p>
            <p>
              EVERY PROJECT IS A CHALLENGE TO DO BETTER THAN ANYTHING WE HAVE
              ALREADY DONE!
            </p>
          </div>
          <div className={style.itemText} onMouseOver={()=>{setIndex(3)}} >
            <p>16+ </p>
            <p>AWARDS</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Title;
