import React from "react";

export const ServiceScrollBar = ({ isTitle }) => {
  return (
    <div className="service__scroll_bar">
      <div className="service__scroll_link">
        <span
          className="service__scroll_span"
          style={
            isTitle
              ? {
                  background: "#fff",
                  transition: "0.3s linear",
                  transform: "rotate(-180deg)",
                }
              : {
                  background: "#1f1f1f",
                  transition: "0.3s linear",
                  transform: "rotate(-360deg)",
                }
          }
        ></span>
        <span
          className="service__scroll_span"
          style={
            isTitle
              ? {
                  background: "#1f1f1f",
                  transition: "0.3s linear",
                  transform: "rotate(-180deg)",
                }
              : {
                  background: "#fff",
                  transition: "0.3s linear",
                  transform: "rotate(-360deg)",
                }
          }
        ></span>
      </div>
    </div>
  );
};
