import { IconType } from "react-icons";
import {
  FaCar,
  FaCarBattery,
  FaCarSide,
  FaGasPump,
  FaTools,
  FaWrench,
} from "react-icons/fa";
import {
  MdEvStation,
  MdLocalCarWash,
  MdOutlineCarRepair,
} from "react-icons/md";

type Service = {
  _id: string;
  name: string;
  description: string;
};

type ServiceCardProps = {
  title: string;
  icon: IconType;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  description,
}) => {
  return (
    <div className="flex flex-col items-center py-6 px-3 bg-white border border-secondary/10  rounded-lg hover:border-primary/50 transition-shadow duration-300">
      <Icon className="text-4xl text-primary mb-4" />
      <h3 className="font-semibold text-lg  text-center">{title}</h3>
      <p className="text-center text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      _id: "66696b84193338b9f3ad778e",
      name: "Tire Rotation",
      description: "Rotation of vehicle tires",
    },
    {
      _id: "66696b98193338b9f3ad7790",
      name: "Oil Change",
      description: "Regular engine oil change service",
    },
    {
      _id: "666d315b96d84b4a2a05b5f5",
      name: "Car Wash",
      description: "Complete exterior and interior car wash",
    },
    {
      _id: "666d61d036d5a70b55ac2a62",
      name: "Engine Check",
      description: "Comprehensive engine diagnostic service",
    },
    {
      _id: "1",
      name: "Brake Inspection",
      description: "Detailed brake inspection service",
    },
    {
      _id: "2",
      name: "Fuel System Cleaning",
      description: "Cleaning of the vehicle's fuel system",
    },
    {
      _id: "3",
      name: "Battery Replacement",
      description: "Full battery replacement service",
    },
    {
      _id: "4",
      name: "Wheel Alignment",
      description: "Ensure wheels are properly aligned",
    },
    {
      _id: "5",
      name: "AC Repair",
      description: "Repair and maintenance of vehicle's AC system",
    },
  ];

  return (
    <div className="py-16 fixed-w">
      <h2 className="heading text-center">Our Services</h2>
      <p className="text-center text-lg mb-12">
        We offer a wide range of car maintenance services to keep your vehicle
        in top condition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.slice(0, 8).map((service) => (
          <ServiceCard
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
    case "Engine Check":
      return MdOutlineCarRepair;
    case "Brake Inspection":
      return FaWrench;
    case "Fuel System Cleaning":
      return FaCar;
    case "Battery Replacement":
      return FaCarBattery;
    case "Wheel Alignment":
      return FaCarSide;
    case "AC Repair":
      return MdEvStation;
    default:
      return FaCar; // Default icon
  }
};

export default Services;
