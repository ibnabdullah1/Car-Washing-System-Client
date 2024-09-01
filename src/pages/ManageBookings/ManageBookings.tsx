import Loader from "../../Components/Common/Loader";
import { useGetAllBookingsQuery } from "../../redux/features/booking/bookingApi";

const ManageBookings = () => {
  const { data: bookings, isLoading } = useGetAllBookingsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (!bookings || bookings.length === 0) {
    return <p className="text-center text-gray-500">No bookings found.</p>;
  }

  return (
    <div className="">
      <h2 className="heading text-center my-5">Manage Bookings</h2>

      <div className="max-w-[900px] rounded mx-auto overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary border border-[#1c445630]">
        <table className="w-full table-auto mb-10">
          {/* head */}
          <thead className="text-left bg-primary ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Vehicle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Slot
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.data?.map((booking: any) => (
              <tr key={booking._id} className="p-4 bg-slate-100 border-b">
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {booking.customer ? booking.customer.name : "N/A"}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {booking.service ? booking.service.name : "N/A"}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {booking.vehicleBrand} {booking.vehicleModel}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {booking.slot ? booking.slot.date : "N/A"}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {booking.slot
                    ? `${booking.slot.startTime} - ${booking.slot.endTime}`
                    : "N/A"}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium  tracking-wider">
                  {booking.slot && booking.slot.isBooked === "booked" ? (
                    <span className="text-white bg-red px-3 py-1 rounded-full ">
                      Booked
                    </span>
                  ) : (
                    <span className="text-green-500">Available</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
