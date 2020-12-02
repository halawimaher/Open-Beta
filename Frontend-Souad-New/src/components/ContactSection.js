import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from './Button';
import './Button.css';
import { animateScroll as scroll } from "react-scroll";
import Contact from './Contact';
import './ContactSection.css';

function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="contact-section-container" id="Contact">
      <Button onClick={() => setModalIsOpen(true)} className="btn-inner" buttonStyle='btn--outline' buttonSize='btn--large' >Send me an Email</Button>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)'
          },
          content: {
            position: 'relative',
            top: '55%',
            left: '50%',
            width: '70%',
            height: '80%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#007CC7',
            color: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}>
        <Contact />
      </Modal>
      <p className="footer-contact-heading">
        <i className="fas fa-caret-square-up"></i>
        <span>Let's Make Something Great Together</span>
        <i className="fas fa-caret-square-down"></i>
      </p>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <div className="footer-link-items">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <div className="footer-link-items">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
