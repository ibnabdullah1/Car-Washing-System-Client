import { MdAddCircle, MdManageHistory } from "react-icons/md";

import { BiSolidCarWash } from "react-icons/bi";
import { FaCheckToSlot, FaUsersGear } from "react-icons/fa6";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={MdAddCircle} label="Add Service" address="add-service" />
      <MenuItem
        icon={BiSolidCarWash}
        label="Manage Services"
        address="manage-services"
      />

      <MenuItem
        icon={MdManageHistory}
        label="Manage bookings"
        address="manage-bookings"
      />
      <MenuItem
        icon={FaUsersGear}
        label="Manage Users"
        address="manage-users"
      />
      <MenuItem
        icon={FaCheckToSlot}
        label="Manage Slots"
        address="manage-slots"
      />
    </>
  );
};

export default AdminMenu;
