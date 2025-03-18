import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { title: 'Beautiful Gardens', description: 'Mima Gardens features vibrant, well-tended gardens...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true' },
  { title: 'Customizable Events', description: 'We provide a spacious and well-maintained venue...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true' },
  { title: 'Ample Parking', description: 'With a large parking space, Mima Gardens ensures convenience...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true' },
  { title: 'Your Favorite Local Cuisine', description: 'Our restaurant serves delicious, freshly prepared dishes...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true' },
  { title: 'Sophisticated Bar Experience', description: 'Enjoy a sophisticated bar experience with a wide range of drinks...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true' },
  { title: 'Excellent Customer Service', description: 'At Mima Gardens, customer satisfaction is our top priority...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true' },
  { title: 'Swimming Pool Escape', description: 'Experience a refreshing escape in our well-maintained pool...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true' },
  { title: 'Outdoor Dining', description: 'Dine under the open sky with a serene ambiance...', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true' }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id="content-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center my-12">Our Features</h2>
        <div className="flex flex-col gap-8 items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl flex flex-col items-center text-center"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
