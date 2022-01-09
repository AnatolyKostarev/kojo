import React from "react";
import Headerworks from "../../layouts/header/works/Headerworks";
import Footerworks from "../../layouts/footer/works/Footerworks";

import styles from "./Works.module.css";

export default function Works({ title }) {
  return (
    <>
      <Headerworks title="Работы" />
      <section className={styles.works}>
        <div className={styles.container}></div>
      </section>
      <Footerworks />
    </>
  );
}
