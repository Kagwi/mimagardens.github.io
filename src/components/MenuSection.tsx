import React from 'react';
import { motion } from 'framer-motion';

const menuSections = [
  {
    name: "Food",
    items: [
      { name: "Nyama Choma", image: "/Mima-Gardens-Photos/highlights/_SJS0006.jpg" },
      { name: "Fish Varieties", image: "/Mima-Gardens-Photos/highlights/_SJS0392.jpg" },
      { name: "Afro Platter", image: "/Mima-Gardens-Photos/highlights/_SJS0056-2.jpg" },
      { name: "All Meat Stews", image: "/Mima-Gardens-Photos/highlights/_SJS0339.jpg" },
    ]
  },
  {
    name: "Desserts & Salads",
    items: [
      { name: "Desserts", image: "/Mima-Gardens-Photos/highlights/_SJS0380.jpg" },
      { name: "Appetizer Salads", image: "/Mima-Gardens-Photos/highlights/_SJS0050-2.jpg" },
    ]
  },
  {
    name: "Beverages",
    subsections: [
      {
        name: "Alcoholic",
        items: [
          { name: "Signature Cocktails", image: "/Mima-Gardens-Photos/highlights/_SJS0521.jpg" },
          { name: "Classic Wines and Strong Drinks", image: "/Mima-Gardens-Photos/highlights/_SJS0498.jpg" },
        ]
      },
      {
        name: "Non-Alcoholic",
        items: [
          { name: "Juices", image: "/Mima-Gardens-Photos/highlights/_SJS0071-2.jpg" },
          { name: "Milkshakes", image: "/Mima-Gardens-Photos/highlights/_SJS0076-2.jpg" },
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
