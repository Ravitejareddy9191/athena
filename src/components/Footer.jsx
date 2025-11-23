import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800 w-full font-sans">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.8fr_1.2fr] gap-12 mb-16">
          
          {/* 1. Brand Column */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-6 inline-block no-underline">
              <div className="text-xl font-extrabold text-white leading-none mb-1">
                ATHENA <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">IQ</span>
              </div>
              <div className="text-[0.65rem] text-gray-400 tracking-[0.3em] font-medium uppercase">SOLUTIONS</div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[300px]">
              AI-powered innovation for the digital future. Your trusted technology partner delivering cutting-edge solutions.
            </p>
            
            <div className="flex gap-4">
              {['ri-linkedin-fill', 'ri-twitter-x-line', 'ri-github-fill'].map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:-translate-y-1 text-white text-lg" 
                  aria-label="Social Link"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services Column */}
          <div>
            <h3 className="text-base font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Digital Solutions', path: '/digital-solutions' },
                { name: 'AI Services', path: '/ai-services' },
                { name: 'Digital Marketing', path: '/digital-marketing' },
                { name: 'Analytics & Insights', path: '/analytics-insights' },
                { name: 'Staff Augmentation', path: '/staff-augmentation' },
                { name: 'Technology Expertise', path: '/technology-expertise' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm no-underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h3 className="text-base font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm no-underline">About Us</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm no-underline">Contact</a></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm no-underline">Careers</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info Column */}
          <div>
            <h3 className="text-base font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <i className="ri-mail-line mr-3 text-lg mt-0.5"></i>
                <span>support@athenaiqsolutions.com</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <i className="ri-phone-line mr-3 text-lg mt-0.5"></i>
                <div className="leading-relaxed">
                  <div>+1 (555) 123-4567</div>
                  <div>+91 7022635059</div>
                </div>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <i className="ri-map-pin-line mr-3 text-lg mt-0.5"></i>
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <i className="ri-map-pin-line mr-3 text-lg mt-0.5"></i>
                <span>Gurgaon, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            2024 Athena IQ Solutions. All rights reserved.
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} to="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm no-underline">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;