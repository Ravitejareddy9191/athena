import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* 1. Brand Column */}
          <div className="footer-brand-col">
            <div className="logo-text-group mb-6">
              {/* Updated Logo structure from HTML snippet */}
              <a className="logo-link" href="/#home">
                <div className="logo-group">
                  <h1 className="logo-title text-white">
                    ATHENA<span className="text-gradient-logo">IQ</span>
                  </h1>
                  <div className="logo-subtitle text-gray-300">SOLUTIONS</div>
                </div>
              </a>
            </div>
            <p className="footer-desc">
              AI-powered innovation for the digital future. Your trusted technology partner delivering cutting-edge solutions.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon-box group">
                <div className="icon-overlay"></div>
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="social-icon-box group">
                <div className="icon-overlay"></div>
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="social-icon-box group">
                <div className="icon-overlay"></div>
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>

          {/* 2. Services Column */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/digital-solutions" className="footer-link">Digital Solutions</Link></li>
              <li><Link to="/ai-services" className="footer-link">AI Services</Link></li>
              <li><Link to="/digital-marketing" className="footer-link">Digital Marketing</Link></li>
              <li><Link to="/analytics-insights" className="footer-link">Analytics & Insights</Link></li>
              <li><Link to="/staff-augmentation" className="footer-link">Staff Augmentation</Link></li>
              <li><Link to="/technology-expertise" className="footer-link">Technology Expertise</Link></li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="/#about" className="footer-link">About Us</a></li>
              <li><a href="/#contact" className="footer-link">Contact</a></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info Column */}
          <div>
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><i className="ri-mail-line"></i></div>
                <a href="mailto:support@athenaiqsolutions.com" className="footer-contact-text">support@athenaiqsolutions.com</a>
              </div>
              <div className="footer-contact-item flex-col-align-start">
                <div className="footer-contact-icon"><i className="ri-phone-line"></i></div>
                <div className="phone-numbers">
                    <a href="tel:+15551234567" className="footer-contact-text">+1 (555) 123-4567</a>
                    <a href="tel:+917022635059" className="footer-contact-text">+91 7022635059</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><i className="ri-map-pin-line"></i></div>
                <span className="footer-contact-text">San Francisco, CA</span>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><i className="ri-map-pin-line"></i></div>
                <span className="footer-contact-text">Gurgaon, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">2024 Athena IQ Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/cookies" className="footer-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;