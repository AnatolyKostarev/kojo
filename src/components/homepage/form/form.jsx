import Form from "../../form/Form.jsx";
import style from "./form.module.css";
import "../scrollSpy.css";

function MainForm({ hideHeader }) {
  return (
    <>
      <section className={style.form} id="form" onMouseOver={hideHeader}>
        <div className={style.mainForm}>
          <div className={style.mainBlock}>
            <div className={style.blockTitle}>
              <p>хочешь</p>
              <p>обсудить</p>
              <p>проект?</p>
              <p>просто</p>
              <p>напиши нам</p>
            </div>
            <div className={style.blockFrom}>
              <p>ты правильно понял. свои данные нужно ввести ниже</p>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainForm;
