import style from "./about.module.css";
import "../scrollSpy.css";

function AboutUs({ showHeader }) {
  const aboutUsInfo = [
    { label: "страна", value: "россия" },
    { label: "год", value: "2021" },
    { label: "тип", value: "веб студия" },
    { label: "акцент", value: "уникальность" },
    { label: "цвета", value: "#fff, #000" },
  ];

  const awards = [
    { label: "беханс", value: "6x featured in interaction" },
    { label: "cssдизайнавардс", value: "1x kudos" },
  ];

  return (
    <>
      <section className={style.about} id="about" onMouseOver={showHeader}>
        <div className={style.mainBlock}>
          <div className={style.mainData}>
            <h2>инфо</h2>
            <p>информация про нас</p>
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
            <h2>награды</h2>
            <p>наши достижения</p>
            <div className={style.listData}>
              <div className={style.item}>
                <div className={style.label}>авввардс:</div>
                <div className={style.valueAwards}>
                  <div>8X HONORABLE MENTION</div>
                  <div>1X SITE OF THE DAY</div>
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
