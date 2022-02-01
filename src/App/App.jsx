import React from "react";
import { Routes, Route } from "react-router-dom";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
import Homepage from "../components/homepage/Homepage";
import "./App.module.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="works" element={<Works />} />
        <Route path="services" element={<Services />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
