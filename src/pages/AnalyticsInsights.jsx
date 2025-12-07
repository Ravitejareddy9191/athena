import React, { useState, useEffect, useRef } from 'react';
import ScheduleModal from '../components/ScheduleModal';

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
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
};

const AnalyticsInsights = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const stats = [
    { icon: "ri-database-2-line", num: "100+", label: "Data Sources Connected" },
    { icon: "ri-check-double-line", num: "98%", label: "Data Accuracy Rate" },
    { icon: "ri-speed-up-line", num: "250%", label: "Average Decision Speed" },
    { icon: "ri-time-line", num: "15+", label: "Years Analytics Experience" },
    { icon: "ri-team-line", num: "80+", label: "Data Scientists" }
  ];

  const services = [
    { icon: "ri-database-2-line", title: "Digital Analytics Platform", sub: "Seamless platform transitions", desc: "Expert implementation and migration of digital analytics platforms to maximize data value and operational efficiency." },
    { icon: "ri-lightbulb-line", title: "Data Analytics Strategy", sub: "Aligned with business goals", desc: "Create comprehensive data strategies that align with your business objectives and drive measurable outcomes." },
    { icon: "ri-settings-3-line", title: "Data Engineering", sub: "Robust data infrastructure", desc: "Build scalable data pipelines and infrastructure to support your analytics and business intelligence needs." },
    { icon: "ri-flask-line", title: "Applied Data Sciences", sub: "Advanced analytics solutions", desc: "Leverage machine learning and statistical modeling to extract actionable insights from your data." },
    { icon: "ri-bar-chart-line", title: "Data Visualization", sub: "Interactive dashboards", desc: "Transform complex data into compelling visual stories with interactive dashboards and reporting tools." },
    { icon: "ri-flask-fill", title: "A/B Testing", sub: "Data-driven optimization", desc: "Design and execute A/B tests to optimize user experience and drive conversion improvements." }
  ];

  const processSteps = [
    { num: "01", icon: "ri-search-2-line", title: "Data Discovery & Assessment", time: "1-2 weeks", desc: "We analyze your current data landscape, identify key sources, and assess data quality to create a comprehensive understanding of your analytics needs.", items: ["Data audit report", "Source inventory", "Quality assessment", "Gap analysis"] },
    { num: "02", icon: "ri-route-line", title: "Strategy & Architecture", time: "2-3 weeks", desc: "Design a scalable analytics architecture aligned with your business objectives and develop a roadmap for implementation.", items: ["Analytics strategy", "Architecture design", "Implementation roadmap", "KPI framework"] },
    { num: "03", icon: "ri-settings-3-line", title: "Implementation & Integration", time: "3-6 weeks", desc: "Deploy analytics solutions, integrate data sources, and establish automated pipelines for seamless data flow.", items: ["Platform setup", "Data integration", "Pipeline automation", "Dashboard creation"] },
    { num: "04", icon: "ri-line-chart-line", title: "Optimization & Insights", time: "Ongoing", desc: "Fine-tune performance, generate actionable insights, and ensure your analytics deliver maximum business value.", items: ["Performance optimization", "Insight generation", "Report automation", "User training"] },
    { num: "05", icon: "ri-arrow-up-circle-line", title: "Scale & Innovation", time: "Ongoing", desc: "Expand analytics capabilities, implement advanced features, and drive continuous improvement in decision-making.", items: ["Advanced analytics", "ML implementation", "Scalability planning", "Innovation roadmap"] }
  ];

  const industries = [
    { icon: "ri-computer-line", title: "SaaS & Technology", desc: "Advanced analytics for software companies, from user behavior to product optimization.", items: ["User analytics", "Product metrics", "Churn prediction", "Growth tracking"] },
    { icon: "ri-shopping-cart-line", title: "E-commerce", desc: "Customer journey analytics and sales optimization for online retail businesses.", items: ["Sales analytics", "Customer segmentation", "Inventory optimization", "Conversion tracking"] },
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "Compliant analytics solutions that improve patient outcomes and operational efficiency.", items: ["Patient analytics", "Operational metrics", "Clinical insights", "Compliance reporting"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Risk analytics and performance tracking for banks, insurance, and investment firms.", items: ["Risk analytics", "Performance tracking", "Regulatory reporting", "Customer insights"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "Operational analytics that optimize production, quality, and supply chain efficiency.", items: ["Production analytics", "Quality metrics", "Supply chain optimization", "Predictive maintenance"] },
    { icon: "ri-store-line", title: "Retail & CPG", desc: "Consumer behavior analytics and market insights for retail and consumer goods.", items: ["Consumer analytics", "Market research", "Demand forecasting", "Brand performance"] }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "COO", company: "Manufacturing Excellence Corp", text: "Athena IQ Solutions transformed our data infrastructure. We now have real-time insights that helped us increase operational efficiency by 40% and reduce costs by 30%." },
    { name: "David Rodriguez", role: "VP of Analytics", company: "TechFlow Solutions", text: "Their predictive analytics models revolutionized our customer retention strategy. We've seen a 60% improvement in churn prediction accuracy and saved millions in retention costs." },
    { name: "Emily Chen", role: "Head of Strategy", company: "Growth Dynamics Inc", text: "The business intelligence dashboard they created gives us insights we never had before. Decision-making is now 3x faster and our ROI tracking is completely automated." },
    { name: "Michael Thompson", role: "CTO", company: "Data-Driven Enterprises", text: "Their data migration and analytics implementation was flawless. We consolidated 15 data sources into one unified platform and improved reporting accuracy by 95%." }
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
    { label: "Revenue Growth", val: "127%", color: "bg-blue-500", width: "85%" },
    { label: "Customer Acquisition", val: "89%", color: "bg-green-500", width: "89%" },
    { label: "Market Share", val: "76%", color: "bg-purple-500", width: "76%" },
    { label: "ROI Improvement", val: "94%", color: "bg-orange-500", width: "94%" }
  ];

  return (
    <div className="font-sans text-gray-600 bg-white w-full overflow-x-hidden">
      
      {/* HERO */}
      <section 
        className="relative py-24 lg:py-32 bg-gray-900 text-center overflow-hidden"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20data%20analytics%20dashboard%20with%20glowing%20charts%2C%20graphs%2C%20and%20digital%20metrics%20in%20a%20futuristic%20business%20environment%20with%20blue%20and%20purple%20lighting%2C%20professional%20technology%20workspace%20with%20multiple%20monitors%20showing%20data%20visualization%2C%20clean%20minimalist%20background%20with%20subtle%20geometric%20patterns&width=1920&height=1080&seq=analytics-hero-bg&orientation=landscape')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Turn Data Into Growth</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Unlock the power of your data with advanced analytics solutions that drive actionable insights and measurable business outcomes.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg">
              Get Analytics Consultation
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="analytics-services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="bg-white rounded-lg p-8 hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 hover:bg-gray-200 border border-gray-200">
                        <i className={`${svc.icon} text-xl text-gray-900`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{svc.title}</h3>
                        <p className="text-gray-600 font-medium mb-3">{svc.sub}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            {stats.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-gray-900`}></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.num}</div>
                  <div className="text-gray-600 font-medium">{item.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Analytics Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a proven methodology to transform your data into actionable insights that drive strategic business decisions.</p>
            </div>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="relative mb-16 last:mb-0">
                  {i !== processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-20 bg-gray-200 z-0"></div>
                  )}
                  <div className="flex items-start gap-8 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-lg font-bold">{step.num}</span>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-2">
                        <i className={`${step.icon} text-xl text-gray-900`}></i>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{step.time}</span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{step.desc}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.items.map((item, idx) => (
                          <div key={idx} className="flex items-center bg-white rounded-lg p-3">
                            <i className="ri-check-line text-green-500 mr-3 text-sm"></i>
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            {/* End-to-End Analytics Box */}
            <RevealOnScroll delay={300}>
              <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Analytics Excellence</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">From data strategy to advanced insights, we ensure your analytics infrastructure delivers measurable business value at every stage.</p>
                <div className="flex justify-center items-center gap-8 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">45</div>
                    <div className="text-sm text-gray-400">Days to Deploy</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">250%</div>
                    <div className="text-sm text-gray-400">Faster Decisions</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Data Monitoring</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Analytics Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We understand the unique data challenges and opportunities in each industry, delivering tailored analytics solutions that drive measurable results.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`${ind.icon} text-xl text-gray-900`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{ind.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{ind.desc}</p>
                  <div className="space-y-2">
                    {ind.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2 text-sm"></i>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how organizations across industries have transformed their decision-making with our comprehensive analytics solutions.</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{t.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{t.role}</p>
                    <p className="text-gray-500 text-sm">{t.company}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-3">
                      {[1,2,3,4,5].map((s) => (
                         <i key={s} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed italic">"{t.text}"</blockquote>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our analytics services and implementation approach.</p>
            </div>
          </RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((q, i) => (
                <RevealOnScroll key={i} delay={i * 50}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <button 
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                      onClick={() => toggleFaq(i)}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{q}</h3>
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        <i className="ri-add-line text-gray-600 transition-transform duration-200"></i>
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-8 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                        Our analytics solutions are designed to be flexible and scalable. We work closely with your team to ensure data security and providing ongoing support.
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS DASHBOARD (Visual) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data-Driven Results</h2>
              <p className="text-lg text-gray-600">Visualize your success with comprehensive analytics dashboards and insights</p>
            </div>
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              {/* Top Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {resultsMetrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{m.val}</div>
                    <div className="text-sm text-gray-600">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {resultsMetrics.map((m, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-32 text-sm text-gray-600 font-medium">{m.label}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full transition-all duration-1000 ${m.color}`} style={{ width: m.width }}></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 w-12">{m.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "ri-line-chart-line", color: "text-blue-600", bg: "bg-blue-100", title: "Real-time Tracking", desc: "Monitor key performance indicators as they happen" },
                { icon: "ri-pie-chart-line", color: "text-green-600", bg: "bg-green-100", title: "Custom Dashboards", desc: "Tailored visualizations for your specific needs" },
                { icon: "ri-brain-line", color: "text-purple-600", bg: "bg-purple-100", title: "AI Insights", desc: "Automated analysis and predictive recommendations" }
              ].map((card, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className={`w-12 h-12 ${card.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${card.icon} ${card.color} text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Data?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Connect with our analytics experts to discover how data-driven insights can accelerate your business growth.</p>
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-user-star-line mr-2"></i>Talk to a Data Expert
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Schedule Analytics Consultation"
        subtitle="Let's explore how data analytics can unlock insights and drive business growth. Our analytics experts will assess your current data landscape and recommend solutions."
        preselectedService="Data Analytics"
      />
    </div>
  );
};

export default AnalyticsInsights;