import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // If there's only one page or no pages, don't render pagination
  if (totalPages <= 1) return null;

  return (
    <div className='flex justify-center mt-6 space-x-2'>
      {/* Generate pagination buttons based on the total number of pages */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index} // Unique key for each button
          onClick={() => onPageChange(index + 1)} // Trigger the page change callback with the corresponding page number
          className={`px-4 py-2 rounded-lg transition-all w-10 ${
            currentPage === index + 1
              ? 'bg-primary text-white' // Active page styling
              : 'bg-white text-secondary border border-gray-300 hover:bg-secondary hover:text-white' // Default styling with hover effect
          }`}
        >
          {index + 1} {/* Display the page number */}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
