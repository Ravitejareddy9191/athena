import React, { useState, useEffect } from 'react';
import '../styles/TechnologyExpertise.css';

const TechnologyExpertise = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // --- REVEAL ON SCROLL LOGIC ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px', // Trigger exactly when it enters viewport
      threshold: 0.1     // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('te-reveal-visible');
          observer.unobserve(entry.target); // Run animation only once
        }
      });
    }, observerOptions);

    // Select all elements with the 'te-reveal' class
    const elements = document.querySelectorAll('.te-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // --- DATA ---
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
    <div className="te-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <section className="te-hero">
        <div className="te-hero-bg"></div>
        <div className="te-container relative z-10 text-center te-reveal">
          <h1 className="te-hero-title">Technology That Drives Innovation</h1>
          <p className="te-hero-subtitle">
            Leverage cutting-edge technologies and cloud platforms to accelerate your digital transformation and stay ahead of the competition.
          </p>
          <div className="te-flex-center">
             <button className="te-btn-white">Get Technology Consultation</button>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="te-section-white">
        <div className="te-container">
          <div className="te-stats-grid te-reveal">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="te-stat-icon-box">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="te-stat-number">{item.num}</div>
                <div className="te-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPREHENSIVE TECH STACK */}
      <section className="te-section-light" id="technology-solutions">
        <div className="te-container">
          <div className="text-center mb-16 te-reveal">
            <h2 className="te-section-title">Comprehensive Technology Stack</h2>
            <p className="te-section-subtitle">
              We leverage cutting-edge technologies across all domains to deliver robust, scalable, and future-ready solutions for your business.
            </p>
          </div>
          
          {/* Stack Categories Loop */}
          <div className="te-stack-wrapper">
            {techStacks.map((cat, i) => (
              <div key={i} className="te-reveal">
                <h3 className="te-category-title">{cat.category}</h3>
                <div className="te-grid-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="te-card group">
                      <div className="te-card-icon-box">
                        <i className={`${item.icon}`}></i>
                      </div>
                      <h4 className="te-card-title">{item.title}</h4>
                      <p className="te-card-desc">{item.desc}</p>
                      <div className="te-points-list">
                        {item.points.map((pt, k) => (
                          <div key={k} className="te-point-item">
                            <i className="ri-check-line"></i>
                            <span>{pt}</span>
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
          <div className="te-integrated-box te-reveal">
            <h3 className="te-box-title">Integrated Technology Solutions</h3>
            <p className="te-box-desc">
              We don't just use individual technologies - we create integrated ecosystems that work seamlessly together to deliver comprehensive business solutions.
            </p>
            <div className="te-box-stats">
              <div className="text-center">
                <div className="te-box-num">50+</div>
                <div className="te-box-label">Technologies</div>
              </div>
              <div className="te-divider"></div>
              <div className="text-center">
                <div className="te-box-num">100%</div>
                <div className="te-box-label">Integration</div>
              </div>
              <div className="te-divider"></div>
              <div className="text-center">
                <div className="te-box-num">24/7</div>
                <div className="te-box-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SOLUTIONS */}
      <section className="te-section-light">
        <div className="te-container">
          <div className="text-center mb-16 te-reveal">
            <h2 className="te-section-title">Industry-Specific Technology Solutions</h2>
            <p className="te-section-subtitle">
              We deliver tailored technology solutions across diverse industries, understanding unique requirements and compliance needs.
            </p>
          </div>
          <div className="te-grid-3 te-reveal">
            {industries.map((ind, i) => (
              <div key={i} className="te-card group">
                <div className="te-card-icon-box">
                  <i className={`${ind.icon}`}></i>
                </div>
                <h3 className="te-card-title">{ind.title}</h3>
                <p className="te-card-desc">{ind.desc}</p>
                <div className="te-points-list">
                  {ind.list.map((li, j) => (
                    <div key={j} className="te-point-item">
                      <i className="ri-check-line"></i>
                      <span>{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="te-section-white">
        <div className="te-container">
          <div className="text-center mb-16 te-reveal">
            <h2 className="te-section-title">Client Success Stories</h2>
            <p className="te-section-subtitle">
              See how organizations have transformed their technology infrastructure and achieved remarkable results with our solutions.
            </p>
          </div>
          <div className="te-grid-2 te-reveal">
            {testimonials.map((t, i) => (
              <div key={i} className="te-testimonial-card">
                <div className="mb-6">
                  <h4 className="te-testimonial-name">{t.name}</h4>
                  <p className="te-testimonial-role">{t.role}</p>
                  <p className="te-testimonial-company">{t.company}</p>
                </div>
                <div className="mb-4">
                  <div className="te-stars">
                    {[...Array(5)].map((_, s) => <i key={s} className="ri-star-fill"></i>)}
                  </div>
                  <blockquote className="te-quote">"{t.quote}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="te-section-light">
        <div className="te-container">
          <div className="text-center mb-16 te-reveal">
            <h2 className="te-section-title">Frequently Asked Questions</h2>
            <p className="te-section-subtitle">
              Get answers to common questions about our technology services and implementation process.
            </p>
          </div>
          <div className="te-faq-wrapper te-reveal">
            {faqs.map((q, i) => (
              <div key={i} className="te-faq-item">
                <button 
                  className="te-faq-btn"
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className="te-faq-question">{q}</h3>
                  <div className="te-faq-icon">
                    <i className={`ri-add-line ${openFaq === i ? 'rotate' : ''}`}></i>
                  </div>
                </button>
                <div className={`te-faq-content ${openFaq === i ? 'open' : ''}`}>
                  <p>
                    Our team provides comprehensive support and ensures seamless integration with your existing workflows. We prioritize security and scalability in every project.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="te-cta-section">
        <div className="te-container text-center te-reveal">
          <div className="te-cta-content">
            <h2 className="te-cta-title">Partner With Us</h2>
            <p className="te-cta-desc">
              Ready to leverage these cutting-edge technologies for your business? Let's discuss how we can accelerate your digital transformation journey.
            </p>
            <div className="te-flex-center">
              <button className="te-btn-white">
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