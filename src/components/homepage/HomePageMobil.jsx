import { useEffect, useState } from 'react';
import styles from './HomePageMobile.module.css';

export default function HomePageMobile() {

    let [color, setColor] = useState(true);
    // 
    const whiteHeader = <div className={styles.headerWhite}>
        <div className={styles.logo}>
            <a href="#">
                <img src='./img/header/icon-logo-white.svg' alt="ZIPL" />
            </a>
        </div>

        <div className={styles.menu}>
            <span id={styles.first}></span>
            <span id={styles.two}></span>
            <span id={styles.three}></span>
        </div>
    </div>;
    // 
    const transparentHeader = <div className={styles.header}>
        <div className={styles.logo}>
            <a href="#">
                <img src='./img/header/icon-logo.svg' alt="ZIPL" />
            </a>
        </div>

        <div className={styles.menu}>
            <span id={styles.first}></span>
            <span id={styles.two}></span>
            <span id={styles.three}></span>
        </div>
    </div>
  
    const handleHeader = () => { if (window.scrollY > 100) { setColor(false) } else { setColor(true) } };

    useEffect(() => {
        window.addEventListener("scroll", handleHeader);
        return () => window.removeEventListener("scroll", handleHeader);
    }, []);


    return (
        <>
            <header className={styles.headerMobile}>
                {color ? whiteHeader : transparentHeader}
            </header>
            <main>
                <section className={styles.title}>
                    <div className={styles.title_img}>
                        <img src="https://zipl.pro/assets/ce6872b3/img/studio.svg " alt="label" />
                    </div>
                    <div className={styles.title_description}>
                        <div className={styles.main_title}>
                            <div>DESIGN+</div>
                            <div>DEVELOPMENT</div>
                        </div>
                        <div className={styles.btn}>
                            <a href="# ">
                                <button>HIRE US</button>
                            </a>
                        </div>
                        <div className={styles.description_prg}>
                            <p>
                                ZIPL STUDIO is a high-qualified team of Talented developers and designers. </p>
                            <p>
                                Every project is a challenge to do better than anything we have already done! </p>
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
                                <h3>DATA</h3>
                                <p>
                                    Some information about us
                                </p>
                            </div>
                            <div className={styles.block_content}>
                                <div className={styles.line}>
                                    <span>

                                        COUNTRY:

                                    </span> <span className={styles.bold + " " + styles.text_bld}>

                                        Ukraine
                                    </span>
                                </div>
                                <div className={styles.line}>
                                    <span> YEAR:
                                    </span> <span className={styles.bold + " " + styles.text_bld}>
                                        2015
                                    </span>

                                </div>
                                <div className={styles.line}>
                                    <span>TYPE:</span> <span className={styles.bold + " " + styles.text_bld}>

                                        WEB STUDIO
                                    </span>

                                </div>
                                <div className={styles.line}>
                                    <span>EMPHASIS:</span> <span className={styles.bold + " " + styles.text_bld} >UNIQUENESS</span>

                                </div>
                                <div className={styles.line}>
                                    <span>FAVORITE COLORS:</span> <span className={styles.bold + " " + styles.text_bld}>#FFF, #000</span>

                                </div>


                            </div>


                        </div>
                    </div>
                    <div className={styles.awards}>
                        <div className={styles.block_title}>
                            <h3>AWARDS</h3>
                            <p>our achiievements
                            </p>
                        </div>
                        <div className={styles.block_content}>
                            <div className={styles.lists}>
                                <div className={styles.list_title}>AWWWARDS:</div>
                                <p className={styles.text_bld}>
                                    1X SITE OF THE DAY
                                </p>

                            </div>
                            <div className={styles.lists}>

                                <p className={styles.text_bld}>
                                    8X HONORABLE MENTION
                                </p>
                            </div>
                            <div className={styles.lists}>
                                <div className={styles.list_title}>BEHANCE:</div>
                                <p className={styles.text_bld}>
                                    6X FEATURED IN INTERACTION
                                </p>
                            </div>
                            <div className={styles.lists}>
                                <div className={styles.list_title}>CSSDESIGNAWARDS:</div>
                                <p className={styles.text_bld}>1X KUDOS</p>
                            </div>


                        </div>


                    </div>



                </section>
                <section className={styles.form}>
                    <marquee>place for form</marquee>
                </section>
            </main >
        </>
    )
}