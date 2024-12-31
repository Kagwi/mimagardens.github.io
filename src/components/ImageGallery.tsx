import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    category: 'Gardens',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    category: 'Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    category: 'Accommodation',
  },
  {
    url: 'https://images.unsplash.com/photo-1533659828870-95ee305cee3e',
    category: 'Gardens',
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    category: 'Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    category: 'Accommodation',
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