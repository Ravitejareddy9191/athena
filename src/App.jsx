import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import DigitalSolutions from './pages/DigitalSolutions'; 
import TechnologyExpertise from './pages/TechnologyExpertise';
import AIServices from './pages/AIServices';
import DigitalMarketing from './pages/DigitalMarketing';
import AnalyticsInsights from './pages/AnalyticsInsights';
import StaffAugmentation from './pages/StaffAugmentation';



// --- MAIN APP COMPONENT ---
function App() {
  const { pathname } = useLocation();

  // Scroll to top when changing pages
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/technology-expertise" element={<TechnologyExpertise />} />
        <Route path="/ai-services" element={<AIServices />} />
        <Route path="digital-marketing" element={<DigitalMarketing />} />
        <Route path="analytics-insights" element={<AnalyticsInsights />} />
        <Route path="staff-augmentation" element={<StaffAugmentation />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;