import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserRoleMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
} = userApi;
