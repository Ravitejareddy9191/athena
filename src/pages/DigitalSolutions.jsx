import React, { useState, useEffect, useRef } from 'react';
import '../styles/DigitalSolutions.css'; 

// Animation Helper (You can also move this to a separate file like src/components/RevealOnScroll.js)
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

const DigitalSolutions = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "What is digital transformation and why is it important?", a: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's crucial for staying competitive, improving efficiency, and meeting modern customer expectations." },
    { q: "How long does a typical digital transformation project take?", a: "Timelines vary based on scope. A specific module might take 3-4 months, while a complete enterprise transformation can take 12-24 months. We work in agile sprints to deliver value incrementally." },
    { q: "What industries do you specialize in?", a: "We have deep expertise in Healthcare, Finance, Manufacturing, Retail, Education, and Energy sectors, providing tailored solutions for each industry's unique challenges." },
    { q: "How do you ensure data security during digital transformation?", a: "Security is baked into our process from day one (DevSecOps). We adhere to industry standards like GDPR, HIPAA, and SOC2, implementing encryption, access controls, and regular audits." },
    { q: "What ongoing support do you provide after implementation?", a: "We provide 24/7 monitoring, regular maintenance updates, performance optimization, and team training to ensure your solution remains robust and efficient." },
    { q: "How do you measure the success of digital transformation?", a: "We define KPIs early on, such as ROI, operational efficiency gains, customer satisfaction scores (CSAT), and user adoption rates." }
  ];

  return (
    <div className="ds-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="ds-hero">
        <div className="ds-hero-overlay"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <h1 className="ds-hero-title">Digital Transformation Solutions</h1>
            <p className="ds-hero-subtitle">
              Modernize your business with comprehensive digital transformation strategies that drive efficiency, innovation, and growth.
            </p>
            <div className="ds-hero-buttons">
              <button className="btn-white">Get Digital Consultation</button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-4 gap-8">
            {[
              { icon: 'ri-trophy-line', num: '200+', label: 'Projects Delivered' },
              { icon: 'ri-heart-line', num: '98%', label: 'Client Satisfaction' },
              { icon: 'ri-time-line', num: '15+', label: 'Industry Experience' },
              { icon: 'ri-team-line', num: '50+', label: 'Digital Experts' }
            ].map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ds-stat-card text-center">
                  <div className="ds-stat-icon-box">
                    <i className={`${stat.icon} text-2xl`}></i>
                  </div>
                  <div className="ds-stat-num">{stat.num}</div>
                  <div className="ds-stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Our Digital Solutions</h2>
              <p className="section-desc mx-auto">Comprehensive digital transformation services designed to accelerate your business growth and technological advancement.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {[
              { title: "Digital Strategy & Consulting", icon: "ri-lightbulb-line", desc: "Comprehensive digital transformation roadmaps tailored to your business objectives.", list: ["Strategic Planning", "Digital Roadmap", "Technology Assessment", "ROI Analysis"] },
              { title: "Cloud Migration & Infrastructure", icon: "ri-cloud-line", desc: "Seamless cloud adoption with scalable infrastructure solutions.", list: ["AWS/Azure Migration", "Infrastructure Setup", "DevOps Implementation", "24/7 Support"] },
              { title: "Enterprise Software Development", icon: "ri-code-box-line", desc: "Custom software solutions designed to streamline operations.", list: ["Custom Applications", "API Integration", "Legacy Modernization", "Quality Assurance"] },
              { title: "Digital Process Automation", icon: "ri-settings-3-line", desc: "Intelligent automation solutions that eliminate manual tasks.", list: ["Workflow Automation", "RPA Implementation", "Process Optimization", "Integration Services"] },
              { title: "Data Analytics & Intelligence", icon: "ri-bar-chart-box-line", desc: "Transform raw data into actionable insights with advanced analytics.", list: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Real-time Dashboards"] },
              { title: "Cybersecurity & Compliance", icon: "ri-shield-check-line", desc: "Comprehensive security solutions to protect your digital assets.", list: ["Security Assessment", "Compliance Framework", "Threat Protection", "Risk Management"] }
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ds-card group">
                  <div className="ds-card-icon-box">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="ds-card-title">{service.title}</h3>
                  <p className="ds-card-desc">{service.desc}</p>
                  <ul className="ds-card-list">
                    {service.list.map((item, i) => (
                      <li key={i}><i className="ri-check-line text-green"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Our Digital Transformation Process</h2>
              <p className="section-desc mx-auto">We follow a proven 4-step methodology to ensure successful digital transformation with minimal risk.</p>
            </div>
          </RevealOnScroll>

          <div className="process-timeline-wrapper">
            {[
              { step: "01", title: "Assessment & Strategy", time: "2-4 weeks", desc: "We evaluate your current digital maturity and identify transformation opportunities.", items: ["Digital maturity assessment", "Opportunity analysis", "Transformation strategy", "Implementation roadmap"] },
              { step: "02", title: "Architecture Design", time: "4-6 weeks", desc: "Design scalable digital architecture that supports your business objectives.", items: ["System architecture", "Technology stack", "Integration planning", "Security framework"] },
              { step: "03", title: "Development & Testing", time: "8-12 weeks", desc: "Build robust digital solutions with modern technologies ensuring quality.", items: ["Application development", "Quality assurance", "Performance testing", "Security validation"] },
              { step: "04", title: "Deployment & Support", time: "Ongoing", desc: "Deploy solutions with minimal disruption and ensure ongoing support.", items: ["Production deployment", "Team training", "Support services", "Performance monitoring"] }
            ].map((phase, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="process-step">
                  {/* Line Connector (except for last item) */}
                  {idx !== 3 && <div className="process-line"></div>}
                  
                  <div className="process-header">
                    <div className="process-num-box">
                      <span className="process-num">{phase.step}</span>
                    </div>
                    <div className="process-icon-small">
                       {/* Simplified icons based on index */}
                       <i className={`text-xl text-gray-900 ${idx===0?'ri-search-2-line':idx===1?'ri-building-line':idx===2?'ri-code-line':'ri-rocket-2-line'}`}></i>
                    </div>
                  </div>

                  <div className="process-content">
                    <div className="process-title-row">
                      <h3 className="process-title">{phase.title}</h3>
                      <span className="process-badge">{phase.time}</span>
                    </div>
                    <p className="process-desc">{phase.desc}</p>
                    <div className="process-grid-mini">
                      {phase.items.map((item, i) => (
                        <div key={i} className="process-mini-item">
                          <i className="ri-check-line text-green"></i> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Process Summary Box */}
          <RevealOnScroll delay={300}>
            <div className="process-summary-box">
              <h3 className="text-2xl font-bold mb-4">End-to-End Digital Transformation</h3>
              <p className="text-gray-300 mb-6">From initial assessment to ongoing optimization, we ensure your digital journey delivers measurable business value.</p>
              <div className="summary-stats">
                <div><div className="text-3xl font-bold">3-12</div><div className="text-sm text-gray-400">Months Timeline</div></div>
                <div className="summary-divider"></div>
                <div><div className="text-3xl font-bold">98%</div><div className="text-sm text-gray-400">Success Rate</div></div>
                <div className="summary-divider"></div>
                <div><div className="text-3xl font-bold">24/7</div><div className="text-sm text-gray-400">Support</div></div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- INDUSTRIES SECTION --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Industries We Transform</h2>
              <p className="section-desc mx-auto">We deliver tailored digital transformation solutions across diverse industries.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
             {[
               { name: "Healthcare", icon: "ri-heart-pulse-line", desc: "Digital health platforms & telemedicine.", list: ["EHR Systems", "Telemedicine", "Patient Portals"] },
               { name: "Financial Services", icon: "ri-bank-line", desc: "Digital banking & fintech solutions.", list: ["Digital Banking", "Payment Systems", "Compliance"] },
               { name: "Manufacturing", icon: "ri-settings-3-line", desc: "Industrial IoT & smart manufacturing.", list: ["Industrial IoT", "Smart Factory", "Supply Chain"] },
               { name: "Retail", icon: "ri-shopping-cart-line", desc: "E-commerce & omnichannel experiences.", list: ["E-commerce", "Omnichannel", "Inventory"] },
               { name: "Education", icon: "ri-graduation-cap-line", desc: "LMS & digital classrooms.", list: ["LMS", "Digital Classroom", "Student Systems"] },
               { name: "Energy", icon: "ri-lightning-line", desc: "Smart grid & energy management.", list: ["Smart Grid", "Energy Mgmt", "Sustainability"] }
             ].map((ind, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ds-card group">
                  <div className="ds-card-icon-box">
                    <i className={`${ind.icon} text-xl`}></i>
                  </div>
                  <h3 className="ds-card-title">{ind.name}</h3>
                  <p className="ds-card-desc">{ind.desc}</p>
                  <ul className="ds-card-list">
                    {ind.list.map((item, i) => (
                      <li key={i} className="text-sm"><i className="ri-check-line text-green"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
             ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (Reusing layout) --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Client Success Stories</h2>
              <p className="section-desc mx-auto">See how organizations have transformed with our solutions.</p>
            </div>
          </RevealOnScroll>
          <div className="grid-3 gap-8">
            {[
              { name: "Dr. Sarah Johnson", role: "CTO, HealthCare Plus", quote: "The new system has improved patient satisfaction by 45% and reduced operational costs by 30%." },
              { name: "Michael Chen", role: "Head of Digital, FirstBank", quote: "We've seen a 60% increase in digital adoption and significantly improved customer experience scores." },
              { name: "Emily Rodriguez", role: "VP Ops, TechMfg Corp", quote: "Production efficiency increased by 35% and quality defects decreased by 50%." }
            ].map((t, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="testimonial-box">
                  <div className="mb-4">
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <div className="text-yellow-400 mb-3">
                    <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                  </div>
                  <p className="italic text-gray-600">"{t.quote}"</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc mx-auto">Get answers to common questions about our digital transformation services.</p>
            </div>
          </RevealOnScroll>

          <div className="faq-wrapper max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div className="faq-item">
                  <button className="faq-btn" onClick={() => toggleFaq(idx)}>
                    <span className="faq-question">{faq.q}</span>
                    <i className={`ri-arrow-down-line transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`faq-answer ${openFaq === idx ? 'open' : ''}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="cta-box bg-dark">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our digital solutions can accelerate your growth and modernize your operations.</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="btn-white">Explore Our Services</button>
                <button className="btn-outline-white">Schedule Consultation</button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default DigitalSolutions;