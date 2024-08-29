import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../../pages/Services/ServiceCard";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import { TService } from "../../types/global";

const FeaturedService = () => {
  const { data: servicesData, isLoading } = useGetAllServicesQuery(undefined);
  return (
    <div className="fixed-w FeaturedService h-min  rounded py-14">
      <p className="heading">Featured Properties</p>
      <div>
        <Swiper
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation, Autoplay]}
        >
          <div>
            {isLoading ? (
              <SwiperSlide>
                <>Loading...</>
              </SwiperSlide>
            ) : (
              servicesData?.data?.map((service: TService) => (
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

export default FeaturedService;
