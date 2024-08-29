import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { useGetSingleServiceQuery } from "../../redux/features/service/serviceApi";
import { useAddServiceSlotMutation } from "../../redux/features/slot/slotApi";

const AddServiceSlot = () => {
  const { id: serviceId } = useParams();

  // Fetch service data
  const { data: service, isLoading: isServiceLoading } =
    useGetSingleServiceQuery(serviceId);

  // Mutation for adding a service slot
  const [
    addServiceSlot,
    { isLoading: isAddingSlot, isSuccess, isError, error },
  ] = useAddServiceSlotMutation();

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  if (isServiceLoading) {
    return <Loader />;
  }

  if (!service) {
    return <p>No service data found.</p>;
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const payload = {
        service: serviceId,
        ...formData,
      };

      const res = await addServiceSlot(payload).unwrap();
      if (res.success) {
        toast.success(res.message);
        setFormData({
          date: "",
          startTime: "",
          endTime: "",
        });
      }
    } catch (err) {
      console.error("Failed to add service slot:", err);
    }
  };

  const cssClass =
    "appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out";

  return (
    <div className="w-full md:max-w-3xl mx-auto px-6 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white py-10 border">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Add Service Slot
      </h2>
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="flex justify-between items-center gap-3">
          <div className="mb-4 w-full">
            <label className="block text-gray-700" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={cssClass}
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700" htmlFor="startTime">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className={cssClass}
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label className="block text-gray-700" htmlFor="endTime">
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className={cssClass}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-white text-xs mt-4 p-2 rounded"
          disabled={isAddingSlot}
        >
          {isAddingSlot ? "Adding..." : "Add Slot"}
        </button>

        {isError && (
          <p className="text-red-500 mt-2">
            Failed to add slot: {error.message}
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500 mt-2">
            Service slot added successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default AddServiceSlot;
