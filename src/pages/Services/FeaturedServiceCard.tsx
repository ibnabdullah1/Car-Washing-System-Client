import { IconType } from "react-icons";

type FeaturedServiceCardProps = {
  title: string;
  icon: IconType;
  description: string;
};

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
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

export default FeaturedServiceCard;
