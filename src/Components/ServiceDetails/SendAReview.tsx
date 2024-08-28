import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddReviewToServiceMutation } from "../../redux/features/service/serviceApi";
import { RootState } from "../../redux/features/store";
import StarRating from "../StarRating/StarRating";

const SendAReview = ({ id }: any) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [addReviewToService] = useAddReviewToServiceMutation();
  const [rating, setRating] = useState(0);
  const formatDate = (date: any) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Add ordinal suffix
    const ordinalSuffix = (n: any) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return s[(v - 20) % 10] || s[v] || s[0];
    };

    return `${day}${ordinalSuffix(day)} ${month} ${year}`;
  };
  const date = new Date();
  const handleStarChange = (value: any) => {
    setRating(value);
  };
  const handleSubmitReview = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    try {
      const reviewDescription = form.review.value;
      if (reviewDescription.length < 10) {
        return toast.error("Please fill out minimum 10 characters ");
      }

      const data = {
        date: formatDate(date),
        name: form.name.value,
        image: user?.profileUrl,
        rating: rating,
        email: form.email.value,
        review: form.review.value,
      };
      if (!checked) {
        setError("Please check the checkbox to proceed.");
        return;
      }
      if (rating <= 0 || rating > 5) {
        setError("Please provide a valid rating between 1 and 5.");
        return;
      }
      setError("");
      const res = await addReviewToService({ id, data }).unwrap();

      if (res?.success) {
        toast.success(res.message);
        form.reset();
      }
    } catch (e: any) {
      toast.error(e.message);
    }
    setChecked(false);
  };

  return (
    <div className="h-min bg-gray-100 px-6 py-10 space-y-6 rounded">
      <p className="text-xl font-semibold my-2">Add A Review</p>
      <form onSubmit={handleSubmitReview} className="space-y-5">
        <StarRating maxStars={5} onChange={handleStarChange} />

        <div className="flex justify-between items-center gap-3 my-5">
          <div className="w-full">
            <label htmlFor="name" className="block font-semibold mb-2">
              Your Name
            </label>
            <div className="mt-1 rounded-md">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-full placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email Address
            </label>
            <div className="mt-1 rounded-md">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                required
                className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-full placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="review" className="block font-semibold mb-2">
            Your Review Here
          </label>
          <textarea
            id="review"
            rows={3}
            name="review"
            required
            className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border border-transparent rounded-3xl placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
            placeholder="Your review..."
          ></textarea>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-primary"
              onClick={() => setChecked(!checked)}
            >
              {checked ? <FaCheckCircle /> : <FaRegCircle />}
            </button>
            <p>
              Save my name, email, and website in this browser for the next time
              I review.
            </p>
          </div>
          {error && <p className="text-red ml-[23px]">{error}</p>}{" "}
        </div>
        <button
          type="submit"
          className="px-6 py-4 rounded-full bg-[#333333] text-white font-semibold hover:bg-primary duration-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default SendAReview;
