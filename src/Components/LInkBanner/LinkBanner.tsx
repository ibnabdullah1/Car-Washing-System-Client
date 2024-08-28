import { Link } from "react-router-dom";
import LinkBannerImage from "../../assets/bg4.jpg";
const LinkBanner = ({ subLocation, ActiveLocation }) => {
  return (
    <div className="h-[200px] relative bg-gradient-to-r from-black to-primary/60 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={LinkBannerImage}
          alt="Background Image"
          className="object-cover opacity-30 object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex  items-center h-full">
        <div className="text-lg leading-tight ml-7 mb-4 flex items-center gap-1">
          <Link to={"/"}>Home</Link>
          {subLocation && (
            <Link to={`/${subLocation.toLowerCase()}`}>/{subLocation}</Link>
          )}
          {ActiveLocation && (
            <span className="text-primary cursor-pointer">
              /{ActiveLocation}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkBanner;
