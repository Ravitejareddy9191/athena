import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScheduleModal from '../components/ScheduleModal';
import { submitToGoogleSheets } from '../services/formService';

// --- REVEAL COMPONENT ---
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
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- TYPING EFFECT STATE ---
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isPausing, setIsPausing] = useState(false);

  const words = ["Digital Solutions", "AI Services", "Digital Marketing", "Staff Augmentation"];

  // --- CONTACT FORM STATE (NEW) ---
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isPausing) {
        setText(''); 
        setIsPausing(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); 
        return;
      }

      setText(fullText.substring(0, text.length + 1));

      if (text === fullText) {
        setIsPausing(true);
        setTypingSpeed(2000); 
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isPausing, loopNum, typingSpeed, words]);

  // Handle Hash Scrolling (from OLD version)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  // --- CONTACT FORM SUBMIT HANDLER (NEW) ---
  const handleContactSubmit = (e) => { // Removed 'async'
    e.preventDefault();
    setIsContactSubmitting(true);
    
    // 1. Capture form data immediately
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 2. OPTIMISTIC UPDATE: Show success immediately
    setContactStatus('success');
    e.target.reset();
    setIsContactSubmitting(false);

    // 3. Send to Google Sheets in the background (Fire and Forget)
    submitToGoogleSheets(data, 'contact')
      .then((result) => {
        // Optional: Log success if needed
        console.log('Background submission success:', result);
      })
      .catch((err) => {
        // Since we already told the user "Success", we log this silently
        // or trigger a global error toaster if you have one.
        console.error('Background submission failed', err);
      });
};

  return (
    <div className="font-sans text-gray-900 w-full overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20tech%20office%20environment%20with%20diverse%20professionals%20working%20on%20laptops%20and%20digital%20screens%2C%20clean%20minimalist%20workspace%20with%20natural%20lighting%2C%20professional%20atmosphere%2C%20high-tech%20equipment%2C%20collaborative%20workspace%2C%20modern%20office%20interior%20design%2C%20sleek%20professional%20setting&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')" }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 animate-pulse"></div>
        
        <div className="relative z-30 container mx-auto px-6">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto min-h-[120px] md:min-h-[180px]">
              <span className="text-white">Transform Your Business with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {text}
              </span>
              <span className="inline-block ml-1 animate-pulse text-white/70">|</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We deliver cutting-edge AI solutions, data analytics, and digital transformation services that drive growth and competitive advantage for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="relative bg-black text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-gray-100 hover:text-black hover:scale-105 group shadow-lg hover:shadow-2xl"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                <span className="relative z-10">Get Started</span>
              </button>
              
              <a 
                href="#services" 
                className="relative bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900 group shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                <span className="relative z-10">Our Services</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- 2. ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 container mx-auto px-8">
          <RevealOnScroll>
            <div className="text-center max-w-5xl mx-auto mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">About Athena IQ Solutions</h2>
              <div className="text-xl text-gray-600 leading-relaxed mb-6 max-w-4xl mx-auto">
                <p className="mb-6">
                  With over 15 years of industry experience, Athena IQ Solutions is a forward-thinking technology company dedicated to empowering businesses through artificial intelligence, digital transformation, and innovative solutions.
                </p>
                <p>
                  Our mission is to bridge the gap between cutting-edge technology and practical business applications, helping organizations thrive in the digital age with measurable results and sustainable growth.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '95%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <RevealOnScroll key={idx} delay={500 + (idx * 100)}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{stat.num}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Pioneering AI solutions that transform how businesses operate and grow in the digital landscape.' },
              { icon: 'ri-team-line', title: 'Expertise', desc: 'Deep technical knowledge combined with 15+ years of industry experience and strategic insights.' },
              { icon: 'ri-rocket-line', title: 'Growth', desc: 'Scalable solutions designed to accelerate your business success and competitive advantage.' }
            ].map((feature, idx) => (
              <RevealOnScroll key={idx} delay={idx * 200}>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <i className={`${feature.icon} text-white text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors duration-300">{feature.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-8">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions designed to accelerate your digital transformation and drive measurable business innovation.</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { link: '/digital-solutions', icon: 'ri-computer-line', title: 'Digital Solutions', desc: 'Comprehensive digital transformation strategies, cloud migration, and modern infrastructure implementation.' },
              { link: '/ai-services', icon: 'ri-brain-line', title: 'AI Services', desc: 'Advanced artificial intelligence solutions, machine learning implementations, and automation platforms.' },
              { link: '/marketing', icon: 'ri-megaphone-line', title: 'Digital Marketing', desc: 'Data-driven marketing strategies, campaign optimization, and digital presence enhancement.' },
              { link: '/analytics', icon: 'ri-bar-chart-line', title: 'Analytics & Insights', desc: 'Business intelligence, advanced analytics, and data visualization for informed decision making.' },
              { link: '/staffing', icon: 'ri-user-search-line', title: 'Staff Augmentation', desc: 'Technical talent acquisition, workforce optimization, and skilled resource deployment.' },
              { link: '/technology', icon: 'ri-code-s-slash-line', title: 'Technology Expertise', desc: 'Cloud infrastructure, software development, cybersecurity, and comprehensive technical consulting.' }
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <Link to={service.link} className="block bg-white border-2 border-gray-100 rounded-xl p-10 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden group h-full hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-110">
                      <i className={`${service.icon} text-3xl text-gray-900 group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg group-hover:text-gray-700 transition-colors duration-300">{service.desc}</p>
                    <div className="flex items-center text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 origin-left"></span>
                      </span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
        
        <div className="relative z-10 container mx-auto px-8">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Client Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from industry leaders about their transformative experiences with our solutions.</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO at TechFlow Industries",
                quote: "Athena IQ Solutions transformed our entire digital infrastructure with their AI-powered analytics platform. We've seen a 45% increase in operational efficiency and significant cost savings within just six months. Their team's expertise in enterprise-level solutions is unmatched.",
                img: "https://readdy.ai/api/search-image?query=Professional%20businesswoman%20in%20contemporary%20corporate%20attire%20with%20confident%20expression%2C%20modern%20office%20environment%20with%20clean%20lighting%2C%20executive%20portrait%20style%20with%20friendly%20demeanor%20and%20professional%20appearance%2C%20minimalist%20background&width=400&height=400&seq=testimonial-ceo&orientation=squarish"
              },
              {
                name: "Michael Chen",
                role: "CTO at Global Dynamics Corp",
                quote: "The digital transformation strategy provided by Athena IQ was exactly what we needed to scale globally. Their comprehensive approach to cloud migration, process automation, and staff augmentation helped us achieve our growth targets ahead of schedule.",
                img: "https://readdy.ai/api/search-image?query=Professional%20businessman%20with%20modern%20business%20attire%20in%20contemporary%20office%20setting%2C%20confident%20smile%2C%20executive%20headshot%20with%20clean%20background%20and%20professional%20lighting%2C%20technology-focused%20environment&width=400&height=400&seq=testimonial-cto&orientation=squarish"
              }
            ].map((testimonial, idx) => (
              <RevealOnScroll key={idx} delay={idx * 200}>
                <div className="bg-white rounded-xl p-10 shadow-lg border-2 border-gray-100 hover:shadow-2xl group cursor-pointer relative overflow-hidden hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8">
                      <div className="w-12 h-12 flex items-center justify-center mb-6 relative">
                        <i className="ri-double-quotes-l text-4xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110"></i>
                        <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="relative">
                        <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover object-top mr-6 shadow-md group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TECHNOLOGY STACK --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 transition-opacity duration-1000"></div>
        <div className="container mx-auto px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge technologies and frameworks that power our innovative solutions</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'ri-cloud-line', title: 'Cloud Computing', desc: 'AWS, Azure, Google Cloud' },
              { icon: 'ri-brain-line', title: 'Artificial Intelligence', desc: 'Machine Learning, NLP' },
              { icon: 'ri-database-line', title: 'Big Data', desc: 'Analytics & Processing' },
              { icon: 'ri-shield-line', title: 'Cybersecurity', desc: 'Protection & Compliance' },
              { icon: 'ri-smartphone-line', title: 'Mobile Development', desc: 'iOS, Android, Cross-platform' },
              { icon: 'ri-code-line', title: 'Web Development', desc: 'React, Node.js, Python' }
            ].map((tech, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                      <i className={`${tech.icon} text-white text-2xl relative z-10`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{tech.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{tech.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CONTACT SECTION --- */}
      <section id="contact" className="bg-gray-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Let's discuss your project and explore how we can help you achieve your business goals.</p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <RevealOnScroll delay={200}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'ri-mail-line', label: 'Email', value: 'support@athenaiqsolutions.com' },
                    { icon: 'ri-phone-line', label: 'Phone', value: '+1 (555) 123-4567' },
                    { icon: 'ri-map-pin-line', label: 'San Francisco Office', value: 'San Francisco, CA' },
                    { icon: 'ri-map-pin-line', label: 'India Office', value: 'Gurgaon, India' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-center group cursor-pointer">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <i className={`${contact.icon} text-white text-xl relative z-10`}></i>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{contact.label}</p>
                        {contact.label === 'Phone' ? (
                          <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            <div>+1 (555) 123-4567</div>
                            <div>+91 7022635059</div>
                          </div>
                        ) : (
                          <p className="text-gray-600 break-all group-hover:text-gray-700 transition-colors duration-300">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <button 
                    className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 relative overflow-hidden group"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <span className="relative z-10">Schedule a Meeting</span>
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Form */}
            <RevealOnScroll delay={400}>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md text-sm focus:scale-102"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md text-sm focus:scale-102"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md text-sm focus:scale-102"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none shadow-sm hover:shadow-md text-sm focus:scale-102"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">0/500 characters</p>
                </div>

                {contactStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                    Thank you! Your message has been sent. We’ll get back to you soon.
                  </div>
                )}

                {contactStatus === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl active:scale-95 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    {isContactSubmitting ? 'Sending…' : 'Send Message'}
                  </span>
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Get Started with Digital Innovation"
        subtitle="Ready to transform your business? Let's discuss your goals and create a customized digital strategy that drives real results for your organization."
      />
    </div>
  );
};

export default Home;