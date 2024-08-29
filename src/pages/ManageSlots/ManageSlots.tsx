import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Swal from "sweetalert2";
import Loader from "../../Components/Common/Loader";
import { useDeleteSingleServiceMutation } from "../../redux/features/service/serviceApi";
import { useGetAllSlotsQuery } from "../../redux/features/slot/slotApi";

const ManageSlots = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slots, setSlots] = useState<any[]>([]);
  const itemsPerPage = 10;
  const {
    data: slotsData,
    isLoading,
    isError,
  } = useGetAllSlotsQuery(undefined);
  console.log(slotsData);
  const [deleteSingleService] = useDeleteSingleServiceMutation();

  useEffect(() => {
    if (slotsData?.data) {
      setSlots(slotsData.data);
    }
  }, [slotsData]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error loading slots data.</p>;
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = slots?.slice(startIndex, endIndex) || [];
  const totalItems = slots?.length || 0;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => index);

  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteSingleService(id);
        toast.success("Service deleted successfully");
      }
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="md:px-5">
      <h2 className="heading text-center my-5">Manage Slots</h2>
      <div className="border border-[#1c445630] rounded">
        <div className="max-w-[900px] mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary px-3">
          <table className="w-full table-auto mb-10">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-b">
                <th className="px-3 py-5 text-left">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="min-w-[80px] uppercase py-4 font-medium text-secondary">
                  Image
                </th>
                <th className="min-w-[140px] uppercase py-4 font-medium text-secondary">
                  Service Name
                </th>
                <th className="min-w-[60px] uppercase py-4 font-medium text-secondary">
                  Price
                </th>
                <th className="min-w-[60px] uppercase py-4 font-medium text-secondary">
                  Duration
                </th>
                <th className="min-w-[100px] uppercase py-4 font-medium text-secondary">
                  Date
                </th>
                <th className="min-w-[100px] uppercase py-4 font-medium text-secondary">
                  Time
                </th>
                <th className="py-4 font-medium text-center uppercase text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsToShow?.map((item, i) => (
                <tr key={i}>
                  <td className="border-b border-[#eee] py-5 ">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <img
                      className="size-10 rounded"
                      src={item.service?.image}
                      alt={item.service?.name}
                    />
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 font-medium text-success">
                      {item.service?.name}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 font-medium text-success">
                      ${item.service?.price}.00
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 text-center font-medium text-success">
                      {item.service?.duration} Mins
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 text-center font-medium text-success">
                      {item.date}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <p className="inline-flex rounded-full bg-opacity-10 py-1 text-center font-medium text-success">
                      {item.startTime} - {item.endTime}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 ">
                    <div className="flex gap-2 items-center justify-center">
                      <button
                        disabled={item.isBooked === "booked"}
                        onClick={() => handleDeleteItem(item._id)}
                        className={
                          item.isBooked === "booked"
                            ? "text-xs px-3 py-[6px] font-medium rounded-full bg-[#dfe2e0] text-gray-400"
                            : "text-xs px-3 py-[6px] font-medium rounded-full bg-[#f0151590] hover:bg-[#f01515] duration-300 text-white"
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {numberOfPages > 1 && (
          <div className="flex justify-center pb-16 pt-8 gap-8">
            <button
              aria-label="Previous Page"
              className={`${
                currentPage === 0 ? "text-gray-400" : "text-primary"
              } flex items-center justify-center w-8 h-8`}
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              <MdKeyboardDoubleArrowLeft className="text-xl" />
            </button>
            {pages.map((page) => (
              <button
                aria-label={`Page ${page + 1}`}
                className={`w-7 h-7 rounded-md text-sm ${
                  currentPage === page
                    ? "bg-primary shadow-lg text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
            <button
              aria-label="Next Page"
              className={`${
                currentPage === numberOfPages - 1
                  ? "text-gray-400"
                  : "text-primary"
              } flex items-center justify-center w-8 h-8`}
              onClick={handleNextPage}
              disabled={currentPage === numberOfPages - 1}
            >
              <MdKeyboardDoubleArrowRight className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageSlots;
