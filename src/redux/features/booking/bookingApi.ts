import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPayment: builder.mutation({
      query: (price) => {
        return {
          url: "/create-payment-intent",
          method: "POST",
          body: price,
        };
      },
    }),
    addBooking: builder.mutation({
      query: (orderData) => {
        console.log(orderData);
        return {
          url: "/bookings",
          method: "POST",
          body: orderData,
        };
      },
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    getUserBookings: builder.query({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),

    getUserOrder: builder.query({
      query: (email) => ({
        url: `/bookings/${email}`,
        method: "GET",
      }),
    }),
    changeBookingStatus: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `/bookings/${id}`,
          method: "PUT",
          body: { status: status },
        };
      },
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useChangeBookingStatusMutation,
  useGetAllBookingsQuery,
  useGetUserOrderQuery,
  useAddPaymentMutation,
  useGetUserBookingsQuery,
} = bookingApi;
