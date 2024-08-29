import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [noData, setNoData] = useState();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (payments?.length <= 0) {
      setNoData("No payments!");
    } else {
      setNoData("");
    }
  }, [payments]);

  const dateString = "2023-11-21T05:30:08.128Z";
  const dateObject = dateString.split("T")[0];
  return (
    <>
      <SectionTitle subHeading={"Payments"} heading={"Payments History"} />

      <div className="p-4 overflow-x-auto bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-xs text-left text-gray-500 dark:text-gray-400">
              <th className="px-6 pb-3 font-medium">Transaction ID</th>
              <th className="px-6 pb-3 font-medium ">Date </th>
              <th className="px-6 pb-3 font-medium">Email </th>
              <th className="px-6 pb-3 font-medium">Status </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment._id}
                className="text-xs  border-b dark:text-gray-400 dark:bg-gray-800"
              >
                <td className="px-6 py-5 font-medium">
                  {payment.transactionId}
                </td>
                <td className="px-6 py-5 font-medium ">{dateObject}</td>
                <td className="px-6 py-5 font-medium ">{payment.email}</td>
                <td>
                  <span
                    className={`inline-block px-3 py-1 text-center 
                ${payment.status === "pending" && "text-green-600 bg-green-100"}
                ${
                  payment.status === "Delivered" &&
                  "text-[#ffcc00] bg-[rgb(255,204,0,0.2)]"
                }
                       
                     rounded-full`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col py-5 justify-center items-center">
          {isLoading ? (
            <Spinner color="green" />
          ) : (
            <p className="text-gray-500">{noData}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;

{
  /* <span className="inline-block px-2 py-1 text-center text-red-600 bg-red-100 rounded-full dark:text-red-700 dark:bg-red-200">
                    {payment.status}
          </span>
          <span className="inline-block px-2 py-1 text-center text-yellow-600 bg-yellow-100 rounded-full dark:text-yellow-700 dark:bg-yellow-200">
                    {payment.status}
  </span> */
}
