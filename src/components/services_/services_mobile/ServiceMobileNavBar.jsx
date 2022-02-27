import React from "react";
import "./ServiceMobileNavBar.css";

const ServiceMobileNavBar = ({ isTitle, btnColor, webButton, rulesButton }) => {
  const blackBtn = {
    background: "#000",
    color: "#fff",
  };

  const whiteBtn = {
    background: "#fff",
    color: "#000",
  };

  return (
    <div className="service__mobile_nav">
      <ul>
        <li
          onClick={webButton}
          style={!btnColor && !isTitle ? blackBtn : whiteBtn}
        >
          <a
            style={!btnColor && !isTitle ? blackBtn : whiteBtn}
            href="#service"
          >
            веб
          </a>
        </li>
        <li
          onClick={rulesButton}
          style={!btnColor && !isTitle ? whiteBtn : blackBtn}
        >
          <a
            style={!btnColor && !isTitle ? whiteBtn : blackBtn}
            href="#service__rule"
          >
            правила
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ServiceMobileNavBar;
