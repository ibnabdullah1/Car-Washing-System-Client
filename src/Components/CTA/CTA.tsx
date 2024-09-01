import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="max-w-7xl mx-auto px-16 py-8 sm:px-8 lg:px-16 lg:py-14">
        <div className="md:flex justify-between md:items-center md:space-x-12 lg:space-x-24">
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-12 xl:gap-x-24">
            <div>
              <ul className="space-y-3 text-base font-medium text-white font-pj">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Exterior Hand Wash
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Interior Vacuum Cleaning
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Tire & Wheel Shine
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3 text-base font-medium text-white font-pj">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Wax & Polish Finish
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Engine Bay Cleaning
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Spot-Free Rinse
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <Link
              to="/services"
              className="inline-block px-8 py-4 text-base font-bold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              Book Your Wash Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
