import { FaList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import PriceRangeFilter from "./PriceRangeFilter";
type FilterProps = {
  setFilterTitle: (value: string) => void;
  filterTitle: string;
  setSortOption: (value: string) => void;
  sortOption: string;
  minPrice: number;
  maxPrice: number;
  priceRange: number[];
  setPriceRange: (values: number[]) => void;
};

const ServiceFilter = ({
  setFilterTitle,
  filterTitle,
  setSortOption,
  sortOption,
  minPrice,
  maxPrice,
  priceRange,
  setPriceRange,
}: FilterProps) => {
  return (
    <div className="my-4 flex flex-col gap-4 sm:flex-row justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl grid place-items-center bg-primary text-white cursor-pointer transition-all dark:bg-card-dark">
          <FiGrid />
        </div>

        <div className="w-10 h-10 rounded-xl grid place-items-center bg-slate-100 cursor-pointer hover:bg-slate-200 transition-all dark:bg-card-dark">
          <FaList />
        </div>
      </div>

      <div className="md:flex items-center gap-4 space-y-3 md:space-y-0">
        <input
          type="text"
          className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] w-full rounded"
          placeholder="Enter Keywords.."
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />

        <select
          name="sort"
          id="sort"
          className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] w-full rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
          <option value="durationAsc">Duration (Short to Long)</option>
          <option value="durationDesc">Duration (Long to Short)</option>
        </select>
        <PriceRangeFilter
          min={minPrice}
          max={maxPrice}
          step={10}
          values={priceRange}
          onChange={setPriceRange}
        />
      </div>
    </div>
  );
};

export default ServiceFilter;
