import Ratings from "../Common/Rating";

const ServiceReviews = ({ reviewsCollection }: any) => {
  return (
    <div className="py-6 h-min  rounded space-y-4">
      <p className="text-2xl font-bold my-2">
        {reviewsCollection ? reviewsCollection?.length : 0} Comments{" "}
      </p>
      {reviewsCollection?.map((review: any) => (
        <ServiceReviewCard review={review} key={review._id} />
      ))}
    </div>
  );
};

export default ServiceReviews;
export const ServiceReviewCard = ({ review }: any) => {
  return (
    <div className="flex gap-4">
      <img
        className="w-14 h-14 rounded-full mt-5"
        src={review?.image}
        alt="user avatar"
        loading="lazy"
      />
      <div className="space-y-3 mt-5">
        <h6 className="text-2xl font-semibold text-gray-900 ">
          {review?.name}
        </h6>
        <p className="text-sm text-gray-400 ">{review?.date}</p>

        <Ratings rating={review.rating} />
        <p className="text-gray-400 text-lg">{review?.review}</p>
      </div>{" "}
    </div>
  );
};
