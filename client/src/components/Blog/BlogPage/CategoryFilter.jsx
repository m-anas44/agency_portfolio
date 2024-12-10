import React from 'react';

const CategoryFilter = ({ selectedCategory, onSelectCategory, categories }) => {


  return (
    <div className='w-full p-4 mx-auto mb-6 bg-white rounded-lg shadow-md'>
      {/* Filter header */}
      <h3 className='mb-4 text-lg font-bold text-secondary'>Categories</h3>

      {/* Category list */}
      <ul className='space-y-2'>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onSelectCategory(category)} // Trigger callback when a category is selected
            className={`cursor-pointer py-2 px-4 rounded-lg transition-all duration-200 hover:bg-primary/80 hover:text-white hover:scale-105 ${
              selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-secondary'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
