import React, { useEffect, useState } from 'react';

const ScheduleModal = ({ 
  isOpen, 
  onClose, 
  title = "Get Started with Digital Innovation", 
  subtitle = "Ready to transform your business? Let's discuss your goals and create a customized digital strategy that drives real results for your organization.",
  preselectedService = "" 
}) => {
  const [charCount, setCharCount] = useState(0);
  const [today, setToday] = useState('');

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setToday(new Date().toISOString().split('T')[0]);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-all duration-300 backdrop-blur-sm">
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 opacity-100 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer hover:scale-110"
          >
            <i className="ri-close-line text-xl text-gray-600"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">{subtitle}</p>
          
          <form id="schedule-meeting-form" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                <input 
                  id="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm shadow-sm hover:shadow-md outline-none" 
                  placeholder="Enter your full name" 
                  type="text" 
                  name="name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                <input 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm shadow-sm hover:shadow-md outline-none" 
                  placeholder="Enter your email" 
                  type="email" 
                  name="email" 
                />
              </div>
            </div>

            {/* Company & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                <input 
                  id="company" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm shadow-sm hover:shadow-md outline-none" 
                  placeholder="Enter your company name" 
                  type="text" 
                  name="company" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm shadow-sm hover:shadow-md outline-none" 
                  placeholder="Enter your phone number" 
                  type="tel" 
                  name="phone" 
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">Project Type *</label>
              <div className="relative">
                <select 
                  id="projectType" 
                  name="projectType" 
                  required 
                  defaultValue={preselectedService}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm appearance-none pr-8 cursor-pointer shadow-sm hover:shadow-md outline-none bg-white"
                >
                  <option value="">Select project type</option>
                  <option value="ai-services">AI Services</option>
                  <option value="digital-solutions">Digital Solutions</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="staff-augmentation">Staff Augmentation</option>
                  <option value="technology-consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">Preferred Date *</label>
                <input 
                  id="preferredDate" 
                  required 
                  min={today}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm cursor-pointer shadow-sm hover:shadow-md outline-none" 
                  type="date" 
                  name="preferredDate" 
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">Preferred Time *</label>
                <div className="relative">
                  <select 
                    id="preferredTime" 
                    name="preferredTime" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm appearance-none pr-8 cursor-pointer shadow-sm hover:shadow-md outline-none bg-white"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                maxLength="500" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm resize-none shadow-sm hover:shadow-md outline-none" 
                placeholder="Tell us about your project requirements, goals, and any specific needs..."
                onChange={(e) => setCharCount(e.target.value.length)}
              ></textarea>
              <p className="text-sm text-gray-500 mt-1 text-right">{charCount}/500 characters</p>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md hover:scale-105 active:scale-98"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105 active:scale-98"
              >
                Schedule Meeting
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;