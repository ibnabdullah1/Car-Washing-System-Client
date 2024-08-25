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
    }),
    deleteSingleService: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
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
  }),
});

export const {
  useGetAllServicesQuery,
  useServiceMutation,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteSingleServiceMutation,
} = serviceApi;
