import React from "react";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";
import "./index.css";

const APP = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
