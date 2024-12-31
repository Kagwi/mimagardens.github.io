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
                a popular destination for social and corporate events, including weddings and 
                family gatherings.
              </p>
              <p className="text-lg text-gray-600">
                Our venue offers dining options with both local and international cuisine served 
                in a serene environment. We provide clean and well-maintained accommodations, 
                including cubicles that are praised for their neat interiors.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="Mima Gardens"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Event Spaces',
                description: 'Versatile indoor and outdoor spaces for all types of events',
                image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
              },
              {
                title: 'Accommodation',
                description: 'Comfortable rooms with modern amenities',
                image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
              },
              {
                title: 'Restaurant',
                description: 'Fine dining with local and international cuisine',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MenuSection />
      <EventBooking />
    </div>
  );
};

export default About;