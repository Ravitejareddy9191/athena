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

const TechnologyExpertise = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const stats = [
    { icon: "ri-code-s-slash-line", num: "500+", label: "Tech Projects Delivered" },
    { icon: "ri-shield-check-line", num: "99.9%", label: "System Uptime" },
    { icon: "ri-time-line", num: "15+", label: "Years Tech Experience" },
    { icon: "ri-team-line", num: "50+", label: "Technology Experts" }
  ];

  const techStacks = [
    {
      category: "Cloud Platforms",
      items: [
        { icon: "ri-amazon-line", title: "Amazon Web Services (AWS)", desc: "Scalable cloud computing platform with 200+ comprehensive services for enterprises", features: ["EC2 Computing", "S3 Storage", "RDS Databases", "Lambda Functions"] },
        { icon: "ri-microsoft-line", title: "Microsoft Azure", desc: "Comprehensive cloud platform with integrated Microsoft ecosystem for enterprise solutions", features: ["Virtual Machines", "App Services", "SQL Database", "Active Directory"] },
        { icon: "ri-google-line", title: "Google Cloud Platform", desc: "AI-powered cloud infrastructure with advanced machine learning and data analytics", features: ["Compute Engine", "BigQuery", "AI Platform", "Kubernetes Engine"] },
        { icon: "ri-cloud-line", title: "IBM Cloud", desc: "Hybrid cloud platform designed for business transformation and enterprise workloads", features: ["Red Hat OpenShift", "Watson AI", "Hybrid Integration", "Security Services"] }
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        { icon: "ri-database-2-line", title: "MongoDB", desc: "Flexible NoSQL document database for modern applications and real-time analytics", features: ["Document Storage", "Horizontal Scaling", "Real-time Analytics", "Atlas Cloud"] },
        { icon: "ri-database-line", title: "PostgreSQL", desc: "Advanced open-source relational database with extensive SQL compliance and performance", features: ["ACID Compliance", "JSON Support", "Full-text Search", "Extensibility"] },
        { icon: "ri-refresh-line", title: "Redis", desc: "In-memory data structure store used for caching, session management, and real-time applications", features: ["In-memory Speed", "Data Structures", "Pub/Sub Messaging", "Clustering"] },
        { icon: "ri-search-2-line", title: "Elasticsearch", desc: "Distributed search and analytics engine for full-text search and log analysis", features: ["Full-text Search", "Real-time Analytics", "Distributed Architecture", "RESTful API"] }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { icon: "ri-code-s-slash-line", title: "Python", desc: "Versatile programming language for AI, data science, web development, and automation", features: ["AI/ML Libraries", "Data Analytics", "Web Frameworks", "Automation Scripts"] },
        { icon: "ri-java-line", title: "Java", desc: "Enterprise-grade programming language for scalable applications and microservices", features: ["Spring Framework", "Microservices", "Enterprise Apps", "Cross-platform"] },
        { icon: "ri-javascript-line", title: "JavaScript/Node.js", desc: "Full-stack JavaScript runtime for modern web applications and real-time services", features: ["React/Vue.js", "Express.js", "Real-time Apps", "API Development"] },
        { icon: "ri-window-line", title: "C#/.NET", desc: "Microsoft development platform for enterprise applications and cloud services", features: [" .NET Core", "Azure Integration", "Enterprise Apps", "Cross-platform"] }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        { icon: "ri-box-3-line", title: "Docker", desc: "Containerization platform for consistent application deployment across environments", features: ["Container Images", "Microservices", "CI/CD Integration", "Orchestration"] },
        { icon: "ri-settings-3-line", title: "Kubernetes", desc: "Container orchestration system for automated deployment, scaling, and management", features: ["Auto-scaling", "Load Balancing", "Service Discovery", "Rolling Updates"] },
        { icon: "ri-git-branch-line", title: "Jenkins", desc: "Open-source automation server for continuous integration and deployment pipelines", features: ["CI/CD Pipelines", "Plugin Ecosystem", "Automated Testing", "Deployment Automation"] },
        { icon: "ri-building-line", title: "Terraform", desc: "Infrastructure as code tool for provisioning and managing cloud resources", features: ["Infrastructure as Code", "Multi-cloud Support", "State Management", "Resource Planning"] }
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        { icon: "ri-brain-line", title: "TensorFlow", desc: "Open-source machine learning framework for training and deploying ML models", features: ["Deep Learning", "Model Training", "TensorBoard", "Mobile Deployment"] },
        { icon: "ri-fire-line", title: "PyTorch", desc: "Dynamic neural network framework for research and production machine learning", features: ["Dynamic Graphs", "Research-friendly", "Production Ready", "Distributed Training"] },
        { icon: "ri-flashlight-line", title: "Apache Spark", desc: "Unified analytics engine for large-scale data processing and machine learning", features: ["Big Data Processing", "MLlib", "Streaming", "Cluster Computing"] },
        { icon: "ri-chat-3-line", title: "OpenAI GPT", desc: "Advanced language models for natural language processing and generative AI", features: ["Text Generation", "Language Understanding", "API Integration", "Fine-tuning"] }
      ]
    },
    {
      category: "Frontend Technologies",
      items: [
        { icon: "ri-reactjs-line", title: "React", desc: "Popular JavaScript library for building interactive user interfaces and web applications", features: ["Component-based", "Virtual DOM", "Hook System", "Large Ecosystem"] },
        { icon: "ri-vuejs-line", title: "Vue.js", desc: "Progressive JavaScript framework for building user interfaces and single-page applications", features: ["Progressive Enhancement", "Template Syntax", "Composition API", "Easy Learning"] },
        { icon: "ri-angular-js-line", title: "Angular", desc: "Full-featured TypeScript framework for building scalable web applications", features: ["TypeScript Support", "Dependency Injection", "CLI Tools", "Enterprise Ready"] },
        { icon: "ri-pages-line", title: "Next.js", desc: "React framework with server-side rendering and static site generation capabilities", features: ["SSR/SSG", "API Routes", "Image Optimization", "Performance Optimized"] }
      ]
    }
  ];

  const industries = [
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "HIPAA-compliant systems, telemedicine platforms, and electronic health records.", features: ["Electronic Health Records", "Telemedicine platforms", "Patient management systems", "Medical device integration"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Secure fintech solutions, trading platforms, and regulatory compliance systems.", features: ["Trading platforms", "Payment processing", "Risk management systems", "Compliance automation"] },
    { icon: "ri-shopping-cart-line", title: "E-commerce", desc: "Scalable online stores, payment gateways, and inventory management systems.", features: ["E-commerce platforms", "Payment integration", "Inventory management", "Customer analytics"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "IoT systems, supply chain management, and industrial automation solutions.", features: ["IoT monitoring", "Supply chain systems", "Quality control", "Predictive maintenance"] },
    { icon: "ri-graduation-cap-line", title: "Education", desc: "Learning management systems, virtual classrooms, and educational technology.", features: ["Learning management systems", "Virtual classrooms", "Student portals", "Assessment tools"] },
    { icon: "ri-truck-line", title: "Logistics", desc: "Fleet management, tracking systems, and warehouse automation solutions.", features: ["Fleet management", "Tracking systems", "Warehouse automation", "Route optimization"] }
  ];

  const testimonials = [
    { name: "James Wilson", role: "CTO", company: "TechStart Solutions", text: "Athena IQ Solutions migrated our entire infrastructure to the cloud with zero downtime. Their AWS expertise saved us 60% on operational costs while improving performance." },
    { name: "Maria Garcia", role: "VP of Engineering", company: "Global Retail Corp", text: "The custom e-commerce platform they built handles millions of transactions seamlessly. Our conversion rate increased by 35% after the launch." },
    { name: "Robert Chen", role: "Lead Developer", company: "DataTech Innovations", text: "Their PostgreSQL optimization reduced our query times by 80%. The database performance improvements transformed our application's user experience." },
    { name: "Lisa Thompson", role: "Head of Operations", company: "Smart Manufacturing Inc", text: "The MongoDB implementation for our IoT platform was flawless. We now process millions of sensor data points in real-time without any issues." }
  ];

  const faqs = [
    "What cloud platforms do you specialize in?",
    "How do you ensure data security and compliance?",
    "Do you provide database migration services?",
    "What is your approach to system scalability?",
    "How do you handle system downtime and maintenance?",
    "Can you integrate with our existing systems?",
    "What ongoing support do you provide?",
    "How do you handle technology upgrades and updates?"
  ];

  return (
    <div className="font-sans text-gray-600 bg-white w-full overflow-x-hidden">
      
      {/* HERO */}
      <section 
        className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Advanced%20technology%20infrastructure%20with%20cloud%20computing%20servers%2C%20modern%20data%20center%20environment%20with%20glowing%20network%20connections%2C%20high-tech%20workspace%20with%20cutting-edge%20equipment%2C%20contemporary%20office%20with%20blue%20and%20purple%20lighting%2C%20clean%20professional%20background%20with%20technological%20elements&width=1920&height=1080&seq=technology-hero-bg&orientation=landscape')" }}></div>
        <div className="relative z-10 container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">Technology That Drives Innovation</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Leverage cutting-edge technologies and cloud platforms to accelerate your digital transformation and stay ahead of the competition.
              </p>
              <div className="flex justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-center whitespace-nowrap cursor-pointer">
                  Get Technology Consultation
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* TECH STACKS */}
      <section id="technology-solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We leverage cutting-edge technologies across all domains to deliver robust, scalable, and future-ready solutions for your business.</p>
            </div>
          </RevealOnScroll>
          
          <div className="space-y-16">
            {techStacks.map((stack, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{stack.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stack.items.map((item, j) => (
                    <div key={j} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <i className={`${item.icon} text-xl text-gray-900`}></i>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                      
                      {/* Detailed Features List */}
                      <div className="space-y-1">
                        {item.features && item.features.map((feature, f) => (
                           <div key={f} className="flex items-center">
                             <i className="ri-check-line text-green-500 mr-2 text-xs"></i>
                             <span className="text-gray-700 text-xs">{feature}</span>
                           </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Integrated Tech Box */}
          <RevealOnScroll delay={200}>
            <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Integrated Technology Solutions</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">We don't just use individual technologies - we create integrated ecosystems that work seamlessly together to deliver comprehensive business solutions.</p>
              <div className="flex justify-center items-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-gray-400">Integration</div>
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
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Technology Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We deliver tailored technology solutions across diverse industries, understanding unique requirements and compliance needs.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                 <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                      <i className={`${ind.icon} text-xl text-gray-900`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{ind.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{ind.desc}</p>
                    <div className="space-y-2">
                      {ind.features.map((feat, f) => (
                        <div key={f} className="flex items-center">
                          <i className="ri-check-line text-green-500 mr-2 text-sm"></i>
                          <span className="text-gray-700 text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
             <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how organizations have transformed their technology infrastructure and achieved remarkable results with our solutions.</p>
             </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((client, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{client.name}</h4>
                    <p className="text-gray-600 text-sm mb-1">{client.role}</p>
                    <p className="text-gray-500 text-sm">{client.company}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, star) => (
                        <i key={star} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed italic">"{client.text}"</blockquote>
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our technology services and implementation process.</p>
            </div>
          </RevealOnScroll>
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
                      <i className={`ri-add-line text-gray-600 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}></i>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-6 text-gray-600">
                      Our team provides comprehensive support and ensures seamless integration with your existing workflows. We prioritize security and scalability in every project.
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="partner" className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Partner With Us</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Ready to leverage these cutting-edge technologies for your business? Let's discuss how we can accelerate your digital transformation journey.</p>
              <div className="flex justify-center">
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block whitespace-nowrap cursor-pointer">
                  Start Your Project
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Schedule Technology Consultation"
        subtitle="Let's discuss how cutting-edge technology solutions can accelerate your digital transformation and drive innovation. Our experts will analyze your needs and recommend the best technologies."
        preselectedService="digital-marketing"
      />
    </div>
  );
};

export default TechnologyExpertise;