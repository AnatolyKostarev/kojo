import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Services.module.css";

export default function Services() {
  const [hide, setHide] = React.useState(true);

  const hideContent = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide && (
        <main>
          <section className={styles.service}>
            <div className={styles.container}>
              <h1 className={styles.title}>
                service page is under the construction
              </h1>
            </div>
          </section>
        </main>
      )}
      <Navigation hideContent={hideContent} />
    </>
  );
}
