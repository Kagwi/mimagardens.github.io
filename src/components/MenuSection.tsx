import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Local Cuisine',
    items: [
      { name: 'Nyama Choma', price: 'KES 800', image: 'https://images.unsplash.com/photo-1544025162-d76694265947' },
      { name: 'Pilau', price: 'KES 400', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b' },
    ]
  },
  {
    name: 'International Cuisine',
    items: [
      { name: 'Grilled Salmon', price: 'KES 1200', image: 'https://images.unsplash.com/photo-1485704686097-ed47f7263ca4' },
      { name: 'Caesar Salad', price: 'KES 600', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9' },
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
          className="text-3xl font-bold text-center mb-12"
        >
          Our Menu
        </motion.h2>
        
        {menuItems.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-emerald-600 font-medium">{item.price}</p>
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
