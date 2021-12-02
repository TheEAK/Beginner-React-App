import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function Navbar() {

    const [click, setClick] = useState(false);

    function handleClick(event) {
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to='/' className='navbar-logo'>
                    EAK
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;