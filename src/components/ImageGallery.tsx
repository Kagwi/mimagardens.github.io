import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0489.jpg',
    category: 'Sips & Stories',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0492.jpg',
    category: 'Coffee Dates',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0448.jpg',
    category: 'Outdoor Relaxation with Family',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0452.jpg',
    category: 'Beautiful Gardens',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0480.jpg',
    category: 'Corporate Events, Weddings & Baby Showers',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0673.jpg',
    category: 'Swimming Pool Escape',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0687.jpg',
    category: 'Samburu Chillout Zone',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0703.jpg',
    category: 'Samburu Lounge',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0696.jpg',
    category: 'All-Season Gazebos',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0475.jpg',
    category: 'Enjoy Nature',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0657.jpg',
    category: 'Joyful Social Getaways',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0468.jpg',
    category: 'Work Online in Serenity',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0321.jpg',
    category: 'Buffet',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0341.jpg',
    category: 'Delicious Chicken',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0366.jpg',
    category: 'Desserts & Appetizers',
  },
  
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0076-2.jpg',
    category: 'Milkshakes',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0355.jpg',
    category: 'Harambees, Ruracios, etc.',
  },
  {
    url: '/Mima-Gardens-Photos/highlights/_SJS0648.jpg',
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
