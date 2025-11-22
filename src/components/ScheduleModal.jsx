import React, { useEffect } from 'react';


const ScheduleModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <i className="ri-close-line"></i>
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Get Started with <br /> <span className="text-gradient-hero">Digital Innovation</span></h2>
          <p className="modal-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        <form className="modal-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label className="form-label">Work Email</label>
            <input type="email" className="form-input" placeholder="john@company.com" required />
          </div>

          <div className="form-group">
            <label className="form-label">Service of Interest</label>
            <select className="form-input">
              <option>Digital Solutions</option>
              <option>AI Services</option>
              <option>Data Analytics</option>
              <option>Staff Augmentation</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Details</label>
            <textarea className="form-input" rows="3" placeholder="Tell us about your goals..."></textarea>
          </div>

          <button type="submit" className="btn-primary w-full">
            <div className="btn-gradient-overlay"></div>
            <span>Submit Request</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;