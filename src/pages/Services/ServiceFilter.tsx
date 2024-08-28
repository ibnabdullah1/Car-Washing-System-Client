import { FaList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
type FilterProps = {
  setFilterTitle: any;
  filterTitle: any;
  setSortOption: any;
  sortOption: any;
};
const ServiceFilter = ({
  setFilterTitle,
  filterTitle,
  setSortOption,
  sortOption,
}: FilterProps) => {
  return (
    <div className="my-4 flex justify-between">
      <div className="gap-2 flex items-center">
        <div
          className="w-10 h-10 rounded-xl grid place-items-center !bg-primary text-white sm:cursor-pointer transition-a dark:bg-card-dark 
       
           
        "
        >
          <FiGrid />
        </div>
        <div className="w-10 h-10 rounded-xl grid place-items-center bg-slate-100 sm:cursor-pointer hover:bg-slate-200 transition-a dark:bg-card-dark">
          <FaList />
        </div>
      </div>
      <div className="gap-4 flex items-center justify-between">
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
      </div>
    </div>
  );
};

export default ServiceFilter;
