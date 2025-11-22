import React, { useState, useEffect, useRef } from 'react';
import '../styles/StaffAugmentation.css'; 

// Animation Helper
const RevealOnScroll = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const StaffAugmentation = () => {
  return (
    <div className="staffing-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="staffing-hero">
        <div className="staffing-hero-bg"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <h1 className="staffing-hero-title">Flexible Staffing Solutions for Business Growth</h1>
            <p className="staffing-hero-subtitle">
              Skilled professionals who integrate with your team and contribute from day one.
            </p>
            <div className="staffing-hero-btn-wrapper">
              <button className="btn-white">Request Talent</button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- TOP BENEFITS GRID --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="staffing-benefits-grid">
            {[
              { icon: "ri-timer-2-line", title: "Onboarding within 2 weeks", desc: "Get your team members ready and productive in just 14 days" },
              { icon: "ri-money-dollar-circle-line", title: "No recruitment overhead", desc: "Skip the lengthy hiring process and associated costs" },
              { icon: "ri-calendar-check-line", title: "Short-term or long-term models", desc: "Flexible engagement models that adapt to your needs" }
            ].map((benefit, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="text-center">
                  <div className="staffing-icon-circle">
                    <i className={`${benefit.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="staffing-benefit-title">{benefit.title}</h3>
                  <p className="staffing-benefit-desc">{benefit.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="why-choose" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="section-title">Why Choose Us?</h2>
                <p className="section-desc mx-auto">We make staff augmentation simple, efficient, and effective for your business.</p>
              </div>
            </RevealOnScroll>

            <div className="staffing-features-grid">
              {[
                { title: "Pre-vetted Talent Pool", desc: "All professionals are thoroughly screened and tested for technical skills and cultural fit" },
                { title: "Seamless Integration", desc: "Our talent adapts quickly to your existing workflows and company culture" },
                { title: "Cost-Effective Solution", desc: "Reduce hiring costs and overhead while maintaining high-quality output" },
                { title: "Scalable Teams", desc: "Scale your team up or down based on project requirements and business needs" },
                { title: "Ongoing Support", desc: "Continuous performance monitoring and support throughout the engagement" },
                { title: "Risk-Free Trial", desc: "Two-week trial period to ensure the perfect fit for your team" }
              ].map((feat, idx) => (
                <RevealOnScroll key={idx} delay={idx * 50}>
                  <div className="staffing-feature-item">
                    <div className="staffing-check-icon">
                      <i className="ri-check-line"></i>
                    </div>
                    <div>
                      <h3 className="staffing-feature-title">{feat.title}</h3>
                      <p className="staffing-feature-desc">{feat.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="staffing-cta-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="staffing-cta-title">Ready to Build Your Dream Team?</h2>
              <p className="staffing-cta-desc">
                Get matched with skilled professionals who can contribute to your projects immediately. No lengthy interviews, no recruitment hassles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-white">Request Talent</button>
                <button className="staffing-btn-outline">Schedule a Call</button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StaffAugmentation;