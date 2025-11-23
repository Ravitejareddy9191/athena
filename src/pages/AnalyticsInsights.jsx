import React, { useState, useEffect } from 'react';
import '../styles/AnalyticsInsights.css';

const AnalyticsInsights = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // --- REVEAL ON SCROLL ---
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
  const services = [
    { icon: "ri-database-2-line", title: "Digital Analytics Platform Implementation & Migration", sub: "Seamless platform transitions", desc: "Expert implementation and migration of digital analytics platforms to maximize data value and operational efficiency." },
    { icon: "ri-lightbulb-line", title: "Data Analytics Strategy", sub: "Aligned with business goals", desc: "Create comprehensive data strategies that align with your business objectives and drive measurable outcomes." },
    { icon: "ri-settings-3-line", title: "Data Engineering", sub: "Robust data infrastructure", desc: "Build scalable data pipelines and infrastructure to support your analytics and business intelligence needs." },
    { icon: "ri-flask-line", title: "Applied Data Sciences", sub: "Advanced analytics solutions", desc: "Leverage machine learning and statistical modeling to extract actionable insights from your data." },
    { icon: "ri-bar-chart-line", title: "Data Visualization", sub: "Interactive dashboards", desc: "Transform complex data into compelling visual stories with interactive dashboards and reporting tools." },
    { icon: "ri-flask-fill", title: "A/B Testing", sub: "Data-driven optimization", desc: "Design and execute A/B tests to optimize user experience and drive conversion improvements." }
  ];

  const stats = [
    { icon: "ri-database-2-line", num: "100+", label: "Data Sources Connected" },
    { icon: "ri-check-double-line", num: "98%", label: "Data Accuracy Rate" },
    { icon: "ri-speed-up-line", num: "250%", label: "Average Decision Speed" },
    { icon: "ri-time-line", num: "15+", label: "Years Analytics Experience" },
    { icon: "ri-team-line", num: "80+", label: "Data Scientists" }
  ];

  const processSteps = [
    { num: "01", icon: "ri-search-2-line", title: "Data Discovery & Assessment", time: "1-2 weeks", desc: "We analyze your current data landscape, identify key sources, and assess data quality to create a comprehensive understanding of your analytics needs.", items: ["Data audit report", "Source inventory", "Quality assessment", "Gap analysis"] },
    { num: "02", icon: "ri-route-line", title: "Strategy & Architecture", time: "2-3 weeks", desc: "Design a scalable analytics architecture aligned with your business objectives and develop a roadmap for implementation.", items: ["Analytics strategy", "Architecture design", "Implementation roadmap", "KPI framework"] },
    { num: "03", icon: "ri-settings-3-line", title: "Implementation & Integration", time: "3-6 weeks", desc: "Deploy analytics solutions, integrate data sources, and establish automated pipelines for seamless data flow.", items: ["Platform setup", "Data integration", "Pipeline automation", "Dashboard creation"] },
    { num: "04", icon: "ri-line-chart-line", title: "Optimization & Insights", time: "Ongoing", desc: "Fine-tune performance, generate actionable insights, and ensure your analytics deliver maximum business value.", items: ["Performance optimization", "Insight generation", "Report automation", "User training"] },
    { num: "05", icon: "ri-arrow-up-circle-line", title: "Scale & Innovation", time: "Ongoing", desc: "Expand analytics capabilities, implement advanced features, and drive continuous improvement in decision-making.", items: ["Advanced analytics", "ML implementation", "Scalability planning", "Innovation roadmap"] }
  ];

  const industries = [
    { icon: "ri-computer-line", title: "SaaS & Technology", desc: "Advanced analytics for software companies, from user behavior to product optimization.", list: ["User analytics", "Product metrics", "Churn prediction", "Growth tracking"] },
    { icon: "ri-shopping-cart-line", title: "E-commerce", desc: "Customer journey analytics and sales optimization for online retail businesses.", list: ["Sales analytics", "Customer segmentation", "Inventory optimization", "Conversion tracking"] },
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "Compliant analytics solutions that improve patient outcomes and operational efficiency.", list: ["Patient analytics", "Operational metrics", "Clinical insights", "Compliance reporting"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Risk analytics and performance tracking for banks, insurance, and investment firms.", list: ["Risk analytics", "Performance tracking", "Regulatory reporting", "Customer insights"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "Operational analytics that optimize production, quality, and supply chain efficiency.", list: ["Production analytics", "Quality metrics", "Supply chain optimization", "Predictive maintenance"] },
    { icon: "ri-store-line", title: "Retail & CPG", desc: "Consumer behavior analytics and market insights for retail and consumer goods.", list: ["Consumer analytics", "Market research", "Demand forecasting", "Brand performance"] }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "COO", company: "Manufacturing Excellence Corp", quote: "Athena IQ Solutions transformed our data infrastructure. We now have real-time insights that helped us increase operational efficiency by 40% and reduce costs by 30%." },
    { name: "David Rodriguez", role: "VP of Analytics", company: "TechFlow Solutions", quote: "Their predictive analytics models revolutionized our customer retention strategy. We've seen a 60% improvement in churn prediction accuracy and saved millions in retention costs." },
    { name: "Emily Chen", role: "Head of Strategy", company: "Growth Dynamics Inc", quote: "The business intelligence dashboard they created gives us insights we never had before. Decision-making is now 3x faster and our ROI tracking is completely automated." },
    { name: "Michael Thompson", role: "CTO", company: "Data-Driven Enterprises", quote: "Their data migration and analytics implementation was flawless. We consolidated 15 data sources into one unified platform and improved reporting accuracy by 95%." }
  ];

  const faqs = [
    "How long does it take to implement a complete analytics solution?",
    "What types of data sources can you integrate?",
    "How do you ensure data security and compliance?",
    "Can you work with our existing analytics tools?",
    "What ongoing support do you provide?",
    "How do you measure the success of analytics implementations?",
    "Do you provide training for our team?",
    "What's the difference between business intelligence and advanced analytics?"
  ];

  const resultsMetrics = [
    { label: "Revenue Growth", val: "127%", color: "blue", width: "85%" },
    { label: "Customer Acquisition", val: "89%", color: "green", width: "89%" },
    { label: "Market Share", val: "76%", color: "purple", width: "76%" },
    { label: "ROI Improvement", val: "94%", color: "orange", width: "94%" }
  ];

  return (
    <div className="ai-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="ai-hero">
        <div className="ai-hero-bg"></div>
        <div className="ai-container relative z-10 text-center ai-reveal">
          <h1 className="ai-hero-title">Turn Data Into Growth</h1>
          <p className="ai-hero-subtitle">
            Unlock the power of your data with advanced analytics solutions that drive actionable insights and measurable business outcomes.
          </p>
          <div className="ai-flex-center">
             <button className="ai-btn-white">Get Analytics Consultation</button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="ai-section-light" id="analytics-services">
        <div className="ai-container">
          <div className="ai-services-grid ai-reveal">
            {services.map((svc, i) => (
              <div key={i} className="ai-service-card group">
                <div className="ai-service-header">
                  <div className="ai-icon-box">
                    <i className={`${svc.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="ai-card-title">{svc.title}</h3>
                    <p className="ai-card-sub">{svc.sub}</p>
                    <p className="ai-card-desc">{svc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
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

      {/* 4. PROCESS SECTION */}
      <section className="ai-section-white">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Our Analytics Process</h2>
            <p className="ai-section-subtitle">
              We follow a proven methodology to transform your data into actionable insights that drive strategic business decisions.
            </p>
          </div>
          
          <div className="ai-process-wrapper ai-reveal">
            {processSteps.map((step, i) => (
              <div key={i} className="ai-process-step">
                {/* Connector Line (except for last item) */}
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
                    {step.items.map((item, j) => (
                      <div key={j} className="ai-check-item">
                        <i className="ri-check-line"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ai-summary-box ai-reveal">
            <h3 className="ai-summary-title">End-to-End Analytics Excellence</h3>
            <p className="ai-summary-desc">
              From data strategy to advanced insights, we ensure your analytics infrastructure delivers measurable business value at every stage.
            </p>
            <div className="ai-summary-stats">
              <div className="text-center">
                <div className="ai-sum-num">45</div>
                <div className="ai-sum-label">Days to Deploy</div>
              </div>
              <div className="ai-divider"></div>
              <div className="text-center">
                <div className="ai-sum-num">250%</div>
                <div className="ai-sum-label">Faster Decisions</div>
              </div>
              <div className="ai-divider"></div>
              <div className="text-center">
                <div className="ai-sum-num">24/7</div>
                <div className="ai-sum-label">Data Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY SOLUTIONS */}
      <section className="ai-section-light">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Industry-Specific Analytics Solutions</h2>
            <p className="ai-section-subtitle">
              We understand the unique data challenges and opportunities in each industry, delivering tailored analytics solutions that drive measurable results.
            </p>
          </div>
          <div className="ai-industry-grid ai-reveal">
            {industries.map((ind, i) => (
              <div key={i} className="ai-card-std group">
                <div className="ai-icon-box-lg">
                  <i className={`${ind.icon}`}></i>
                </div>
                <h3 className="ai-card-title">{ind.title}</h3>
                <p className="ai-card-desc mb-4">{ind.desc}</p>
                <div className="ai-list-col">
                  {ind.list.map((li, j) => (
                    <div key={j} className="ai-check-item">
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

      {/* 6. CLIENT SUCCESS STORIES */}
      <section className="ai-section-white">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Client Success Stories</h2>
            <p className="ai-section-subtitle">
              See how organizations across industries have transformed their decision-making with our comprehensive analytics solutions.
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
              Get answers to common questions about our analytics services and implementation approach.
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
                    Our analytics solutions are designed to be flexible and scalable. We work closely with your team to ensure data security and providing ongoing support for maximum value.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DATA DRIVEN RESULTS (Visuals) */}
      <section className="ai-section-white">
        <div className="ai-container">
          <div className="text-center mb-16 ai-reveal">
            <h2 className="ai-section-title">Data-Driven Results</h2>
            <p className="ai-section-subtitle">
              Visualize your success with comprehensive analytics dashboards and insights
            </p>
          </div>

          <div className="ai-results-dashboard ai-reveal">
            {/* Top Metrics Grid */}
            <div className="ai-results-top-grid">
              {resultsMetrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="ai-res-val">{m.val}</div>
                  <div className="ai-res-label">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Progress Bars */}
            <div className="ai-bars-wrapper">
              {resultsMetrics.map((m, i) => (
                <div key={i} className="ai-bar-row">
                  <div className="ai-bar-label">{m.label}</div>
                  <div className="ai-bar-track">
                    <div 
                      className={`ai-bar-fill ${m.color}`} 
                      style={{ width: m.width }}
                    ></div>
                  </div>
                  <div className="ai-bar-val">{m.val}</div>
                </div>
              ))}
            </div>

            {/* Bottom 3 Cards */}
            <div className="ai-res-cards-grid">
              <div className="ai-res-card">
                <div className="ai-res-icon bg-blue-100">
                  <i className="ri-line-chart-line text-blue-600"></i>
                </div>
                <h3 className="ai-res-card-title">Real-time Tracking</h3>
                <p className="ai-res-card-desc">Monitor key performance indicators as they happen</p>
              </div>
              <div className="ai-res-card">
                <div className="ai-res-icon bg-green-100">
                  <i className="ri-pie-chart-line text-green-600"></i>
                </div>
                <h3 className="ai-res-card-title">Custom Dashboards</h3>
                <p className="ai-res-card-desc">Tailored visualizations for your specific needs</p>
              </div>
              <div className="ai-res-card">
                <div className="ai-res-icon bg-purple-100">
                  <i className="ri-brain-line text-purple-600"></i>
                </div>
                <h3 className="ai-res-card-title">AI Insights</h3>
                <p className="ai-res-card-desc">Automated analysis and predictive recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="ai-cta-section">
        <div className="ai-container text-center ai-reveal">
          <div className="ai-cta-content">
            <h2 className="ai-cta-title">Ready to Transform Your Data?</h2>
            <p className="ai-cta-desc">
              Connect with our analytics experts to discover how data-driven insights can accelerate your business growth.
            </p>
            <div className="ai-flex-center">
              <button className="ai-btn-white icon-btn">
                <i className="ri-user-star-line"></i>
                Talk to a Data Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsInsights;