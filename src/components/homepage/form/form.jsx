import style from "./form.module.css";
import "../scrollSpy.css";
import Form from "../../form/Form.jsx";

function MainForm({ hideHeader, showHeader }) {
  return (
    <>
      <section
        className={style.form}
        id="form"
        onMouseOver={hideHeader}
      >
        <div className={style.mainForm}>
          <div className={style.mainBlock}>
            <div className={style.blockTitle}>
              <div>ПРОСТО</div>
              <div>ОТПРАВЬ НАМ</div>
              <div>ВЕСТОЧКУ,</div>
              <div>ЧТО ХОЧЕШЬ</div>
              <div>ПОГОВОРИТЬ</div>
            </div>
            <div className={style.blockFrom}>
              <p>
                ТЫ ПРАВИЛЬНО ПОНЯЛ, СВОИ ДАННЫЕ НУЖНО ВВЕСТИ НИЖЕ
              </p>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainForm;
