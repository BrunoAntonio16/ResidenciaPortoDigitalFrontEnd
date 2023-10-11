import logo from '../images/apple-touch-icon.png'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.block}>
                <a href="#">Home</a>
                <img src={logo} alt="SmileSystem" />
                <a href="#">Sobre</a>
            </div>
            <div className={styles.block} >
                <nav className={styles.navbar} >
                    <ul className={styles.list} >
                        <li className={styles.itens} >
                            <a href="#">Listas</a>
                        </li>
                        <li className={styles.itens}>
                            <a href="#">Alocações</a>
                        </li>
                        <li className={styles.itens}>
                            <a href="#">Horaríos</a>
                        </li>
                        <li className={styles.itens}>
                            <a href="#">Presença</a>
                        </li>
                    </ul>
                   
                </nav>
            </div>
        </header>
    )
}

export default Navbar