import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';
import './Footer.css';
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
};

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo" onClick={scrollToTop}>
                            Logo <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Souad <span className="cpright">©</span> 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="//facebook.com" target="_blank" aria-label="facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="//instagram.com" target="_blank" aria-label="instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="//linkedin.com" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="//youtube.com" target="_blank" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="//twitter.com" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
