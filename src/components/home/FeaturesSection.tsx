import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Beautiful Gardens',
    description: 'Mima Gardens boasts stunning, well-manicured gardens, creating a tranquil and picturesque environment. These lush green spaces are ideal for weddings, photo shoots, and outdoor relaxation, offering a blend of natural beauty and serenity.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  },
  {
    title: 'Customizable Events',
    description: 'We provide a spacious and well-maintained venue that can be customized to match your event’s unique needs. Whether it’s a wedding, birthday party, or corporate gathering, our team ensures every detail is tailored to perfection.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true',
  },
  {
    title: 'Ample Parking',
    description: 'With a large parking space, Mima Gardens ensures convenience for all guests. No need to worry about where to park; we have enough space to accommodate many vehicles, ensuring a hassle-free experience.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true',
  },
  {
    title: 'Your Favorite Local Cuisine',
    description: 'Our restaurant serves delicious, freshly prepared local and international dishes in a serene environment. We focus on quality ingredients and exceptional flavors, making every meal a delightful experience.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true',
  },
  {
    title: 'Sophisticated Bar Experience',
    description: 'Enjoy a sophisticated bar experience with a wide range of drinks, including signature cocktails, fine wines, and premium spirits. The ambiance is stylish and relaxing, perfect for winding down after a long day.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true',
  },
  {
    title: 'Excellent Customer Service',
    description: 'At Mima Gardens, customer satisfaction is our top priority. Our dedicated team provides friendly, professional, and attentive service to ensure your visit is memorable and enjoyable.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true',
  },
];

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
  { name: 'Mwangi Karanja', text: 'The location is very convenient and easily accessible. Whether you’re looking for a relaxing retreat or a vibrant event space, this is the place to be.' },
  { name: 'Fatuma Hassan', text: 'Mima Gardens combines beauty and comfort perfectly. The elegant decor, stunning gardens, and delicious cuisine make it a must-visit spot.' },
  { name: 'Cherono Kipchumba', text: 'I love how Mima Gardens embraces nature while providing modern facilities. It’s the perfect blend of relaxation and sophistication!' },
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-center my-12">Our Core Values</h2>
        <div className="flex flex-col items-center space-y-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center"
              onClick={() => setSelectedValue(value.description)}
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
            </motion.div>
          ))}
        </div>
        {selectedValue && <p className="text-center mt-4 text-gray-700">{selectedValue}</p>}

        <h2 className="text-3xl font-bold text-center my-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-semibold">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
