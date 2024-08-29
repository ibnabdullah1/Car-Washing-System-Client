import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { MdDeleteOutline, MdOutlineChangeCircle } from "react-icons/md";
import "./user.css";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [noData, setNoData] = useState();

  const {
    refetch,
    data: users = [],
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  useEffect(() => {
    if (users?.length <= 0) {
      setNoData("No Users!");
    } else {
      setNoData("");
    }
  }, [users]);
  const handleChangeRole = (user, role) => {
    axiosSecure.patch(`/users/admin/${user._id}`, { role }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("User role updated successfully");
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <>
      <SectionTitle heading={"MANAGE ALL USERS"} subHeading={"How many"} />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Email
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Role
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <p className="text-black dark:text-white">{user.name}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      {user.email}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      {user.role ? user.role : "user"}
                    </p>
                  </td>

                  <td className=" items-center justify-center gap-3 p-2.5 flex">
                    <div className="has-tooltip mt-10">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-900 -mt-8">
                        Make a User
                      </span>
                      <button onClick={() => handleChangeRole(user, "user")}>
                        <MdOutlineChangeCircle className="hover:text-green-500 text-2xl" />
                      </button>
                    </div>

                    <div className="has-tooltip mt-10">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-800 -mt-8">
                        Delete
                      </span>
                      <button onClick={() => handleDelete(user)}>
                        <MdDeleteOutline className="hover:text-red-500 text-2xl" />
                      </button>
                    </div>
                    <div className="has-tooltip mt-10">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-900 -mt-8">
                        Make a Admin
                      </span>
                      <button onClick={() => handleChangeRole(user, "admin")}>
                        <MdOutlineChangeCircle className="hover:text-green-500 text-2xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col py-5 justify-center items-center">
            {isLoading ? (
              <Spinner color="green" />
            ) : (
              <p className="text-gray-500">{noData}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
