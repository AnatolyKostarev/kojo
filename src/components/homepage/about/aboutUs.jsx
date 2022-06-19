import style from "./about.module.css";
import { aboutUsInfo, awards } from "../../../store";
import "../scrollSpy.css";

function AboutUs({ showHeader }) {
  return (
    <>
      <section className={style.about} id="about" onMouseOver={showHeader}>
        <div className={style.mainBlock}>
          <div className={style.mainData}>
            <h2>кто мы</h2>
            <p>общая информация</p>
            <div className={style.listData}>
              {aboutUsInfo.map((elem, index) => (
                <div className={style.item} key={index}>
                  <div className={style.label}>{elem.label}:</div>
                  <div className={style.value}>{elem.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.mainAwards}>
            <h2>принципы</h2>
            <p>нашей работы</p>
            <div className={style.listData}>
              <div className={style.item}>
                <div className={style.label}>первый:</div>
                <div className={style.valueAwards}>
                  <p>
                    Помогаем клиенту сформулировать задачу. Потому что понимаем
                    — это сложно, когда не сталкиваешься с разработкой каждый
                    день.
                  </p>
                </div>
              </div>
              {awards.map((elem, index) => (
                <div className={style.item} key={index}>
                  <div className={style.label}>{elem.label}:</div>
                  <div className={style.value}>{elem.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutUs;
