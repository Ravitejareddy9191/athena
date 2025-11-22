import React, { useState, useEffect, useRef } from 'react';
import '../styles/AIServices.css'; 

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

const AIServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- DATA OBJECTS ---
  const stats = [
    { icon: 'ri-code-s-slash-line', num: '150+', label: 'AI Projects Delivered' },
    { icon: 'ri-trophy-line', num: '95%', label: 'Success Rate' },
    { icon: 'ri-time-line', num: '12+', label: 'Years AI Experience' },
    { icon: 'ri-team-line', num: '25+', label: 'AI Specialists' }
  ];

  const solutions = [
    { title: "AI Maturity Assessment", icon: "ri-search-line", desc: "Evaluate AI maturity and implementation opportunities", list: ["Current state analysis", "Opportunity identification", "Readiness evaluation", "Implementation roadmap"] },
    { title: "AI Strategy Development", icon: "ri-lightbulb-line", desc: "Develop AI strategies aligned with business goals", list: ["Strategic planning", "Goal alignment", "Resource allocation", "Success metrics"] },
    { title: "AI Transformation", icon: "ri-rocket-line", desc: "Navigate AI transformation with minimal disruption", list: ["Change management", "Phased implementation", "Risk mitigation", "Team training"] },
    { title: "ROI Optimization", icon: "ri-bar-chart-line", desc: "Measure and optimize ROI of AI", list: ["Performance tracking", "Cost-benefit analysis", "Continuous improvement", "Impact measurement"] },
    { title: "Generative AI", icon: "ri-magic-line", desc: "Use Generative AI for content automation", list: ["Content generation", "Process automation", "Creative solutions", "Efficiency gains"] },
    { title: "AI Consulting", icon: "ri-user-star-line", desc: "Expert guidance for AI implementation", list: ["Technical expertise", "Best practices", "Industry insights", "Ongoing support"] }
  ];

  const process = [
    { step: "01", title: "Discovery & Assessment", time: "2-4 weeks", icon: "ri-search-2-line", desc: "We analyze your current infrastructure and identify AI opportunities.", list: ["Current state analysis", "Opportunity assessment", "Readiness evaluation", "Implementation roadmap"] },
    { step: "02", title: "Strategy Development", time: "4-6 weeks", icon: "ri-route-line", desc: "Create a comprehensive AI strategy aligned with your business objectives.", list: ["AI strategy framework", "Technology roadmap", "Implementation timeline", "Resource planning"] },
    { step: "03", title: "Proof of Concept", time: "6-8 weeks", icon: "ri-flask-line", desc: "Build and test AI prototypes to validate concepts and demonstrate value.", list: ["Working prototypes", "Performance metrics", "Stakeholder validation", "Refined specifications"] },
    { step: "04", title: "Implementation", time: "8-16 weeks", icon: "ri-rocket-2-line", desc: "Deploy AI solutions with minimal disruption and seamless integration.", list: ["Production deployment", "System integration", "Team training", "Quality assurance"] },
    { step: "05", title: "Optimization", time: "Ongoing", icon: "ri-line-chart-line", desc: "Monitor performance, optimize algorithms, and measure ROI continuously.", list: ["Performance monitoring", "Algorithm optimization", "ROI reporting", "Continuous improvement"] }
  ];

  const industries = [
    { name: "Healthcare", icon: "ri-heart-pulse-line", desc: "AI-powered diagnostics & patient care.", list: ["Imaging analysis", "Drug discovery", "Patient monitoring", "Treatment optimization"] },
    { name: "Financial Services", icon: "ri-bank-line", desc: "Risk management & fraud detection.", list: ["Fraud detection", "Risk assessment", "Algorithmic trading", "Customer insights"] },
    { name: "Manufacturing", icon: "ri-settings-3-line", desc: "Predictive maintenance & quality control.", list: ["Predictive maintenance", "Quality control", "Supply chain opt", "Process automation"] },
    { name: "Retail", icon: "ri-shopping-cart-line", desc: "Personalized recommendations & inventory.", list: ["Recommendation engines", "Inventory opt", "Price optimization", "Customer segmentation"] },
    { name: "Transportation", icon: "ri-truck-line", desc: "Route optimization & autonomous systems.", list: ["Route optimization", "Fleet management", "Autonomous systems", "Logistics automation"] },
    { name: "Energy", icon: "ri-lightning-line", desc: "Smart grid & energy optimization.", list: ["Smart grid opt", "Energy forecasting", "Predictive maintenance", "Sustainability analytics"] }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CTO, TechManufacturing", quote: "Athena IQ Solutions transformed our manufacturing operations with their predictive maintenance AI. We've reduced downtime by 40%." },
    { name: "Michael Chen", role: "VP Innovation, Global Finance", quote: "Their AI strategy development was exceptional. They helped us reimagine our entire business model around AI-driven insights." },
    { name: "Emily Rodriguez", role: "CDO, Healthcare Innovations", quote: "The ROI optimization service exceeded our expectations. We have clear visibility into our AI investments and doubled our returns." },
    { name: "David Kim", role: "Head of Digital, Creative Media", quote: "From assessment to implementation, their team guided us through every step. Generative AI has revolutionized our content creation." }
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
      
      {/* --- HERO SECTION --- */}
      <section className="ai-hero">
        <div className="ai-hero-overlay"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <h1 className="ai-hero-title">Enterprise AI Solutions</h1>
            <p className="ai-hero-subtitle">
              Transform your business with our comprehensive AI solutions to drive innovation and growth.
            </p>
            <div className="ai-hero-btn-wrapper">
              <button className="btn-white">Get AI Consultation</button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-4 gap-8">
            {stats.map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ai-stat-card text-center">
                  <div className="ai-stat-icon-box">
                    <i className={`${stat.icon} text-2xl`}></i>
                  </div>
                  <div className="ai-stat-num">{stat.num}</div>
                  <div className="ai-stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Comprehensive AI Solutions</h2>
              <p className="section-desc mx-auto">From strategy to implementation, we provide end-to-end AI solutions that transform your business operations.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {solutions.map((sol, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ai-card">
                  <div className="ai-card-icon-box">
                    <i className={`${sol.icon} text-2xl`}></i>
                  </div>
                  <h3 className="ai-card-title">{sol.title}</h3>
                  <p className="ai-card-desc">{sol.desc}</p>
                  <ul className="ai-card-list">
                    {sol.list.map((item, i) => (
                      <li key={i}><i className="ri-check-line text-green"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPLEMENTATION PROCESS --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Our AI Implementation Process</h2>
              <p className="section-desc mx-auto">We follow a proven 5-step methodology to ensure successful AI transformation.</p>
            </div>
          </RevealOnScroll>

          <div className="ai-process-wrapper">
            {process.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="ai-process-step">
                  {/* Connector Line (except last) */}
                  {idx !== process.length - 1 && <div className="ai-process-line"></div>}
                  
                  <div className="ai-process-header">
                    <div className="ai-process-num">{step.step}</div>
                    <div className="ai-process-icon">
                      <i className={`${step.icon} text-xl`}></i>
                    </div>
                  </div>

                  <div className="ai-process-content">
                    <div className="ai-process-title-row">
                      <h3 className="ai-process-title">{step.title}</h3>
                      <span className="ai-process-badge">{step.time}</span>
                    </div>
                    <p className="ai-process-desc">{step.desc}</p>
                    <div className="ai-process-grid">
                      {step.list.map((item, i) => (
                        <div key={i} className="ai-process-mini-item">
                          <i className="ri-check-line text-green"></i> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Summary Box */}
          <RevealOnScroll delay={300}>
            <div className="ai-summary-box">
              <h3 className="text-2xl font-bold mb-4">End-to-End AI Transformation</h3>
              <p className="text-gray-300 mb-6">From initial assessment to ongoing optimization, we ensure your AI journey delivers measurable business value.</p>
              <div className="ai-summary-stats">
                <div><div className="text-3xl font-bold">3-12</div><div className="text-sm text-gray-400">Months Timeline</div></div>
                <div className="ai-summary-divider"></div>
                <div><div className="text-3xl font-bold">95%</div><div className="text-sm text-gray-400">Success Rate</div></div>
                <div className="ai-summary-divider"></div>
                <div><div className="text-3xl font-bold">24/7</div><div className="text-sm text-gray-400">Support</div></div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- INDUSTRIES --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Industry-Specific AI Solutions</h2>
              <p className="section-desc mx-auto">We deliver tailored AI solutions across diverse industries.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {industries.map((ind, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ai-card">
                  <div className="ai-card-icon-box">
                    <i className={`${ind.icon} text-xl`}></i>
                  </div>
                  <h3 className="ai-card-title">{ind.name}</h3>
                  <p className="ai-card-desc">{ind.desc}</p>
                  <ul className="ai-card-list">
                    {ind.list.map((item, i) => (
                      <li key={i}><i className="ri-check-line text-green"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Client Success Stories</h2>
              <p className="section-desc mx-auto">See how organizations have transformed with our AI solutions.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-2 gap-8">
            {testimonials.map((t, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ai-testimonial-card">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <div className="text-yellow-400 mb-4 text-sm">
                    <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                  </div>
                  <blockquote className="italic text-gray-600 leading-relaxed">"{t.quote}"</blockquote>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc mx-auto">Get answers to common questions about our AI services.</p>
            </div>
          </RevealOnScroll>

          <div className="ai-faq-wrapper max-w-4xl mx-auto">
            {faqs.map((q, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div className="ai-faq-item">
                  <button className="ai-faq-btn" onClick={() => toggleFaq(idx)}>
                    <h3 className="ai-faq-q">{q}</h3>
                    <div className="ai-faq-icon">
                      <i className={`ri-add-line transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}></i>
                    </div>
                  </button>
                  <div className={`ai-faq-ans ${openFaq === idx ? 'open' : ''}`}>
                    <p>We offer comprehensive support tailored to your needs, including 24/7 monitoring and strategy optimization.</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Get expert AI consultation to identify opportunities and implement solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-white">Get AI Consultation</button>
              <button className="btn-outline-white">View All Services</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIServices;