import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: '🌿 Beautiful Gardens',
    description: 'Immerse yourself in the natural beauty of Mima Gardens, where lush green spaces provide the perfect setting for weddings, picnics, and relaxation. The well-maintained landscapes and serene environment offer an ideal backdrop for unforgettable moments.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  },
  {
    title: '🎉 Customizable Events',
    description: 'Whether it’s a grand wedding, a corporate event, or a private celebration, our versatile venue allows for full customization. Our professional team ensures every detail is tailored to your needs, creating a truly unique experience.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true',
  },
  {
    title: '🚗 Ample Parking',
    description: 'Say goodbye to parking worries! Mima Gardens offers a spacious and secure parking area, ensuring a seamless arrival for you and your guests, no matter the size of your event.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true',
  },
  {
    title: '🍽️ Exquisite Dining',
    description: 'Indulge in a delightful culinary experience with our diverse menu featuring local and international dishes. Our chefs prioritize fresh ingredients, ensuring every meal is a treat for your taste buds.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true',
  },
  {
    title: '🍸 Sophisticated Bar Experience',
    description: 'Our bar offers a refined atmosphere, perfect for unwinding with signature cocktails, premium spirits, and an extensive wine selection. Enjoy the elegant setting and great company.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true',
  },
  {
    title: '💖 Excellent Customer Service',
    description: 'Our dedicated team ensures that every guest experiences warmth, attentiveness, and personalized care. From event planning to dining service, we go the extra mile to make you feel special.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true',
  },
];

const coreValues = [
  { title: '🤝 Integrity', description: 'We uphold honesty and strong moral principles in all our dealings, ensuring trust and transparency with our guests and partners.' },
  { title: '💡 Innovation', description: 'We constantly evolve, bringing new ideas to enhance your experience, from event customization to unique dining options.' },
  { title: '🌍 Sustainability', description: 'We are committed to eco-friendly practices, preserving nature while providing world-class services to our clients.' },
  { title: '🏆 Excellence', description: 'We strive for the highest standards in service delivery, ensuring each visit to Mima Gardens exceeds expectations.' },
  { title: '👨‍👩‍👧‍👦 Community', description: 'We foster a sense of togetherness, supporting local businesses and giving back to our community.' },
];

const testimonials = [
  { name: 'James Mwangi', feedback: 'Mima Gardens offers a serene environment and exceptional service. The gardens are breathtaking, making it my go-to venue for events!' },
  { name: 'Wanjiku Njeri', feedback: 'I love the warmth and hospitality of the staff. They made my wedding planning stress-free, and the food was simply divine!' },
  { name: 'Samuel Odhiambo', feedback: 'Perfect location with ample parking. The convenience of access and top-notch service make it stand out from other venues.' },
  { name: 'Mary Atieno', feedback: 'The atmosphere is peaceful, and the scenery is picturesque. It’s the perfect getaway for a relaxing weekend.' },
  { name: 'Kelvin Kiprop', feedback: 'Great ambiance, excellent customer service, and a wonderful experience overall. Highly recommended!' },
  { name: 'Diana Wambui', feedback: 'From the drinks to the decor, everything is well thought out. The attention to detail is what makes Mima Gardens special.' },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-green-300">
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-12 text-blue-700">Our Core Values</h2>
        <div className="flex flex-col items-center space-y-4">
          {coreValues.map((value, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="cursor-pointer bg-blue-200 p-6 rounded-lg shadow-md text-center w-full md:w-3/4 lg:w-1/2" onClick={() => setSelectedValue(value)}>
              <h3 className="text-xl font-semibold text-blue-900">{value.title}</h3>
            </motion.div>
          ))}
          {selectedValue && <p className="mt-4 p-4 text-lg bg-gray-200 rounded shadow-md text-gray-800">{selectedValue.description}</p>}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-12 text-purple-700">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-purple-200 p-6 rounded-lg shadow-md transform hover:shadow-xl">
              <p className="text-gray-800 italic">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-semibold text-purple-900 mt-4">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
