import React, { useEffect } from 'react';
import '../styles/StaffAugmentation.css';

const StaffAugmentation = () => {

  // --- REVEAL ON SCROLL LOGIC ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sa-reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.sa-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // --- DATA ---
  const benefits = [
    { 
      icon: "ri-timer-2-line", 
      title: "Onboarding within 2 weeks", 
      desc: "Get your team members ready and productive in just 14 days" 
    },
    { 
      icon: "ri-money-dollar-circle-line", 
      title: "No recruitment overhead", 
      desc: "Skip the lengthy hiring process and associated costs" 
    },
    { 
      icon: "ri-calendar-check-line", 
      title: "Short-term or long-term models", 
      desc: "Flexible engagement models that adapt to your needs" 
    }
  ];

  const features = [
    { 
      title: "Pre-vetted Talent Pool", 
      desc: "All professionals are thoroughly screened and tested for technical skills and cultural fit" 
    },
    { 
      title: "Seamless Integration", 
      desc: "Our talent adapts quickly to your existing workflows and company culture" 
    },
    { 
      title: "Cost-Effective Solution", 
      desc: "Reduce hiring costs and overhead while maintaining high-quality output" 
    },
    { 
      title: "Scalable Teams", 
      desc: "Scale your team up or down based on project requirements and business needs" 
    },
    { 
      title: "Ongoing Support", 
      desc: "Continuous performance monitoring and support throughout the engagement" 
    },
    { 
      title: "Risk-Free Trial", 
      desc: "Two-week trial period to ensure the perfect fit for your team" 
    }
  ];

  return (
    <div className="sa-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="sa-hero">
        <div className="sa-hero-bg"></div>
        <div className="sa-container relative z-10 text-center sa-reveal">
          <h1 className="sa-hero-title">Flexible Staffing Solutions for Business Growth</h1>
          <p className="sa-hero-subtitle">
            Skilled professionals who integrate with your team and contribute from day one.
          </p>
          <div className="sa-flex-center">
            <button className="sa-btn-white">Request Talent</button>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="sa-section-light">
        <div className="sa-container">
          <div className="sa-grid-3 sa-reveal">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="sa-icon-circle-lg">
                  <i className={`${item.icon}`}></i>
                </div>
                <h3 className="sa-card-title-lg">{item.title}</h3>
                <p className="sa-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="sa-section-white" id="why-choose">
        <div className="sa-container">
          <div className="text-center mb-16 sa-reveal">
            <h2 className="sa-section-title">Why Choose Us?</h2>
            <p className="sa-section-subtitle">
              We make staff augmentation simple, efficient, and effective for your business.
            </p>
          </div>
          
          <div className="sa-grid-2 sa-reveal">
            {features.map((feat, i) => (
              <div key={i} className="sa-feature-item">
                <div className="sa-icon-circle-sm">
                  <i className="ri-check-line"></i>
                </div>
                <div>
                  <h3 className="sa-feature-title">{feat.title}</h3>
                  <p className="sa-feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="sa-cta-section">
        <div className="sa-container text-center sa-reveal">
          <div className="sa-cta-content">
            <h2 className="sa-cta-title">Ready to Build Your Dream Team?</h2>
            <p className="sa-cta-desc">
              Get matched with skilled professionals who can contribute to your projects immediately. No lengthy interviews, no recruitment hassles.
            </p>
            <div className="sa-cta-buttons">
              <button className="sa-btn-white">Request Talent</button>
              <button className="sa-btn-outline">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StaffAugmentation;