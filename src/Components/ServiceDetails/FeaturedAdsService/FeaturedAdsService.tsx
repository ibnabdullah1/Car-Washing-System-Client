import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../../../pages/Services/ServiceCard";
import { useGetAllServicesQuery } from "../../../redux/features/service/serviceApi";
import { TService } from "../../../types/global";
import "./FeaturedAdsService.css";

const FeaturedAdsService = () => {
  const { data: servicesData, isLoading } = useGetAllServicesQuery(undefined);
  return (
    <div className=" FeaturedAdsService h-min  rounded mt-10">
      <p className="text-xl font-semibold my-4">Featured Services</p>
      <div>
        <Swiper
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div>
            {isLoading ? (
              <SwiperSlide>
                <>Loading...</>
              </SwiperSlide>
            ) : (
              servicesData?.data?.slice(0, 5).map((service: TService) => (
                <SwiperSlide key={service._id}>
                  <ServiceCard {...service} />
                </SwiperSlide>
              ))
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedAdsService;
