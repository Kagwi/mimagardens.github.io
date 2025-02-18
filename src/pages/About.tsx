import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Food',
    items: [
      { name: 'Nyama Choma', image: 'https://images.unsplash.com/photo-1544025162-d76694265947' },
      { name: 'Pilau', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b' },
      { name: 'Dish 3', image: 'https://source.unsplash.com/random/400x300?food3' },
      { name: 'Dish 4', image: 'https://source.unsplash.com/random/400x300?food4' }
    ]
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Dessert 1', image: 'https://source.unsplash.com/random/400x300?dessert1' },
      { name: 'Dessert 2', image: 'https://source.unsplash.com/random/400x300?dessert2' },
      { name: 'Dessert 3', image: 'https://source.unsplash.com/random/400x300?dessert3' },
      { name: 'Dessert 4', image: 'https://source.unsplash.com/random/400x300?dessert4' }
    ]
  },
  {
    name: 'Beverages - Alcoholic',
    items: [
      { name: 'Alcoholic Drink 1', image: 'https://source.unsplash.com/random/400x300?alcoholic1' },
      { name: 'Alcoholic Drink 2', image: 'https://source.unsplash.com/random/400x300?alcoholic2' },
      { name: 'Alcoholic Drink 3', image: 'https://source.unsplash.com/random/400x300?alcoholic3' },
      { name: 'Alcoholic Drink 4', image: 'https://source.unsplash.com/random/400x300?alcoholic4' }
    ]
  },
  {
    name: 'Beverages - Non-Alcoholic',
    items: [
      { name: 'Non-Alcoholic Drink 1', image: 'https://source.unsplash.com/random/400x300?drink1' },
      { name: 'Non-Alcoholic Drink 2', image: 'https://source.unsplash.com/random/400x300?drink2' },
      { name: 'Non-Alcoholic Drink 3', image: 'https://source.unsplash.com/random/400x300?drink3' },
      { name: 'Non-Alcoholic Drink 4', image: 'https://source.unsplash.com/random/400x300?drink4' }
    ]
  }
];

const MenuSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          Our Menu's Sneak Peek
        </motion.h2>
        
        {menuItems.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">{category.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
