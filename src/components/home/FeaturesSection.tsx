import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Beautiful Gardens',
    description: 'Lush green gardens perfect for outdoor events and photography',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima%20Gardens%20Hero%20Image%202.PNG?raw=true',
  },
  {
    title: 'Customizable Events',
    description: 'Mima Gardens offers a spacious, well-maintained venue tailored to suit your unique event needs.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/ImageEnhancer_Mima%20Gardens%2047.PNG?raw=true',
  },
  {
    title: 'Excellent Cuisine',
    description: 'Delicious dishes served in a serene environment',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
  },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
