import logo from '../images/apple-touch-icon.png'

function Navbar() {
    return (
        <header className={styles.navbar} >
            <a href="#">Home</a>
            <img src={logo} alt="SmileSystem" />
            <a href="#">Sobre</a>
            <nav>
                <a href="#">Listas</a>
                <a href="#">Alocações</a>
                <a href="#">Horaríos</a>
                <a href="#">Presença</a>
            </nav>
        </header>
    )
}

export default Navbar