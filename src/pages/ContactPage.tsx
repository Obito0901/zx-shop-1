import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our anime collections? Want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black/40 rounded-2xl border border-purple-500/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <MessageCircle className="text-green-400" size={24} />
              <span>Send us a Message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="custom">Custom Design Request</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all duration-300 resize-none"
                  placeholder="Tell us about your anime fashion dreams..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold text-lg rounded-full hover:from-green-300 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-400/30 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-red-900/20 to-black/40 rounded-2xl border border-red-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-400/20 rounded-full">
                    <Mail className="text-green-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">op.sanjai123@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-400/20 rounded-full">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400">+91 9345916715</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-400/20 rounded-full">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-400">India,tamil nadu</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-400/20 rounded-full">
                    <Instagram className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Instagram</div>
                    <a 
                      href="https://instagram.com/viper_corporation_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    >
                      @viper_corporation_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-blue-900/20 to-black/40 rounded-2xl border border-blue-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quick FAQ</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-2">Shipping Time?</h3>
                  <p className="text-gray-400 text-sm">3-7 business days within India, 10-15 days international</p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-2">Size Exchanges?</h3>
                  <p className="text-gray-400 text-sm">Free size exchanges within 30 days of purchase</p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-2">Custom Designs?</h3>
                  <p className="text-gray-400 text-sm">Yes! Contact us for personalized anime designs</p>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-2">Payment Methods?</h3>
                  <p className="text-gray-400 text-sm">UPI, Paytm, Credit/Debit Cards, Net Banking</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-black/40 rounded-2xl border border-yellow-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-yellow-400 font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-yellow-400 font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;