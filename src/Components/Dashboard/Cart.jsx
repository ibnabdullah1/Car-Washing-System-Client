import { AiFillDelete } from "react-icons/ai";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const subtotal = cart
    .reduce((total, item) => total + parseFloat(item?.price), 0)
    .toFixed(2);
  const shipping = 8;
  const totalPrice = (parseFloat(subtotal) + shipping).toFixed(2);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?" />

      <div className="justify-center flex-1 ">
        <div className="p-8 bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Product name
                  </h2>
                </div>
                <div className="hidden px-4 lg:block lg:w-2/12">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Price
                  </h2>
                </div>
                <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Quantity
                  </h2>
                </div>
                <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Subtotal
                  </h2>
                </div>
              </div>
              <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                {cart &&
                  cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8"
                    >
                      <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                        <div className="flex flex-wrap items-center -mx-4">
                          <div className="w-full px-4 mb-3 md:w-1/3">
                            <div className="w-full  md:h-24 md:w-24 p-3">
                              <img
                                src={item?.image}
                                alt=""
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="w-2/3 px-4">
                            <h2 className="mb-2 text-lg font-bold dark:text-gray-400">
                              {item?.foodName}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 ">
                              {item?.category}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden px-4 lg:block lg:w-2/12">
                        <p className="text-lg font-bold text-[#ffcc00] dark:text-gray-400">
                          ${item?.price}
                        </p>
                        <span className="text-xs text-gray-500 line-through dark:text-gray-400">
                          ${item?.price ? item.price * 2 : "00.00"}
                        </span>
                      </div>
                      <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                        <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                          <button className="py-2 hover:text-gray-700 dark:text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                            </svg>
                          </button>
                          <input
                            type="number"
                            className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right"
                            placeholder="1"
                            defaultValue={item?.quantity}
                          />
                          <button className="py-2 hover:text-gray-700 dark:text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                        <p className="text-lg font-bold text-[#ffcc00] dark:text-gray-400">
                          {item?.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700 dark:text-gray-400">
                  Apply Coupon
                </span>
                <input
                  type="text"
                  className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800"
                  placeholder="x304k45"
                  disabled
                />
                <button
                  disabled
                  className="flex-1 inline-block px-8 py-4 font-semibold text-center text-gray-400 bg-gray-300 rounded-md md:flex-none"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full px-4 xl:w-4/12">
              <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8">
                <h2 className="mb-8 text-xl font-bold text-gray-700 dark:text-gray-400">
                  Order Summary
                </h2>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                  <span className="text-gray-700 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 dark:text-gray-400 ">
                    Shipping
                  </span>
                  <span className="text-xl font-semibold text-gray-700 dark:text-gray-400 ">
                    $8.00
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 dark:text-gray-400">
                    Order Total
                  </span>
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                    ${totalPrice}
                  </span>
                </div>
                <h2 className="text-lg text-gray-500 dark:text-gray-400">
                  We offer:
                </h2>
                <div className="flex items-center mb-4 ">
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                </div>

                {cart.length > 0 ? (
                  <Link to={"/dashboard/checkout"}>
                    <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-[#ffcc00] rounded-md hover:bg-[#ffcc00cd]">
                      Checkout
                    </button>
                  </Link>
                ) : (
                  <button className="block w-full py-4 font-bold text-center text-gray-400 uppercase bg-gray-300 rounded-md ">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
