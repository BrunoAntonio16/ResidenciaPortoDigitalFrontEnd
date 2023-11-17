import "./Footer.css";

function Footer() {
    return (
      <footer className="p-2 pb-0 fixed-bottom">
        <div className="container text-dark text-center">
          <div className="row d-flex justify-content-center">
            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-dark px-2">
                    Whatsapp
                  </a>
                  <a href="#" className="text-dark px-2">
                    Instagram
                  </a>
                  <a href="#" className="text-dark px-2">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div>
              <p>Copyright &copy;2023; SmileSystem</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;