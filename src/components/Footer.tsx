import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mima Gardens & Hotel</h3>
            <p className="text-gray-300">
              We are your Perfect Destination for All Types of Events and Accommodation in Maragua,
              Murang'a County.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3" />
                <span>+254 704131385</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3" />
                <span className="break-words">mimagardens2121ltd@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3" />
                <span>Kenol-Murang'a Highway, Maragua</span>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="text-gray-300 space-y-1">
              <p>Monday: 08:00 AM – 11:00 PM</p>
              <p>Tuesday: 08:00 AM – 11:00 PM</p>
              <p>Wednesday: 08:00 AM – 11:00 PM</p>
              <p>Thursday: 08:00 AM – 11:00 PM</p>
              <p>Friday: 08:00 AM – 12:00 AM</p>
              <p>Saturday: 08:00 AM – 12:00 AM</p>
              <p>Sunday: 08:00 AM – 12:00 AM</p>

            </div>
          </div>
          
          {/* Social Media & Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/share/1A2Quw9cTB/" className="hover:text-emerald-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/mimagardens2121?igsh=dG5scGo2NmY4ZTB1" className="hover:text-emerald-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://wa.me/254704131385" className="hover:text-emerald-400 transition-colors">
                <img src="https://green-api.com/en/docs/assets/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-300 space-y-1">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
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
