import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../../data/dummyData";
import "./Review.css";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <div className=" pt-2 lg:px-10 px-10 ">
      <div className=" max-w-7xl mx-auto pt-2 pb-16 ">
        <div className="flex justify-between items-start">
          <div className="text-center mb-8">
            <h2 className="heading">What Our Clients Say</h2>
          </div>

          <div className="flex justify-end gap-2 ">
            <button className="swiper-button-prev button text-xl p-2 rounded-full border">
              <IoIosArrowBack />
            </button>
            <button className="swiper-button-next  button text-xl p-2 rounded-full border">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
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
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
        >
          <div>
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <ReviewsCard review={review} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
