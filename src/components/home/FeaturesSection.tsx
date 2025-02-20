import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const coreValues = [
  { title: '🌟 Excellence', description: 'We are committed to delivering top-tier services and ensuring that every guest experiences the highest level of hospitality and professionalism.' },
  { title: '🤝 Integrity', description: 'Honesty and transparency are at the heart of everything we do. We uphold strong moral principles and treat every customer with fairness and respect.' },
  { title: '💚 Customer Satisfaction', description: 'Our customers are our priority, and we go above and beyond to ensure their needs are met with warmth and efficiency.' },
  { title: '🌍 Environmental Consciousness', description: 'We take care of our environment by maintaining eco-friendly practices and ensuring our gardens remain beautiful and sustainable.' },
  { title: '🏆 Innovation', description: 'We constantly improve our services, incorporating modern solutions and creative ideas to provide an exceptional experience for our guests.' },
  { title: '🏡 Community Engagement', description: 'Mima Gardens actively supports and collaborates with the local community to create a positive impact through partnerships and social initiatives.' },
];

const testimonials = [
  { name: 'Wanjiku Kamau', text: 'Mima Gardens is an absolute gem! The gardens are breathtaking, and the entire place feels so peaceful. Perfect for a weekend getaway!' },
  { name: 'Mutua Njoroge', text: 'I hosted my wedding at Mima Gardens, and everything was perfect! The staff was professional, and the ambiance was stunning. Highly recommend!' },
  { name: 'Achieng Otieno', text: 'Excellent customer service! The staff was warm and welcoming, and the food was top-notch. I’ll definitely be coming back soon.' },
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
              whileHover={{ scale: 1.05, backgroundColor: '#38a169', color: '#fff' }}
              className="cursor-pointer bg-white p-6 rounded-lg shadow-lg w-full text-center transition duration-300"
              onClick={() => setSelectedValue(selectedValue === value.title ? null : value.title)}
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
            </motion.div>
          ))}
        </div>
        {selectedValue && (
          <div className="text-center mt-4 p-4 bg-green-100 rounded-lg max-w-4xl mx-auto">
            <p className="text-gray-700 font-medium">{coreValues.find(val => val.title === selectedValue).description}</p>
          </div>
        )}
        
        <h2 className="text-3xl font-bold text-center my-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: '#38a169', color: '#fff', scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300"
            >
              <p className="italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
