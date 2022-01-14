import style from "./footer.module.css";
import "../scrollSpy.css";
function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div>
          SOCIAL: / <a>BEHANCE</a> / <a>FACEBOOK</a> / <a>INSTAGRAM</a>
        </div>
        <div>
          <nav className={style.scrollSpy}>
            <a href="#title" id="title_btn"></a>

            <a href="#about" id="about_btn"></a>

            <a href="#form" id="form_btn"></a>
            <span id="indicator"></span>
          </nav>
        </div>
        <div>2022 © "ZIPL" STUDIO</div>
      </footer>
    </>
  );
}
export default Footer;
