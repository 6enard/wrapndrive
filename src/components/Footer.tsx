import React from 'react';
import { Phone, Mail, MapPin, Car, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">WrapNDrive</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium car wrapping, protection, and detailing services in Nairobi. Transform your vehicle with our expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-pink-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/simulation" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Simulator
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Vinyl Wraps</li>
              <li>PPF & Ceramic Coating</li>
              <li>Car Detailing</li>
              <li>Window Tinting</li>
              <li>Chrome Delete</li>
              <li>Paint Protection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+254 792 391 610</p>
                  <p className="text-gray-400 text-sm">Call or WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">wrapndrivelimited@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Northern Bypass, Opposite Quickmart Thome<br />
                    Gachie, Nairobi Area, Kenya 00200
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 8AM-5PM</p>
                  <p>Sun: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 WrapNDrive Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;