import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">LuxeCommerce</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premium destination for luxury products. We curate the finest selection of items to elevate your lifestyle — provided by Shivam Bhardwaj.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shivam-sharma-193226311"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/bhardwaj750"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/__bhardwaj750"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" />
              </a>
              <a
                href="https://wa.me/917505611192"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Categories', 'Sale', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Size Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300 text-sm">shivambhardwaj750000@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300 text-sm">+91 7505611192</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300 text-sm">Knowledge Park III, Greater Noida, UP 201306</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} LuxeCommerce [Shivam Bhardwaj]. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
