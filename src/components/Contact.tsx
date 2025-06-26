import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: '22691A3268@mits.ac.in',
      link: 'mailto:22691A3268@mits.ac.in',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 90636 56561',
      link: 'tel:+919063656561',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kadiri, Andhra Pradesh, 515591',
      link: null,
    },
  ];

  const personalDetails = [
    { label: 'Date of Birth', value: '28/10/2003' },
    { label: 'Languages', value: 'English, Telugu' },
    { label: 'Interests', value: 'Gaming, Cooking, Meditation' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations in data science and machine learning!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Let's Connect</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Whether you have a data science project, internship opportunity, or just want to discuss 
                  the latest in ML and AI, I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <item.icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Personal Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-4">Personal Details</h4>
                <div className="space-y-3">
                  {personalDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-slate-600">{detail.label}:</span>
                      <span className="font-medium text-slate-800">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/neelaveni-somanaboyana-a091b1254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Neelaveninethra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;