import { Range } from "react-range";

const PriceRangeFilter = ({ min, max, step, values, onChange }: any) => {
  const handleRangeChange = (values: any) => {
    onChange(values);
  };

  return (
    <div className="flex flex-col w-full border px-4 rounded py-2 ">
      <h2 className="text-left text-secondary my-b">Price Range</h2>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div {...props} className="w-full h-1 bg-primary/20 rounded-full">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="size-2 bg-primary rounded-full" />
        )}
      />
      <div className="flex justify-between w-full mt-2">
        <input
          type="number"
          value={values[0]}
          disabled
          className="w-10 h-5 text-center border text-xs border-primary/50 text-primary rounded"
        />
        <input
          type="number"
          value={values[1]}
          disabled
          className="w-10 h-5 text-center text-xs border border-primary/50 text-primary rounded"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
