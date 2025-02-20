import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const coreValues = [
  { emoji: "🤝", title: "Integrity", description: "At Mima Gardens, we uphold the highest standards of honesty, transparency, and ethical conduct in everything we do. We believe that trust is the foundation of great relationships, and we strive to maintain it at all times." },
  { emoji: "✨", title: "Excellence", description: "We go above and beyond to provide an exceptional experience for our guests. From our pristine gardens to our top-tier customer service, excellence is at the heart of Mima Gardens." },
  { emoji: "🌱", title: "Sustainability", description: "We are committed to preserving nature through eco-friendly practices. Our lush gardens and serene environment are maintained with sustainability in mind, ensuring future generations can enjoy our space." },
  { emoji: "😊", title: "Customer Satisfaction", description: "Your happiness is our priority. We listen, we care, and we work tirelessly to ensure that every guest feels valued and satisfied with our services." },
  { emoji: "🎉", title: "Creativity", description: "We embrace innovation in every aspect of event planning and hospitality. Whether it's a wedding, corporate function, or casual gathering, we bring fresh and exciting ideas to make your event unforgettable." },
];

const testimonials = [
  { name: "Wanjiku M.", quote: "Mima Gardens is the perfect escape! The beauty of the gardens, the fresh air, and the welcoming atmosphere make it a place I want to return to over and over again!" },
  { name: "Kamau N.", quote: "From the moment we arrived, we felt the warmth of Mima Gardens. The customer service is excellent, and the staff made sure our event was seamless and memorable." },
  { name: "Aisha O.", quote: "A hidden gem! The location is convenient, and the ambiance is breathtaking. Mima Gardens is now my go-to venue for all special occasions!" },
  { name: "Otieno P.", quote: "I was amazed at how well-maintained and peaceful this place is. The team at Mima Gardens made sure we had everything we needed for an amazing event." },
  { name: "Nduta K.", quote: "The attention to detail at Mima Gardens is outstanding! From the decor to the food, everything was just perfect. Highly recommended!" },
  { name: "Mwangi T.", quote: "If you're looking for a beautiful, serene location with excellent service, look no further than Mima Gardens. Every visit feels like a mini vacation!" }
];

const CoreValuesSection = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">🌟 Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {coreValues.map((value, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-lg cursor-pointer text-center hover:bg-gray-200 transition-all duration-300" onClick={() => setSelectedValue(value.title === selectedValue ? null : value.title)}>
              <h3 className="text-xl font-semibold">{value.emoji} {value.title}</h3>
              {selectedValue === value.title && <p className="text-gray-600 mt-3">{value.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">💬 What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-lg transition-all duration-300">
              <p className="text-gray-600 italic">“{testimonial.quote}”</p>
              <h4 className="text-lg font-semibold mt-4 text-right">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div>
      <CoreValuesSection />
      <TestimonialsSection />
    </div>
  );
};

export default FeaturesSection;
