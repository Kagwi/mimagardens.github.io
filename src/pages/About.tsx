import React from 'react';
import { motion } from 'framer-motion';
import MenuSection from '../components/MenuSection';
import EventBooking from '../components/EventBooking';

const About = () => {
  return (
    <div className="pt-16">
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6">About Mima Gardens</h1>
              <p className="text-lg text-gray-600 mb-6">
                Located in Murang'a County, Mima Gardens and Hotel offers more than just a venue—it’s a place where nature 
                and hospitality blend to create memorable experiences. We aim for genuine warmth and care to define everything we do, providing
                not just a service, but a lasting connection to the beauty and tranquility of our surroundings.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Renowned for our lush, vibrant gardens, we’ve become a trusted choice for social and corporate 
                gatherings, including weddings, family celebrations, baby showers, and more. Every event here is thoughtfully tailored, reflecting the heart of our brand: authenticity, 
                natural beauty, and a commitment to making every guest feel valued and at home.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Enjoy a variety of delicious delicacies served in a serene, inviting atmosphere that feels like a peaceful escape. 
                Our team is dedicated to providing heartfelt, exceptional service, making sure every moment here leaves you feeling relaxed, welcomed, and truly special. 
              </p>

              {/* Mission and Vision Section */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide a premier hospitality and events experience by offering a calm and 
                elegant environment, exceptional service, and delicious meals that create 
                unforgettable memories for our guests.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the leading events and hospitality destination in Kenya, 
                known for excellence, innovation, and a commitment to customer satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0718.jpg?raw=true"
                alt="Mima Gardens 1"
                className="w-full h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0713.jpg?raw=true"
                alt="Mima Gardens 2"
                className="w-full h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <MenuSection />
      <EventBooking />
    </div>
  );
};

export default About;
