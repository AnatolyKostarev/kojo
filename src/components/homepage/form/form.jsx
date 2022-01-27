import style from "./form.module.css";
import "../scrollSpy.css";
import Form from '../../form/Form.jsx';

function MainForm({hideHeader, showHeader}) {

  return (
    <>
      <section className={style.form} id="form" onMouseOver={hideHeader} onMouseOut={showHeader}>
        <div className={style.mainForm}>
          <div className={style.mainBlock}>
            <div className={style.blockTitle}>
              <div>SEND US A</div>
              <div>REQUEST TO
</div>
              <div>CREATE </div>
              <div>UNIQUE </div>
              <div>PROJECT </div>
              <div>FOR YOU
 </div>
            </div>
            {/* <form className={style.blockFrom}> */}
            <div className={style.blockFrom}>
              <p>
              HIRE US NOW - WE'RE HERE TO ASSIST YOU. DROP US A LINE, AND WE'LL GET BACK TO YOU IN A BLINK OF AN EYE.
              </p>
            <Form/>
            </div>
            {/* </form> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default MainForm;
