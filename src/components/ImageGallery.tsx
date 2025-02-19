import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0489.jpg?raw=true',
    category: 'Sips & Stories',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0492.jpg?raw=true',
    category: 'Coffee Dates',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0433.jpg?raw=true',
    category: 'Outdoor Relaxation with Family',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0438.jpg?raw=true',
    category: 'Beautiful Gardens',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0657.jpg?raw=true',
    category: 'Corporate Events, Weddings & Baby Showers',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0669.jpg?raw=true',
    category: 'Swimming Pool Escape',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0686.jpg?raw=true',
    category: 'Samburu Chillout Zone',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0703.jpg?raw=true',
    category: 'Samburu Lounge',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0696.jpg?raw=true',
    category: 'All-Season Gazebos',
  },
];

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group overflow-hidden rounded-lg"
        >
          <img
            src={image.url}
            alt={image.category}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{image.category}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
