import Loader from "../../Components/Common/Loader";
import { useGetUserBookingsQuery } from "../../redux/features/booking/bookingApi";

const MyBookings = () => {
  const { data: MyBookings, isLoading } = useGetUserBookingsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (!MyBookings || MyBookings.data.length === 0) {
    return <p className="text-center text-gray-500">No bookings found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">My Bookings</h1>
      <div className="space-y-4">
        {MyBookings.data.map((booking: any) => (
          <div
            key={booking._id}
            className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row md:items-start justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={booking.service.image}
                alt={booking.service.name}
                className="size-20 rounded-md object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-primary">
                  {booking.service.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  {booking.service.description}
                </p>
                <p className="text-gray-400 text-sm">
                  Duration: {booking.service.duration} mins
                </p>
                <p className="text-gray-400 text-sm">
                  Price:{" "}
                  <span className="text-primary ">
                    ${booking.service.price}.00
                  </span>
                </p>
                <p className="text-gray-400 text-sm">
                  Vehicle: {booking.vehicleBrand} {booking.vehicleModel} (
                  {booking.vehicleType})
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right md:text-left">
              <p className="text-gray-400 text-sm">
                Date: {new Date(booking.slot.date).toLocaleDateString()}
              </p>
              <p className="text-gray-400 text-sm">
                Time: {booking.slot.startTime} - {booking.slot.endTime}
              </p>
              <p className="text-gray-400 text-sm">
                Manufacturing Year: {booking.manufacturingYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
