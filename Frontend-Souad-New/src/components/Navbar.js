import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={scrollToTop}>
                    Logo <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="Home" spy={true} smooth={true} offset={-70} duration={700} className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Skills" spy={true} smooth={true} offset={-70} duration={700} className='nav-links' onClick={closeMobileMenu}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="About" spy={true} smooth={true} offset={-70} duration={700} className='nav-links' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Projects" spy={true} smooth={true} offset={-70} duration={700} className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Experience" spy={true} smooth={true} offset={-70} duration={700} className='nav-links' onClick={closeMobileMenu}>Experience</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Contact" spy={true} smooth={true} offset={-70} duration={700} className='nav-links' onClick={closeMobileMenu}>Let's Talk</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
