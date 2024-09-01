import { useState } from "react";
import toast from "react-hot-toast";
import { useAddServiceMutation } from "../../redux/features/service/serviceApi";
import { imageUpload } from "../../utils/utilis";

const AddService = () => {
  const [addService] = useAddServiceMutation();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      const form = e.target;
      const name = form.name.value;
      const price = parseInt(form.price.value);
      const duration = parseInt(form.duration.value);
      const description = form.description.value;
      const image = form.image.files[0];

      const image_url = await imageUpload(image);
      const serviceData = {
        name,
        duration,
        price,
        description,
        image: image_url?.data?.display_url,
        isDeleted: false,
      };
      const res = await addService(serviceData).unwrap();
      if (res.success) {
        toast.success(res.message);
        form.reset();
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const cssClass =
    "appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out";

  return (
    <div className="w-full md:max-w-3xl mx-auto px-6 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white py-10 border">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Add Service
      </h2>
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Name</label>
          <input
            placeholder="Enter product name..."
            type="text"
            name="name"
            className={cssClass}
            required
          />
        </div>

        <div className="flex justify-between gap-4 mt-1">
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Price</label>
            <input
              placeholder="Enter service price..."
              type="number"
              name="price"
              className={cssClass}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Duration</label>
            <input
              placeholder="Enter service duration..."
              type="number"
              name="duration"
              className={cssClass}
              required
            />
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            name="description"
            className={cssClass}
          ></textarea>
        </div>

        <div className="mt-4 w-full">
          <input
            required
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white text-xs mt-4 p-2 rounded"
        >
          {loading ? "Adding.." : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
