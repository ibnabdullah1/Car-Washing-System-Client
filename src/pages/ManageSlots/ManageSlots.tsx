import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Swal from "sweetalert2";
import Loader from "../../Components/Common/Loader";
import {
  useDeleteSlotMutation,
  useGetAllSlotsQuery,
} from "../../redux/features/slot/slotApi";
import { TSlot } from "../../types/global";

const ManageSlots = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slots, setSlots] = useState<TSlot[]>([]);
  const itemsPerPage = 10;
  const {
    data: slotsData,
    isLoading,
    isError,
  } = useGetAllSlotsQuery(undefined);
  const [deleteSlot] = useDeleteSlotMutation();
  useEffect(() => {
    if (slotsData?.data && Array.isArray(slotsData.data)) {
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
        const res = await deleteSlot(id).unwrap();
        if (res.success) {
          toast.success(res.message);
        }
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
      <div className=" border border-[#1c445630] rounded">
        <div className="max-w-[900px] mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary ">
          <table className="w-full table-auto mb-10">
            <thead className="text-left bg-primary">
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-b">
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Service Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsToShow?.map((item: any, i: any) => (
                <tr key={i}>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    <img
                      className="w-14 h-8 rounded"
                      src={item.service?.image}
                      alt={item.service?.name}
                    />
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    {item.service?.name}
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    ${item.service?.price}.00
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    {item.service?.duration} Mins
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    {item.date}
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    {item.startTime} - {item.endTime}
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
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
