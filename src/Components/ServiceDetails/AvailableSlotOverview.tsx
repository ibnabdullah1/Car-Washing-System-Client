import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowSwitch, GoBookmark } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { useGetAllSlotsQuery } from "../../redux/features/slot/slotApi";
import { TSlot } from "../../types/global";
import BookingModal from "../Modal/BookingModal";

const AvailableSlotOverview = ({ service, serviceId }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, description, duration, price } = service;
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  useEffect(() => {
    setSelectedSlot(null);
  }, [date, serviceId]);

  const { data: slotsData, isLoading: isSlotLoading } = useGetAllSlotsQuery([
    { name: "date", value: date },
    { name: "serviceId", value: serviceId },
  ]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  function open() {
    setIsOpen(true);
  }

  const handleBookService = (data) => {
    const bookingServiceData = { ...data, serviceId, slotId: selectedSlot };
    console.log(bookingServiceData);
  };
  return (
    <div className="bg-[#f9f7f4] p-5 rounded-md lg:flex justify-between">
      <div>
        <div className="flex items-center md:gap-6">
          <h2 className="text-xl md:text-3xl text-secondary font-semibold capitalize">
            {name}
          </h2>
          <button className="bg-primary text-white px-2 rounded py-[1px]">
            Featured
          </button>
        </div>
        <p className="text-gray-400 py-2">{description}</p>
        <div className="lg:flex items-start gap-3">
          <p className="text-gray-400">Available Slots:</p>
          {isSlotLoading ? (
            "Processing"
          ) : slotsData && slotsData.data.length > 0 ? (
            <div className="flex items-center flex-wrap gap-3">
              {slotsData.data.map((slot: TSlot) => (
                <button
                  key={slot._id}
                  className={`slot-button text-xs px-3 py-[6px] rounded-full ${
                    selectedSlot === slot._id
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSlot(slot._id)}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-red text-sm">No available slots.</p>
          )}
        </div>
        <label className="flex mt-4 items-center gap-3 text-gray-400">
          Select Date:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[4px] rounded"
          />
        </label>

        <div className="flex items-center gap-3 my-3">
          <button className="border border-gray-300 rounded p-2 text-gray-400 hover:bg-primary duration-300 hover:border-primary hover:text-white ">
            <IoShareSocialOutline />
          </button>
          <button className="border border-gray-300 rounded p-2 text-gray-400 hover:bg-primary duration-300 hover:border-primary hover:text-white ">
            <FaRegHeart />
          </button>
          <button className="border border-gray-300 rounded p-2 text-gray-400 hover:bg-primary duration-300 hover:border-primary hover:text-white ">
            <GoArrowSwitch />
          </button>
          <button
            onClick={open}
            disabled={!selectedSlot}
            className={`border rounded p-2 duration-300 ${
              selectedSlot
                ? "hover:bg-primary hover:border-primary hover:text-white text-gray-400 border-gray-300 "
                : "bg-gray-100 text-gray-200 hover:bg-gray-100 hover:border-gray-200 border-gray-200"
            }`}
          >
            <GoBookmark />
          </button>
        </div>
      </div>
      <div className="lg:text-right mt-6 lg:mt-0">
        <button className="bg-secondary text-white px-2 rounded py-[2px] capitalize hover:bg-primary duration-300">
          Duration: {duration} mins
        </button>

        <p className="text-4xl font-semibold text-primary mt-6">${price}.00</p>
      </div>
      <BookingModal
        isOpen={isOpen}
        handleBookService={handleBookService}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AvailableSlotOverview;
