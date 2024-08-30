import { TResponseRedux, TSlot } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (serviceData) => ({
        url: "/reviews",
        method: "POST",
        body: serviceData,
      }),
      invalidatesTags: ["reviews"],
    }),
    getAllReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TSlot>) => ({
        data: response.data,
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const { useAddReviewMutation, useGetAllReviewsQuery } = reviewApi;
