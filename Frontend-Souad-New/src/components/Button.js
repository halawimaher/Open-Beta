import React from "react";
import './Button.css';
import { Link } from 'react-scroll';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn-medium', 'btn--large']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to="Projects" spy={true} smooth={true} offset={-70} duration={700} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button;