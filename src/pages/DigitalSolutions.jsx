import React, { useState, useEffect } from 'react';
import '../styles/DigitalSolutions.css';

const DigitalSolutions = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

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
          entry.target.classList.add('ds-reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.ds-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // --- DATA ---
  const stats = [
    { icon: "ri-trophy-line", num: "200+", label: "Projects Delivered" },
    { icon: "ri-heart-line", num: "98%", label: "Client Satisfaction" },
    { icon: "ri-time-line", num: "15+", label: "Industry Experience" },
    { icon: "ri-team-line", num: "50+", label: "Digital Experts" }
  ];

  const services = [
    { 
      icon: "ri-lightbulb-line", title: "Digital Strategy & Consulting", 
      desc: "Comprehensive digital transformation roadmaps tailored to your business objectives and industry requirements.",
      list: ["Strategic Planning", "Digital Roadmap", "Technology Assessment", "ROI Analysis"]
    },
    { 
      icon: "ri-cloud-line", title: "Cloud Migration & Infrastructure", 
      desc: "Seamless cloud adoption with scalable infrastructure solutions that reduce costs and improve performance.",
      list: ["AWS/Azure Migration", "Infrastructure Setup", "DevOps Implementation", "24/7 Support"]
    },
    { 
      icon: "ri-code-box-line", title: "Enterprise Software Development", 
      desc: "Custom software solutions designed to streamline operations and enhance productivity across your organization.",
      list: ["Custom Applications", "API Integration", "Legacy Modernization", "Quality Assurance"]
    },
    { 
      icon: "ri-settings-3-line", title: "Digital Process Automation", 
      desc: "Intelligent automation solutions that eliminate manual tasks and optimize business workflows.",
      list: ["Workflow Automation", "RPA Implementation", "Process Optimization", "Integration Services"]
    },
    { 
      icon: "ri-bar-chart-box-line", title: "Data Analytics & Intelligence", 
      desc: "Transform raw data into actionable insights with advanced analytics and business intelligence platforms.",
      list: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Real-time Dashboards"]
    },
    { 
      icon: "ri-shield-check-line", title: "Cybersecurity & Compliance", 
      desc: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
      list: ["Security Assessment", "Compliance Framework", "Threat Protection", "Risk Management"]
    }
  ];

  const processSteps = [
    { 
      num: "01", icon: "ri-search-2-line", title: "Assessment & Strategy", time: "2-4 weeks", 
      desc: "We evaluate your current digital maturity, identify transformation opportunities, and develop a comprehensive digital strategy.",
      list: ["Digital maturity assessment", "Opportunity analysis", "Transformation strategy", "Implementation roadmap"]
    },
    { 
      num: "02", icon: "ri-building-line", title: "Architecture Design", time: "4-6 weeks", 
      desc: "Design scalable digital architecture that supports your business objectives and future growth requirements.",
      list: ["System architecture", "Technology stack", "Integration planning", "Security framework"]
    },
    { 
      num: "03", icon: "ri-code-line", title: "Development & Testing", time: "8-12 weeks", 
      desc: "Build robust digital solutions with modern technologies, ensuring quality through comprehensive testing.",
      list: ["Application development", "Quality assurance", "Performance testing", "Security validation"]
    },
    { 
      num: "04", icon: "ri-rocket-2-line", title: "Deployment & Support", time: "Ongoing", 
      desc: "Deploy solutions with minimal disruption, provide team training, and ensure ongoing support and optimization.",
      list: ["Production deployment", "Team training", "Support services", "Performance monitoring"]
    }
  ];

  const industries = [
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "Digital health platforms, telemedicine solutions, and electronic health records systems.", list: ["Electronic health records", "Telemedicine platforms", "Patient portals", "Healthcare analytics"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Digital banking, fintech solutions, compliance systems, and customer experience platforms.", list: ["Digital banking", "Payment systems", "Compliance platforms", "Customer analytics"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "Industrial IoT, smart manufacturing systems, supply chain digitization, and quality management.", list: ["Industrial IoT", "Smart manufacturing", "Supply chain systems", "Quality management"] },
    { icon: "ri-shopping-cart-line", title: "Retail & E-commerce", desc: "E-commerce platforms, omnichannel experiences, inventory systems, and customer analytics.", list: ["E-commerce platforms", "Omnichannel systems", "Inventory management", "Customer analytics"] },
    { icon: "ri-graduation-cap-line", title: "Education", desc: "Learning management systems, digital classrooms, student information systems, and online learning.", list: ["Learning management", "Digital classrooms", "Student systems", "Online learning"] },
    { icon: "ri-lightning-line", title: "Energy & Utilities", desc: "Smart grid systems, energy management platforms, utility billing, and sustainability solutions.", list: ["Smart grid systems", "Energy management", "Utility billing", "Sustainability platforms"] }
  ];

  const testimonials = [
    { name: "Dr. Sarah Johnson", role: "CTO", company: "HealthCare Plus", quote: "Athena IQ Solutions completely transformed our healthcare platform. The new system has improved patient satisfaction by 45% and reduced operational costs by 30%." },
    { name: "Michael Chen", role: "Head of Digital Innovation", company: "FirstBank Financial", quote: "Their digital banking solution exceeded all expectations. We've seen a 60% increase in digital adoption and significantly improved customer experience scores." },
    { name: "Emily Rodriguez", role: "VP of Operations", company: "TechManufacturing Corp", quote: "The manufacturing digitization project delivered outstanding results. Our production efficiency increased by 35% and quality defects decreased by 50%." }
  ];

  const faqs = [
    "What is digital transformation and why is it important?",
    "How long does a typical digital transformation project take?",
    "What industries do you specialize in?",
    "How do you ensure data security during digital transformation?",
    "What ongoing support do you provide after implementation?",
    "How do you measure the success of digital transformation?"
  ];

  return (
    <div className="ds-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="ds-hero">
        <div className="ds-hero-bg"></div>
        <div className="ds-container relative z-10 text-center ds-reveal">
          <h1 className="ds-hero-title">Digital Transformation Solutions</h1>
          <p className="ds-hero-subtitle">
            Modernize your business with comprehensive digital transformation strategies that drive efficiency, innovation, and growth.
          </p>
          <div className="ds-flex-center">
             <button className="ds-btn-white">Get Digital Consultation</button>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="ds-section-white">
        <div className="ds-container">
          <div className="ds-stats-grid ds-reveal">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="ds-stat-icon-box">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="ds-stat-num">{item.num}</div>
                <div className="ds-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="ds-section-light" id="digital-services">
        <div className="ds-container">
          <div className="text-center mb-16 ds-reveal">
            <h2 className="ds-section-title">Our Digital Solutions</h2>
            <p className="ds-section-subtitle">
              Comprehensive digital transformation services designed to accelerate your business growth and technological advancement.
            </p>
          </div>
          <div className="ds-services-grid ds-reveal">
            {services.map((sol, i) => (
              <div key={i} className="ds-service-card group">
                <div className="ds-card-icon-box">
                  <i className={`${sol.icon}`}></i>
                </div>
                <h3 className="ds-card-title">{sol.title}</h3>
                <p className="ds-card-desc mb-4">{sol.desc}</p>
                <ul className="ds-list">
                  {sol.list.map((li, j) => (
                    <li key={j} className="ds-list-item">
                      <i className="ri-check-line"></i>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="ds-section-white">
        <div className="ds-container">
          <div className="text-center mb-16 ds-reveal">
            <h2 className="ds-section-title">Our Digital Transformation Process</h2>
            <p className="ds-section-subtitle">
              We follow a proven 4-step methodology to ensure successful digital transformation with minimal risk and maximum business value.
            </p>
          </div>

          <div className="ds-process-wrapper ds-reveal">
            {processSteps.map((step, i) => (
              <div key={i} className="ds-process-step">
                {/* Connector Line */}
                {i !== processSteps.length - 1 && <div className="ds-process-line"></div>}
                
                <div className="ds-step-header-group">
                  <div className="ds-step-num-circle">{step.num}</div>
                  <div className="ds-step-icon-small">
                    <i className={`${step.icon}`}></i>
                  </div>
                </div>

                <div className="ds-step-content">
                  <div className="ds-step-title-row">
                    <h3 className="ds-step-title">{step.title}</h3>
                    <span className="ds-step-badge">{step.time}</span>
                  </div>
                  <p className="ds-step-desc">{step.desc}</p>
                  <div className="ds-step-grid">
                    {step.list.map((li, j) => (
                      <div key={j} className="ds-check-pill">
                        <i className="ri-check-line"></i>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ds-summary-box ds-reveal">
            <h3 className="ds-summary-title">End-to-End Digital Transformation</h3>
            <p className="ds-summary-desc">
              From initial assessment to ongoing optimization, we ensure your digital journey delivers measurable business value at every stage.
            </p>
            <div className="ds-summary-stats">
              <div className="text-center">
                <div className="ds-sum-num">3-12</div>
                <div className="ds-sum-label">Months Timeline</div>
              </div>
              <div className="ds-divider"></div>
              <div className="text-center">
                <div className="ds-sum-num">98%</div>
                <div className="ds-sum-label">Success Rate</div>
              </div>
              <div className="ds-divider"></div>
              <div className="text-center">
                <div className="ds-sum-num">24/7</div>
                <div className="ds-sum-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY SOLUTIONS */}
      <section className="ds-section-light">
        <div className="ds-container">
          <div className="text-center mb-16 ds-reveal">
            <h2 className="ds-section-title">Industries We Transform</h2>
            <p className="ds-section-subtitle">
              We deliver tailored digital transformation solutions across diverse industries, understanding unique challenges and opportunities in each sector.
            </p>
          </div>
          <div className="ds-services-grid ds-reveal">
            {industries.map((ind, i) => (
              <div key={i} className="ds-service-card group">
                <div className="ds-card-icon-box">
                  <i className={`${ind.icon}`}></i>
                </div>
                <h3 className="ds-card-title">{ind.title}</h3>
                <p className="ds-card-desc mb-4">{ind.desc}</p>
                <ul className="ds-list">
                  {ind.list.map((li, j) => (
                    <li key={j} className="ds-list-item">
                      <i className="ri-check-line"></i>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="ds-section-white">
        <div className="ds-container">
          <div className="text-center mb-16 ds-reveal">
            <h2 className="ds-section-title">Client Success Stories</h2>
            <p className="ds-section-subtitle">
              See how organizations across industries have transformed their operations and achieved remarkable results with our digital solutions.
            </p>
          </div>
          <div className="ds-testimonials-grid ds-reveal">
            {testimonials.map((t, i) => (
              <div key={i} className="ds-testimonial-card">
                <div className="mb-6">
                  <h4 className="ds-test-name">{t.name}</h4>
                  <p className="ds-test-role">{t.role}</p>
                  <p className="ds-test-company">{t.company}</p>
                </div>
                <div className="mb-4">
                  <div className="ds-stars">
                    {[...Array(5)].map((_, s) => <i key={s} className="ri-star-fill"></i>)}
                  </div>
                  <blockquote className="ds-quote">"{t.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="ds-section-light">
        <div className="ds-container">
          <div className="text-center mb-16 ds-reveal">
            <h2 className="ds-section-title">Frequently Asked Questions</h2>
            <p className="ds-section-subtitle">
              Get answers to common questions about our digital transformation services and processes.
            </p>
          </div>
          <div className="ds-faq-wrapper ds-reveal">
            {faqs.map((q, i) => (
              <div key={i} className="ds-faq-item">
                <button className="ds-faq-btn" onClick={() => toggleFaq(i)}>
                  <h3 className="ds-faq-question">{q}</h3>
                  <div className="ds-faq-icon">
                    <i className={`ri-arrow-down-line ${openFaq === i ? 'rotate' : ''}`}></i>
                  </div>
                </button>
                <div className={`ds-faq-content ${openFaq === i ? 'open' : ''}`}>
                  <p>
                    We work closely with your stakeholders to ensure minimal disruption. Our phased approach allows for iterative testing and deployment, ensuring that your business operations continue smoothly during the transformation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="ds-cta-section">
        <div className="ds-container text-center ds-reveal">
          <div className="ds-cta-content">
            <h2 className="ds-cta-title">Ready to Transform Your Business?</h2>
            <p className="ds-cta-desc">
              Let's discuss how our digital solutions can accelerate your growth and modernize your operations.
            </p>
            <div className="ds-cta-buttons">
              <button className="ds-btn-white">Explore Our Services</button>
              <button className="ds-btn-outline">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalSolutions;