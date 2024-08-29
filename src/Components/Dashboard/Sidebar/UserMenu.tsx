import { MdOutlineCollectionsBookmark } from "react-icons/md";

import { VscPreview } from "react-icons/vsc";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdOutlineCollectionsBookmark}
        label="my bookings"
        address="my-bookings"
      />
      <MenuItem icon={VscPreview} label="add review" address="add-review" />
    </>
  );
};

export default UserMenu;
