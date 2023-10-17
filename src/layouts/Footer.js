import styles from './Footer.module.css'
import logo from '../images/apple-touch-icon.png'

function Footer() {
    return (
        <footer className={styles.footerConteiner} >
            <div className={styles.socialIcons}>
                <a href='#'><i className="fa-brands fa-facebook"></i></a>
                <a href='#'><i className="fa-brands fa-instagram"></i></a>
                <a href='#'><i className="fa-brands fa-twitter"></i></a>
                <a href='#'><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className={styles.footerBottom} >
                <img className={styles.logo} src={logo} alt="SmileSystem" />
                <p>&copy; 2023 SmileSystem</p>
            </div>
        </footer>
    )
}

export default Footer