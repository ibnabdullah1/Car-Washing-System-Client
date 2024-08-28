import { FaHandHoldingHeart, FaWater } from "react-icons/fa";
import { GiCarDoor, GiSoap } from "react-icons/gi";
import { RiCarWashingFill } from "react-icons/ri";

const CarWashServiceOverview = () => {
  return (
    <div className="p-6 bg-slate-100 lg:h-min rounded">
      <p className="text-xl font-semibold my-2">Car Wash Service Overview</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <RiCarWashingFill className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Service Type</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Full Service Wash
          </p>
        </div>
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <FaWater className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Water Usage</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Eco-Friendly Water Recycling
          </p>
        </div>
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <GiCarDoor className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Door Service</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Interior & Exterior Door Cleaning
          </p>
        </div>
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <GiSoap className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Soap Quality</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Premium Quality Soaps
          </p>
        </div>
        <div className="bg-white rounded px-4 py-8 flex flex-col items-center space-y-2">
          <FaHandHoldingHeart className="text-4xl text-[#333333]/60" />
          <h3 className="text-sm text-center font-medium">Customer Care</h3>
          <p className="text-[#333333]/60 text-xs text-center">
            Friendly & Professional Staff
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarWashServiceOverview;
