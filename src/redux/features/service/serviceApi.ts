import { TResponseRedux, TService } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    service: builder.mutation({
      query: (serviceData) => ({
        url: "/services",
        method: "POST",
        body: serviceData,
      }),
    }),
    getAllServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["services"],
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TService>) => {
        return { data: response.data };
      },
      providesTags: ["singleServices"],
    }),
    deleteSingleService: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
          // headers: {
          //   "Content-Type": "application/json",
          //   "Authorization": `Bearer ${}`
          // }
        };
      },
      invalidatesTags: ["services"],
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/services/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["services"],
    }),
    addReviewToService: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/services/service-review/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["singleServices"],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useServiceMutation,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteSingleServiceMutation,
  useAddReviewToServiceMutation,
} = serviceApi;
