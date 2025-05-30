import { useState, useEffect } from 'react';

interface FilterButtonsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterButtons = ({ selectedCategory, onCategoryChange }: FilterButtonsProps) => {
  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'white', label: 'ЖК Событие' },
    { id: 'burgundy', label: 'ЖК Сердце Столицы' }
  ];

  
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2.5 rounded-md transition-colors text-sm md:text-base min-w-[120px] ${
            selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
