import { TQueryParam, TResponseRedux, TSlot } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addServiceSlot: builder.mutation({
      query: (serviceData) => ({
        url: "/services/slots",
        method: "POST",
        body: serviceData,
      }),
      invalidatesTags: ["slots"],
    }),
    getAllSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TSlot>) => ({
        data: response.data,
      }),
      providesTags: ["slots"],
    }),
    getAvailableAllSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/slots/availability",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSlot>) => ({
        data: response.data,
      }),
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/slots/availability/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TSlot>) => ({
        data: response.data,
      }),
    }),
    deleteSlot: builder.mutation({
      query: (id) => ({
        url: `/slots/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["slots"],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useGetSingleServiceQuery,
  useGetAvailableAllSlotsQuery,
  useAddServiceSlotMutation,
  useDeleteSlotMutation,
} = slotApi;
