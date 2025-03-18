import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { title: 'Beautiful Gardens', description: 'Mima Gardens features vibrant, well-tended gardens that surround you with the comforting warmth of nature. The rich greenery and peaceful atmosphere invite you to unwind, relax, and enjoy the soothing beauty of the natural world.', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true' },
  { title: 'Customizable Events', description: 'We provide a spacious and well-maintained venue that can be customized to match your event’s unique needs. Whether it’s a wedding, birthday party, ruracio, baby shower, corporate gathering, our team ensures every detail is tailored to perfection.', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true' },
  { title: 'Ample Parking', description: 'With a large parking space, Mima Gardens ensures convenience for all guests. No need to worry about where to park; we have enough space to accommodate many vehicles, ensuring a hassle-free experience.', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true' },
  { title: 'Your Favorite Local Cuisine', description: 'Our restaurant serves delicious, freshly prepared local and international dishes in a serene environment. We focus on quality ingredients and exceptional flavors, making every meal a delightful experience.', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true' },
  { title: 'Sophisticated Bar Experience', description: 'Enjoy a sophisticated bar experience with a wide range of drinks, including signature cocktails, fine wines, and premium spirits. The ambiance is stylish and relaxing, perfect for winding down after a long day.', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true' },
  { title: 'Excellent Customer Service', description: 'At Mima Gardens, customer satisfaction is our top priority. Our dedicated team provides friendly, professional, and attentive service to ensure your visit is memorable and enjoyable.', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true' },
];

const fullWidthFeatures = [
  { title: 'Swimming Pool Escape', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true' },
  { title: 'Outdoor Dining', image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true' },
];

const FeaturesSection = () => {
  const [selectedValue, setSelectedValue] = useState(null);
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {fullWidthFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-[500px] object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
