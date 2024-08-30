import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: `/users`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
      query: (data) => {
        return {
          url: `/users`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserRoleMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
} = userApi;
