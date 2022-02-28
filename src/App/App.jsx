import React from "react";
import { Routes, Route } from "react-router-dom";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
import Homepage from "../components/homepage/Homepage";
import ErrorPage from "../components/ErrorPage/ErroePage";
import "./App.module.css";

function App() {
  const [showMenu, setShowMenu] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
    setOpen(!isOpen);
  };

  const hideMobileMenu = (e) => {
    if (e.target.innerWidth > 1023) {
      setShowMenu(true);
      setOpen(false);
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
              showMenu={showMenu}
              isOpen={isOpen}
              toggleMobileMenu={toggleMobileMenu}
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
