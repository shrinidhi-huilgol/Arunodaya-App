import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-arun">
    <div className="footer-row">
      <div className="footer-col brand-col">
        <h2>
          <span className="brand-arun">ARUNO</span>
          <span className="brand-daya">DAYA</span>
        </h2>
        <address>
          CJ99+XRS, Ganesh Colony, Zakir Hussain Colony,<br />
          Hudco Colony, Gadag, Betager, Karnataka 582103
        </address>
        <div className="footer-email">
          <a href="mailto:arunodaya.pslp.school@gmail.com">
            arunodaya.pslpschool@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-list">
          <a href="/partners">Our Partners</a>
          <a href="/members">Our Trusty Members</a>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-list">
          <a href="/about">About Us</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact Us</a>
          <a href="/faqs">FAQs</a>
        </div>
      </div>

      <div className="footer-col social-col">
        <div className="footer-list">
          <b></b>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-base">
      <span>Copyright © <a href="/privacy-policy">Privacy Policy</a>. All right Reserved.</span>
    </div>
  </footer>
);

export default Footer;
