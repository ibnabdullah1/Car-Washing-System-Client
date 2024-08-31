import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useAddBookingMutation,
  useAddPaymentMutation,
} from "../../redux/features/booking/bookingApi";
import {
  clearBooking,
  currentBookings,
} from "../../redux/features/booking/bookingSlice";

const CheckoutForm = () => {
  const {
    serviceId,
    slotId,
    vehicleType,
    vehicleBrand,
    manufacturingYear,
    vehicleModel,
    servicePrice,
  }: any = useSelector(currentBookings);
  const user = useSelector(selectCurrentUser);
  const [addBooking] = useAddBookingMutation();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [addPayment] = useAddPaymentMutation();
  const navigate = useNavigate();
  const totalPrice = servicePrice as number;

  useEffect(() => {
    if (totalPrice > 0) {
      const fetchClientSecret = async () => {
        try {
          const res = await addPayment({ price: totalPrice }).unwrap();
          setClientSecret(res?.data?.clientSecret);
        } catch (err) {
          toast.error("Failed to initialize payment");
        }
      };
      fetchClientSecret();
    }
  }, [addPayment, totalPrice]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error }: any = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error("Payment Method Error");
    }
    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.userEmail || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      toast.error("Payment Confirmation Error");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        try {
          const bookingData = {
            serviceId,
            slotId,
            vehicleType,
            vehicleModel,
            vehicleBrand,
            manufacturingYear,
          };
          const res = await addBooking(bookingData).unwrap();
          if (res.success) {
            toast.success(`Payment Successful! transactionId${transactionId}`);
            dispatch(clearBooking());
            navigate("/dashboard/my-bookings");
          }
        } catch (err) {
          console.error("Booking error", err);
          toast.error("Failed to complete booking");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-lg max-w-2xl mx-auto py-16 px-10 bg-white">
        <div>
          <div className="flex justify-between items-center gap-3">
            <div className="pb-6 w-full">
              <p className="pb-2 font-semibold text-gray-800">Name</p>
              <input
                className="w-full px-4 py-2.5 text-base text-gray-400 rounded-lg font-normal border border-gray-200"
                type="text"
                defaultValue={user?.name}
                disabled
              />
            </div>
            <div className="pb-6 w-full">
              <p className="text-gray-800 pb-2 font-semibold">Email address</p>
              <input
                className="w-full px-4 py-2.5 text-base text-gray-400 rounded-lg font-normal border border-gray-200"
                type="email"
                defaultValue={user?.userEmail}
                disabled
              />
            </div>
          </div>
          <div className="pb-6">
            <p className="pb-2 font-semibold text-gray-800">Card Number</p>
            <div className="px-4 py-3 border bg-white rounded-lg">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between  pb-4 mb-4">
            <p className="text-gray-800 font-semibold">
              Total Price{" "}
              <span className="font-semibold text-lg text-primary">
                ${totalPrice}
              </span>
            </p>

            <button
              className="bg-[#1e68b8c5] hover:bg-primary duration-200  px-10 py-2 rounded text-white"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
