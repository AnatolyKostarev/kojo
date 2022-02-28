import styles from './headerWhite.module.css'

export function HeaderWhite() {
    return (
        <>
            <input id="burger" type="checkbox" className={styles.input}/>

            <label for="burger" className={styles.label}>
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav className={styles.nav}>
                <div style={{ width: '62px', height: '25px' }}>
                    <a href="#">
                        <img src='./img/header/icon-logo.svg' alt="ZIPL" />
                    </a>
                </div>
                <ul>
                <li><a href="#">HOMEPAGE</a></li>
                    <li><a href="#">WORKS</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">CONTACTS</a></li>

                </ul>

            </nav>
         </>   
   
    )
}