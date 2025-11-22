import React, { useState, useEffect, useRef } from 'react';
import '../styles/DigitalMarketing.css'; 

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

const DigitalMarketing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- DATA ---
  const stats = [
    { icon: 'ri-rocket-line', num: '200+', label: 'Campaigns Launched' },
    { icon: 'ri-trophy-line', num: '300%', label: 'Average ROI Increase' },
    { icon: 'ri-time-line', num: '10+', label: 'Years Experience' },
    { icon: 'ri-team-line', num: '50+', label: 'Marketing Experts' }
  ];

  const services = [
    { title: "Growth Strategy", icon: "ri-line-chart-line", desc: "Comprehensive growth frameworks designed to scale your business sustainably.", list: ["Market analysis", "Growth planning", "SEO optimization", "Performance tracking"] },
    { title: "Affiliate Marketing", icon: "ri-team-line", desc: "Strategic partnership programs that expand your reach through trusted affiliates.", list: ["Partner recruitment", "Commission structures", "Performance tracking", "Relationship management"] },
    { title: "Content Strategy", icon: "ri-article-line", desc: "Compelling content that resonates with your audience and drives engagement.", list: ["Content planning", "Editorial calendar", "Brand messaging", "Content distribution"] },
    { title: "Paid Media Optimization", icon: "ri-advertisement-line", desc: "Precision-targeted campaigns that maximize ROI across all digital channels.", list: ["Campaign management", "Audience targeting", "Budget optimization", "Performance analysis"] },
    { title: "Conversion Rate Optimization", icon: "ri-arrow-up-circle-line", desc: "Systematic testing and optimization to improve your conversion rates.", list: ["A/B testing", "User experience optimization", "Landing page optimization", "Funnel analysis"] },
    { title: "Martech Optimization", icon: "ri-settings-3-line", desc: "Marketing technology stack optimization for seamless operations.", list: ["Technology integration", "Automation setup", "Data management", "Performance monitoring"] }
  ];

  const process = [
    { step: "01", title: "Discovery & Audit", time: "1-2 weeks", icon: "ri-search-2-line", desc: "We analyze your current marketing performance, identify opportunities, and assess your competitive landscape.", list: ["Marketing audit report", "Competitive analysis", "Opportunity assessment", "Performance benchmarks"] },
    { step: "02", title: "Strategy Development", time: "2-3 weeks", icon: "ri-route-line", desc: "Create a comprehensive marketing strategy aligned with your business goals and develop detailed campaign roadmaps.", list: ["Marketing strategy framework", "Campaign roadmap", "Content calendar", "Budget allocation"] },
    { step: "03", title: "Campaign Launch", time: "1-2 weeks", icon: "ri-rocket-2-line", desc: "Launch targeted campaigns across multiple channels with precise audience targeting and optimized messaging.", list: ["Campaign deployment", "Creative assets", "Targeting setup", "Tracking implementation"] },
    { step: "04", title: "Optimization", time: "Ongoing", icon: "ri-line-chart-line", desc: "Continuously monitor performance, test variations, and optimize campaigns for maximum ROI and conversion rates.", list: ["Performance monitoring", "A/B testing", "Campaign optimization", "ROI reporting"] },
    { step: "05", title: "Scale & Growth", time: "Ongoing", icon: "ri-arrow-up-circle-line", desc: "Scale successful campaigns, expand to new channels, and implement advanced strategies for sustainable growth.", list: ["Campaign scaling", "Channel expansion", "Advanced automation", "Growth analysis"] }
  ];

  const industries = [
    { name: "SaaS & Technology", icon: "ri-computer-line", desc: "Growth marketing for software companies.", list: ["Product marketing", "Lead generation", "Customer acquisition", "Retention campaigns"] },
    { name: "E-commerce", icon: "ri-shopping-cart-line", desc: "Drive online sales with conversion campaigns.", list: ["Shopping campaigns", "Conversion optimization", "Email marketing", "Social commerce"] },
    { name: "Healthcare", icon: "ri-heart-pulse-line", desc: "Compliant marketing strategies that build trust.", list: ["Patient marketing", "Compliance management", "Content marketing", "Reputation management"] },
    { name: "Financial Services", icon: "ri-bank-line", desc: "Trust-building campaigns that drive conversions.", list: ["Lead nurturing", "Compliance marketing", "Trust building", "Financial education"] },
    { name: "Professional Services", icon: "ri-briefcase-line", desc: "Thought leadership campaigns that establish expertise.", list: ["Thought leadership", "Lead generation", "Content marketing", "Professional networking"] },
    { name: "Manufacturing", icon: "ri-settings-3-line", desc: "B2B marketing strategies that drive partnerships.", list: ["B2B marketing", "Trade show marketing", "Partnership development", "Industrial marketing"] }
  ];

  const testimonials = [
    { name: "Jennifer Walsh", role: "CMO, TechStart Solutions", quote: "Athena IQ Solutions transformed our marketing approach. Our lead generation increased by 400% within 6 months, and our cost per acquisition dropped by 60%." },
    { name: "Marcus Thompson", role: "Marketing Director, Global Manufacturing", quote: "Their strategic approach to content marketing established us as industry leaders. We've seen a 250% increase in organic traffic." },
    { name: "Sofia Martinez", role: "Growth Manager, E-commerce Elite", quote: "The paid media optimization results exceeded our expectations. ROAS improved by 300% while we expanded to new markets." },
    { name: "Alex Chen", role: "VP Marketing, Digital Products Co", quote: "Their affiliate marketing program development was exceptional. We built a network of 200+ affiliates generating 40% of our total revenue." }
  ];

  const faqs = [
    "How long does it take to see results from digital marketing?",
    "What's included in your marketing strategy development?",
    "How do you measure marketing ROI?",
    "Can you work with our existing marketing team?",
    "What industries do you have experience with?",
    "How do you handle budget allocation across channels?",
    "Do you provide creative services and content creation?",
    "How do you stay updated with marketing trends and changes?"
  ];

  return (
    <div className="dm-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="dm-hero">
        <div className="dm-hero-overlay"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <h1 className="dm-hero-title">Digital Marketing Excellence</h1>
            <p className="dm-hero-subtitle">
              Drive growth with data-driven marketing strategies that deliver measurable results and sustainable success.
            </p>
            <div className="dm-hero-btn-wrapper">
              <button className="btn-white">Get Marketing Consultation</button>
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
                <div className="dm-stat-card text-center">
                  <div className="dm-stat-icon-box">
                    <i className={`${stat.icon} text-2xl`}></i>
                  </div>
                  <div className="dm-stat-num">{stat.num}</div>
                  <div className="dm-stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="marketing-services" className="section-padding bg-light">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Comprehensive Marketing Solutions</h2>
              <p className="section-desc mx-auto">From strategy to execution, we provide end-to-end marketing solutions that drive growth and maximize your digital presence.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {services.map((srv, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="dm-card">
                  <div className="dm-card-icon-box">
                    <i className={`${srv.icon} text-2xl`}></i>
                  </div>
                  <h3 className="dm-card-title">{srv.title}</h3>
                  <p className="dm-card-desc">{srv.desc}</p>
                  <ul className="dm-card-list">
                    {srv.list.map((item, i) => (
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
              <h2 className="section-title">Our Marketing Process</h2>
              <p className="section-desc mx-auto">We follow a proven methodology to ensure your marketing campaigns deliver measurable results.</p>
            </div>
          </RevealOnScroll>

          <div className="dm-process-wrapper">
            {process.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="dm-process-step">
                  {/* Vertical Line (except last item) */}
                  {idx !== process.length - 1 && <div className="dm-process-line"></div>}
                  
                  <div className="dm-process-header">
                    <div className="dm-process-num">{step.step}</div>
                    <div className="dm-process-icon">
                      <i className={`${step.icon} text-xl`}></i>
                    </div>
                  </div>

                  <div className="dm-process-content">
                    <div className="dm-process-title-row">
                      <h3 className="dm-process-title">{step.title}</h3>
                      <span className="dm-process-badge">{step.time}</span>
                    </div>
                    <p className="dm-process-desc">{step.desc}</p>
                    <div className="dm-process-grid">
                      {step.list.map((item, i) => (
                        <div key={i} className="dm-process-mini-item">
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
            <div className="dm-summary-box">
              <h3 className="text-2xl font-bold mb-4">End-to-End Marketing Excellence</h3>
              <p className="text-gray-300 mb-6">From strategy to execution, we ensure your marketing campaigns deliver measurable business results.</p>
              <div className="dm-summary-stats">
                <div><div className="text-3xl font-bold">30</div><div className="text-sm text-gray-400">Days to Launch</div></div>
                <div className="dm-summary-divider"></div>
                <div><div className="text-3xl font-bold">300%</div><div className="text-sm text-gray-400">Average ROI</div></div>
                <div className="dm-summary-divider"></div>
                <div><div className="text-3xl font-bold">24/7</div><div className="text-sm text-gray-400">Monitoring</div></div>
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
              <h2 className="section-title">Industry-Specific Solutions</h2>
              <p className="section-desc mx-auto">We understand the unique challenges and opportunities in each industry.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {industries.map((ind, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="dm-card">
                  <div className="dm-card-icon-box">
                    <i className={`${ind.icon} text-xl`}></i>
                  </div>
                  <h3 className="dm-card-title">{ind.name}</h3>
                  <p className="dm-card-desc">{ind.desc}</p>
                  <ul className="dm-card-list">
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
              <p className="section-desc mx-auto">See how businesses across industries have achieved remarkable growth.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-2 gap-8">
            {testimonials.map((t, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="dm-testimonial-card">
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
              <p className="section-desc mx-auto">Get answers to common questions about our marketing services.</p>
            </div>
          </RevealOnScroll>

          <div className="dm-faq-wrapper max-w-4xl mx-auto">
            {faqs.map((q, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div className="dm-faq-item">
                  <button className="dm-faq-btn" onClick={() => toggleFaq(idx)}>
                    <h3 className="dm-faq-q">{q}</h3>
                    <div className="dm-faq-icon">
                      <i className={`ri-add-line transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}></i>
                    </div>
                  </button>
                  <div className={`dm-faq-ans ${openFaq === idx ? 'open' : ''}`}>
                    <p>Our data-driven approach ensures comprehensive solutions tailored to your specific business needs and industry standards.</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Let's Grow Together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Ready to accelerate your business growth with strategic digital marketing?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-white">Get Started Now</button>
              <button className="btn-outline-white">Schedule Strategy Call</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketing;