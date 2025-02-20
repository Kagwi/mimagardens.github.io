import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Beautiful Gardens',
    description:
      'Immerse yourself in our lush green gardens, carefully maintained to create the perfect setting for outdoor events, weddings, and breathtaking photography. The serene ambiance, chirping birds, and well-manicured landscapes provide an unforgettable experience.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  },
  {
    title: 'Customizable Events',
    description:
      'Whether it’s an intimate celebration or a grand event, Mima Gardens offers a spacious, well-maintained venue that can be tailored to your unique needs. Our team ensures every detail is customized to make your event truly special.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true',
  },
  {
    title: 'Ample Parking',
    description:
      'Hosting a large event? No worries! Mima Gardens provides ample and secure parking for all your guests. Enjoy the convenience of stress-free arrivals and departures, ensuring smooth event logistics.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true',
  },
  {
    title: 'Your Favorite Local Cuisine',
    description:
      'Savor delicious dishes prepared by our expert chefs, using fresh local ingredients to create mouthwatering meals. Our menu caters to diverse tastes, offering a delightful dining experience in a serene environment.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true',
  },
  {
    title: 'Sophisticated Bar Experience',
    description:
      'Unwind in our sophisticated bar, where signature cocktails and premium drinks await. The elegant setting, ambient lighting, and professional bartenders ensure a refined experience for every guest.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true',
  },
  {
    title: 'Excellent Customer Service',
    description:
      'At Mima Gardens, we pride ourselves on our friendly and professional customer service. From the moment you arrive, our staff is dedicated to making your experience seamless and enjoyable.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true',
  },
];

const coreValues = [
  { title: 'Hospitality 🤝', description: 'We welcome every guest with warmth and ensure a delightful experience from arrival to departure.' },
  { title: 'Excellence 🌟', description: 'We are committed to delivering top-notch services, maintaining high standards in everything we do.' },
  { title: 'Serenity 🍃', description: 'Our venue provides a tranquil and peaceful environment, ideal for relaxation and celebrations.' },
  { title: 'Community ❤️', description: 'We value our guests and the local community, fostering relationships built on trust and mutual respect.' },
  { title: 'Sustainability 🌍', description: 'We practice environmentally friendly initiatives to preserve nature and contribute to a greener planet.' },
];

const testimonials = [
  { name: 'Wanjiku K.', feedback: 'Mima Gardens is an oasis of peace. The gardens are breathtaking, and the staff are incredibly welcoming. A perfect getaway spot!' },
  { name: 'Kevin O.', feedback: 'Amazing customer service! From the moment I arrived, I was treated with so much kindness. I’ll definitely come back for another event.' },
  { name: 'Nafula M.', feedback: 'The location is super convenient! No hustle getting there, and the atmosphere is just magical. I highly recommend it.' },
  { name: 'James N.', feedback: 'Had the best wedding reception here! The venue was stunning, and everything was handled so professionally. 10/10 experience.' },
  { name: 'Amina D.', feedback: 'I loved the food! The flavors, the presentation – absolutely delightful. Perfect spot for food lovers.' },
  { name: 'Mwangi T.', feedback: 'Mima Gardens is truly a hidden gem. The lush greenery, the peace – it’s the ultimate relaxation spot!' },
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
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-6">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {coreValues.map((value, index) => (
            <button
              key={index}
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition duration-300"
              onClick={() => setSelectedValue(value)}
            >
              {value.title}
            </button>
          ))}
        </div>
        {selectedValue && <p className="text-center mt-4 text-lg">{selectedValue.description}</p>}

        <h2 className="text-3xl font-bold text-center mt-16 mb-6">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
              <h4 className="mt-4 font-semibold text-emerald-600">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
