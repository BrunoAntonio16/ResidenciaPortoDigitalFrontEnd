import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footerConteiner} >
            <div className={styles.footerBottom}>
                <p>Copyright &copy;2023 </p>
            </div>
        </footer>
    )
}

export default Footer