import { TQueryParam, TResponseRedux, TSlot } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSlot: builder.mutation({
      query: (serviceData) => ({
        url: "/slots/availability",
        method: "POST",
        body: serviceData,
      }),
    }),
    getAllSlots: builder.query({
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

    // headers: {
    //   "Content-Type": "application/json",
    //   "Authorization": `Bearer ${}`
    // }
  }),
});

export const { useGetAllSlotsQuery, useAddSlotMutation } = slotApi;
