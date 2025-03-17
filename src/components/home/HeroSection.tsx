import React from 'react';  
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
    window.location.href = "mailto:mimagardens2121ltd@gmail.com?subject=General%20booking%20inquiry&body=I%20would%20like%20to%20book%20accommodation%20at%20Mima%20Gardens.";
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('content-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-end overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-screen absolute top-0"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen flex items-center justify-center">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white px-4">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-semibold mb-4 uppercase tracking-widest"
                  >
                    WELCOME TO MIMA GARDENS
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
      
      {/* Learn More Button - Ensure Visibility on All Devices */}
      <div className="relative z-10 flex flex-col items-center w-full pb-6 md:pb-12">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToNextSection}
          className="bg-white bg-opacity-10 border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300 backdrop-blur-sm text-lg font-medium mb-4 visible md:visible"
        >
          Learn more about Mima Gardens
        </motion.button>
      </div>
      
      {/* Scroll Down Button */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center z-10">
        <div className="cursor-pointer animate-bounce flex flex-col items-center" onClick={scrollToNextSection}>
          <ChevronDownIcon size={40} className="text-white" />
          <span className="text-white text-sm mt-1">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
