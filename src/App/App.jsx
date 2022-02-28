import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
// import Homepage from "../components/homepage/Homepage";
import ErrorPage from "../components/ErrorPage/ErroePage";
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
      // setTitle(0);
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
      <Routes>
        <Route path="/" element={<Homepage />} />
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
              // hide={hide}
              // isTitle={isTitle}
              showMenu={showMenu}
              isOpen={isOpen}
              btnColor={btnColor}
              isWebContent={isWebContent}
              isRuleContent={isRuleContent}
              // hideContent={hideContent}
              // toggleWheel={toggleWheel}
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
