import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const coreValues = [
  { title: '🌟 Excellence', description: 'We are committed to delivering top-tier services and ensuring that every guest experiences the highest level of hospitality and professionalism. We strive to surpass expectations in every aspect of our business.' },
  { title: '🤝 Integrity', description: 'Honesty and transparency are at the heart of everything we do. We uphold strong moral principles and treat every customer with fairness and respect. Our actions and decisions are driven by a deep commitment to ethical business practices.' },
  { title: '💚 Customer Satisfaction', description: 'Our customers are our priority, and we go above and beyond to ensure their needs are met with warmth and efficiency. Every interaction is an opportunity to create a lasting impression, and we pride ourselves on exceeding expectations.' },
  { title: '🌍 Environmental Consciousness', description: 'We take care of our environment by maintaining eco-friendly practices and ensuring our gardens remain beautiful and sustainable. We aim to ensure our clients can bask in the beauty of nature and take a break from the hustle and bustle of modern-day responsibilities.' },
  { title: '🏆 Innovation', description: 'We constantly improve our services, incorporating modern solutions and creative ideas to provide an exceptional experience for our guests. Do you have an idea of a unique event? Just book an event on time, and we will plan it together.' },
  { title: '🏡 Community Engagement', description: 'Mima Gardens actively supports and collaborates with the local community to create a positive impact through partnerships and social initiatives. Our commitment to social responsibility extends beyond our business, fostering meaningful connections with our neighbors.' },
];

const FeaturesSection = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center my-12">Our Core Values</h2>
        <div className="flex flex-col items-center w-full space-y-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="cursor-pointer bg-white p-6 rounded-lg shadow-lg w-full text-center transition duration-300"
              onClick={() => setSelectedValue(selectedValue === value.title ? null : value.title)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <span className="text-gray-600 text-xl">{selectedValue === value.title ? '▲' : '▼'}</span>
              </div>
              {selectedValue === value.title && (
                <p className="mt-4 text-gray-700">{value.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
