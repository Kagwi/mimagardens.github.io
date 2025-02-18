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

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Event Space 1", "Event Space 2", "Poolside 1", "Poolside 2"].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`https://example.com/image${index + 1}.jpg`}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Cuisine Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Local Cuisine</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Dish 1", "Dish 2", "Dish 3", "Dish 4"].map((dish, index) => (
              <motion.div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img src={`https://example.com/local-dish${index + 1}.jpg`} alt={dish} className="w-full h-48 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beverages, Desserts, and Drinks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {["Beverages", "Desserts", "Drinks"].map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">{category}</h2>
              <div className={`grid grid-cols-2 md:grid-cols-${category === "Drinks" ? "6" : "4"} gap-8`}>
                {[...Array(category === "Drinks" ? 6 : 4)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  >
                    <img src={`https://example.com/${category.toLowerCase()}${index + 1}.jpg`} alt={`${category} ${index + 1}`} className="w-full h-48 object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Your Event Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'url(https://example.com/event-bg.jpg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Book Your Event</h2>
          <p className="text-lg mb-6">Reserve your spot today for an unforgettable experience at Mima Gardens.</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">Book Now</button>
        </div>
      </section>

      <MenuSection />
      <EventBooking />
    </div>
  );
};

export default About;
