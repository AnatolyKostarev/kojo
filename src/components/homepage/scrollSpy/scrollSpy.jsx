import "../scrollSpy.css";

export default function ScrollSpy() {
  return (
    <div className="blockSpy">
      <nav className="scrollSpy">
        <a href="#title" id="title_btn">
          <span></span>
        </a>
        <a href="#about" id="about_btn">
          <span></span>
        </a>
        <a href="#form" id="form_btn">
          <span></span>
        </a>
        <span id="indicator"></span>
      </nav>
    </div>
  );
}
