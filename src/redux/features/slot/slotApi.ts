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
    }),
    getAllSlots: builder.query({
      query: () => {
        return {
          url: "/slots",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TSlot>) => {
        return { data: response.data };
      },
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
      transformResponse: (response: TResponseRedux<TSlot>) => {
        return { data: response.data };
      },
      providesTags: ["slots"],
    }),

    getSingleService: builder.query({
      query: (id) => {
        return {
          url: `/slots/availability/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TSlot>) => {
        return { data: response.data };
      },
      providesTags: ["slots"],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useGetSingleServiceQuery,
  useGetAvailableAllSlotsQuery,
  useAddServiceSlotMutation,
} = slotApi;
