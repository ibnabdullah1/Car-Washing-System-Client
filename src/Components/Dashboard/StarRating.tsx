import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { TbReload } from "react-icons/tb";

const StarRating = ({ maxStars, onChange }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starValue) => {
    setSelectedStars(starValue);
    onChange(starValue);
  };

  const handleReloadClick = (e) => {
    e.preventDefault();
    setSelectedStars(0);
    onChange(0);
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleReloadClick}>
        <TbReload />
      </button>

      {[...Array(maxStars)].map((_, index) => (
        <div
          key={index + 1}
          className={`cursor-pointer ${
            index < selectedStars ? "text-[#ffcc00]" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(index + 1)}
        >
          <GoStarFill />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
