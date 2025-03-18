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
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0652.jpg?raw=true',
    category: 'Enjoy Nature',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0475.jpg?raw=true',
    category: 'Joyful Social Getaways',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/_SJS0468.jpg?raw=true',
    category: 'Work Online in Serenity',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Buffet.jpg?raw=true',
    category: 'Buffet',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Delicious%20Chicken.jpg?raw=true',
    category: 'Delicious Chicken',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Fruits%20and%20Salad.jpg?raw=true',
    category: 'Desserts & Appetizers',
  },
  
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Milkshake.jpg?raw=true',
    category: 'Milkshakes',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Harambee,%20Ruracio,%20Baby%20Showers...,.jpg?raw=true',
    category: 'Harambees, Ruracios, etc.',
  },
  {
    url: 'https://github.com/Kagwi/mimagardens.github.io/blob/main/Mima%20Gate.jpg?raw=true',
    category: 'Entrance',
  },
];

const ImageGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {/* Virtual Tour Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Virtual Tour</h2>
        <p className="text-lg text-gray-600 mb-6">Take a virtual stroll through Mima Gardens and experience the beauty firsthand.</p>
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_YItXtRJKz0"
              title="Mima Gardens Virtual Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
