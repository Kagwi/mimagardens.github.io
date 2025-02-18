import React from 'react';
import { motion } from 'framer-motion';

const menuSections = [
  {
    name: "Food",
    items: [
      { name: "Nyama Choma", price: "KES 800", image: "https://images.unsplash.com/photo-1544025162-d76694265947" },
      { name: "Pilau", price: "KES 400", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b" },
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Chocolate Cake", price: "KES 500", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
      { name: "Fruit Salad", price: "KES 350", image: "https://images.unsplash.com/photo-1573821663912-28c58b55b3ff" },
    ]
  },
  {
    name: "Beverages",
    subsections: [
      {
        name: "Alcoholic",
        items: [
          { name: "Red Wine", price: "KES 1500", image: "https://images.unsplash.com/photo-1547592180-89c60b4e3315" },
          { name: "Whiskey", price: "KES 2000", image: "https://images.unsplash.com/photo-1613472868331-62531060a07f" },
        ]
      },
      {
        name: "Non-Alcoholic",
        items: [
          { name: "Fresh Juice", price: "KES 300", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445" },
          { name: "Iced Coffee", price: "KES 450", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
        ]
      }
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
          Our Menu's Sneak Peek
        </motion.h2>
        
        {menuSections.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{category.name}</h3>
            {category.subsections ? (
              category.subsections.map((sub, subIdx) => (
                <div key={subIdx} className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">{sub.name}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sub.items.map((item, index) => (
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
                          <h4 className="text-xl font-semibold">{item.name}</h4>
                          <p className="text-emerald-600 font-medium">{item.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p className="text-emerald-600 font-medium">{item.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
