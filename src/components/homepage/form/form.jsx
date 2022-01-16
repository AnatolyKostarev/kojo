import style from "./form.module.css";
import "../scrollSpy.css";

function MainForm() {
  return (
    <>
      <section className={style.form} id="form">
        <div className={style.mainForm}>
          <div className={style.mainBlock}>
            <div className={style.blockTitle}>
              <div>Send us a </div>
              <div>request to </div>
              <div>create </div>
              <div>unique </div>
              <div>project </div>
              <div>for you </div>
            </div>
            <form className={style.blockFrom}>
              <p>
                HIRE US NOW - WE'RE HERE TO ASSIST YOU. DROP US A LINE, AND
                WE'LL GET BACK TO YOU IN A BLINK OF AN EYE.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainForm;
