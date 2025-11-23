import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation Data
  const navItems = [
    { name: 'Digital Solutions', path: '/digital-solutions' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
    { name: 'Analytics & Insights', path: '/analytics-insights' },
    { name: 'Staff Augmentation', path: '/staff-augmentation' },
    { name: 'Technology Expertise', path: '/technology-expertise' }
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm border-b border-gray-800">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-24">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="cursor-pointer transition-all duration-200 hover:scale-105"
            >
              <div className="relative group">
                <div className="flex flex-col">
                  <h1 className="text-lg lg:text-xl font-bold text-white tracking-wide leading-none">
                    ATHENA<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text ml-1">IQ</span>
                  </h1>
                  <div className="text-[10px] lg:text-xs text-gray-300 tracking-[0.3em] font-medium mt-1">
                    SOLUTIONS
                  </div>
                </div>
                {/* Logo Underline Effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer text-sm font-bold relative group"
              >
                {item.name}
                {/* Center-Out Underline Animation */}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full origin-center"></span>
              </Link>
            ))}
          </nav>

          {/* DESKTOP CONTACT BUTTON */}
          <div className="hidden lg:flex items-center">
            <a 
              href="/#contact" // Anchor link for smooth scroll
              className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer text-sm font-bold relative group"
            >
              <div className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 relative overflow-hidden group">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Us</span>
              </div>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer p-2 hover:bg-gray-800 rounded-lg hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`text-xl transition-transform duration-300 ri-close-line ${isMenuOpen ? 'rotate-90' : 'ri-menu-line rotate-0'}`}></i>
            {/* Note: Using RemixIcon classes. If ri-menu-line isn't showing, ensure you have the conditional logic for the icon class if needed, or keep it simple like above if your CSS supports swapping content. 
                Better Logic for Icon Swapping: */}
             {/* <i className={`text-xl transition-transform duration-300 ${isMenuOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i> */}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer text-sm font-bold py-2 hover:bg-gray-800 rounded-lg px-3 hover:scale-105 active:scale-95"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Button */}
              <a 
                href="/#contact"
                onClick={closeMenu}
                className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 mt-2 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;