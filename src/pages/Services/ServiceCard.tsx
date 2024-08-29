import { Link } from "react-router-dom";
import { TService } from "../../types/global";

const ServiceCard: React.FC<TService> = ({
  _id,
  image,
  name,
  description,
  price,
  duration,
}) => {
  return (
    <div className=" group bg-white border border-secondary/10  rounded-lg hover:border-primary/50 transition-shadow duration-300 font-questrial overflow-hidden">
      <div className="h-[250px] overflow-hidden">
        <img
          src={
            image
              ? image
              : "https://autocare.dexignlab.com/xhtml/images/our-work/pic1.jpg"
          }
          alt=""
          className="rounded-t-lg h-full w-full object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div className="p-3 pb-6">
        <h3 className="font-semibold text-2xl group-hover:text-primary duration-300 pb-2">
          {name}
        </h3>
        <p className="  text-gray-600">
          {description.length > 40
            ? description.slice(0, 40) + " more..."
            : description}
        </p>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-gray-700 font-semibold">
              Price: <span className="text-primary">${price}</span>{" "}
            </p>
            <p className="text-gray-700 font-semibold">
              Duration: <span className="text-primary">{duration} mins</span>
            </p>
          </div>

          <Link
            to={`/services/${_id}`}
            className="px-6 py-2 rounded bg-primary/90 hover:bg-primary duration-300 text-white"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
