//import { useRef, useState } from 'react';
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            SmilleSystem
          </a>
            <div className="navbar-nav ms-auto">
              <li className="nav-item px-2">
                <a
                  href="#"
                  className="nav-link bg-transparent border-trasparent text-dark"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  href="#"
                  className="nav-link bg-transparent border-none text-dark"
                >
                  Functions
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  href="#"
                  className="nav-link bg-transparent border-trasparent text-dark"
                >
                  About
                </a>
              </li>
            </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;