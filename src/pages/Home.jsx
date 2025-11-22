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
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}>
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

      // If currently pausing after a word, wait then clear
      if (isPausing) {
        setText(''); // Instantly clear text (No backspacing)
        setIsPausing(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Reset speed for typing
        return;
      }

      // Typing Logic
      setText(fullText.substring(0, text.length + 1));

      // Check if word is complete
      if (text === fullText) {
        setIsPausing(true);
        setTypingSpeed(2000); // Wait 2 seconds before clearing
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isPausing, loopNum, typingSpeed, words]);
  // ---------------------------

  // Handle Hash Scrolling (Only runs when hash changes, not on typing)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="page-wrapper">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="hero-gradient-pulse"></div>
        
        <div className="container hero-content">
          <RevealOnScroll>
            <h1 className="hero-title">
              Transform Your Business with <br />
              <span className="text-gradient-hero min-h-text">
                {text}
              </span>
              <span className="typing-cursor">|</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="hero-subtitle">
              We deliver cutting-edge AI solutions, data analytics, and digital transformation services that drive growth and competitive advantage for forward-thinking businesses.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleOpenModal}>
                <div className="btn-gradient-overlay"></div>
                <span>Get Started</span>
              </button>
              <a href="#services" className="btn-outline">
                <div className="btn-white-overlay"></div>
                <span>Our Services</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- 2. ABOUT SECTION --- */}
      <section id="about" className="section-padding bg-light overflow-hidden">
        <div className="bg-gradient-overlay-light"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="section-title">About Athena IQ Solutions</h2>
              <p className="section-desc mb-6">
                With over 15 years of industry experience, Athena IQ Solutions is a forward-thinking technology company dedicated to empowering businesses through artificial intelligence, digital transformation, and innovative solutions.
              </p>
              <p className="section-desc mb-12">
                Our mission is to bridge the gap between cutting-edge technology and practical business applications, helping organizations thrive in the digital age with measurable results and sustainable growth.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid-3 gap-8 mb-16">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '95%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="stat-card group">
                  <div className="stat-value group-hover-text-blue">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="grid-3 gap-12 mt-16">
            {[
              { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Pioneering AI solutions that transform how businesses operate and grow in the digital landscape.' },
              { icon: 'ri-team-line', title: 'Expertise', desc: 'Deep technical knowledge combined with 15+ years of industry experience and strategic insights.' },
              { icon: 'ri-rocket-line', title: 'Growth', desc: 'Scalable solutions designed to accelerate your business success and competitive advantage.' }
            ].map((feature, idx) => (
              <RevealOnScroll key={idx} delay={400 + (idx * 200)}>
                <div className="feature-item group">
                  <div className="feature-icon-box">
                    <div className="icon-overlay"></div>
                    <i className={`${feature.icon} feature-icon`}></i>
                  </div>
                  <h3 className="feature-title group-hover-text-blue">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES SECTION --- */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-desc">Comprehensive solutions designed to accelerate your digital transformation and drive measurable business innovation.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8">
            {[
              { link: '/digital-solutions', icon: 'ri-computer-line', title: 'Digital Solutions', desc: 'Comprehensive digital transformation strategies, cloud migration, and modern infrastructure implementation.' },
              { link: '/ai-services', icon: 'ri-brain-line', title: 'AI Services', desc: 'Advanced artificial intelligence solutions, machine learning implementations, and automation platforms.' },
              { link: '/digital-marketing', icon: 'ri-megaphone-line', title: 'Digital Marketing', desc: 'Data-driven marketing strategies, campaign optimization, and digital presence enhancement.' },
              { link: '/analytics-insights', icon: 'ri-bar-chart-line', title: 'Analytics & Insights', desc: 'Business intelligence, advanced analytics, and data visualization for informed decision making.' },
              { link: '/staff-augmentation', icon: 'ri-user-search-line', title: 'Staff Augmentation', desc: 'Technical talent acquisition, workforce optimization, and skilled resource deployment.' },
              { link: '/technology-expertise', icon: 'ri-code-s-slash-line', title: 'Technology Expertise', desc: 'Cloud infrastructure, software development, cybersecurity, and comprehensive technical consulting.' }
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <Link to={service.link} className="service-card group">
                  <div className="service-card-overlay"></div>
                  <div className="relative z-10">
                    <div className="service-icon-wrapper">
                      <i className={`${service.icon} service-icon`}></i>
                    </div>
                    <h3 className="service-title group-hover-text-blue">{service.title}</h3>
                    <p className="service-desc-text">{service.desc}</p>
                    <div className="service-link">
                      <span className="relative">
                        Learn more
                        <span className="link-underline"></span>
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
      <section id="testimonials" className="section-padding bg-light relative overflow-hidden">
        <div className="bg-gradient-overlay-light opacity-20"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="section-header">
              <h2 className="section-title">Client Testimonials</h2>
              <p className="section-desc">Hear from industry leaders about their transformative experiences with our solutions.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-2 gap-12 max-w-6xl mx-auto">
            <RevealOnScroll>
              <div className="testimonial-card group">
                <div className="testimonial-bg-overlay"></div>
                <div className="relative z-10">
                  <div className="quote-wrapper">
                    <i className="ri-double-quotes-l quote-icon"></i>
                    <div className="quote-bg-circle"></div>
                  </div>
                  <p className="testimonial-text">
                    "Athena IQ Solutions transformed our entire digital infrastructure with their AI-powered analytics platform. We've seen a 45% increase in operational efficiency and significant cost savings within just six months."
                  </p>
                  <div className="author-block">
                    <div className="author-img-wrapper">
                      <img src="https://readdy.ai/api/search-image?query=Professional%20businesswoman%20in%20contemporary%20corporate%20attire&width=400&height=400&seq=testimonial-ceo&orientation=squarish" alt="Sarah" className="author-img" />
                      <div className="author-img-overlay"></div>
                    </div>
                    <div>
                      <h4 className="author-name">Sarah Johnson</h4>
                      <p className="author-role">CEO at TechFlow Industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="testimonial-card group">
                <div className="testimonial-bg-overlay"></div>
                <div className="relative z-10">
                  <div className="quote-wrapper">
                    <i className="ri-double-quotes-l quote-icon"></i>
                    <div className="quote-bg-circle"></div>
                  </div>
                  <p className="testimonial-text">
                    "The digital transformation strategy provided by Athena IQ was exactly what we needed to scale globally. Their comprehensive approach to cloud migration, process automation, and staff augmentation helped us achieve our targets."
                  </p>
                  <div className="author-block">
                    <div className="author-img-wrapper">
                      <img src="https://readdy.ai/api/search-image?query=Professional%20businessman%20with%20modern%20business%20attire&width=400&height=400&seq=testimonial-cto&orientation=squarish" alt="Michael" className="author-img" />
                      <div className="author-img-overlay"></div>
                    </div>
                    <div>
                      <h4 className="author-name">Michael Chen</h4>
                      <p className="author-role">CTO at Global Dynamics Corp</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- 5. TECHNOLOGY STACK --- */}
      <section className="section-padding bg-white">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <h2 className="section-title">Our Technology Stack</h2>
              <p className="section-desc">Cutting-edge technologies and frameworks that power our innovative solutions</p>
            </div>
          </RevealOnScroll>

          <div className="grid-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'ri-cloud-line', title: 'Cloud Computing', desc: 'AWS, Azure, Google Cloud' },
              { icon: 'ri-brain-line', title: 'Artificial Intelligence', desc: 'Machine Learning, NLP' },
              { icon: 'ri-database-line', title: 'Big Data', desc: 'Analytics & Processing' },
              { icon: 'ri-shield-line', title: 'Cybersecurity', desc: 'Protection & Compliance' },
              { icon: 'ri-smartphone-line', title: 'Mobile Development', desc: 'iOS, Android, Cross-platform' },
              { icon: 'ri-code-line', title: 'Web Development', desc: 'React, Node.js, Python' }
            ].map((tech, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="tech-card group">
                  <div className="tech-card-overlay"></div>
                  <div className="relative z-10 text-center">
                    <div className="tech-icon-box">
                      <div className="icon-overlay"></div>
                      <i className={`${tech.icon} tech-icon`}></i>
                    </div>
                    <h3 className="tech-title group-hover-text-blue">{tech.title}</h3>
                    <p className="tech-desc">{tech.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CONTACT SECTION --- */}
      <section id="contact" className="section-padding bg-light relative">
        <div className="bg-gradient-overlay-light opacity-30"></div>
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="section-header">
              <h2 className="section-title">Ready to Get Started?</h2>
              <p className="section-desc">Let's discuss your project and explore how we can help you achieve your business goals.</p>
            </div>
          </RevealOnScroll>

          <div className="grid-2 gap-12 items-start">
            <RevealOnScroll delay={200}>
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-dark">Get In Touch</h3>
                <div className="contact-list">
                  <div className="contact-item group">
                    <div className="contact-icon-box">
                      <div className="icon-overlay"></div>
                      <i className="ri-mail-line contact-icon"></i>
                    </div>
                    <div>
                      <p className="contact-label group-hover-text-blue">Email</p>
                      <p className="contact-value">support@athenaiqsolutions.com</p>
                    </div>
                  </div>
                  <div className="contact-item group">
                    <div className="contact-icon-box">
                      <div className="icon-overlay"></div>
                      <i className="ri-phone-line contact-icon"></i>
                    </div>
                    <div>
                      <p className="contact-label group-hover-text-blue">Phone</p>
                      <p className="contact-value">+1 (555) 123-4567</p>
                      <p className="contact-value">+91 7022635059</p>
                    </div>
                  </div>
                  <div className="contact-item group">
                    <div className="contact-icon-box">
                      <div className="icon-overlay"></div>
                      <i className="ri-map-pin-line contact-icon"></i>
                    </div>
                    <div>
                      <p className="contact-label group-hover-text-blue">Locations</p>
                      <p className="contact-value">San Francisco, CA</p>
                      <p className="contact-value">Gurgaon, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="btn-primary w-full" onClick={handleOpenModal}>
                    <div className="btn-gradient-overlay"></div>
                    <span>Schedule a Meeting</span>
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-input" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input type="text" className="form-input" placeholder="Your company" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea rows="4" className="form-input" placeholder="Tell us about your project..." required></textarea>
                  <p className="text-sm text-gray-500 mt-1">0/500 characters</p>
                </div>
                <button type="submit" className="btn-primary w-full">
                  <div className="btn-gradient-overlay"></div>
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