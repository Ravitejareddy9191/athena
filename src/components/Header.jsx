import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const linkBaseClasses =
    "mobile-menu-link";

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          
          {/* 1. LOGO */}
          <div className="logo-container z-50" onClick={closeMenu}>
            <Link to="/" className="logo">
              ATHENA<span>IQ</span>
            </Link>
            <div className="logo-sub">SOLUTIONS</div>
          </div>

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><Link to="/digital-solutions">Digital Solutions</Link></li>
              <li><Link to="/ai-services">AI Services</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/analytics-insights">Analytics & Insights</Link></li>
              <li><Link to="/staff-augmentation">Staff Augmentation</Link></li>
              <li><Link to="/technology-expertise">Technology Expertise</Link></li>
            </ul>
          </nav>

          {/* 3. DESKTOP CONTACT BUTTON */}
          <div className="desktop-btn">
            <Link to="/#contact" className="btn-contact">Contact Us</Link>
          </div>

          {/* 4. MOBILE MENU BUTTON */}
          <button
            className={`mobile-menu-btn z-50 ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="ri-close-line"></i>
            ) : (
              <i className="ri-menu-line"></i>
            )}
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-inner">
            <div className="mobile-menu-divider" />

            <nav className="mobile-menu-links">
              <Link to="/digital-solutions" onClick={closeMenu} className={linkBaseClasses}>
                Digital Solutions
              </Link>
              <Link to="/ai-services" onClick={closeMenu} className={linkBaseClasses}>
                AI Services
              </Link>
              <Link to="/digital-marketing" onClick={closeMenu} className={linkBaseClasses}>
                Digital Marketing
              </Link>
              <Link to="/analytics-insights" onClick={closeMenu} className={linkBaseClasses}>
                Analytics & Insights
              </Link>
              <Link to="/staff-augmentation" onClick={closeMenu} className={linkBaseClasses}>
                Staff Augmentation
              </Link>
              <Link to="/technology-expertise" onClick={closeMenu} className={linkBaseClasses}>
                Technology Expertise
              </Link>
            </nav>

            <button
              className="mobile-menu-contact-btn"
              onClick={() => {
                closeMenu();
                // If you want to scroll on same page:
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
