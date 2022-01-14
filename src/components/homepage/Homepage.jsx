import React from "react";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.container}>
          <h1 className={styles.title}>HOMEPAGE</h1>
          <h2>Hello MAX!!!!</h2>
        </div>
      </section>
    </>
  );
}
