import { useParams } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import LinkBanner from "../../Components/LInkBanner/LinkBanner";
import AvailableSlotOverview from "../../Components/ServiceDetails/AvailableSlotOverview";
import CarWashFeatures from "../../Components/ServiceDetails/CarWashFeatures";
import FeaturedAdsService from "../../Components/ServiceDetails/FeaturedAdsService/FeaturedAdsService";
import SendAReview from "../../Components/ServiceDetails/SendAReview";
import ServiceBuyRequest from "../../Components/ServiceDetails/ServiceBuyRequest";
import ServiceDescription from "../../Components/ServiceDetails/ServiceDescription";
import ServiceImages from "../../Components/ServiceDetails/ServiceImages";
import ServiceLocationMap from "../../Components/ServiceDetails/ServiceLocationMap";
import CarWashServiceOverview from "../../Components/ServiceDetails/ServiceOverview";
import ServiceReviews from "../../Components/ServiceDetails/ServiceReviews";
import ServiceVideo from "../../Components/ServiceDetails/ServiceVideo";
import { useGetSingleServiceQuery } from "../../redux/features/service/serviceApi";
import { TService } from "../../types/global";

const ServiceDetails = () => {
  const { id: serviceId } = useParams();

  const { data: service, isLoading: isServiceLoading } =
    useGetSingleServiceQuery(serviceId);

  if (isServiceLoading) {
    return <Loader />;
  }

  if (!service) {
    return <p>No service data found.</p>;
  }

  const { name, image, _id, reviewsCollection } = service.data as TService;

  return (
    <>
      <LinkBanner
        ActiveLocation={`${name}-Service-Details`}
        subLocation={"Services"}
      />
      <div className="p-5 max-w-7xl mx-auto">
        <AvailableSlotOverview service={service.data} serviceId={serviceId} />
        <ServiceImages image={image} />

        <div className="lg:grid lg:grid-cols-3 mt-4 gap-4 space-y-4 lg:space-y-0">
          <div className="lg:col-span-2 space-y-4 w-full">
            <ServiceDescription />
            <CarWashServiceOverview />
            <CarWashFeatures />
            <ServiceVideo />
            <ServiceLocationMap />
            <ServiceReviews reviewsCollection={reviewsCollection} />
            <SendAReview id={_id} />
          </div>
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-10">
              <ServiceBuyRequest />
              <FeaturedAdsService />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
