import style from "./about.module.css";
import "../scrollSpy.css";

function AboutUs() {
  return (
    <>
      <section className={style.about} id="about">
        <div className={style.mainBlock}>
          <div className={style.mainData}>
            <h2>DATA</h2>
            <p>SOME INFORMATION ABOUT US</p>
            <div className={style.listData}>
              <div className={style.item}>
                <div className={style.label}>COUNTRY:</div>
                <div className={style.value}>UKRAINE</div>
              </div>
              <div className={style.item}>
                <div className={style.label}>YEAR:</div>
                <div className={style.value}>2015</div>
              </div>
              <div className={style.item}>
                <div className={style.label}>TYPE:</div>
                <div className={style.value}>WEB STUDIO</div>
              </div>
              <div className={style.item}>
                <div className={style.label}>EMPHASIS:</div>
                <div className={style.value}>UNIQUENESS</div>
              </div>
              <div className={style.item}>
                <div className={style.label}>FAVORITE COLORS:</div>
                <div className={style.value}>#FFF, #000</div>
              </div>
            </div>
          </div>
          <div className={style.mainAwards}>
            <h2>AWARDS</h2>
            <p>OUR ACHIEVEMENTS</p>
            <div className={style.listData}>
              <div className={style.item}>
                <div className={style.label}>AWWWARDS:</div>
                <div className={style.valueAwards}>
                  <div>8X HONORABLE MENTION</div>
                  <div>1X SITE OF THE DAY</div>
                </div>
              </div>
              <div className={style.item}>
                <div className={style.label}>BEHANCE:</div>
                <div className={style.value}>6X FEATURED IN INTERACTION</div>
              </div>
              <div className={style.item}>
                <div className={style.label}>CSSDESIGNAWARDS:</div>
                <div className={style.value}>1X KUDOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
