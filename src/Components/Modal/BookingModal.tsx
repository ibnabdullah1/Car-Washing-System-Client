import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { vehiclesData } from "../../data/dummyData";

const BookingModal = ({ isOpen, handleBookService, setIsOpen }: any) => {
  const [vehicleType, setVehicleType] = useState("car");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [manufacturingYear, setManufacturingYear] = useState("");

  const handleBrandChange = (event: any) => {
    setVehicleBrand(event.target.value);
    setVehicleModel("");
  };

  const handleModelChange = (event: any) => {
    setVehicleModel(event.target.value);
  };

  const handleManufacturingYearChange = (event: any) => {
    setManufacturingYear(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const bookingServiceData = {
      vehicleType,
      vehicleBrand,
      vehicleModel,
      manufacturingYear,
    };
    setIsOpen(false);
    handleBookService(bookingServiceData);
  };
  function close() {
    setIsOpen(false);
  }
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-2xl rounded-xl bg-white  p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <form onSubmit={handleSubmit} className="p-4 w-full">
              <h2 className="text-2xl  mb-4 font-questrial font-semibold text-center">
                Vehicle Info
              </h2>
              <div className="flex justify-between items-center  gap-3">
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-gray-700">
                    Vehicle Type:
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] rounded w-full"
                    required
                  >
                    {Object.keys(vehiclesData)?.map((type) => (
                      <option key={type} value={type}>
                        {type?.charAt(0)?.toUpperCase() + type?.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 w-full">
                  <label className="block mb-2 text-gray-700">
                    Vehicle Brand:
                  </label>
                  <select
                    value={vehicleBrand}
                    onChange={handleBrandChange}
                    required
                    className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] rounded  w-full"
                  >
                    <option value="" disabled>
                      Select a brand
                    </option>
                    {Object.keys(vehiclesData[vehicleType]).map(
                      (brand: any) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center  gap-3">
                <div className="mb-4 w-full">
                  <label className="block mb-2 text-gray-700">
                    Vehicle Model:
                  </label>
                  <select
                    required
                    value={vehicleModel}
                    onChange={handleModelChange}
                    disabled={!vehicleBrand}
                    className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] rounded w-full"
                  >
                    <option value="" disabled>
                      Select a model
                    </option>
                    {vehicleBrand &&
                      vehiclesData[vehicleType][vehicleBrand]?.map(
                        (model: string) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        )
                      )}
                  </select>
                </div>

                <div className="mb-4 w-full">
                  <label className="block mb-2 text-gray-700">
                    Manufacturing Year:
                  </label>
                  <input
                    type="number"
                    required
                    value={manufacturingYear}
                    onChange={handleManufacturingYearChange}
                    className="border outline-none bg-transparent focus:border-primary placeholder:text-sm px-4 py-[7px] rounded w-full"
                    placeholder="Enter manufacturing year"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary px-4 text-white py-2 rounded"
              >
                Booking
              </button>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default BookingModal;
