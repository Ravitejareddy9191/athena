import React, { useState, useEffect } from 'react';
import '../styles/AIServices.css';

const AIServices = () => {
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
          entry.target.classList.add('ai-reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.ai-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // --- DATA ---
  const stats = [
    { icon: "ri-code-s-slash-line", num: "150+", label: "AI Projects Delivered" },
    { icon: "ri-trophy-line", num: "95%", label: "Success Rate" },
    { icon: "ri-time-line", num: "12+", label: "Years AI Experience" },
    { icon: "ri-team-line", num: "25+", label: "AI Specialists" }
  ];

  const solutions = [
    { 
      icon: "ri-search-line", title: "AI Maturity Assessment", 
      desc: "Evaluate AI maturity and implementation opportunities",
      list: ["Current state analysis", "Opportunity identification", "Readiness evaluation", "Implementation roadmap"]
    },
    { 
      icon: "ri-lightbulb-line", title: "AI Strategy Development", 
      desc: "Develop AI strategies aligned with business goals",
      list: ["Strategic planning", "Goal alignment", "Resource allocation", "Success metrics"]
    },
    { 
      icon: "ri-rocket-line", title: "AI Transformation", 
      desc: "Navigate AI transformation with minimal disruption",
      list: ["Change management", "Phased implementation", "Risk mitigation", "Team training"]
    },
    { 
      icon: "ri-bar-chart-line", title: "ROI Optimization", 
      desc: "Measure and optimize ROI of AI",
      list: ["Performance tracking", "Cost-benefit analysis", "Continuous improvement", "Impact measurement"]
    },
    { 
      icon: "ri-magic-line", title: "Generative AI", 
      desc: "Use Generative AI for content automation",
      list: ["Content generation", "Process automation", "Creative solutions", "Efficiency gains"]
    },
    { 
      icon: "ri-user-star-line", title: "AI Consulting", 
      desc: "Expert guidance for AI implementation",
      list: ["Technical expertise", "Best practices", "Industry insights", "Ongoing support"]
    }
  ];

  const processSteps = [
    { 
      num: "01", icon: "ri-search-2-line", title: "Discovery & Assessment", time: "2-4 weeks", 
      desc: "We analyze your current infrastructure, identify AI opportunities, and assess your organizational readiness for AI transformation.",
      list: ["Current state analysis", "Opportunity assessment", "Readiness evaluation", "Implementation roadmap"]
    },
    { 
      num: "02", icon: "ri-route-line", title: "Strategy Development", time: "4-6 weeks", 
      desc: "Create a comprehensive AI strategy aligned with your business objectives and develop a detailed implementation roadmap.",
      list: ["AI strategy framework", "Technology roadmap", "Implementation timeline", "Resource planning"]
    },
    { 
      num: "03", icon: "ri-flask-line", title: "Proof of Concept", time: "6-8 weeks", 
      desc: "Build and test AI prototypes to validate concepts, demonstrate value, and refine solutions before full deployment.",
      list: ["Working prototypes", "Performance metrics", "Stakeholder validation", "Refined specifications"]
    },
    { 
      num: "04", icon: "ri-rocket-2-line", title: "Implementation", time: "8-16 weeks", 
      desc: "Deploy AI solutions with minimal disruption, ensure seamless integration, and provide comprehensive team training.",
      list: ["Production deployment", "System integration", "Team training", "Quality assurance"]
    },
    { 
      num: "05", icon: "ri-line-chart-line", title: "Optimization", time: "Ongoing", 
      desc: "Monitor performance, optimize algorithms, measure ROI, and continuously improve AI solutions for maximum impact.",
      list: ["Performance monitoring", "Algorithm optimization", "ROI reporting", "Continuous improvement"]
    }
  ];

  const industries = [
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "AI-powered diagnostics, patient care optimization, and medical research acceleration.", list: ["Medical imaging analysis", "Drug discovery", "Patient monitoring", "Treatment optimization"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Risk management, fraud detection, algorithmic trading, and personalized financial services.", list: ["Fraud detection", "Risk assessment", "Algorithmic trading", "Customer insights"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "Predictive maintenance, quality control, supply chain optimization, and smart automation.", list: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"] },
    { icon: "ri-shopping-cart-line", title: "Retail & E-commerce", desc: "Personalized recommendations, inventory management, price optimization, and customer analytics.", list: ["Recommendation engines", "Inventory optimization", "Price optimization", "Customer segmentation"] },
    { icon: "ri-truck-line", title: "Transportation", desc: "Route optimization, autonomous systems, fleet management, and logistics automation.", list: ["Route optimization", "Fleet management", "Autonomous systems", "Logistics automation"] },
    { icon: "ri-lightning-line", title: "Energy & Utilities", desc: "Smart grid management, energy optimization, predictive maintenance, and sustainability solutions.", list: ["Smart grid optimization", "Energy forecasting", "Predictive maintenance", "Sustainability analytics"] }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CTO", company: "TechManufacturing Corp", quote: "Athena IQ Solutions transformed our manufacturing operations with their predictive maintenance AI. We've reduced downtime by 40% and saved millions in operational costs." },
    { name: "Michael Chen", role: "VP of Innovation", company: "Global Financial Services", quote: "Their AI strategy development was exceptional. They didn't just implement technology - they helped us reimagine our entire business model around AI-driven insights." },
    { name: "Emily Rodriguez", role: "Chief Data Officer", company: "Healthcare Innovations Inc", quote: "The ROI optimization service exceeded our expectations. We now have clear visibility into our AI investments and have doubled our returns within 18 months." },
    { name: "David Kim", role: "Head of Digital", company: "Creative Media Group", quote: "From assessment to implementation, their team guided us through every step. The generative AI solutions have revolutionized our content creation process." }
  ];

  const faqs = [
    "What is the typical timeline for AI implementation?",
    "How do you ensure data security and privacy?",
    "What ROI can we expect from AI implementations?",
    "Do you provide ongoing support after implementation?",
    "What industries do you specialize in?",
    "How do you handle AI model bias and fairness?",
    "Can you integrate with our existing systems?",
    "What level of technical expertise do we need internally?"
  ];

  return (
    <div className="ai-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="ai-hero">
        <div className="ai-hero-bg"></div>
        <div className="ai-container relative z-10 text-center ai-reveal">
          <h1 className="ai-hero-title">Enterprise AI Solutions</h1>
          <p className="ai-hero-subtitle">
            Transform your business with our comprehensive AI solutions to drive innovation and growth.
          </p>
          <div className="ai-flex-center">
             <button className="ai-btn-white">Get AI Consultation</button>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="ai-section-white">
        <div className="ai-container">
          <div className="ai-stats-grid ai-reveal">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="ai-stat-icon-box">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="ai-stat-num">{item.num}</div>
                <div className="ai-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS GRID */}
      <section className="ai-section-light" id="ai-solutions">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Comprehensive AI Solutions</h2>
            <p className="ai-section-subtitle">
              From strategy to implementation, we provide end-to-end AI solutions that transform your business operations and unlock new growth opportunities.
            </p>
          </div>
          <div className="ai-services-grid ai-reveal">
            {solutions.map((sol, i) => (
              <div key={i} className="ai-service-card group">
                <div className="ai-card-icon-box">
                  <i className={`${sol.icon}`}></i>
                </div>
                <h3 className="ai-card-title">{sol.title}</h3>
                <p className="ai-card-desc mb-4">{sol.desc}</p>
                <ul className="ai-list">
                  {sol.list.map((li, j) => (
                    <li key={j} className="ai-list-item">
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
      <section className="ai-section-white">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Our AI Implementation Process</h2>
            <p className="ai-section-subtitle">
              We follow a proven 5-step methodology to ensure successful AI transformation with minimal risk and maximum business value.
            </p>
          </div>

          <div className="ai-process-wrapper ai-reveal">
            {processSteps.map((step, i) => (
              <div key={i} className="ai-process-step">
                {/* Connector Line */}
                {i !== processSteps.length - 1 && <div className="ai-process-line"></div>}
                
                <div className="ai-step-header-group">
                  <div className="ai-step-num-circle">{step.num}</div>
                  <div className="ai-step-icon-small">
                    <i className={`${step.icon}`}></i>
                  </div>
                </div>

                <div className="ai-step-content">
                  <div className="ai-step-title-row">
                    <h3 className="ai-step-title">{step.title}</h3>
                    <span className="ai-step-badge">{step.time}</span>
                  </div>
                  <p className="ai-step-desc">{step.desc}</p>
                  <div className="ai-step-grid">
                    {step.list.map((li, j) => (
                      <div key={j} className="ai-check-pill">
                        <i className="ri-check-line"></i>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ai-summary-box ai-reveal">
            <h3 className="ai-summary-title">End-to-End AI Transformation</h3>
            <p className="ai-summary-desc">
              From initial assessment to ongoing optimization, we ensure your AI journey delivers measurable business value at every stage.
            </p>
            <div className="ai-summary-stats">
              <div className="text-center">
                <div className="ai-sum-num">3-12</div>
                <div className="ai-sum-label">Months Timeline</div>
              </div>
              <div className="ai-divider"></div>
              <div className="text-center">
                <div className="ai-sum-num">95%</div>
                <div className="ai-sum-label">Success Rate</div>
              </div>
              <div className="ai-divider"></div>
              <div className="text-center">
                <div className="ai-sum-num">24/7</div>
                <div className="ai-sum-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY SOLUTIONS */}
      <section className="ai-section-light">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Industry-Specific AI Solutions</h2>
            <p className="ai-section-subtitle">
              We deliver tailored AI solutions across diverse industries, understanding unique challenges and opportunities in each sector.
            </p>
          </div>
          <div className="ai-services-grid ai-reveal">
            {industries.map((ind, i) => (
              <div key={i} className="ai-service-card group">
                <div className="ai-card-icon-box">
                  <i className={`${ind.icon}`}></i>
                </div>
                <h3 className="ai-card-title">{ind.title}</h3>
                <p className="ai-card-desc mb-4">{ind.desc}</p>
                <ul className="ai-list">
                  {ind.list.map((li, j) => (
                    <li key={j} className="ai-list-item">
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
      <section className="ai-section-white">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Client Success Stories</h2>
            <p className="ai-section-subtitle">
              See how organizations across industries have transformed their operations and achieved remarkable results with our AI solutions.
            </p>
          </div>
          <div className="ai-testimonials-grid ai-reveal">
            {testimonials.map((t, i) => (
              <div key={i} className="ai-testimonial-card">
                <div className="mb-6">
                  <h4 className="ai-test-name">{t.name}</h4>
                  <p className="ai-test-role">{t.role}</p>
                  <p className="ai-test-company">{t.company}</p>
                </div>
                <div className="mb-4">
                  <div className="ai-stars">
                    {[...Array(5)].map((_, s) => <i key={s} className="ri-star-fill"></i>)}
                  </div>
                  <blockquote className="ai-quote">"{t.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="ai-section-light">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Frequently Asked Questions</h2>
            <p className="ai-section-subtitle">
              Get answers to common questions about our AI services and implementation process.
            </p>
          </div>
          <div className="ai-faq-wrapper ai-reveal">
            {faqs.map((q, i) => (
              <div key={i} className="ai-faq-item">
                <button className="ai-faq-btn" onClick={() => toggleFaq(i)}>
                  <h3 className="ai-faq-question">{q}</h3>
                  <div className="ai-faq-icon">
                    <i className={`ri-add-line ${openFaq === i ? 'rotate' : ''}`}></i>
                  </div>
                </button>
                <div className={`ai-faq-content ${openFaq === i ? 'open' : ''}`}>
                  <p>
                    We customize every strategy to your specific needs. Our team works closely with you to understand your goals and ensure transparency through regular reporting and meetings.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="ai-cta-section">
        <div className="ai-container text-center ai-reveal">
          <div className="ai-cta-content">
            <h2 className="ai-cta-title">Ready to Transform Your Business with AI?</h2>
            <p className="ai-cta-desc">
              Get expert AI consultation to identify opportunities, develop strategies, and implement solutions that drive real business value.
            </p>
            <div className="ai-cta-buttons">
              <button className="ai-btn-white">Get AI Consultation</button>
              <button className="ai-btn-outline">View All Services</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIServices;