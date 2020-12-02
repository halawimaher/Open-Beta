import React from 'react';
import { Link } from 'react-scroll';
import { Spring } from 'react-spring/renderprops';
import { Button } from './Button';
import './Scroll3.css'

function Scroll3() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 5000, duration: 1300 }}
    >
      { props => (
        <div style={props}>
          <div>
            <Link to="About" spy={true} smooth={true} offset={-70} duration={700}>
              <button className="button">
                Read More
              </button>
            </Link>
            <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>Check Out My Work</Button>
          </div>
        </div>
      )}
    </Spring>
  )
}


export default Scroll3
