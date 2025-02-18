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
                Mima Gardens is a versatile events and accommodation venue located in Maragua, 
                Murang'a County, Kenya. We are renowned for our lush green gardens, making us 
                a popular destination for social and corporate events, including weddings, 
                family gatherings, baby showers, and more.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our venue offers dining options with a variety of delicacies served 
                in a serene environment. We provide exceptional services to make your experience
                one for the books.
              </p>

              {/* Mission and Vision Section */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide a premier hospitality and events experience by offering a tranquil and 
                elegant environment, exceptional service, and exquisite cuisine that create 
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
                src="https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima%20Edited%202.PNG?raw=true"
                alt="Mima Gardens 1"
                className="w-full h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima%20Edited%204(c).PNG?raw=true"
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
