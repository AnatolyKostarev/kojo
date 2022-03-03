import { useState } from "react";
import styles from "./HomePageMobile.module.css";
import Headercontacts from "../../layouts/header/contacts/Headercontacts";
import NavigationMobile from "../../components/navigation/NavigationMobile";
import Navigation from "../../components/navigation/Navigation";
import Footerworks from "../../layouts/footer/works/Footerworks";
import Form from "../form/Form";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

export default function HomePageMobile({ showMenu, isOpen, toggleMobileMenu }) {
  const [hide, setHide] = useState(true);

  const hideContent = () => {
    setHide(!hide);
  };
  return (
    <>
      <div className={styles.mobileBlock}>
        {hide && (
          <Headercontacts toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
        )}
        {showMenu && (
          <main>
            <section className={styles.title}>
              <div className={styles.title_img}>
                <img
                  src="https://zipl.pro/assets/ce6872b3/img/studio.svg "
                  alt="logo-icon"
                />
              </div>
              <div className={styles.title_description}>
                <div className={styles.main_title}>
                  <h4>Разработка +</h4>
                  <h4>польза и ценность </h4>
                </div>
                <div className={styles.btn}>
                  <NavLink to="/contacts">
                    <Button title="заказать" />
                  </NavLink>
                </div>
                <div className={styles.description_prg}>
                  <p>
                    KOJO — МЫ КОНЦЕНТРИРУЕМСЯ НА РЕШЕНИИ РЕАЛЬНЫХ ПРОБЛЕМ
                    ЗАКАЗЧИКА И ЕГО КЛИЕНТОВ.
                  </p>
                  <p>
                    КАЖДОЕ НАШЕ РЕШЕНИЕ ДОЛЖНО ПРИНОСИТЬ БОЛЬШЕ, ЧЕМ ВЫ
                    ЗАТРАТИЛИ НА ЕГО РАЗРАБОТКУ
                  </p>
                </div>
              </div>
            </section>
            <section className={styles.about}>
              <div className={styles.content}>
                <div className={styles.data}>
                  <div className={styles.block_title}>
                    <h4>кто мы</h4>
                    <p>общая информация</p>
                  </div>
                  <div className={styles.block_content}>
                    <div className={styles.line}>
                      <span>СТРАНА:</span>
                      <span className={styles.bold + " " + styles.text_bld}>
                        РОССИЯ
                      </span>
                    </div>
                    <div className={styles.line}>
                      <span> ГОД:</span>
                      <span className={styles.bold + " " + styles.text_bld}>
                        2022
                      </span>
                    </div>
                    <div className={styles.line}>
                      <span>ТИП:</span>
                      <span className={styles.bold + " " + styles.text_bld}>
                        ВЕБ СТУДИЯ
                      </span>
                    </div>
                    <div className={styles.line}>
                      <span>АКЦЕНТ:</span>
                      <span className={styles.bold + " " + styles.text_bld}>
                        НА ВАЖНОМ
                      </span>
                    </div>
                    <div className={styles.line}>
                      <span>ЦВЕТА:</span>
                      <span className={styles.bold + " " + styles.text_bld}>
                        #FFF, #000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.awards}>
                <div className={styles.block_title}>
                  <h4>принципы</h4>
                  <p>нашей работы</p>
                </div>
                <div className={styles.block_content}>
                  <div className={styles.lists}>
                    <p className={styles.list_title}>первый:</p>
                    <p className={styles.text_bld}>
                      Помогаем клиенту сформулировать задачу так, как знаем
                      насколько сложно это сделать, когда не сталкиваешься с
                      этим каждый день
                    </p>
                  </div>
                  <div className={styles.lists}>
                    <p className={styles.list_title}>второй:</p>
                    <p className={styles.text_bld}>
                      ВНИКАЕМ В СУТЬ, ПО-ДРУГОМУ НЕИНТЕРЕСНО
                    </p>
                  </div>
                  <div className={styles.lists}>
                    <p className={styles.list_title}>третий:</p>
                    <p className={styles.text_bld}>
                      ВСЕ ЗАДАЧИ ДЕЛАЕМ ИЗМЕРИМЫМИ И ПОНЯТНЫМИ
                    </p>
                  </div>
                  <div className={styles.lists}>
                    <p className={styles.list_title}>четвертый:</p>

                    <p className={styles.text_bld}>ОСТАЁМСЯ ЛЮДЬМИ</p>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.blockForm}>
              <p>Заполните поля ниже и мы свяжемся с вами как можно быстрее.</p>
              <p>
                Кто-то из нашей команды работает даже на выходных. Пишите нам в
                любое время.
              </p>
              <Form />
            </section>
          </main>
        )}

        {!showMenu && <NavigationMobile toggleMobileMenu={toggleMobileMenu} />}
        <Navigation hideContent={hideContent} />
        {showMenu && (
          <div className={styles.footer}>
            <Footerworks />
          </div>
        )}
      </div>
    </>
  );
}
