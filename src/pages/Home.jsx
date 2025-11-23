import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Home.css'; 
import ScheduleModal from '../components/ScheduleModal';

// Helper for Scroll Animations
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
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`home-reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}>
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

  // Handle Hash Scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="home-page-wrapper">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="home-hero-section">
        <div className="home-hero-bg-overlay"></div>
        <div className="home-hero-gradient-pulse"></div>
        
        <div className="home-container home-hero-content">
          <RevealOnScroll>
            <h1 className="home-hero-title">
              Transform Your Business with <br />
              <span className="home-text-gradient min-h-text">
                {text}
              </span>
              <span className="home-typing-cursor">|</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="home-hero-subtitle">
              We deliver cutting-edge AI solutions, data analytics, and digital transformation services that drive growth and competitive advantage for forward-thinking businesses.
            </p>
            <div className="home-hero-buttons">
              <button className="home-btn-primary" onClick={handleOpenModal}>
                <div className="home-btn-gradient-overlay"></div>
                <span>Get Started</span>
              </button>
              <a href="#services" className="home-btn-outline">
                <div className="home-btn-white-overlay"></div>
                <span>Our Services</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- 2. ABOUT SECTION --- */}
      <section id="about" className="home-section-padding home-bg-light overflow-hidden relative">
        <div className="home-bg-gradient-overlay-light"></div>
        <div className="home-container relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="home-section-title">About Athena IQ Solutions</h2>
              <p className="home-section-desc mb-6">
                With over 15 years of industry experience, Athena IQ Solutions is a forward-thinking technology company dedicated to empowering businesses through artificial intelligence, digital transformation, and innovative solutions.
              </p>
              <p className="home-section-desc mb-12">
                Our mission is to bridge the gap between cutting-edge technology and practical business applications, helping organizations thrive in the digital age with measurable results and sustainable growth.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="home-grid-3 gap-8 mb-16">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '95%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="home-stat-card group">
                  <div className="home-stat-value group-hover-text-blue">{stat.num}</div>
                  <div className="home-stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="home-grid-3 gap-12 mt-16">
            {[
              { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Pioneering AI solutions that transform how businesses operate and grow in the digital landscape.' },
              { icon: 'ri-team-line', title: 'Expertise', desc: 'Deep technical knowledge combined with 15+ years of industry experience and strategic insights.' },
              { icon: 'ri-rocket-line', title: 'Growth', desc: 'Scalable solutions designed to accelerate your business success and competitive advantage.' }
            ].map((feature, idx) => (
              <RevealOnScroll key={idx} delay={400 + (idx * 200)}>
                <div className="home-feature-item group">
                  <div className="home-feature-icon-box">
                    <div className="home-icon-overlay"></div>
                    <i className={`${feature.icon} home-feature-icon`}></i>
                  </div>
                  <h3 className="home-feature-title group-hover-text-blue">{feature.title}</h3>
                  <p className="home-feature-desc">{feature.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section id="services" className="home-section-padding home-bg-white">
        <div className="home-container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="home-section-title">Our Services</h2>
              <p className="home-section-desc">Comprehensive solutions designed to accelerate your digital transformation and drive measurable business innovation.</p>
            </div>
          </RevealOnScroll>

          <div className="home-grid-3 gap-8">
            {[
              { link: '/digital-solutions', icon: 'ri-computer-line', title: 'Digital Solutions', desc: 'Comprehensive digital transformation strategies, cloud migration, and modern infrastructure implementation.' },
              { link: '/ai-services', icon: 'ri-brain-line', title: 'AI Services', desc: 'Advanced artificial intelligence solutions, machine learning implementations, and automation platforms.' },
              { link: '/digital-marketing', icon: 'ri-megaphone-line', title: 'Digital Marketing', desc: 'Data-driven marketing strategies, campaign optimization, and digital presence enhancement.' },
              { link: '/analytics-insights', icon: 'ri-bar-chart-line', title: 'Analytics & Insights', desc: 'Business intelligence, advanced analytics, and data visualization for informed decision making.' },
              { link: '/staff-augmentation', icon: 'ri-user-search-line', title: 'Staff Augmentation', desc: 'Technical talent acquisition, workforce optimization, and skilled resource deployment.' },
              { link: '/technology-expertise', icon: 'ri-code-s-slash-line', title: 'Technology Expertise', desc: 'Cloud infrastructure, software development, cybersecurity, and comprehensive technical consulting.' }
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <Link to={service.link} className="home-service-card group">
                  <div className="home-service-card-overlay"></div>
                  <div className="relative z-10">
                    <div className="home-service-icon-wrapper">
                      <i className={`${service.icon} home-service-icon`}></i>
                    </div>
                    <h3 className="home-service-title group-hover-text-blue">{service.title}</h3>
                    <p className="home-service-desc-text">{service.desc}</p>
                    <div className="home-service-link">
                      <span className="relative">
                        Learn more
                        <span className="home-link-underline"></span>
                      </span>
                      <i className="ri-arrow-right-line ml-2 transition-transform group-hover-translate-x"></i>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="home-section-padding home-bg-light relative overflow-hidden">
        <div className="home-bg-gradient-overlay-light opacity-20"></div>
        <div className="home-container relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="home-section-title">Client Testimonials</h2>
              <p className="home-section-desc">Hear from industry leaders about their transformative experiences with our solutions.</p>
            </div>
          </RevealOnScroll>

          <div className="home-grid-2 gap-12 max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="home-testimonial-card group">
                <div className="home-testimonial-bg-overlay"></div>
                <div className="relative z-10">
                  <div className="home-quote-wrapper">
                    <i className="ri-double-quotes-l home-quote-icon"></i>
                    <div className="home-quote-bg-circle"></div>
                  </div>
                  <p className="home-testimonial-text">
                    "Athena IQ Solutions transformed our entire digital infrastructure with their AI-powered analytics platform. We've seen a 45% increase in operational efficiency and significant cost savings within just six months."
                  </p>
                  <div className="home-author-block">
                    <div className="home-author-img-wrapper">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" alt="Sarah" className="home-author-img" />
                    </div>
                    <div>
                      <h4 className="home-author-name">Sarah Johnson</h4>
                      <p className="home-author-role">CEO at TechFlow Industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="home-testimonial-card group">
                <div className="home-testimonial-bg-overlay"></div>
                <div className="relative z-10">
                  <div className="home-quote-wrapper">
                    <i className="ri-double-quotes-l home-quote-icon"></i>
                    <div className="home-quote-bg-circle"></div>
                  </div>
                  <p className="home-testimonial-text">
                    "The digital transformation strategy provided by Athena IQ was exactly what we needed to scale globally. Their comprehensive approach to cloud migration, process automation, and staff augmentation helped us achieve our targets."
                  </p>
                  <div className="home-author-block">
                    <div className="home-author-img-wrapper">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="Michael" className="home-author-img" />
                    </div>
                    <div>
                      <h4 className="home-author-name">Michael Chen</h4>
                      <p className="home-author-role">CTO at Global Dynamics Corp</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- 5. TECHNOLOGY STACK --- */}
      <section className="home-section-padding home-bg-white">
        <div className="home-container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="home-section-title">Our Technology Stack</h2>
              <p className="home-section-desc">Cutting-edge technologies and frameworks that power our innovative solutions</p>
            </div>
          </RevealOnScroll>

          <div className="home-grid-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'ri-cloud-line', title: 'Cloud Computing', desc: 'AWS, Azure, Google Cloud' },
              { icon: 'ri-brain-line', title: 'Artificial Intelligence', desc: 'Machine Learning, NLP' },
              { icon: 'ri-database-line', title: 'Big Data', desc: 'Analytics & Processing' },
              { icon: 'ri-shield-line', title: 'Cybersecurity', desc: 'Protection & Compliance' },
              { icon: 'ri-smartphone-line', title: 'Mobile Development', desc: 'iOS, Android, Cross-platform' },
              { icon: 'ri-code-line', title: 'Web Development', desc: 'React, Node.js, Python' }
            ].map((tech, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="home-tech-card group">
                  <div className="home-tech-card-overlay"></div>
                  <div className="relative z-10 text-center">
                    <div className="home-tech-icon-box">
                      <div className="home-icon-overlay"></div>
                      <i className={`${tech.icon} home-tech-icon`}></i>
                    </div>
                    <h3 className="home-tech-title group-hover-text-blue">{tech.title}</h3>
                    <p className="home-tech-desc">{tech.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CONTACT SECTION --- */}
      <section id="contact" className="home-section-padding home-bg-light relative">
        <div className="home-bg-gradient-overlay-light opacity-30"></div>
        <div className="home-container relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="home-section-title">Ready to Get Started?</h2>
              <p className="home-section-desc">Let's discuss your project and explore how we can help you achieve your business goals.</p>
            </div>
          </RevealOnScroll>

          <div className="home-grid-2 gap-12 items-start">
            <RevealOnScroll delay={200}>
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-dark">Get In Touch</h3>
                <div className="home-contact-list">
                  <div className="home-contact-item group">
                    <div className="home-contact-icon-box">
                      <div className="home-icon-overlay"></div>
                      <i className="ri-mail-line home-contact-icon"></i>
                    </div>
                    <div>
                      <p className="home-contact-label group-hover-text-blue">Email</p>
                      <p className="home-contact-value">support@athenaiqsolutions.com</p>
                    </div>
                  </div>
                  <div className="home-contact-item group">
                    <div className="home-contact-icon-box">
                      <div className="home-icon-overlay"></div>
                      <i className="ri-phone-line home-contact-icon"></i>
                    </div>
                    <div>
                      <p className="home-contact-label group-hover-text-blue">Phone</p>
                      <p className="home-contact-value">+1 (555) 123-4567</p>
                      <p className="home-contact-value">+91 7022635059</p>
                    </div>
                  </div>
                  <div className="home-contact-item group">
                    <div className="home-contact-icon-box">
                      <div className="home-icon-overlay"></div>
                      <i className="ri-map-pin-line home-contact-icon"></i>
                    </div>
                    <div>
                      <p className="home-contact-label group-hover-text-blue">Locations</p>
                      <p className="home-contact-value">San Francisco, CA</p>
                      <p className="home-contact-value">Gurgaon, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="home-btn-primary w-full" onClick={handleOpenModal}>
                    <div className="home-btn-gradient-overlay"></div>
                    <span>Schedule a Meeting</span>
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <form className="home-contact-form">
                <div className="home-form-group">
                  <label className="home-form-label">Name *</label>
                  <input type="text" className="home-form-input" placeholder="Your name" required />
                </div>
                <div className="home-form-group">
                  <label className="home-form-label">Email *</label>
                  <input type="email" className="home-form-input" placeholder="your@email.com" required />
                </div>
                <div className="home-form-group">
                  <label className="home-form-label">Company</label>
                  <input type="text" className="home-form-input" placeholder="Your company" />
                </div>
                <div className="home-form-group">
                  <label className="home-form-label">Message *</label>
                  <textarea rows="4" className="home-form-input" placeholder="Tell us about your project..." required></textarea>
                  <p className="text-sm text-gray-500 mt-1">0/500 characters</p>
                </div>
                <button type="submit" className="home-btn-primary w-full">
                  <div className="home-btn-gradient-overlay"></div>
                  <span>Send Message</span>
                </button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      <ScheduleModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;