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

const DigitalSolutions = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const stats = [
    { icon: "ri-trophy-line", num: "200+", label: "Projects Delivered" },
    { icon: "ri-heart-line", num: "98%", label: "Client Satisfaction" },
    { icon: "ri-time-line", num: "15+", label: "Industry Experience" },
    { icon: "ri-team-line", num: "50+", label: "Digital Experts" }
  ];

  const services = [
    { icon: "ri-lightbulb-line", title: "Digital Strategy & Consulting", desc: "Comprehensive digital transformation roadmaps tailored to your business objectives and industry requirements.", list: ["Strategic Planning", "Digital Roadmap", "Technology Assessment", "ROI Analysis"] },
    { icon: "ri-cloud-line", title: "Cloud Migration & Infrastructure", desc: "Seamless cloud adoption with scalable infrastructure solutions that reduce costs and improve performance.", list: ["AWS/Azure Migration", "Infrastructure Setup", "DevOps Implementation", "24/7 Support"] },
    { icon: "ri-code-box-line", title: "Enterprise Software Development", desc: "Custom software solutions designed to streamline operations and enhance productivity across your organization.", list: ["Custom Applications", "API Integration", "Legacy Modernization", "Quality Assurance"] },
    { icon: "ri-settings-3-line", title: "Digital Process Automation", desc: "Intelligent automation solutions that eliminate manual tasks and optimize business workflows.", list: ["Workflow Automation", "RPA Implementation", "Process Optimization", "Integration Services"] },
    { icon: "ri-bar-chart-box-line", title: "Data Analytics & Intelligence", desc: "Transform raw data into actionable insights with advanced analytics and business intelligence platforms.", list: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Real-time Dashboards"] },
    { icon: "ri-shield-check-line", title: "Cybersecurity & Compliance", desc: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.", list: ["Security Assessment", "Compliance Framework", "Threat Protection", "Risk Management"] }
  ];

  const processSteps = [
    { num: "01", icon: "ri-search-2-line", title: "Assessment & Strategy", time: "2-4 weeks", desc: "We evaluate your current digital maturity, identify transformation opportunities, and develop a comprehensive digital strategy.", list: ["Digital maturity assessment", "Opportunity analysis", "Transformation strategy", "Implementation roadmap"] },
    { num: "02", icon: "ri-building-line", title: "Architecture Design", time: "4-6 weeks", desc: "Design scalable digital architecture that supports your business objectives and future growth requirements.", list: ["System architecture", "Technology stack", "Integration planning", "Security framework"] },
    { num: "03", icon: "ri-code-line", title: "Development & Testing", time: "8-12 weeks", desc: "Build robust digital solutions with modern technologies, ensuring quality through comprehensive testing.", list: ["Application development", "Quality assurance", "Performance testing", "Security validation"] },
    { num: "04", icon: "ri-rocket-2-line", title: "Deployment & Support", time: "Ongoing", desc: "Deploy solutions with minimal disruption, provide team training, and ensure ongoing support and optimization.", list: ["Production deployment", "Team training", "Support services", "Performance monitoring"] }
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
    { name: "Dr. Sarah Johnson", role: "CTO", company: "HealthCare Plus", text: "Athena IQ Solutions completely transformed our healthcare platform. The new system has improved patient satisfaction by 45% and reduced operational costs by 30%." },
    { name: "Michael Chen", role: "Head of Digital Innovation", company: "FirstBank Financial", text: "Their digital banking solution exceeded all expectations. We've seen a 60% increase in digital adoption and significantly improved customer experience scores." },
    { name: "Emily Rodriguez", role: "VP of Operations", company: "TechManufacturing Corp", text: "The manufacturing digitization project delivered outstanding results. Our production efficiency increased by 35% and quality defects decreased by 50%." }
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
    <div className="font-sans text-gray-600 bg-white w-full overflow-x-hidden">
      
      {/* HERO */}
      <section 
        className="relative py-24 lg:py-32 bg-gray-900 text-center overflow-hidden"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20digital%20transformation%20workspace%20with%20cloud%20computing%20infrastructure%2C%20digital%20screens%20showing%20business%20analytics%2C%20contemporary%20office%20with%20blue%20and%20purple%20lighting%2C%20professional%20technology%20environment%20with%20servers%20and%20networking%20equipment%2C%20clean%20minimalist%20background%20with%20futuristic%20elements&width=1920&height=1080&seq=digital-hero-bg&orientation=landscape')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Digital Transformation Solutions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Modernize your business with comprehensive strategies that drive efficiency, innovation, and growth.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg">
              Get Digital Consultation
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-gray-900">
                    <i className={item.icon}></i>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{item.num}</div>
                  <div className="text-lg text-gray-600 font-medium">{item.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="digital-services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Digital Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive services designed to accelerate your business growth and technological advancement.</p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((sol, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all h-full group">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-2xl text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <i className={sol.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{sol.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sol.desc}</p>
                  <ul className="space-y-2">
                    {sol.list.map((li, j) => (
                      <li key={j} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-green-600 mr-2"></i>
                        {li}
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Transformation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a proven 4-step methodology to ensure successful digital transformation with minimal risk and maximum business value.</p>
            </div>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto relative">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="flex flex-col md:flex-row gap-8 mb-16 relative z-10 last:mb-0">
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

            {/* End-to-End Box */}
            <RevealOnScroll delay={300}>
              <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Digital Transformation</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">From initial assessment to ongoing optimization, we ensure your digital journey delivers measurable business value at every stage.</p>
                <div className="flex justify-center items-center gap-8 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">3-12</div>
                    <div className="text-sm text-gray-400">Months Timeline</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">98%</div>
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

      {/* INDUSTRIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Transform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We deliver tailored digital transformation solutions across diverse industries, understanding unique challenges and opportunities in each sector.</p>
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
                    {ind.list.map((li, j) => (
                      <div key={j} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2 text-sm"></i>
                        <span className="text-gray-700 text-sm">{li}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SUCCESS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how organizations across industries have transformed their operations and achieved remarkable results with our digital solutions.</p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
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
                      {[1, 2, 3, 4, 5].map((s) => (
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our digital transformation services and processes.</p>
            </div>
          </RevealOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((q, i) => (
                <RevealOnScroll key={i} delay={i * 50}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <button 
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(i)}
                    >
                      <h3 className="font-semibold text-gray-900 text-lg pr-4">{q}</h3>
                      <i className={`ri-arrow-down-line text-gray-500 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                        We work closely with your stakeholders to ensure minimal disruption. Our phased approach allows for iterative testing and deployment.
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-gray-900 rounded-2xl p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how our digital solutions can accelerate your growth and modernize your operations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Explore Our Services
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Schedule Digital Consultation"
        subtitle="Let's discuss how our digital transformation solutions can modernize your business operations and accelerate growth. We'll analyze your needs and propose the best approach."
        preselectedService="Digital Solutions"
      />
    </div>
  );
};

export default DigitalSolutions;