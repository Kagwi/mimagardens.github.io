import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '../components/ImageGallery';

const Gallery = () => {
  return (
    <div className="pt-16">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-gray-600">
              Experience the Beauty and Elegance of Mima Gardens
            </p>
            <p className="text-lg text-gray-600">
              Here's our Living Canvas...
            </p>
          </motion.div>
          <ImageGallery />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
