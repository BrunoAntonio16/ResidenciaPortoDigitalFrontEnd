//import { useRef, useState } from 'react';
function Navbar() {
    return(
        <> 
            <nav className='navbar bg-primary'>
                <div className='text-center'  >
                    <a className='navbar-brand m-0'>
                        SmileSystem
                    </a>
                    <div className="container">
                            <div className='navbar-nav'>
                                <li className='nav-item d-flex align-items-center justify-content-center'>
                                    <a href="#" className='nav-link bg-transparent active px-2'>
                                        Home
                                    </a>
                                    <a href="#" className='nav-link bg-transparent active px-2'>
                                        Function
                                    </a>
                                    <a href="#" className='nav-link bg-transparent active px-2'>
                                        About
                                    </a>
                                </li>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;