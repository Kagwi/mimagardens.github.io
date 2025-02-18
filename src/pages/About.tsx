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
              <p className="text-lg text-gray-600">
                Our venue offers dining options with a variety of delicacies served 
                in a serene environment. We provide exceptional services to make your experience
                one for the books.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://source.unsplash.com/400x300/?garden"
                alt="Mima Gardens 1"
                className="w-full h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://source.unsplash.com/400x300/?nature"
                alt="Mima Gardens 2"
                className="w-full h-64 rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Menu's Sneak Peek Section */}
      <section className="py-16 bg-gray-50 bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?restaurant')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Menu's Sneak Peek</h2>
          
          {/* Food Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Food</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img src={`https://source.unsplash.com/400x300/?food${index + 1}`} alt={`Food ${index + 1}`} className="w-full h-48 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Desserts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img src={`https://source.unsplash.com/400x300/?dessert${index + 1}`} alt={`Dessert ${index + 1}`} className="w-full h-48 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beverages Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Beverages</h3>
            
            {/* Alcoholic Drinks */}
            <h4 className="text-xl font-semibold text-center mb-6 text-white">Alcoholic</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img src={`https://source.unsplash.com/400x300/?alcohol${index + 1}`} alt={`Alcoholic Drink ${index + 1}`} className="w-full h-48 object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Non-Alcoholic Drinks */}
            <h4 className="text-xl font-semibold text-center mb-6 text-white">Non-Alcoholic</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img src={`https://source.unsplash.com/400x300/?juice${index + 1}`} alt={`Non-Alcoholic Drink ${index + 1}`} className="w-full h-48 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EventBooking />
    </div>
  );
};

export default About;
