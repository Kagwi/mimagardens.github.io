import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import LocationMap from '../components/map/LocationMap';

const Contact = () => {
  return (
    <div className="pt-16">
      <section 
        className="py-16 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0648.jpg?raw=true')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-emerald-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+254 704131385</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-emerald-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>mimagardens2121ltd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-emerald-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>Kenol-Murang'a Highway, Maragua</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-emerald-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p> Monday: 08:00 AM – 11:00 PM </p>
                    <p> Tuesday: 08:00 AM – 11:00 PM </p>
                    <p> Wednesday: 08:00 AM – 11:00 PM </p>
                    <p> Thursday: 08:00 AM – 11:00 PM </p>
                    <p> Friday: 24 hrs </p>
                    <p> Saturday: 24 hrs </p>
                    <p> Sunday: 08:00 AM – 12:00 AM </p>   
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>

            <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
              <LocationMap />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
