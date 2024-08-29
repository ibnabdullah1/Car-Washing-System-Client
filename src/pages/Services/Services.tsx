import { useState } from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import Loader from "../../Components/Common/Loader";
import LinkBanner from "../../Components/LInkBanner/LinkBanner";
import { useGetAllServicesQuery } from "../../redux/features/service/serviceApi";
import { TService } from "../../types/global";
import ServiceCard from "./ServiceCard";
import ServiceFilter from "./ServiceFilter";

const Services = () => {
  const { data: servicesData, isLoading } = useGetAllServicesQuery(undefined);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterTitle, setFilterTitle] = useState("");
  const [sortOption, setSortOption] = useState("");
  const itemsPerPage = 6;

  if (isLoading) {
    return <Loader />;
  }
  const totalItems = servicesData?.data.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const filteredServices = servicesData?.data.filter((service: TService) =>
    service?.name?.toLowerCase().includes(filterTitle?.toLowerCase())
  );
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = filteredServices.slice(startIndex, endIndex);
  const handlePageClick = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Sort services based on user selection
  const sortedServices = itemsToShow.sort((a: any, b: any) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    if (sortOption === "durationAsc") return a.duration - b.duration;
    if (sortOption === "durationDesc") return b.duration - a.duration;
    return 0;
  });

  return (
    <>
      <LinkBanner ActiveLocation={"Services"} />
      <div className="py-16 fixed-w">
        <h2 className="heading text-center">Our Services</h2>
        <ServiceFilter
          setFilterTitle={setFilterTitle}
          filterTitle={filterTitle}
          setSortOption={setSortOption}
          sortOption={sortOption}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service: TService) => (
            <ServiceCard key={service._id} {...service} />
          ))}
        </div>
        {/* Pagination Component */}
        {totalItems > itemsPerPage && (
          <div className="flex-wrap md:flex justify-center py-16 gap-8">
            <button
              aria-label="Previous Page"
              className={`${
                currentPage === 0 ? "text-primary/70" : "text-primary"
              } flex items-center justify-center w-8 h-8`}
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              <FiChevronsLeft />
            </button>
            {Array.from({ length: numberOfPages }, (_, index) => (
              <button
                aria-label={`${index + 1}`}
                className={`w-7 h-7 rounded-md text-sm ${
                  currentPage === index
                    ? " bg-primary shadow shadow-primary text-white"
                    : "hover:bg-primary/70 hover:text-white"
                }`}
                key={index}
                onClick={() => handlePageClick(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              aria-label="Next Page"
              className={`${
                currentPage === numberOfPages - 1
                  ? "text-primary/70"
                  : "text-primary"
              } flex items-center justify-center w-8 h-8`}
              onClick={handleNextPage}
              disabled={currentPage === numberOfPages - 1}
            >
              <FiChevronsRight />
            </button>
          </div>
        )}
        {/* Pagination Component */}
      </div>
    </>
  );
};

export default Services;
