import React from "react";
import Headerworks from "../../layouts/header/works/Headerworks";
import Footerworks from "../../layouts/footer/works/Footerworks";
import Navigation from "../navigation/Navigation";
import styles from "./Works.module.css";
import Worksitem from "./Worksitem";
import { worksItem } from "../../store";

export default function Works() {
  const [offSetY, setOffSetY] = React.useState(0);
  const [hide, setHide] = React.useState(true);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  const hideContent = () => {
    setHide(!hide);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {hide && <Headerworks title="Работы" />}
      {hide && (
        <main>
          <section className={styles.works}>
            <div className={styles.container}>
              <div className={styles.works__list}>
                {worksItem.map((elem, index, arr) => (
                  <Worksitem
                    {...elem}
                    key={index}
                    counter={`${elem.counter} ${Math.abs(
                      (index -= arr.length)
                    )}`}
                    offSetY={offSetY}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      <Navigation hideContent={hideContent} />

      {hide && <Footerworks offSetY={offSetY} />}
    </>
  );
}
