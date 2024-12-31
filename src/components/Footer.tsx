import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mima Gardens</h3>
            <p className="text-gray-300">
              Your perfect destination for events and accommodation in Maragua,
              Murang'a County.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+254 700 000000</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@mimagardens.co.ke</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Kenol-Murang'a Highway, Maragua</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mima Gardens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;