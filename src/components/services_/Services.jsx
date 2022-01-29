import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <>
      <Navigation />
      <section className={styles.service}>
        <div className={styles.container}>
          <h1 className={styles.title}>SERVICES</h1>
        </div>
      </section>
    </>
  );
}
