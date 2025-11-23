import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          
          {/* 1. Brand Column */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-logo-lockup">
              <div className="footer-logo-main">
                ATHENA <span className="text-gradient">IQ</span>
              </div>
              <div className="footer-logo-sub">SOLUTIONS</div>
            </Link>
            
            <p className="footer-description">
              AI-powered innovation for the digital future. Your trusted technology partner delivering cutting-edge solutions.
            </p>
            
            <div className="footer-socials">
              <a href="#" className="social-circle" aria-label="LinkedIn">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="social-circle" aria-label="Twitter">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="social-circle" aria-label="GitHub">
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>

          {/* 2. Services Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-nav-list">
              <li><Link to="/digital-solutions">Digital Solutions</Link></li>
              <li><Link to="/ai-services">AI Services</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/analytics-insights">Analytics & Insights</Link></li>
              <li><Link to="/staff-augmentation">Staff Augmentation</Link></li>
              <li><Link to="/technology-expertise">Technology Expertise</Link></li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-nav-list">
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info Column */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact-list">
              <li>
                <i className="ri-mail-line contact-icon"></i>
                <span className="contact-text">support@athenaiqsolutions.com</span>
              </li>
              <li>
                <i className="ri-phone-line contact-icon"></i>
                <div className="contact-text">
                  <div>+1 (555) 123-4567</div>
                  <div>+91 7022635059</div>
                </div>
              </li>
              <li>
                <i className="ri-map-pin-line contact-icon"></i>
                <span className="contact-text">San Francisco, CA</span>
              </li>
              <li>
                <i className="ri-map-pin-line contact-icon"></i>
                <span className="contact-text">Gurgaon, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            2024 Athena IQ Solutions. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;