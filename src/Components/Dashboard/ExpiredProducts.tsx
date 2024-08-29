import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ExpiredProducts = () => {
  return (
    <div className="relative mt-3 rounded-lg border border-stroke shadow-default">
      <div className="flex items-center px-5 border-b py-3">
        <h2 className="text-[20px] font-semibold">Expired Products</h2>
      </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)]">
        <table className="w-full table-auto">
          <thead className="border-b py-2 text-[12px]">
            <tr>
              <th className="px-3 py-5 text-left">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="px-3 w-[120px] py-2 text-left">Product</th>
              <th className="px-3 w-[120px] py-2 text-left">SKU</th>
              <th className="px-3 w-[120px] py-2 text-left">Manufactured Date</th>
              <th className="px-3 w-[120px] py-2 text-left">Expired Date</th>
              <th className="px-3 w-[120px] py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <ProductListCard productImage="https://sohojpos-technologies.vercel.app/assets/product-01-e294ef33.png" />
            <ProductListCard productImage="https://sohojpos-technologies.vercel.app/assets/product-01-e294ef33.png" />
            <ProductListCard productImage="https://sohojpos-technologies.vercel.app/assets/product-01-e294ef33.png" />
            <ProductListCard productImage="https://sohojpos-technologies.vercel.app/assets/product-01-e294ef33.png" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProductListCard = ({ productImage }) => {
  return (
    <tr className="border-b text-[12px]">
      <td className="px-3 py-2">
        <input type="checkbox" name="" id="" />
      </td>
      <td className="px-3 py-2">
        <div className="flex items-center gap-1">
          <img src={productImage} className="w-[40px]" alt="Product" />
          <h3 className="text-secondary">Red Premium Handy</h3>
        </div>
      </td>
      <td className="px-3 py-2 text-secondary">PT006</td>
      <td className="px-3 py-2 text-secondary">17 Jan 2023</td>
      <td className="px-3 py-2 text-secondary">29 Mar 2023</td>
      <td className="px-3 py-2 text-secondary">
        <div className="flex gap-2 items-center">
          <button className="p-1 border rounded">
            <BiEdit className="text-blue-600" />
          </button>
          <button className="p-1 border rounded">
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExpiredProducts;
