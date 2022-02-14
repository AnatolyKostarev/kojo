import React from "react";
import Headerservice from "../../layouts/header/services_/Headerservice";
import Navigation from "../navigation/Navigation";
import styles from "./Services.module.css";

export default function Services() {
  const [hide, setHide] = React.useState(true);

  const hideContent = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide && <Headerservice title="Услуги" />}
      {hide && (
        <main>
          <section className={styles.service}>
            <div className={styles.container}></div>
          </section>
        </main>
      )}
      <Navigation hideContent={hideContent} />
    </>
  );
}
