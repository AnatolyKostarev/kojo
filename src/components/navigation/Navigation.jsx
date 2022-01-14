import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/works">Работы</Link>
          </li>
          <Link to="/services">
            <li>Услуги</li>
          </Link>
          <Link to="/contacts">
            <li>Контакты</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
