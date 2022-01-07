import Homepage from "../components/homepage/Homepage";
import Works from "../components/works/Works";
import Services from "../components/services_/Services";
import Contacts from "../components/contacts/Contacts";
import "./App.module.css";
import Button from "../components/button/Button";

function App() {
  return (
    <>
      <main>
        <Homepage />
        <Works />
        <Services />
        <Contacts />
        <Button title="hire us" />
      </main>
    </>
  );
}

export default App;
