import style from "./footer.module.css";
import "../scrollSpy.css";
import Footerworks from "../../../layouts/footer/works/Footerworks";
import FooterHomepage from "./footerHomepage/footerHomepage";
function Footer({ showHeader, hideHeader }) {
  return (
    <>
      {/* <footer className={style.footer} id="footerHomepage" onMouseOver={hideHeader}
        onMouseOut={showHeader}>
        <div>
          SOCIAL: / <a>ВКОНАКТЕ</a> / <a>FACEBOOK</a> / <a>INSTAGRAM</a>
        </div>
        <div>
          <nav className={style.scrollSpy}>
            <a href="#title" id="title_btn"></a>

            <a href="#about" id="about_btn"></a>

            <a href="#form" id="form_btn"></a>
            <span id="indicator"></span>
          </nav>
        </div>
        <div>2022 © СТУДИЯ KOJO</div>
      </footer> */}
      {/* <Footerworks/> */}
      <FooterHomepage />
    </>
  );
}
export default Footer;
        {/* for indicator */}

{/* <div>
  <nav className={style.scrollSpy}>
    <a href="#title" id="title_btn"></a>

    <a href="#about" id="about_btn"></a>

    <a href="#form" id="form_btn"></a>
    <span id="indicator"></span>
  </nav>
</div> */}
