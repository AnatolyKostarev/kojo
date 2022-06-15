import React from "react";
import "./ServiceMobileNavBar.css";

const ServiceMobileNavBar = ({ btnColor, webButton, rulesButton }) => {
  const blackBtn = {
    background: "#1f1f1f",
    color: "#fff",
  };

  const whiteBtn = {
    background: "#fff",
    color: "#1f1f1f",
  };

  return (
    <div className="service__mobile_nav">
      <ul>
        <li onClick={webButton} style={!btnColor ? blackBtn : whiteBtn}>
          <span>веб</span>
        </li>
        <li onClick={rulesButton} style={!btnColor ? whiteBtn : blackBtn}>
          <span>правила</span>
        </li>
      </ul>
    </div>
  );
};

export default ServiceMobileNavBar;
