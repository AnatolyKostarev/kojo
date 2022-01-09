import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../components/homepage/Homepage";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
import Footer from "../layouts/footer/Footer";
import "./App.module.css";
import Button from "../components/button/Button";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="works" element={<Works />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <Button title="Заказать" />
      <br />
      <Button title="Отправить" />
    </>
  );
}

export default App;
