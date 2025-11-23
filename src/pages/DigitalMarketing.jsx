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

const DigitalMarketing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const stats = [
    { icon: "ri-rocket-line", num: "200+", label: "Campaigns Launched" },
    { icon: "ri-trophy-line", num: "300%", label: "Average ROI Increase" },
    { icon: "ri-time-line", num: "10+", label: "Years Experience" },
    { icon: "ri-team-line", num: "50+", label: "Marketing Experts" }
  ];

  const services = [
    { icon: "ri-line-chart-line", title: "Growth Strategy", desc: "Comprehensive growth frameworks designed to scale your business sustainably.", list: ["Market analysis", "Growth planning", "SEO optimization", "Performance tracking"] },
    { icon: "ri-team-line", title: "Affiliate Marketing", desc: "Strategic partnership programs that expand your reach through trusted affiliates.", list: ["Partner recruitment", "Commission structures", "Performance tracking", "Relationship management"] },
    { icon: "ri-article-line", title: "Content Strategy", desc: "Compelling content that resonates with your audience and drives engagement.", list: ["Content planning", "Editorial calendar", "Brand messaging", "Content distribution"] },
    { icon: "ri-advertisement-line", title: "Paid Media Optimization", desc: "Precision-targeted campaigns that maximize ROI across all digital channels.", list: ["Campaign management", "Audience targeting", "Budget optimization", "Performance analysis"] },
    { icon: "ri-arrow-up-circle-line", title: "Conversion Rate Optimization", desc: "Systematic testing and optimization to improve your conversion rates.", list: ["A/B testing", "User experience optimization", "Landing page optimization", "Funnel analysis"] },
    { icon: "ri-settings-3-line", title: "Martech Optimization", desc: "Marketing technology stack optimization for seamless operations.", list: ["Technology integration", "Automation setup", "Data management", "Performance monitoring"] }
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
    { name: "Jennifer Walsh", role: "CMO", company: "TechStart Solutions", text: "Athena IQ Solutions transformed our marketing approach. Our lead generation increased by 400% within 6 months, and our cost per acquisition dropped by 60%." },
    { name: "Marcus Thompson", role: "Marketing Director", company: "Global Manufacturing Inc", text: "Their strategic approach to content marketing established us as industry leaders. We've seen a 250% increase in organic traffic and significantly improved brand recognition." },
    { name: "Sofia Martinez", role: "Growth Manager", company: "E-commerce Elite", text: "The paid media optimization results exceeded our expectations. ROAS improved by 300% while we expanded to new markets and customer segments." },
    { name: "Alex Chen", role: "VP of Marketing", company: "Digital Products Co", text: "Their affiliate marketing program development was exceptional. We built a network of 200+ affiliates generating 40% of our total revenue within 12 months." }
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
    <div className="font-sans text-gray-600 bg-white w-full overflow-x-hidden">
      
      {/* HERO */}
      <section 
        className="relative py-24 lg:py-32 bg-gray-900 text-center overflow-hidden"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Creative%20digital%20marketing%20workspace%20with%20social%20media%20campaigns%20displayed%20on%20screens%2C%20modern%20advertising%20agency%20environment%20with%20colorful%20brand%20elements%2C%20professional%20team%20collaboration%20with%20laptops%20and%20tablets%2C%20contemporary%20office%20with%20blue%20and%20purple%20lighting%2C%20clean%20minimalist%20background%20with%20marketing%20graphics&width=1920&height=1080&seq=marketing-hero-bg&orientation=landscape')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Digital Marketing Excellence</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Drive growth with data-driven marketing strategies that deliver measurable results and sustainable success.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg">
              Get Marketing Consultation
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

      {/* SERVICES */}
      <section id="marketing-services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Marketing Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From strategy to execution, we provide end-to-end marketing solutions that drive growth and maximize your digital presence.</p>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`${svc.icon} text-2xl text-gray-900`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.list.map((li, j) => (
                      <li key={j} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-3 mt-0.5 text-sm"></i>
                        <span className="text-gray-700 text-sm">{li}</span>
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
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Marketing Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We follow a proven methodology to ensure your marketing campaigns deliver measurable results and sustainable growth.</p>
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
                        {step.list.map((li, j) => (
                          <div key={j} className="flex items-center bg-white rounded-lg p-3">
                            <i className="ri-check-line text-green-500 mr-3 text-sm"></i>
                            <span className="text-gray-700 text-sm font-medium">{li}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            {/* End-to-End Marketing Box */}
            <RevealOnScroll delay={300}>
              <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Marketing Excellence</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">From strategy to execution, we ensure your marketing campaigns deliver measurable business results at every stage.</p>
                <div className="flex justify-center items-center gap-8 text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">30</div>
                    <div className="text-sm text-gray-400">Days to Launch</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">300%</div>
                    <div className="text-sm text-gray-400">Average ROI</div>
                  </div>
                  <div className="w-px h-12 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Monitoring</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Marketing Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We understand the unique challenges and opportunities in each industry, delivering tailored marketing strategies that drive results.</p>
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
                    {ind.list.map((item, j) => (
                      <div key={j} className="flex items-center">
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how businesses across industries have achieved remarkable growth with our strategic marketing solutions.</p>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our marketing services and approach.</p>
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
                        <i className={`ri-add-line text-gray-600 transition-transform duration-200`}></i>
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                        We customize every strategy to your specific needs. Our team works closely with you to understand your goals and ensure transparency through regular reporting and meetings.
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let's Grow Together</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Ready to accelerate your business growth with strategic digital marketing? Let's create a customized plan for your success.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Get Started Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Schedule Strategy Call
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Schedule Marketing Consultation"
        subtitle="Let's create a customized digital marketing strategy that drives real results. Our marketing experts will analyze your current approach and recommend growth opportunities."
        preselectedService="digital-marketing"
      />
    </div>
  );
};

export default DigitalMarketing;