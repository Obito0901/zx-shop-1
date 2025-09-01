import React from 'react';
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-purple-500/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-red-500 bg-clip-text text-transparent mb-4">
              ZX FASHION
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Where anime culture meets street fashion. Exclusive designs for the next generation of otaku fashion enthusiasts.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/viper_corporation_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-green-400/30 pb-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Limited Edition', 'Size Guide', 'Care Instructions'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-red-400/30 pb-2">
              CONTACT
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-green-400" />
                <span>hello@zxfashion.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-green-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} className="text-green-400" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-purple-500/30 pt-8 mb-8">
          <h4 className="text-lg font-bold text-white mb-4 text-center">PAYMENT METHODS</h4>
          <div className="flex items-center justify-center space-x-6">
            <div className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold rounded-lg">
              UPI
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg">
              PAYTM
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg">
              CARDS
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/30 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2025 ZX Fashion. All rights reserved. Designed for anime lovers.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;