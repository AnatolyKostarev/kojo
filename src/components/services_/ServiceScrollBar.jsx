import React from "react";
import "./ServiceScrollBar.css";

export const ServiceScrollBar = () => {
  return (
    <div className="service__scroll_bar">
      <div className="service__scroll_link">
        {/* <a href="#service"> */}
        <span className="service__scroll_span"></span>
        {/* </a> */}
        {/* <a href="#service__rule"> */}
        <span className="service__scroll_span"></span>
        {/* </a> */}
        {/* <a href="#service">
          <span className="service__scroll_span"></span>
        </a> */}
        <span id="indicator"></span>
      </div>
    </div>
  );
};
