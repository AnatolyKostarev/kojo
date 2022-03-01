import { useState } from 'react';
import styles from './HomePageMobile.module.css';

import Headercontacts from '../../layouts/header/contacts/Headercontacts'
import NavigationMobile from '../../components/navigation/NavigationMobile'
import Navigation from '../../components/navigation/Navigation';
import Footerworks from '../../layouts/footer/works/Footerworks'
import Form from '../form/Form';

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
        <main>
          <section className={styles.title}>
            <div className={styles.title_img}>
              <img src="https://zipl.pro/assets/ce6872b3/img/studio.svg " alt="label" />
            </div>
            <div className={styles.title_description}>
              <div className={styles.main_title}>
                <div>Разработка +</div>
                <div>польза и ценность </div>
              </div>
              <div className={styles.btn}>
                <a href="# ">
                  <button>HIRE US</button>
                </a>
              </div>
              <div className={styles.description_prg}>
                <p>
                  KOJO — МЫ КОНЦЕНТРИРУЕМСЯ НА РЕШЕНИИ РЕАЛЬНЫХ ПРОБЛЕМ ЗАКАЗЧИКА
                  И ЕГО КЛИЕНТОВ. </p>
                <p>
                  КАЖДОЕ НАШЕ РЕШЕНИЕ ДОЛЖНО ПРИНОСИТЬ БОЛЬШЕ,
                  ЧЕМ ВЫ ЗАТРАТИЛИ НА ЕГО РАЗРАБОТКУ </p>
              </div>
              <div className={styles.title_awards}>
                <span>16+</span>
                <span>AWARDS</span>

              </div>
            </div>
          </section>
          <section className={styles.about} >
            <div className={styles.content}>
              <div className={styles.data}>
                <div className={styles.block_title}>
                  <h3>кто мы</h3>
                  <p>
                    общая информация
                  </p>
                </div>
                <div className={styles.block_content}>
                  <div className={styles.line}>
                    <span>

                      СТРАНА:


                    </span> <span className={styles.bold + " " + styles.text_bld}>

                      РОССИЯ
                    </span>
                  </div>
                  <div className={styles.line}>
                    <span> ГОД:
                    </span> <span className={styles.bold + " " + styles.text_bld}>
                      2022
                    </span>

                  </div>
                  <div className={styles.line}>
                    <span>ТИП:</span> <span className={styles.bold + " " + styles.text_bld}>


                      ВЕБ СТУДИЯ
                    </span>

                  </div>
                  <div className={styles.line}>
                    <span>АКЦЕНТ:</span> <span className={styles.bold + " " + styles.text_bld} >НА ВАЖНОМ</span>
                  </div>
                  <div className={styles.line}>
                    <span>ЦВЕТА:</span> <span className={styles.bold + " " + styles.text_bld}>#FFF, #000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.awards}>
              <div className={styles.block_title}>
                <h3>принципы</h3>
                <p>нашей работы
                </p>
              </div>
              <div className={styles.block_content}>
                <div className={styles.lists}>
                  <div className={styles.list_title}>первый:</div>
                  <p className={styles.text_bld}>
                    Помогаем клиенту сформулировать задачу так,
                    как знаем насколько сложно это сделать, когда
                    не сталкиваешься с этим каждый день
                  </p>
                </div>
                <div className={styles.lists}>
                  <div className={styles.list_title}>второй:</div>
                  <p className={styles.text_bld}>
                    ВНИКАЕМ В СУТЬ, ПО-ДРУГОМУ НЕИНТЕРЕСНО
                  </p>
                </div>
                <div className={styles.lists}>
                  <div className={styles.list_title}>ТРЕТИЙ:</div>
                  <p className={styles.text_bld}>
                    ВСЕ ЗАДАЧИ ДЕЛАЕМ ИЗМЕРИМЫМИ И ПОНЯТНЫМИ
                  </p>
                </div>
                <div className={styles.lists}>
                  <div className={styles.list_title}>ЧЕТВЁРТЫЙ:</div>
                  <p className={styles.text_bld}>ОСТАЁМСЯ ЛЮДЬМИ</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.blockForm}>
          <p>Заполните поля ниже и мы свяжемся с вами как можно быстрее.</p>
          <p>Кто-то из нашей команды работает даже на выходных. Пишите нам в любое время.</p>
            <Form />
          </section>
        </main >

        {!showMenu && <NavigationMobile toggleMobileMenu={toggleMobileMenu} />}
        <Navigation hideContent={hideContent} />
        {showMenu && (
          <div className={styles.footer}>
            <Footerworks />
          </div>
        )}
      </div>
    </>
  )
}