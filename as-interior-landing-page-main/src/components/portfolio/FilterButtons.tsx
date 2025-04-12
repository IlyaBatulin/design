
interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center mt-8 gap-2">
      <button 
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-sm transition-colors ${activeFilter === 'all' ? 'bg-asBurgundy text-asWhite' : 'bg-asGray-100 text-asDark hover:bg-asGray-200'}`}
      >
        Все проекты
      </button>
      <button 
        onClick={() => onFilterChange('white')}
        className={`px-4 py-2 rounded-sm transition-colors ${activeFilter === 'white' ? 'bg-asBurgundy text-asWhite' : 'bg-asGray-100 text-asDark hover:bg-asGray-200'}`}
      >
        ЖК Событие г. Москва
      </button>
      <button 
        onClick={() => onFilterChange('burgundy')}
        className={`px-4 py-2 rounded-sm transition-colors ${activeFilter === 'burgundy' ? 'bg-asBurgundy text-asWhite' : 'bg-asGray-100 text-asDark hover:bg-asGray-200'}`}
      >
        ЖК Сердце Столицы
      </button>
    </div>
  );
};

export default FilterButtons;
