import React from "react";
import Headerworks from "../../layouts/header/works/Headerworks";
import Footerworks from "../../layouts/footer/works/Footerworks";
import Navigation from "../navigation/Navigation";
import Worksitem from "./Worksitem";
import { Worksitemresponsive } from "./Worksitemresponsive";
import NavigationMobile from "../navigation/NavigationMobile";
import { worksItem } from "../../store";
import styles from "./Works.module.css";

export default function Works({ showMenu, isOpen, toggleMobileMenu }) {
  const [offSetY, setOffSetY] = React.useState(0);
  const [hide, setHide] = React.useState(true);

  const handleScroll = () => setOffSetY(window.scrollY);

  const hideContent = () => {
    setHide(!hide);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {hide && (
        <Headerworks
          title="Работы"
          toggleMobileMenu={toggleMobileMenu}
          isOpen={isOpen}
          showMenu={showMenu}
        />
      )}

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
              <Worksitemresponsive elem={worksItem} showMenu={showMenu} />
              {!showMenu && (
                <NavigationMobile toggleMobileMenu={toggleMobileMenu} />
              )}
            </div>
          </section>
        </main>
      )}
      <Navigation hideContent={hideContent} />
      {hide && showMenu && <Footerworks offSetY={offSetY} />}
    </>
  );
}
