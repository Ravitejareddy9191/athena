import React, { useState, useEffect, useRef } from 'react';
import '../styles/AnalyticsInsights.css'; 

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

const AnalyticsInsights = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // --- DATA ---
  const services = [
    { title: "Digital Analytics Platform Implementation & Migration", icon: "ri-database-2-line", sub: "Seamless platform transitions", desc: "Expert implementation and migration of digital analytics platforms to maximize data value and operational efficiency." },
    { title: "Data Analytics Strategy", icon: "ri-lightbulb-line", sub: "Aligned with business goals", desc: "Create comprehensive data strategies that align with your business objectives and drive measurable outcomes." },
    { title: "Data Engineering", icon: "ri-settings-3-line", sub: "Robust data infrastructure", desc: "Build scalable data pipelines and infrastructure to support your analytics and business intelligence needs." },
    { title: "Applied Data Sciences", icon: "ri-flask-line", sub: "Advanced analytics solutions", desc: "Leverage machine learning and statistical modeling to extract actionable insights from your data." },
    { title: "Data Visualization", icon: "ri-bar-chart-line", sub: "Interactive dashboards", desc: "Transform complex data into compelling visual stories with interactive dashboards and reporting tools." },
    { title: "A/B Testing", icon: "ri-flask-fill", sub: "Data-driven optimization", desc: "Design and execute A/B tests to optimize user experience and drive conversion improvements." }
  ];

  const stats = [
    { icon: 'ri-database-2-line', num: '100+', label: 'Data Sources Connected' },
    { icon: 'ri-check-double-line', num: '98%', label: 'Data Accuracy Rate' },
    { icon: 'ri-speed-up-line', num: '250%', label: 'Average Decision Speed' },
    { icon: 'ri-time-line', num: '15+', label: 'Years Analytics Experience' },
    { icon: 'ri-team-line', num: '80+', label: 'Data Scientists' }
  ];

  const process = [
    { step: "01", title: "Data Discovery & Assessment", time: "1-2 weeks", icon: "ri-search-2-line", desc: "We analyze your current data landscape, identify key sources, and assess data quality.", list: ["Data audit report", "Source inventory", "Quality assessment", "Gap analysis"] },
    { step: "02", title: "Strategy & Architecture", time: "2-3 weeks", icon: "ri-route-line", desc: "Design a scalable analytics architecture aligned with your business objectives.", list: ["Analytics strategy", "Architecture design", "Implementation roadmap", "KPI framework"] },
    { step: "03", title: "Implementation & Integration", time: "3-6 weeks", icon: "ri-settings-3-line", desc: "Deploy analytics solutions, integrate data sources, and establish automated pipelines.", list: ["Platform setup", "Data integration", "Pipeline automation", "Dashboard creation"] },
    { step: "04", title: "Optimization & Insights", time: "Ongoing", icon: "ri-line-chart-line", desc: "Fine-tune performance, generate actionable insights, and ensure maximum value.", list: ["Performance optimization", "Insight generation", "Report automation", "User training"] },
    { step: "05", title: "Scale & Innovation", time: "Ongoing", icon: "ri-arrow-up-circle-line", desc: "Expand analytics capabilities, implement advanced features, and drive continuous improvement.", list: ["Advanced analytics", "ML implementation", "Scalability planning", "Innovation roadmap"] }
  ];

  const industries = [
    { name: "SaaS & Technology", icon: "ri-computer-line", desc: "Advanced analytics for software companies.", list: ["User analytics", "Product metrics", "Churn prediction", "Growth tracking"] },
    { name: "E-commerce", icon: "ri-shopping-cart-line", desc: "Customer journey analytics and sales optimization.", list: ["Sales analytics", "Customer segmentation", "Inventory optimization", "Conversion tracking"] },
    { name: "Healthcare", icon: "ri-heart-pulse-line", desc: "Compliant analytics solutions for patient outcomes.", list: ["Patient analytics", "Operational metrics", "Clinical insights", "Compliance reporting"] },
    { name: "Financial Services", icon: "ri-bank-line", desc: "Risk analytics and performance tracking.", list: ["Risk analytics", "Performance tracking", "Regulatory reporting", "Customer insights"] },
    { name: "Manufacturing", icon: "ri-settings-3-line", desc: "Operational analytics that optimize production.", list: ["Production analytics", "Quality metrics", "Supply chain opt", "Predictive maintenance"] },
    { name: "Retail & CPG", icon: "ri-store-line", desc: "Consumer behavior analytics and market insights.", list: ["Consumer analytics", "Market research", "Demand forecasting", "Brand performance"] }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "COO, Manufacturing Excellence Corp", quote: "Athena IQ Solutions transformed our data infrastructure. We now have real-time insights that helped us increase operational efficiency by 40%." },
    { name: "David Rodriguez", role: "VP Analytics, TechFlow Solutions", quote: "Their predictive analytics models revolutionized our customer retention strategy. We've seen a 60% improvement in churn prediction accuracy." },
    { name: "Emily Chen", role: "Head of Strategy, Growth Dynamics", quote: "The business intelligence dashboard they created gives us insights we never had before. Decision-making is now 3x faster." },
    { name: "Michael Thompson", role: "CTO, Data-Driven Enterprises", quote: "Their data migration implementation was flawless. We consolidated 15 data sources into one unified platform." }
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

  return (
    <div className="analytics-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="analytics-hero">
        <div className="analytics-hero-overlay"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <h1 className="analytics-hero-title">Turn Data Into Growth</h1>
            <p className="analytics-hero-subtitle">
              Unlock the power of your data with advanced analytics solutions that drive actionable insights and measurable business outcomes.
            </p>
            <div className="analytics-hero-btn-wrapper">
              <button className="btn-white">Get Analytics Consultation</button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- SERVICES GRID (Icon Left) --- */}
      <section id="analytics-services" className="section-padding bg-light">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid-3 gap-8">
              {services.map((srv, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <div className="analytics-service-card">
                    <div className="flex items-start gap-4">
                      <div className="analytics-card-icon">
                        <i className={`${srv.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="analytics-card-title">{srv.title}</h3>
                        <p className="analytics-card-subtitle">{srv.sub}</p>
                        <p className="analytics-card-desc">{srv.desc}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (5 Columns) --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="analytics-stats-grid">
            {stats.map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="text-center">
                  <div className="analytics-stat-icon">
                    <i className={`${stat.icon}`}></i>
                  </div>
                  <div className="analytics-stat-number">{stat.num}</div>
                  <div className="analytics-stat-label">{stat.label}</div>
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
              <h2 className="section-title">Our Analytics Process</h2>
              <p className="section-desc mx-auto">We follow a proven methodology to transform your data into actionable insights.</p>
            </div>
          </RevealOnScroll>

          <div className="analytics-process-wrapper">
            {process.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="analytics-process-item">
                  {/* Vertical Line */}
                  {idx !== process.length - 1 && <div className="analytics-process-line"></div>}
                  
                  <div className="flex gap-8 relative z-10">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="analytics-step-number">{step.step}</div>
                      <div className="analytics-step-icon">
                        <i className={`${step.icon}`}></i>
                      </div>
                    </div>

                    <div className="analytics-process-card">
                      <div className="analytics-process-header">
                        <h3>{step.title}</h3>
                        <span className="analytics-process-badge">{step.time}</span>
                      </div>
                      <p className="analytics-process-desc">{step.desc}</p>
                      <div className="grid-2 gap-4">
                        {step.list.map((item, i) => (
                          <div key={i} className="analytics-process-tag">
                            <i className="ri-check-line"></i>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Summary Box */}
          <RevealOnScroll delay={300}>
            <div className="analytics-summary-box">
              <h3 className="text-2xl font-bold mb-4 text-white">End-to-End Analytics Excellence</h3>
              <p className="text-gray-300 mb-6">From data strategy to advanced insights, we ensure your analytics infrastructure delivers value.</p>
              <div className="analytics-summary-stats">
                <div><div className="text-3xl font-bold text-white">45</div><div className="text-sm text-gray-400">Days to Deploy</div></div>
                <div className="analytics-summary-divider"></div>
                <div><div className="text-3xl font-bold text-white">250%</div><div className="text-sm text-gray-400">Faster Decisions</div></div>
                <div className="analytics-summary-divider"></div>
                <div><div className="text-3xl font-bold text-white">24/7</div><div className="text-sm text-gray-400">Data Monitoring</div></div>
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
              <h2 className="section-title">Industry-Specific Analytics Solutions</h2>
              <p className="section-desc mx-auto">We deliver tailored analytics solutions that drive measurable results across industries.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {industries.map((ind, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="analytics-card">
                  <div className="analytics-card-icon-lg">
                    <i className={`${ind.icon}`}></i>
                  </div>
                  <h3 className="analytics-card-title">{ind.name}</h3>
                  <p className="analytics-card-desc">{ind.desc}</p>
                  <ul className="analytics-check-list">
                    {ind.list.map((item, i) => (
                      <li key={i}><i className="ri-check-line"></i> {item}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- DATA RESULTS VISUALIZATION --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Data-Driven Results</h2>
              <p className="section-desc mx-auto">Visualize your success with comprehensive analytics dashboards and insights</p>
            </div>
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
              {/* Top Stats Row */}
              <div className="grid-4 gap-6 mb-8">
                {[
                  { val: "127%", label: "Revenue Growth" },
                  { val: "89%", label: "Customer Acquisition" },
                  { val: "76%", label: "Market Share" },
                  { val: "94%", label: "ROI Improvement" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.val}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                {[
                  { label: "Revenue Growth", width: "85%", val: "127%", color: "bg-blue-500" },
                  { label: "Customer Acquisition", width: "89%", val: "89%", color: "bg-green-500" },
                  { label: "Market Share", width: "76%", val: "76%", color: "bg-purple-500" },
                  { label: "ROI Improvement", width: "94%", val: "94%", color: "bg-orange-500" }
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-600 font-medium">{bar.label}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-1000 ${bar.color}`} style={{ width: bar.width }}></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 w-12 text-right">{bar.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid-3 gap-6">
              {[
                { icon: "ri-line-chart-line", color: "text-blue-600", bg: "bg-blue-100", title: "Real-time Tracking", desc: "Monitor key performance indicators as they happen" },
                { icon: "ri-pie-chart-line", color: "text-green-600", bg: "bg-green-100", title: "Custom Dashboards", desc: "Tailored visualizations for your specific needs" },
                { icon: "ri-brain-line", color: "text-purple-600", bg: "bg-purple-100", title: "AI Insights", desc: "Automated analysis and predictive recommendations" }
              ].map((feat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${feat.bg}`}>
                    <i className={`${feat.icon} ${feat.color} text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-600">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header text-center">
              <h2 className="section-title">Client Success Stories</h2>
              <p className="section-desc mx-auto">See how organizations have transformed their decision-making.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-2 gap-8">
            {testimonials.map((t, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="analytics-testimonial-card">
                  <div className="mb-6">
                    <h4 className="analytics-testimonial-name">{t.name}</h4>
                    <p className="analytics-testimonial-role">{t.role}</p>
                  </div>
                  <div className="text-yellow-400 mb-4 text-sm">
                    <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                  </div>
                  <blockquote className="analytics-testimonial-quote">"{t.quote}"</blockquote>
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
              <p className="section-desc mx-auto">Get answers to common questions about our analytics services.</p>
            </div>
          </RevealOnScroll>

          <div className="analytics-faq-wrapper max-w-4xl mx-auto">
            {faqs.map((q, idx) => (
              <RevealOnScroll key={idx} delay={idx * 50}>
                <div className="mb-4">
                  <button className="analytics-faq-btn" onClick={() => toggleFaq(idx)}>
                    <h3 className="analytics-faq-question">{q}</h3>
                    <div className="analytics-faq-icon">
                      <i className={`ri-add-line transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}></i>
                    </div>
                  </button>
                  <div className={`analytics-faq-content ${openFaq === idx ? 'open' : ''}`}>
                    <p>We offer tailored support and integration services to ensure seamless adoption of our analytics solutions.</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="analytics-cta-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8">Connect with our analytics experts to discover how data-driven insights can accelerate your business growth.</p>
            <button className="btn-white">
              <i className="ri-user-star-line mr-2"></i> Talk to a Data Expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AnalyticsInsights;