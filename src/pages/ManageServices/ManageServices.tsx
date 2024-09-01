import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../Components/Common/Loader";
import {
  useDeleteSingleServiceMutation,
  useGetAllServicesQuery,
} from "../../redux/features/service/serviceApi";

const ManageServices = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menu, setMenu] = useState<any[]>([]);

  const itemsPerPage = 10;
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllServicesQuery(undefined);
  const [deleteSingleProduct] = useDeleteSingleServiceMutation();

  useEffect(() => {
    if (products?.data) {
      setMenu(products.data);
    }
  }, [products]);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = menu?.slice(startIndex, endIndex) || [];
  const totalItems = menu?.length || 0;
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
        await deleteSingleProduct(id);
        toast.success("Product deleted successfully");
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
      <h2 className="heading text-center my-5">Manage Products</h2>
      <div className=" border border-[#1c445630] rounded">
        <div className="max-w-[900px] mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary ">
          <table className="w-full table-auto mb-10">
            <thead className="text-left bg-primary ">
              <tr className="text-left border-b">
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

                <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsToShow?.map((item, i) => (
                <tr key={i} className="p-4 bg-slate-100 border-b">
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    <img
                      className="w-14 h-8 rounded"
                      src={item?.image}
                      alt={item?.name}
                    />
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    {item?.name}
                  </td>{" "}
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    ${item?.price}.00
                  </td>{" "}
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    {item?.duration} Mins
                  </td>
                  <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                    <div className="flex gap-2 items-center justify-center">
                      <Link
                        to={`/dashboard/add-service-slot/${item._id}`}
                        className="bg-blue/70 text-white hover:bg-blue rounded-full px-3 py-[6px] text-xs duration-300"
                      >
                        Add Slot
                      </Link>
                      <Link
                        to={`/dashboard/update-service/${item._id}`}
                        className="bg-primary/70 text-white hover:bg-primary rounded-full px-3 py-[6px] text-xs duration-300"
                      >
                        Update
                      </Link>
                      <button
                        disabled={item.isDeleted}
                        onClick={() => handleDeleteItem(item._id)}
                        className={
                          item.isDeleted
                            ? "text-xs px-3 py-[6px] font-medium  rounded-full bg-[#dfe2e0] text-gray-400 "
                            : "text-xs px-3 py-[6px] font-medium  rounded-full bg-[#f0151590] hover:bg-[#f01515] duration-300 text-white"
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

export default ManageServices;
