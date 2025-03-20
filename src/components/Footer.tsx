import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="text-left">
            <h3 className="text-2xl font-bold">Mima Gardens & Hotel</h3>
            <p className="text-gray-300">
              Your Perfect Destination for All Types of Events in Maragua, Murang'a County.
            </p>
            <a href="/">
              <img src="https://raw.githubusercontent.com/Kagwi/mimagardens.github.io/main/Mima%20Gardens%20Logo.PNG" alt="Mima Gardens Logo" className="w-32 h-auto mt-4" />
            </a>
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
                <span className="break-words">mimagardens2121@gmail.com</span>
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
              <p>Monday: 06:30 AM – 11:00 PM</p>
              <p>Tuesday: 06:30 AM – 11:00 PM</p>
              <p>Wednesday: 06:30 AM – 11:00 PM</p>
              <p>Thursday: 06:30 AM – 11:00 PM</p>
              <p>Friday: 24 hrs</p>
              <p>Saturday: 24 hrs</p>
              <p>Sunday: 06:30 AM – 12:00 AM</p>
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
              <a href="https://www.tiktok.com/@mima_gardens_and_hotel?lang=en" className="hover:text-emerald-400 transition-colors">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_5zQy0mybWxHHFzDzXgciIodQAdRmLJDwEzbfYFIFcv9afxw94z_MZs&s" alt="TikTok" className="w-8 h-8" />
              </a>
              <a href="https://wa.me/254704131385" className="hover:text-emerald-400 transition-colors">
                <img src="https://green-api.com/en/docs/assets/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/watch?v=_YItXtRJKz0" className="text-red-500 hover:text-red-700 transition-colors">
                <Youtube size={24} />
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
