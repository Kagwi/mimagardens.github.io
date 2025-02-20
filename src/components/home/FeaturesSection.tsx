import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Beautiful Gardens 🌿',
    description: 'Lush green gardens with a variety of well-maintained flora, offering a breathtaking environment perfect for outdoor events, romantic photoshoots, and peaceful relaxation.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  },
  {
    title: 'Customizable Events 🎉',
    description: 'Mima Gardens provides a spacious, well-maintained venue tailored to suit your unique event needs, whether it’s a wedding, corporate gathering, or birthday celebration.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0483.jpg?raw=true',
  },
  {
    title: 'Ample Parking 🚗',
    description: 'Convenient and secure parking space for all your guests, ensuring a stress-free experience at your event.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0437.jpg?raw=true',
  },
  {
    title: 'Your Favorite Local Cuisine 🍽️',
    description: 'Delicious dishes made with fresh, locally sourced ingredients, offering a unique blend of Kenyan flavors.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0020-2.jpg?raw=true',
  },
  {
    title: 'Sophisticated Bar Experience 🍷',
    description: 'A refined atmosphere with expertly crafted cocktails, a wide selection of fine wines, and premium spirits for a truly memorable night.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0526.jpg?raw=true',
  },
  {
    title: 'Excellent Customer Service 🤝',
    description: 'Dedicated staff who go above and beyond to provide outstanding hospitality and ensure your experience is seamless.',
    image: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0496.jpg?raw=true',
  },
];

const coreValues = [
  {
    title: '🌟 Excellence',
    description: 'We strive for the highest standards in everything we do, from customer service to the ambiance and quality of our services.',
  },
  {
    title: '🤝 Customer-Centric',
    description: 'Our guests are at the heart of our business. We prioritize your satisfaction and work to make every visit exceptional.',
  },
  {
    title: '🌿 Sustainability',
    description: 'We are committed to eco-friendly practices that preserve the natural beauty of our gardens while minimizing our environmental footprint.',
  },
  {
    title: '🎭 Creativity & Innovation',
    description: 'We believe in constant improvement, always seeking new ways to enhance our services and create memorable experiences.',
  },
  {
    title: '🎉 Community Engagement',
    description: 'We actively contribute to our local community by supporting initiatives that promote cultural, social, and economic growth.',
  }
];

const testimonials = [
  {
    name: 'James Mwangi',
    feedback: 'Mima Gardens is truly a hidden gem! The atmosphere is warm and inviting, and the staff made sure we had a fantastic experience.',
  },
  {
    name: 'Grace Wanjiru',
    feedback: 'The perfect place for a wedding! The gardens are breathtaking, and the staff is incredibly professional and accommodating.',
  },
  {
    name: 'Peter Kamau',
    feedback: 'I love how conveniently located Mima Gardens is. It’s easily accessible, and the experience is always top-notch.',
  },
  {
    name: 'Lucy Njeri',
    feedback: 'Amazing customer service! The staff is attentive, and the food was absolutely delicious. Can’t wait to visit again.',
  },
  {
    name: 'Samuel Ochieng',
    feedback: 'A beautiful and serene environment that makes every event feel magical. Highly recommend!',
  }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="py-20 bg-gray-50">
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

        <h2 className="text-3xl font-bold text-center mt-16 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          {coreValues.map((value, index) => (
            <motion.div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer" onClick={() => setSelectedValue(selectedValue === index ? null : index)}>
              <h3 className="text-xl font-semibold mb-2 flex items-center">{value.title}</h3>
              {selectedValue === index && <p className="text-gray-600">{value.description}</p>}
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
              <h4 className="mt-4 font-semibold text-right">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
