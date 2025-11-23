import React, { useState, useEffect } from 'react';
import '../styles/DigitalMarketing.css';

const DigitalMarketing = () => {
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
          entry.target.classList.add('dm-reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.dm-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // --- DATA ---
  const stats = [
    { icon: "ri-rocket-line", num: "200+", label: "Campaigns Launched" },
    { icon: "ri-trophy-line", num: "300%", label: "Average ROI Increase" },
    { icon: "ri-time-line", num: "10+", label: "Years Experience" },
    { icon: "ri-team-line", num: "50+", label: "Marketing Experts" }
  ];

  const services = [
    { 
      icon: "ri-line-chart-line", 
      title: "Growth Strategy", 
      desc: "Comprehensive growth frameworks designed to scale your business sustainably.",
      list: ["Market analysis", "Growth planning", "SEO optimization", "Performance tracking"]
    },
    { 
      icon: "ri-team-line", 
      title: "Affiliate Marketing", 
      desc: "Strategic partnership programs that expand your reach through trusted affiliates.",
      list: ["Partner recruitment", "Commission structures", "Performance tracking", "Relationship management"]
    },
    { 
      icon: "ri-article-line", 
      title: "Content Strategy", 
      desc: "Compelling content that resonates with your audience and drives engagement.",
      list: ["Content planning", "Editorial calendar", "Brand messaging", "Content distribution"]
    },
    { 
      icon: "ri-advertisement-line", 
      title: "Paid Media Optimization", 
      desc: "Precision-targeted campaigns that maximize ROI across all digital channels.",
      list: ["Campaign management", "Audience targeting", "Budget optimization", "Performance analysis"]
    },
    { 
      icon: "ri-arrow-up-circle-line", 
      title: "Conversion Rate Optimization", 
      desc: "Systematic testing and optimization to improve your conversion rates.",
      list: ["A/B testing", "User experience optimization", "Landing page optimization", "Funnel analysis"]
    },
    { 
      icon: "ri-settings-3-line", 
      title: "Martech Optimization", 
      desc: "Marketing technology stack optimization for seamless operations.",
      list: ["Technology integration", "Automation setup", "Data management", "Performance monitoring"]
    }
  ];

  const processSteps = [
    { num: "01", icon: "ri-search-2-line", title: "Discovery & Audit", time: "1-2 weeks", desc: "We analyze your current marketing performance, identify opportunities, and assess your competitive landscape to create a baseline.", list: ["Marketing audit report", "Competitive analysis", "Opportunity assessment", "Performance benchmarks"] },
    { num: "02", icon: "ri-route-line", title: "Strategy Development", time: "2-3 weeks", desc: "Create a comprehensive marketing strategy aligned with your business goals and develop detailed campaign roadmaps.", list: ["Marketing strategy framework", "Campaign roadmap", "Content calendar", "Budget allocation"] },
    { num: "03", icon: "ri-rocket-2-line", title: "Campaign Launch", time: "1-2 weeks", desc: "Launch targeted campaigns across multiple channels with precise audience targeting and optimized messaging.", list: ["Campaign deployment", "Creative assets", "Targeting setup", "Tracking implementation"] },
    { num: "04", icon: "ri-line-chart-line", title: "Optimization", time: "Ongoing", desc: "Continuously monitor performance, test variations, and optimize campaigns for maximum ROI and conversion rates.", list: ["Performance monitoring", "A/B testing", "Campaign optimization", "ROI reporting"] },
    { num: "05", icon: "ri-arrow-up-circle-line", title: "Scale & Growth", time: "Ongoing", desc: "Scale successful campaigns, expand to new channels, and implement advanced strategies for sustainable growth.", list: ["Campaign scaling", "Channel expansion", "Advanced automation", "Growth analysis"] }
  ];

  const industries = [
    { icon: "ri-computer-line", title: "SaaS & Technology", desc: "Growth marketing for software companies, from product launches to enterprise sales.", list: ["Product marketing", "Lead generation", "Customer acquisition", "Retention campaigns"] },
    { icon: "ri-shopping-cart-line", title: "E-commerce", desc: "Drive online sales with conversion-focused campaigns and customer journey optimization.", list: ["Shopping campaigns", "Conversion optimization", "Email marketing", "Social commerce"] },
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "Compliant marketing strategies that build trust and drive patient acquisition.", list: ["Patient marketing", "Compliance management", "Content marketing", "Reputation management"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Trust-building campaigns that navigate complex regulations and drive conversions.", list: ["Lead nurturing", "Compliance marketing", "Trust building", "Financial education"] },
    { icon: "ri-briefcase-line", title: "Professional Services", desc: "Thought leadership campaigns that establish expertise and generate qualified leads.", list: ["Thought leadership", "Lead generation", "Content marketing", "Professional networking"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "B2B marketing strategies that showcase capabilities and drive business partnerships.", list: ["B2B marketing", "Trade show marketing", "Partnership development", "Industrial marketing"] }
  ];

  const testimonials = [
    { name: "Jennifer Walsh", role: "CMO", company: "TechStart Solutions", quote: "Athena IQ Solutions transformed our marketing approach. Our lead generation increased by 400% within 6 months, and our cost per acquisition dropped by 60%." },
    { name: "Marcus Thompson", role: "Marketing Director", company: "Global Manufacturing Inc", quote: "Their strategic approach to content marketing established us as industry leaders. We've seen a 250% increase in organic traffic and significantly improved brand recognition." },
    { name: "Sofia Martinez", role: "Growth Manager", company: "E-commerce Elite", quote: "The paid media optimization results exceeded our expectations. ROAS improved by 300% while we expanded to new markets and customer segments." },
    { name: "Alex Chen", role: "VP of Marketing", company: "Digital Products Co", quote: "Their affiliate marketing program development was exceptional. We built a network of 200+ affiliates generating 40% of our total revenue within 12 months." }
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
      
      {/* 1. HERO */}
      <section className="dm-hero">
        <div className="dm-hero-bg"></div>
        <div className="dm-container relative z-10 text-center dm-reveal">
          <h1 className="dm-hero-title">Digital Marketing Excellence</h1>
          <p className="dm-hero-subtitle">
            Drive growth with data-driven marketing strategies that deliver measurable results and sustainable success.
          </p>
          <div className="dm-flex-center">
            <button className="dm-btn-white">Get Marketing Consultation</button>
          </div>
        </div>
      </section>

      {/* 2. STATS */}
      <section className="dm-section-white">
        <div className="dm-container">
          <div className="dm-stats-grid dm-reveal">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="dm-stat-icon-box">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="dm-stat-num">{item.num}</div>
                <div className="dm-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="dm-section-light" id="marketing-services">
        <div className="dm-container">
          <div className="text-center mb-16 dm-reveal">
            <h2 className="dm-section-title">Comprehensive Marketing Solutions</h2>
            <p className="dm-section-subtitle">
              From strategy to execution, we provide end-to-end marketing solutions that drive growth and maximize your digital presence.
            </p>
          </div>
          <div className="dm-services-grid dm-reveal">
            {services.map((svc, i) => (
              <div key={i} className="dm-service-card group">
                <div className="dm-card-icon-box">
                  <i className={`${svc.icon}`}></i>
                </div>
                <h3 className="dm-card-title">{svc.title}</h3>
                <p className="dm-card-desc mb-6">{svc.desc}</p>
                <ul className="dm-list">
                  {svc.list.map((li, j) => (
                    <li key={j} className="dm-list-item">
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

      {/* 4. PROCESS */}
      <section className="dm-section-white">
        <div className="dm-container">
          <div className="text-center mb-16 dm-reveal">
            <h2 className="dm-section-title">Our Marketing Process</h2>
            <p className="dm-section-subtitle">
              We follow a proven methodology to ensure your marketing campaigns deliver measurable results and sustainable growth.
            </p>
          </div>

          <div className="dm-process-wrapper dm-reveal">
            {processSteps.map((step, i) => (
              <div key={i} className="dm-process-step">
                {/* Line connector (except last item) */}
                {i !== processSteps.length - 1 && <div className="dm-process-line"></div>}
                
                <div className="dm-step-header-group">
                  <div className="dm-step-num-circle">{step.num}</div>
                  <div className="dm-step-icon-small">
                    <i className={`${step.icon}`}></i>
                  </div>
                </div>

                <div className="dm-step-content">
                  <div className="dm-step-title-row">
                    <h3 className="dm-step-title">{step.title}</h3>
                    <span className="dm-step-badge">{step.time}</span>
                  </div>
                  <p className="dm-step-desc">{step.desc}</p>
                  <div className="dm-step-grid">
                    {step.list.map((li, j) => (
                      <div key={j} className="dm-check-pill">
                        <i className="ri-check-line"></i>
                        <span>{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="dm-summary-box dm-reveal">
            <h3 className="dm-summary-title">End-to-End Marketing Excellence</h3>
            <p className="dm-summary-desc">
              From strategy to execution, we ensure your marketing campaigns deliver measurable business results at every stage.
            </p>
            <div className="dm-summary-stats">
              <div className="text-center">
                <div className="dm-sum-num">30</div>
                <div className="dm-sum-label">Days to Launch</div>
              </div>
              <div className="dm-divider"></div>
              <div className="text-center">
                <div className="dm-sum-num">300%</div>
                <div className="dm-sum-label">Average ROI</div>
              </div>
              <div className="dm-divider"></div>
              <div className="text-center">
                <div className="dm-sum-num">24/7</div>
                <div className="dm-sum-label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY SOLUTIONS */}
      <section className="dm-section-light">
        <div className="dm-container">
          <div className="text-center mb-16 dm-reveal">
            <h2 className="dm-section-title">Industry-Specific Marketing Solutions</h2>
            <p className="dm-section-subtitle">
              We understand the unique challenges and opportunities in each industry, delivering tailored marketing strategies that drive results.
            </p>
          </div>
          <div className="dm-services-grid dm-reveal">
            {industries.map((ind, i) => (
              <div key={i} className="dm-service-card group">
                <div className="dm-card-icon-box">
                  <i className={`${ind.icon}`}></i>
                </div>
                <h3 className="dm-card-title">{ind.title}</h3>
                <p className="dm-card-desc mb-6">{ind.desc}</p>
                <div className="dm-list-col">
                  {ind.list.map((li, j) => (
                    <div key={j} className="dm-list-item">
                      <i className="ri-check-line"></i>
                      <span>{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="dm-section-white">
        <div className="dm-container">
          <div className="text-center mb-16 dm-reveal">
            <h2 className="dm-section-title">Client Success Stories</h2>
            <p className="dm-section-subtitle">
              See how businesses across industries have achieved remarkable growth with our strategic marketing solutions.
            </p>
          </div>
          <div className="dm-testimonials-grid dm-reveal">
            {testimonials.map((t, i) => (
              <div key={i} className="dm-testimonial-card">
                <div className="mb-6">
                  <h4 className="dm-test-name">{t.name}</h4>
                  <p className="dm-test-role">{t.role}</p>
                  <p className="dm-test-company">{t.company}</p>
                </div>
                <div className="mb-4">
                  <div className="dm-stars">
                    {[...Array(5)].map((_, s) => <i key={s} className="ri-star-fill"></i>)}
                  </div>
                  <blockquote className="dm-quote">"{t.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="dm-section-light">
        <div className="dm-container">
          <div className="text-center mb-16 dm-reveal">
            <h2 className="dm-section-title">Frequently Asked Questions</h2>
            <p className="dm-section-subtitle">
              Get answers to common questions about our marketing services and approach.
            </p>
          </div>
          <div className="dm-faq-wrapper dm-reveal">
            {faqs.map((q, i) => (
              <div key={i} className="dm-faq-item">
                <button className="dm-faq-btn" onClick={() => toggleFaq(i)}>
                  <h3 className="dm-faq-question">{q}</h3>
                  <div className="dm-faq-icon">
                    <i className={`ri-add-line ${openFaq === i ? 'rotate' : ''}`}></i>
                  </div>
                </button>
                <div className={`dm-faq-content ${openFaq === i ? 'open' : ''}`}>
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
      <section className="dm-cta-section">
        <div className="dm-container text-center dm-reveal">
          <div className="dm-cta-content">
            <h2 className="dm-cta-title">Let's Grow Together</h2>
            <p className="dm-cta-desc">
              Ready to accelerate your business growth with strategic digital marketing? Let's create a customized plan for your success.
            </p>
            <div className="dm-cta-buttons">
              <button className="dm-btn-white">Get Started Now</button>
              <button className="dm-btn-outline">Schedule Strategy Call</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketing;