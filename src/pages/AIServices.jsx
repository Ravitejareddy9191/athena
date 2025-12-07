import React, { useState, useEffect, useRef } from 'react';
import ScheduleModal from '../components/ScheduleModal';
import { Link } from 'react-router-dom';
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

const AIServices = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const stats = [
    { icon: "ri-code-s-slash-line", num: "150+", label: "AI Projects Delivered" },
    { icon: "ri-trophy-line", num: "95%", label: "Success Rate" },
    { icon: "ri-time-line", num: "12+", label: "Years AI Experience" },
    { icon: "ri-team-line", num: "25+", label: "AI Specialists" }
  ];

  const solutions = [
    { icon: "ri-search-line", title: "AI Maturity Assessment", desc: "Evaluate AI maturity and implementation opportunities", list: ["Current state analysis", "Opportunity identification", "Readiness evaluation", "Implementation roadmap"] },
    { icon: "ri-lightbulb-line", title: "AI Strategy Development", desc: "Develop AI strategies aligned with business goals", list: ["Strategic planning", "Goal alignment", "Resource allocation", "Success metrics"] },
    { icon: "ri-rocket-line", title: "AI Transformation", desc: "Navigate AI transformation with minimal disruption", list: ["Change management", "Phased implementation", "Risk mitigation", "Team training"] },
    { icon: "ri-bar-chart-line", title: "ROI Optimization", desc: "Measure and optimize ROI of AI", list: ["Performance tracking", "Cost-benefit analysis", "Continuous improvement", "Impact measurement"] },
    { icon: "ri-magic-line", title: "Generative AI", desc: "Use Generative AI for content automation", list: ["Content generation", "Process automation", "Creative solutions", "Efficiency gains"] },
    { icon: "ri-user-star-line", title: "AI Consulting", desc: "Expert guidance for AI implementation", list: ["Technical expertise", "Best practices", "Industry insights", "Ongoing support"] }
  ];

  const processSteps = [
    { num: "01", icon: "ri-search-2-line", title: "Discovery & Assessment", time: "2-4 weeks", desc: "We analyze your current infrastructure, identify AI opportunities, and assess your organizational readiness for AI transformation.", list: ["Current state analysis", "Opportunity assessment", "Readiness evaluation", "Implementation roadmap"] },
    { num: "02", icon: "ri-route-line", title: "Strategy Development", time: "4-6 weeks", desc: "Create a comprehensive AI strategy aligned with your business objectives and develop a detailed implementation roadmap.", list: ["AI strategy framework", "Technology roadmap", "Implementation timeline", "Resource planning"] },
    { num: "03", icon: "ri-flask-line", title: "Proof of Concept", time: "6-8 weeks", desc: "Build and test AI prototypes to validate concepts, demonstrate value, and refine solutions before full deployment.", list: ["Working prototypes", "Performance metrics", "Stakeholder validation", "Refined specifications"] },
    { num: "04", icon: "ri-rocket-2-line", title: "Implementation", time: "8-16 weeks", desc: "Deploy AI solutions with minimal disruption, ensure seamless integration, and provide comprehensive team training.", list: ["Production deployment", "System integration", "Team training", "Quality assurance"] },
    { num: "05", icon: "ri-line-chart-line", title: "Optimization", time: "Ongoing", desc: "Monitor performance, optimize algorithms, measure ROI, and continuously improve AI solutions for maximum impact.", list: ["Performance monitoring", "Algorithm optimization", "ROI reporting", "Continuous improvement"] }
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
    <div className="font-sans text-gray-600 bg-white w-full overflow-x-hidden">
      
      {/* HERO */}
      <section 
        className="relative py-24 lg:py-32 bg-gray-900 text-center overflow-hidden"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Advanced%20AI%20technology%20workspace%20with%20glowing%20neural%20networks%2C%20machine%20learning%20algorithms%20visualized%20on%20screens%2C%20futuristic%20artificial%20intelligence%20lab%20with%20blue%20and%20purple%20lighting%2C%20modern%20tech%20environment%20with%20robotic%20elements%2C%20clean%20professional%20background%20with%20geometric%20patterns&width=1920&height=1080&seq=ai-hero-bg&orientation=landscape')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Enterprise AI Solutions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive AI solutions to drive innovation and growth.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg">
              Get AI Consultation
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl text-gray-900">
                    <i className={item.icon}></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.num}</div>
                  <div className="font-medium text-gray-600">{item.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="ai-solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive AI Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From strategy to implementation, we provide end-to-end AI solutions that transform your business operations and unlock new growth opportunities.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all h-full group">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-2xl text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <i className={sol.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sol.desc}</p>
                  <ul className="space-y-2">
                    {sol.list.map((li, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-700">
                        <i className="ri-check-line text-green-500 mt-0.5 mr-2"></i>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a proven 5-step methodology to ensure successful AI transformation with minimal risk and maximum business value.</p>
            </div>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto relative">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="flex flex-col md:flex-row gap-8 mb-16 relative z-10 last:mb-0">
                  {/* Line */}
                  {i !== processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-[-64px] w-0.5 bg-gray-200 hidden md:block -z-10"></div>
                  )}
                  
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">{step.num}</div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl text-gray-900">
                      <i className={step.icon}></i>
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">{step.time}</span>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.list.map((li, j) => (
                        <div key={j} className="bg-white p-3 rounded-lg border border-gray-200 flex items-center text-sm font-medium text-gray-700">
                          <i className="ri-check-line text-green-500 mr-3"></i>
                          {li}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            {/* End-to-End Transformation Box */}
            <RevealOnScroll delay={300}>
              <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End AI Transformation</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">From initial assessment to ongoing optimization, we ensure your AI journey delivers measurable business value at every stage.</p>
                <div className="flex justify-center items-center gap-8 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">3-12</div>
                    <div className="text-sm text-gray-400">Months Timeline</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">95%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We deliver tailored AI solutions across diverse industries, understanding unique challenges and opportunities in each sector.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all h-full group">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-2xl text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <i className={ind.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{ind.desc}</p>
                  <ul className="space-y-2">
                    {ind.list.map((li, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-700">
                        <i className="ri-check-line text-green-500 mt-0.5 mr-2"></i>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how organizations across industries have transformed their operations and achieved remarkable results with our AI solutions.</p>
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
                    <blockquote className="text-gray-700 leading-relaxed italic">"{t.quote}"</blockquote>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our AI services and implementation process.</p>
            </div>
          </RevealOnScroll>
          <div className="space-y-4">
            {faqs.map((q, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(i)}
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-8">{q}</h3>
                    <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                      We customize every AI strategy to your specific needs. Our team works closely with you to understand your goals and ensure transparency through regular reporting and meetings.
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-gray-900 rounded-2xl p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Get expert AI consultation to identify opportunities, develop strategies, and implement solutions that drive real business value.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Get AI Consultation
                </button>
                <Link to="/#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  View All Services
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Schedule AI Consultation"
        subtitle="Let's discuss how AI can transform your business operations and drive growth. Our experts will analyze your needs and propose tailored AI solutions.."
        preselectedService="AI Services"
      />
    </div>
  );
};

export default AIServices;