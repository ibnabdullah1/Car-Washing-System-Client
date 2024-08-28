import { IconType } from "react-icons";
import {
  FaCar,
  FaCarBattery,
  FaCarSide,
  FaGasPump,
  FaTools,
  FaWrench,
} from "react-icons/fa";

import { MdLocalCarWash, MdOutlineCarRepair } from "react-icons/md";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import FeaturedServiceCard from "./FeaturedServiceCard";

const FeaturedServices = () => {
  const {
    data: servicesData,
    isFetching,
    isLoading,
    isError,
  } = useGetAllServicesQuery(undefined);
  if (isLoading) {
    return;
  }
  return (
    <div className="py-16 fixed-w">
      <h2 className="heading text-center">Our Services</h2>
      <p className="text-center text-lg mb-12">
        We offer a wide range of car maintenance services to keep your vehicle
        in top condition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData?.data.slice(0, 8).map((service) => (
          <FeaturedServiceCard
            key={service._id}
            title={service.name}
            icon={getServiceIcon(service.name)}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300">
          View All Services
        </button>
      </div>
    </div>
  );
};

const getServiceIcon = (serviceName: string): IconType => {
  switch (serviceName) {
    case "Tire Rotation":
      return FaTools;
    case "Oil Change":
      return FaGasPump;
    case "Car Wash":
      return MdLocalCarWash;
    case "Basic Exterior Wash":
      return MdLocalCarWash;
    case "Deluxe Wash":
      return FaCarSide;
    case "Interior Vacuuming":
      return FaCar;
    case "Full Interior Detailing":
      return MdOutlineCarRepair;
    case "Hand Waxing":
      return FaWrench;
    case "Engine Bay Cleaning":
      return FaCarBattery;
    case "Wheel and Tire Cleaning":
      return FaCarSide;
    case "Underbody Wash":
      return FaCar;
    case "Glass Cleaning":
      return MdOutlineCarRepair;
    case "Clay Bar Treatment":
      return MdOutlineCarRepair;
    default:
      return FaCar;
  }
};

export default FeaturedServices;
