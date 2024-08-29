import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { currentBookings } from "../../redux/features/booking/bookingSlice";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_pk);

const Payment = () => {
  const booking = useSelector(currentBookings);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Selected Service</h2>
          <div className="mb-4">
            <p className="text-secondary text-lg font-semibold">
              Vehicle Type: {booking?.vehicleType}
            </p>
            <p className="text-secondary text-lg font-semibold">
              Brand: {booking?.vehicleBrand}
            </p>
            <p className="text-secondary text-lg font-semibold">
              Model: {booking?.vehicleModel}
            </p>
            <p className="text-secondary text-lg font-semibold">
              Year: {booking?.manufacturingYear}
            </p>
            <p className="text-secondary text-lg font-semibold">
              Service Price: ${booking?.servicePrice}
            </p>
            <p className="text-secondary text-lg font-semibold">
              Selected Slot: {booking?.startTime}-{booking?.endTime}
            </p>
          </div>
        </div>

        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
