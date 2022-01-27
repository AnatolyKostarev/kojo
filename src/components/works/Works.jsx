import React from "react";
import Headerworks from "../../layouts/header/works/Headerworks";
import Footerworks from "../../layouts/footer/works/Footerworks";
import Navigation from "../navigation/Navigation";
import styles from "./Works.module.css";
import Worksitem from "./Worksitem";

export default function Works() {
  const worksItem = [
    {
      imagePosition: "left",
      buttonPosition: "right",
      actionPosition: "right",
      title: "ods",
      counter: "наша гордость #",
      desc: "сайт международного аэропорта одесса",
      action: "дизайн & код",
      href: "https://odesa.aero/",
      src: "/img/works/image_works-1.jpg",
      width: "840",
      height: "830",
      alt: "airport Odesa",
    },
    {
      imagePosition: "right",
      buttonPosition: "left",
      actionPosition: "left",
      title: "curo",
      counter: "наша гордость #",
      desc: "создание 3-d графики",
      action: "дизайн & код",
      href: "https://www.behance.net/gallery/89797887/CURO",
      src: "/img/works/image_works-2.jpg",
      width: "720",
      height: "720",
      alt: "curo",
    },
    {
      imagePosition: "left",
      buttonPosition: "right",
      actionPosition: "right",
      title: "infralytiks",
      counter: "наша гордость #",
      desc: "сайт аналитической компании",
      action: "дизайн",
      href: "https://www.behance.net/gallery/80582829/InfraLytiks",
      src: "/img/works/image_works-3.jpg",
      width: "840",
      height: "830",
      alt: "infralytiks",
    },
    {
      imagePosition: "right",
      buttonPosition: "left",
      actionPosition: "left",
      title: "летундра. приложение",
      counter: "наша гордость #",
      desc: "планировщик полетов",
      action: "UI/UX",
      href: "https://www.behance.net/gallery/65252599/Letundra-App-UIUX",
      src: "/img/works/image_works-4.jpg",
      width: "720",
      height: "720",
      alt: "letundra",
    },
    {
      imagePosition: "left",
      buttonPosition: "right",
      actionPosition: "right",
      title: "icv шаблоны",
      counter: "наша гордость #",
      desc: "онлайн магазин шаблонов резюме",
      action: "дизайн & код",
      href: "https://icvtemplates.com/",
      src: "/img/works/image_works-5.png",
      width: "840",
      height: "830",
      alt: "icv",
    },
    {
      imagePosition: "right",
      buttonPosition: "left",
      actionPosition: "left",
      title: "franklead",
      counter: "наша гордость #",
      desc: "сайт электронной музыки",
      action: "дизайн & код",
      href: "http://franklead.com/",
      src: "/img/works/image_works-6.jpg",
      width: "720",
      height: "720",
      alt: "franklead",
    },
    {
      imagePosition: "left",
      buttonPosition: "right",
      actionPosition: "right",
      title: "letusbuy ибица",
      counter: "наша гордость #",
      desc: "сайт агентства недвижимости на ибице",
      action: "дизайн & код",
      href: "https://www.behance.net/gallery/65436315/LetUsBuy",
      src: "/img/works/image_works-7.png",
      width: "840",
      height: "830",
      alt: "letusbuy",
    },
  ];

  const [offSetY, setOffSetY] = React.useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Headerworks title="Работы" />

      <main>
        <Navigation />
        <section className={styles.works}>
          <div className={styles.container}>
            <div className={styles.works__list}>
              {worksItem.map((elem, index, arr) => (
                <Worksitem
                  {...elem}
                  offSetY={offSetY}
                  key={index}
                  counter={`${elem.counter} ${Math.abs((index -= arr.length))}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footerworks offSetY={offSetY} />
    </>
  );
}
