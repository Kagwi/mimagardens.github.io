import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Beautiful Gardens',
    description: 'Mima Gardens features vibrant, well-tended gardens that surround you with the comforting warmth of nature. The rich greenery and peaceful atmosphere invite you to unwind, relax, and enjoy the soothing beauty of the natural world.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  },
  {
    title: 'Customizable Events',
    description: 'We provide a spacious and well-maintained venue that can be customized to match your event’s unique needs. Whether it’s a wedding, birthday party, ruracio, baby shower, corporate gathering, our team ensures every detail is tailored to perfection.',
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
  { title: '🌟 Excellence', description: 'We are committed to delivering top-tier services and ensuring that every guest experiences the highest level of hospitality and professionalism. We strive to surpass expectations in every aspect of our business.' },
  { title: '🤝 Integrity', description: 'Honesty and transparency are at the heart of everything we do. We uphold strong moral principles and treat every customer with fairness and respect. Our actions and decisions are driven by a deep commitment to ethical business practices.' },
  { title: '💚 Customer Satisfaction', description: 'Our customers are our priority, and we go above and beyond to ensure their needs are met with warmth and efficiency. Every interaction is an opportunity to create a lasting impression, and we pride ourselves on exceeding expectations.' },
  { title: '🌍 Environmental Consciousness', description: 'We take care of our environment by maintaining eco-friendly practices and ensuring our gardens remain beautiful and sustainable. We aim to ensure our clients can bask in the beauty of nature and take a break from the hustle and bustle of modern-day responsibilities.' },
  { title: '🏆 Innovation', description: 'We constantly improve our services, incorporating modern solutions and creative ideas to provide an exceptional experience for our guests. Do you have an idea of a unique event?, just book an event on time and we will plan it together.' },
  { title: '🏡 Community Engagement', description: 'Mima Gardens actively supports and collaborates with the local community to create a positive impact through partnerships and social initiatives. Our commitment to social responsibility extends beyond our business, fostering meaningful connections with our neighbors.' },
];

const testimonials = [
  { name: 'Wanjiku Kamau', text: 'Mima Gardens is an absolute gem! The gardens are breathtaking, and the entire place feels so peaceful, yet it is just next to a main road. Perfect for a getaway.' },
  { name: 'Mr. Mutua', text: 'I hosted my wedding at Mima Gardens, and everything was perfect. The staff was professional, and the ambiance was stunning. Highly recommend!' },
  { name: 'Achieng O.', text: 'I loved the customer service. The staff was warm and welcoming, and the food was top-notch. I’ll definitely be coming back soon.' },
  { name: 'Yegon', text: 'Mima Gardens exceeded my expectations!' },
  { name: 'Alice Wambui', text: 'Amazing experience at Mima Gardens. I mean, the gardens are beautiful, and the food was exceptional. The perfect place for a family gathering.' },
  { name: 'James Mutiso', text: 'The team went out of their way to ensure everything was perfect for the birthday of my beloved Emmy. My daughter and her friends trully enjoyed, and so did I.' },
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
        {/* Features Section - Unchanged */}
        <h2 className="text-3xl font-bold text-center my-12">Our Features</h2>
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

        {/* Core Values with Dropdown */}
        <h2 className="text-3xl font-bold text-center my-12">Our Core Values</h2>
        <div className="flex flex-col items-center w-full space-y-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setSelectedValue(selectedValue === value.title ? null : value.title)}
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <h3 className="text-xl font-semibold text-left">{value.title}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    selectedValue === value.title ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {selectedValue === value.title && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section - Unchanged */}
        <h2 className="text-3xl font-bold text-center my-12">What Our Customers are Saying About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <h4 className="font-semibold text-gray-700">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
