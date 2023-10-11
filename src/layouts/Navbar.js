import logo from '../images/apple-touch-icon.png'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.navbar} >
            <div className={styles.navone}>
                <a href="#">Home</a>
                <img src={logo} alt="SmileSystem" />
                <a href="#">Sobre</a>
            </div>
            <div className={styles.navtwo} >
                <nav>
                    <a href="#">Listas</a>
                    <a href="#">Alocações</a>
                    <a href="#">Horaríos</a>
                    <a href="#">Presença</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar