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

const StaffAugmentation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    { icon: "ri-timer-2-line", title: "Onboarding within 2 weeks", desc: "Get your team members ready and productive in just 14 days" },
    { icon: "ri-money-dollar-circle-line", title: "No recruitment overhead", desc: "Skip the lengthy hiring process and associated costs" },
    { icon: "ri-calendar-check-line", title: "Short-term or long-term models", desc: "Flexible engagement models that adapt to your needs" }
  ];

  const features = [
    { title: "Pre-vetted Talent Pool", desc: "All professionals are thoroughly screened and tested for technical skills and cultural fit" },
    { title: "Seamless Integration", desc: "Our talent adapts quickly to your existing workflows and company culture" },
    { title: "Cost-Effective Solution", desc: "Reduce hiring costs and overhead while maintaining high-quality output" },
    { title: "Scalable Teams", desc: "Scale your team up or down based on project requirements and business needs" },
    { title: "Ongoing Support", desc: "Continuous performance monitoring and support throughout the engagement" },
    { title: "Risk-Free Trial", desc: "Two-week trial period to ensure the perfect fit for your team" }
  ];

  return (
    <div className="font-sans text-gray-600 bg-white w-full overflow-x-hidden">
      
      {/* HERO */}
      <section className="relative bg-gray-900 py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20recruitment%20and%20staffing%20office%20environment%20with%20diverse%20talented%20professionals%2C%20modern%20HR%20workspace%20with%20interview%20rooms%20and%20collaboration%20areas%2C%20contemporary%20office%20with%20blue%20and%20purple%20lighting%2C%20clean%20professional%20background%20with%20business%20networking%20elements&width=1920&height=1080&seq=staffing-hero-bg&orientation=landscape')" }}
        ></div>
        <div className="relative container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">Flexible Staffing Solutions for Business Growth</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Skilled professionals who integrate with your team and contribute from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-center whitespace-nowrap cursor-pointer">
                  Request Talent
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <p className="text-xl text-gray-600">We make staff augmentation simple, efficient, and effective for your business.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feat, i) => (
                  <RevealOnScroll key={i} delay={i * 100}>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feat.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get matched with skilled professionals who can contribute to your projects immediately. No lengthy interviews, no recruitment hassles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Request Talent
                </button>
                <button onClick={() => setIsModalOpen(true)} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center whitespace-nowrap cursor-pointer">
                  Schedule a Call
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Request Talent"
        subtitle="Tell us about your staffing needs and we'll connect you with skilled professionals who can integrate seamlessly with your team."
        preselectedService="Staff Augmentation"
      />
    </div>
  );
};

export default StaffAugmentation;