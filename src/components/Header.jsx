import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Adjusted classes to match the clean, bold reference look
  const linkBaseClasses = "block text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer text-base font-bold py-3 px-2";
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          
          {/* 1. LOGO */}
          <div className="logo-container z-50">
            <Link to="/" className="logo" onClick={closeMenu}>
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

          {/* 4. MOBILE MENU BUTTON (HAMBURGER / CLOSE) */}
          {/* Z-Index set high to ensure it sits on top of the open menu */}
          <button 
            className={`mobile-menu-btn z-50 ${isMenuOpen ? 'menu-open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="ri-close-line text-xl"></i>
            ) : (
              <i className="ri-menu-line text-xl"></i>
            )}
          </button>
        </div>
      </div>
      
      {/* 5. MOBILE MENU DROPDOWN - REPLICATED STYLES */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-24 px-6 pb-10 overflow-y-auto flex flex-col h-screen">
            {/* Navigation Links Stack */}
            <div className="flex flex-col space-y-2 mb-auto"> 
              <Link to="/digital-solutions" onClick={closeMenu} className={linkBaseClasses}>Digital Solutions</Link>
              <Link to="/ai-services" onClick={closeMenu} className={linkBaseClasses}>AI Services</Link>
              <Link to="/digital-marketing" onClick={closeMenu} className={linkBaseClasses}>Digital Marketing</Link>
              <Link to="/analytics-insights" onClick={closeMenu} className={linkBaseClasses}>Analytics & Insights</Link>
              <Link to="/staff-augmentation" onClick={closeMenu} className={linkBaseClasses}>Staff Augmentation</Link>
              <Link to="/technology-expertise" onClick={closeMenu} className={linkBaseClasses}>Technology Expertise</Link>
            </div>
            
            {/* Contact Button - Pushed to bottom, Full Width, White Background */}
            <div className="mt-8 w-full">
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="block w-full bg-white text-black font-bold text-center py-3 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;