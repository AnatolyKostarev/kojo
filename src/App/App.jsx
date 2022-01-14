import Homepage from "../components/homepage/Homepage";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
import Footer from "../layouts/footer/Footer";
import "./App.module.css";

function App() {
  return (
    <>
      <main>
        <Homepage />
        <Works />
        <Services />
        <Contacts />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
