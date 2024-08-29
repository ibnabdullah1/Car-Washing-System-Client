import { useParams } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { useGetSingleServiceQuery } from "../../redux/features/service/serviceApi";
import { TService } from "../../types/global";
import { imageUpload } from "../../utils/utilis";

const UpdateService = () => {
  const { id: serviceId } = useParams();

  const { data: service, isLoading: isServiceLoading } =
    useGetSingleServiceQuery(serviceId);

  if (isServiceLoading) {
    return <Loader />;
  }

  if (!service) {
    return <p>No service data found.</p>;
  }

  const { name, price, duration } = service.data as TService;
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const duration = parseInt(form.duration.value);
    const image = form.image.files[0];

    if (!image) {
      throw new Error("No image selected");
    }

    const image_url = await imageUpload(image);
    console.log(image_url);

    const serviceData = {
      name,
      duration,
      price,
      //   image: image_url?.data?.display_url,
      isDeleted: false,
    };
    console.log(serviceData);

    // Reset form fields after successful submission
    // form.reset();
  };

  const cssClass =
    "appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out";

  return (
    <div className="w-full md:max-w-3xl mx-auto px-6 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white py-10 border">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Update Service
      </h2>
      <form onSubmit={handleSubmit} className="w-full p-4">
        <div className="mb-4 w-full">
          <label className="block text-gray-700">Name</label>
          <input
            placeholder="Enter product name..."
            type="text"
            name="name"
            defaultValue={name}
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
              defaultValue={price}
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
              defaultValue={duration}
              className={cssClass}
              required
            />
          </div>
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
          className="bg-primary text-white text-xs mt-4 p-2 rounded"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
