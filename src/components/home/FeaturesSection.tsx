import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: '🌿 Beautiful Gardens',
    description: 'Immerse yourself in the lush green surroundings of Mima Gardens. Our beautifully manicured gardens provide the perfect backdrop for any occasion, be it weddings, parties, or photography sessions. Experience nature at its finest with our serene atmosphere and picturesque views.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  },
  {
    title: '🎉 Customizable Events',
    description: 'At Mima Gardens, we understand that every event is unique. We offer fully customizable spaces and services tailored to meet your specific needs, whether it’s a corporate function, a birthday celebration, or a wedding. Let us bring your dream event to life!',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true',
  },
  {
    title: '🚗 Ample Parking',
    description: 'No need to worry about parking! Mima Gardens offers a spacious and well-maintained parking area to accommodate all your guests comfortably. Our secure parking ensures a hassle-free experience from arrival to departure.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true',
  },
  {
    title: '🍽️ Your Favorite Local Cuisine',
    description: 'Savor the rich flavors of our expertly prepared local and international dishes. Our chefs use the freshest ingredients to craft delicious meals that will tantalize your taste buds, all served in a serene and inviting atmosphere.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true',
  },
  {
    title: '🍹 Sophisticated Bar Experience',
    description: 'Indulge in our well-stocked bar, offering an array of premium drinks and signature cocktails. Whether you prefer a refreshing mocktail or a fine wine, our bar provides the perfect setting for a relaxing evening.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true',
  },
  {
    title: '💎 Excellent Customer Service',
    description: 'Our dedicated staff is committed to making your visit memorable. From event planning to on-the-spot assistance, we ensure that you receive top-notch service, making your experience at Mima Gardens seamless and enjoyable.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true',
  },
];

const coreValues = [
  {
    title: '🤝 Integrity',
    description: 'We are committed to upholding the highest standards of honesty and transparency in all our interactions. At Mima Gardens, integrity is the foundation of our service, ensuring trust and reliability for every client.'
  },
  {
    title: '❤️ Customer Satisfaction',
    description: 'Our guests are our priority. We go above and beyond to create an experience that leaves you feeling valued, welcomed, and appreciated. Your happiness is our success!'
  },
  {
    title: '🌍 Sustainability',
    description: 'Mima Gardens takes pride in being environmentally conscious. We implement sustainable practices to protect nature, reduce waste, and contribute positively to our community and planet.'
  },
  {
    title: '🎭 Creativity',
    description: 'We believe in bringing imagination to life. Whether it’s through event decor, customized menus, or entertainment options, our creativity ensures every visit is special and unique.'
  },
  {
    title: '🎯 Excellence',
    description: 'From service to ambiance, we strive for excellence in everything we do. Our attention to detail and commitment to quality ensure that every experience at Mima Gardens is nothing short of perfect.'
  }
];

const testimonials = [
  { name: 'Wanjiru M.', text: 'Mima Gardens is truly a hidden gem! The serene environment and well-manicured gardens made my event magical. I will definitely be back!' },
  { name: 'James K.', text: 'The customer service here is exceptional! The staff was so friendly and accommodating, making sure we had everything we needed for a wonderful experience.' },
  { name: 'Amina O.', text: 'Absolutely loved the food and ambiance! The location is super convenient, and the entire place exudes warmth and relaxation. Highly recommended!' },
  { name: 'Peter N.', text: 'The attention to detail in their event planning is unmatched. Everything was set up perfectly, and my guests were truly impressed. Kudos to the team at Mima Gardens!' },
  { name: 'Lucy W.', text: 'Mima Gardens is the perfect getaway! The blend of nature and luxury made my weekend stay delightful. It’s now my go-to spot for relaxation and celebrations.' }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedValue, setSelectedValue] = useState(null);
  
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
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
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
