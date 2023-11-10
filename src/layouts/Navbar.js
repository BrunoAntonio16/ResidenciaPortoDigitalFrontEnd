import { useRef, useState } from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <a href='#'>SmileSystem</a>
                </div>
                <nav className="navbar-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#" >Functions*</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Profile*</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;