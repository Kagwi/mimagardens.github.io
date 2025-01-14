import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { createEmailLink } from '../../utils/emailUtils';
import 'swiper/css';
import 'swiper/css/navigation';

const heroImages = [
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima%20Gardens%2033.PNG?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima%20Gardens%20Hero%20Image%201.PNG?raw=true',
  'https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima_Gardens%20Hero%20Image%203.PNG?raw=true',
];

const HeroSection = () => {
  const handleBookNow = () => {
    const initialData = {
      inquiry: 'General booking inquiry',
      message: 'I would like to book accommodation at Mima Gardens.',
    };
    window.location.href = createEmailLink(initialData);
  };

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
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
                    Your perfect venue for unforgettable events and lasting memories.
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
    </div>
  );
};

export default HeroSection;
