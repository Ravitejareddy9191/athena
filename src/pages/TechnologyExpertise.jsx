import React, { useState } from 'react';
import '../styles/TechnologyExpertise.css';

const TechnologyExpertise = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // --- DATA ARRAYS ---

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
        { icon: "ri-amazon-line", title: "Amazon Web Services (AWS)", desc: "Scalable cloud computing platform with 200+ comprehensive services for enterprises", points: ["EC2 Computing", "S3 Storage", "RDS Databases", "Lambda Functions"] },
        { icon: "ri-microsoft-line", title: "Microsoft Azure", desc: "Comprehensive cloud platform with integrated Microsoft ecosystem for enterprise solutions", points: ["Virtual Machines", "App Services", "SQL Database", "Active Directory"] },
        { icon: "ri-google-line", title: "Google Cloud Platform", desc: "AI-powered cloud infrastructure with advanced machine learning and data analytics", points: ["Compute Engine", "BigQuery", "AI Platform", "Kubernetes Engine"] },
        { icon: "ri-cloud-line", title: "IBM Cloud", desc: "Hybrid cloud platform designed for business transformation and enterprise workloads", points: ["Red Hat OpenShift", "Watson AI", "Hybrid Integration", "Security Services"] }
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        { icon: "ri-database-2-line", title: "MongoDB", desc: "Flexible NoSQL document database for modern applications and real-time analytics", points: ["Document Storage", "Horizontal Scaling", "Real-time Analytics", "Atlas Cloud"] },
        { icon: "ri-database-line", title: "PostgreSQL", desc: "Advanced open-source relational database with extensive SQL compliance and performance", points: ["ACID Compliance", "JSON Support", "Full-text Search", "Extensibility"] },
        { icon: "ri-refresh-line", title: "Redis", desc: "In-memory data structure store used for caching, session management, and real-time applications", points: ["In-memory Speed", "Data Structures", "Pub/Sub Messaging", "Clustering"] },
        { icon: "ri-search-2-line", title: "Elasticsearch", desc: "Distributed search and analytics engine for full-text search and log analysis", points: ["Full-text Search", "Real-time Analytics", "Distributed Architecture", "RESTful API"] }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { icon: "ri-code-s-slash-line", title: "Python", desc: "Versatile programming language for AI, data science, web development, and automation", points: ["AI/ML Libraries", "Data Analytics", "Web Frameworks", "Automation Scripts"] },
        { icon: "ri-java-line", title: "Java", desc: "Enterprise-grade programming language for scalable applications and microservices", points: ["Spring Framework", "Microservices", "Enterprise Apps", "Cross-platform"] },
        { icon: "ri-javascript-line", title: "JavaScript/Node.js", desc: "Full-stack JavaScript runtime for modern web applications and real-time services", points: ["React/Vue.js", "Express.js", "Real-time Apps", "API Development"] },
        { icon: "ri-window-line", title: "C#/.NET", desc: "Microsoft development platform for enterprise applications and cloud services", points: [".NET Core", "Azure Integration", "Enterprise Apps", "Cross-platform"] }
      ]
    },
    {
        category: "DevOps & Infrastructure",
        items: [
            { icon: "ri-box-3-line", title: "Docker", desc: "Containerization platform for consistent application deployment across environments", points: ["Container Images", "Microservices", "CI/CD Integration", "Orchestration"] },
            { icon: "ri-settings-3-line", title: "Kubernetes", desc: "Container orchestration system for automated deployment, scaling, and management", points: ["Auto-scaling", "Load Balancing", "Service Discovery", "Rolling Updates"] },
            { icon: "ri-git-branch-line", title: "Jenkins", desc: "Open-source automation server for continuous integration and deployment pipelines", points: ["CI/CD Pipelines", "Plugin Ecosystem", "Automated Testing", "Deployment Automation"] },
            { icon: "ri-building-line", title: "Terraform", desc: "Infrastructure as code tool for provisioning and managing cloud resources", points: ["Infrastructure as Code", "Multi-cloud Support", "State Management", "Resource Planning"] }
        ]
    },
    {
        category: "AI & Machine Learning",
        items: [
            { icon: "ri-brain-line", title: "TensorFlow", desc: "Open-source machine learning framework for training and deploying ML models", points: ["Deep Learning", "Model Training", "TensorBoard", "Mobile Deployment"] },
            { icon: "ri-fire-line", title: "PyTorch", desc: "Dynamic neural network framework for research and production machine learning", points: ["Dynamic Graphs", "Research-friendly", "Production Ready", "Distributed Training"] },
            { icon: "ri-flashlight-line", title: "Apache Spark", desc: "Unified analytics engine for large-scale data processing and machine learning", points: ["Big Data Processing", "MLlib", "Streaming", "Cluster Computing"] },
            { icon: "ri-chat-3-line", title: "OpenAI GPT", desc: "Advanced language models for natural language processing and generative AI", points: ["Text Generation", "Language Understanding", "API Integration", "Fine-tuning"] }
        ]
    },
    {
        category: "Frontend Technologies",
        items: [
            { icon: "ri-reactjs-line", title: "React", desc: "Popular JavaScript library for building interactive user interfaces and web applications", points: ["Component-based", "Virtual DOM", "Hook System", "Large Ecosystem"] },
            { icon: "ri-vuejs-line", title: "Vue.js", desc: "Progressive JavaScript framework for building user interfaces and single-page applications", points: ["Progressive Enhancement", "Template Syntax", "Composition API", "Easy Learning"] },
            { icon: "ri-angular-js-line", title: "Angular", desc: "Full-featured TypeScript framework for building scalable web applications", points: ["TypeScript Support", "Dependency Injection", "CLI Tools", "Enterprise Ready"] },
            { icon: "ri-pages-line", title: "Next.js", desc: "React framework with server-side rendering and static site generation capabilities", points: ["SSR/SSG", "API Routes", "Image Optimization", "Performance Optimized"] }
        ]
    }
  ];

  const industries = [
    { icon: "ri-heart-pulse-line", title: "Healthcare", desc: "HIPAA-compliant systems, telemedicine platforms, and electronic health records.", list: ["Electronic Health Records", "Telemedicine platforms", "Patient management systems", "Medical device integration"] },
    { icon: "ri-bank-line", title: "Financial Services", desc: "Secure fintech solutions, trading platforms, and regulatory compliance systems.", list: ["Trading platforms", "Payment processing", "Risk management systems", "Compliance automation"] },
    { icon: "ri-shopping-cart-line", title: "E-commerce", desc: "Scalable online stores, payment gateways, and inventory management systems.", list: ["E-commerce platforms", "Payment integration", "Inventory management", "Customer analytics"] },
    { icon: "ri-settings-3-line", title: "Manufacturing", desc: "IoT systems, supply chain management, and industrial automation solutions.", list: ["IoT monitoring", "Supply chain systems", "Quality control", "Predictive maintenance"] },
    { icon: "ri-graduation-cap-line", title: "Education", desc: "Learning management systems, virtual classrooms, and educational technology.", list: ["Learning management systems", "Virtual classrooms", "Student portals", "Assessment tools"] },
    { icon: "ri-truck-line", title: "Logistics", desc: "Fleet management, tracking systems, and warehouse automation solutions.", list: ["Fleet management", "Tracking systems", "Warehouse automation", "Route optimization"] }
  ];

  const testimonials = [
    { name: "James Wilson", role: "CTO", company: "TechStart Solutions", quote: "Athena IQ Solutions migrated our entire infrastructure to the cloud with zero downtime. Their AWS expertise saved us 60% on operational costs while improving performance." },
    { name: "Maria Garcia", role: "VP of Engineering", company: "Global Retail Corp", quote: "The custom e-commerce platform they built handles millions of transactions seamlessly. Our conversion rate increased by 35% after the launch." },
    { name: "Robert Chen", role: "Lead Developer", company: "DataTech Innovations", quote: "Their PostgreSQL optimization reduced our query times by 80%. The database performance improvements transformed our application's user experience." },
    { name: "Lisa Thompson", role: "Head of Operations", company: "Smart Manufacturing Inc", quote: "The MongoDB implementation for our IoT platform was flawless. We now process millions of sensor data points in real-time without any issues." }
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
    <div className="tech-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="tech-expert-hero">
        <div className="tech-expert-hero-bg"></div>
        <div className="tech-container relative z-10 text-center">
          <h1 className="tech-hero-title">Technology That Drives Innovation</h1>
          <p className="tech-hero-subtitle">
            Leverage cutting-edge technologies and cloud platforms to accelerate your digital transformation and stay ahead of the competition.
          </p>
          <button className="btn-white-lg">Get Technology Consultation</button>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-white py-16">
        <div className="tech-container">
          <div className="tech-expert-stats-grid">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="tech-expert-stat-icon">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="tech-expert-stat-number">{item.num}</div>
                <div className="tech-expert-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE TECH STACK */}
      <section className="bg-gray-50 py-20">
        <div className="tech-container">
          <div className="text-center mb-16">
            <h2 className="tech-section-title">Comprehensive Technology Stack</h2>
            <p className="tech-section-subtitle">
              We leverage cutting-edge technologies across all domains to deliver robust, scalable, and future-ready solutions for your business.
            </p>
          </div>
          
          {/* Stack Categories Loop */}
          <div className="space-y-16">
            {techStacks.map((cat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{cat.category}</h3>
                <div className="tech-cards-grid-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="tech-expert-card group">
                      <div className="tech-expert-card-icon">
                        <i className={`${item.icon} text-xl text-gray-900`}></i>
                      </div>
                      <h4 className="tech-expert-card-title">{item.title}</h4>
                      <p className="tech-expert-card-desc">{item.desc}</p>
                      <div className="space-y-1">
                        {item.points.map((pt, k) => (
                          <div key={k} className="flex items-center">
                            <i className="ri-check-line text-green-500 mr-2 text-xs"></i>
                            <span className="text-gray-700 text-xs">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Solutions Box */}
          <div className="mt-16 bg-gray-900 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Integrated Technology Solutions</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We don't just use individual technologies - we create integrated ecosystems that work seamlessly together to deliver comprehensive business solutions.
            </p>
            <div className="flex justify-center items-center gap-8 text-white flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="w-px h-12 bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-gray-400">Integration</div>
              </div>
              <div className="w-px h-12 bg-gray-600 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SOLUTIONS */}
      <section className="bg-gray-50 py-20">
        <div className="tech-container">
          <div className="text-center mb-16">
            <h2 className="tech-section-title">Industry-Specific Technology Solutions</h2>
            <p className="tech-section-subtitle">
              We deliver tailored technology solutions across diverse industries, understanding unique requirements and compliance needs.
            </p>
          </div>
          <div className="tech-cards-grid-3">
            {industries.map((ind, i) => (
              <div key={i} className="tech-industry-card group">
                <div className="tech-industry-icon">
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
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="tech-container">
          <div className="text-center mb-16">
            <h2 className="tech-section-title">Client Success Stories</h2>
            <p className="tech-section-subtitle">
              See how organizations have transformed their technology infrastructure and achieved remarkable results with our solutions.
            </p>
          </div>
          <div className="tech-testimonials-grid-2">
            {testimonials.map((t, i) => (
              <div key={i} className="tech-expert-testimonial bg-gray-50">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{t.name}</h4>
                  <p className="text-gray-600 text-sm mb-1">{t.role}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
                <div className="mb-4">
                  <div className="flex mb-3 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, s) => <i key={s} className="ri-star-fill"></i>)}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic">"{t.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="tech-container">
          <div className="text-center mb-16">
            <h2 className="tech-section-title">Frequently Asked Questions</h2>
            <p className="tech-section-subtitle">
              Get answers to common questions about our technology services and implementation process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((q, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{q}</h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <i className="ri-add-line text-gray-600 transition-transform duration-200"></i>
                  </div>
                </button>
                <div className={`tech-faq-content ${openFaq === i ? 'open' : ''}`}>
                  <p className="p-6 pt-0 text-gray-600">
                    Our team provides comprehensive support and ensures seamless integration with your existing workflows. We prioritize security and scalability in every project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-gray-900 py-20">
        <div className="tech-container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to leverage these cutting-edge technologies for your business? Let's discuss how we can accelerate your digital transformation journey.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block whitespace-nowrap cursor-pointer">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechnologyExpertise;