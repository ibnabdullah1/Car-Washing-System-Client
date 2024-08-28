import { FaBed, FaRegHeart, FaSquareParking } from "react-icons/fa6";
import { GiBathtub } from "react-icons/gi";
import { GoArrowSwitch } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiArrowsInSimpleBold } from "react-icons/pi";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosPublic from "../../Api/axiosPublic";
import useAuth from "../../Hooks/useAuth";
import FeaturedAdsProperty from "../FeaturedAdsProperty/FeaturedAdsProperty";
import FactsAndFeatures from "../PropertyDetails/FactsAndFeatures";
import FloorPlan from "../PropertyDetails/FloorPlan";
import PropertyBuyRequest from "../PropertyDetails/PropertyBuyRequest";
import PropertyConclusion from "../PropertyDetails/PropertyConclusion";
import PropertyDescription from "../PropertyDetails/PropertyDescription";
import PropertyImages from "../PropertyDetails/PropertyImages";
import PropertyLocationMap from "../PropertyDetails/PropertyLocationMap";
import PropertyOverview from "../PropertyDetails/PropertyOverview";
import PropertyReviews from "../PropertyDetails/PropertyReviews";
import PropertyVideo from "../PropertyDetails/PropertyVideo";
import SendAReview from "../PropertyDetails/SendAReview";
const PropertiesDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const {
    refetch,
    data: properties,
    isLoading,
  } = useQuery({
    queryKey: ["properties", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/properties/${id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return;
  }
  const {} = properties;

  const wishlistData = {};

  const handlePropertyAddToWishlist = async (e) => {
    e.preventDefault();
    try {
      if (!user?.email) {
        return toast.error(
          "You are not logged in yet. Please log in and try again"
        );
      }

      // const data = await addWishlist(wishlistData);
      // if (data.insertedId) {
      //   toast.success("Your Property added in wishlist");
      // }
      // const isExist = data?.message?.trim() === "Is already added in wishlist";
      // if (isExist) {
      //   toast.error("Is already added in wishlist");
      // }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="py-20">
      <div>
        {/* cover with location*/}
        <div>
          {/* overview */}
          <div className="bg-[#f9f7f4] p-5 rounded-md lg:flex justify-between">
            <div>
              <div className="flex items-center justify-between md:gap-6">
                <h2 className="text-xl md:text-3xl font-semibold capitalize">
                  {name}
                </h2>
                <button className="bg-primary text-white px-2 rounded py-[1px]">
                  Featured
                </button>
              </div>
              <p className="text-gray-400 py-2">{location}</p>
              <div className="flex flex-wrap gap-4 py-2">
                <p className="text-gray-400 flex items-center gap-2">
                  <FaBed /> {number_of_beds} Bedroom
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <GiBathtub />
                  {number_of_bathrooms} Bathroom
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaSquareParking />1 Parking
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  {" "}
                  <PiArrowsInSimpleBold /> {dimensions}
                </p>
              </div>

              <div className="flex items-center gap-3 my-3">
                <button className="border border-gray-300 rounded p-2 text-gray-400 hover:bg-primary duration-300 hover:border-primary hover:text-white ">
                  <IoShareSocialOutline />
                </button>
                <button
                  onClick={handlePropertyAddToWishlist}
                  className="border border-gray-300 rounded p-2 text-gray-400 hover:bg-primary duration-300 hover:border-primary hover:text-white "
                >
                  <FaRegHeart />
                </button>
                <button className="border border-gray-300 rounded p-2 text-gray-400 hover:bg-primary duration-300 hover:border-primary hover:text-white ">
                  <GoArrowSwitch />
                </button>
              </div>
            </div>
            <div className="lg:text-right mt-6 lg:mt-0">
              <div className="flex gap-4 lg:justify-end">
                <button className="bg-gray-900 text-white px-2 rounded py-[2px] capitalize hover:bg-primary duration-300">
                  {category}
                </button>
                <button className="bg-gray-900 text-white px-2 rounded py-[2px] capitalize hover:bg-primary duration-300">
                  For {purpose}
                </button>
              </div>
              <p className="text-4xl font-semibold text-primary mt-6">
                ${price}
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={agent.agentImage}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h2 className="text-gray-500">{agent.name}</h2>
              </div>
            </div>
          </div>
          {/* Images */}

          <PropertyImages image={image} />
          {/* Others  */}

          <div className="lg:grid  lg:grid-cols-3 mt-4 gap-4 space-y-4 lg:space-y-0">
            <div className="lg:col-span-2 space-y-4 w-full">
              <PropertyDescription description={description} />
              <PropertyOverview
                number_of_beds={number_of_beds}
                number_of_bathrooms={number_of_bathrooms}
                dimensions={dimensions}
                category={category}
              />
              {/*Fact and features  */}
              <FactsAndFeatures />
              {/* Floor Plan */}
              <FloorPlan
                number_of_beds={number_of_beds}
                number_of_bathrooms={number_of_bathrooms}
                dimensions={dimensions}
              />
              {/* Property Video */}
              <PropertyVideo />
              {/* Property Map */}
              <PropertyLocationMap location={location} />
              <PropertyConclusion />
              {/* Property Review */}
              <PropertyReviews reviewsCollection={reviewsCollection} />
              <SendAReview id={_id} refetch={refetch} />
            </div>
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-10">
                <PropertyBuyRequest />
                <FeaturedAdsProperty />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
