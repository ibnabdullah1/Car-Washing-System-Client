import { useSelector } from "react-redux";
import Loader from "../../Components/Common/Loader";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserRoleMutation,
} from "../../redux/features/user/userApi";
const ManageUsers = () => {
  const [userRoleUpdate] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();
  let role;
  const { data: users, isLoading: isUserLoading } =
    useGetAllUsersQuery(undefined);
  const { userEmail }: any = useSelector(selectCurrentUser);
  const { data: currentUser, isLoading } = useGetUserQuery(userEmail);
  if (isLoading) {
    return;
  }
  role = currentUser?.data?.role;
  if (isUserLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Users</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-primary ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                user Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Role
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                <div className="w-[100px]"> Make Admin</div>
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
