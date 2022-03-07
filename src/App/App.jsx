import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Personal from "../components/personalData/Personal";
import { Helmet } from "react-helmet";
import "./App.module.css";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);
  const [btnColor, setBtnColor] = React.useState(false);
  const [isWebContent, setWebContent] = React.useState({ display: "block" });
  const [isRuleContent, setRuleContent] = React.useState({ display: "block" });

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    setOpen(!isOpen);
    setBtnColor(false);
    setWebContent({ display: "block" });
  };

  const changeWebBtn = () => {
    setBtnColor(false);
    setWebContent({ display: "block" });
    setRuleContent({ display: "none" });
  };

  const changeRuleBtn = () => {
    setBtnColor(true);
    setWebContent({ display: "none" });
    setRuleContent({ display: "block" });
  };

  const hideMobileMenu = (e) => {
    if (e.target.innerWidth > 1023) {
      setShowMenu(true);
      setOpen(false);
      setWebContent({ display: "block" });
      setRuleContent({ display: "block" });
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", hideMobileMenu);
    return () => window.removeEventListener("resize", hideMobileMenu);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          KOJO ONE | Веб-студия, создания сайтов под ключ: находим оптимальное
          решение вашей проблемы
        </title>
        <meta
          name="description"
          content="Разработка адаптивных сайтов с современным дизайном в Санкт-Петербурге. Спб. Лендинг, промо сайт, брэндовый, корпоративный сайт, интернет-магазин с высокой конверсией"
        />
        <meta
          name="keywords"
          content="студия веб разработки, разработка сайтов, web, нанять разработчика, услуги программиста, gatsby react сайт, сайт на реакте, адаптивный дизайн"
        />
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              showMenu={showMenu}
              isOpen={isOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          }
        />
        <Route
          path="works"
          element={
            <Works
              showMenu={showMenu}
              isOpen={isOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          }
        />
        <Route
          path="services"
          element={
            <Services
              showMenu={showMenu}
              isOpen={isOpen}
              btnColor={btnColor}
              isWebContent={isWebContent}
              isRuleContent={isRuleContent}
              toggleMobileMenu={toggleMobileMenu}
              changeWebBtn={changeWebBtn}
              changeRuleBtn={changeRuleBtn}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <Contacts
              showMenu={showMenu}
              isOpen={isOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          }
        />
        <Route path="personal" element={<Personal />} />
        <Route
          path="*"
          element={
            <ErrorPage
              showMenu={showMenu}
              isOpen={isOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
