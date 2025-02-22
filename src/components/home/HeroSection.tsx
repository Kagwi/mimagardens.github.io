import React from 'react'; 
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { createEmailLink } from '../../utils/emailUtils';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronDownIcon } from 'lucide-react';

const heroImages = [
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0659.jpg?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0695.jpg?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0673.jpg?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0475.jpg?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0649.jpg?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0703.jpg?raw=true',
];

const HeroSection = () => {
  const handleBookNow = () => {
    const initialData = {
      inquiry: 'General booking inquiry',
      message: 'I would like to book accommodation at Mima Gardens.',
    };
    window.location.href = createEmailLink(initialData);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('content-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[80vh] flex flex-col justify-end">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full absolute top-0"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    Welcome to Mima Gardens
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl mb-8"
                  >
                    Your Perfect Venue for Unforgettable Events & Lasting Memories
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    onClick={handleBookNow}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button container with z-index */}
      <div className="relative z-10 flex flex-col items-center w-full pb-6 gap-y-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToNextSection}
          className="bg-white bg-opacity-10 border-2 border-white text-white px-6 py-3 rounded-full 
                   hover:bg-white hover:text-emerald-600 transition-all duration-300 backdrop-blur-sm
                   text-lg font-medium"
        >
          Learn more about Mima Gardens
        </motion.button>

        <div 
          className="cursor-pointer animate-bounce flex flex-col items-center"
          onClick={scrollToNextSection}
        >
          <ChevronDownIcon size={40} className="text-white" />
          <span className="text-white text-sm mt-1">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
