import { AiFillHome } from "react-icons/ai";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineConnectWithoutContact,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { RootState } from "../../../redux/features/store";
import AdminMenu from "./AdminMenu";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";

const Sidebar = ({ isActive }: any) => {
  const { role }: any = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );

  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-20 fixed flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)]  bg-[#fff] w-[280px] space-y-6  pb-4  inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="flex justify-center ">
            <Link to="/">
              <button className="flex items-center px-7 py-2  ">
                <div className="flex items-center gap-2">
                  <img className="w-36" src={logo} alt="Logo" />
                </div>
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={MdOutlineDashboardCustomize}
                label="Dashboard"
                address=""
              />
              <MenuItem
                icon={CgProfile}
                label="Profile"
                address="user-profile"
              />
              {/* <AdminMenu /> <UserMenu /> */}
              {role === "user" && <UserMenu />}
              {role === "admin" && <AdminMenu />}
              <div className="h-[1px] w-[80%] mx-auto bg-gray-400 my-8" />
              <MenuItem icon={AiFillHome} label="Home" address="/" />
              <MenuItem
                icon={BsFillMenuButtonFill}
                label="Services"
                address="/services"
              />

              <MenuItem
                icon={MdOutlineConnectWithoutContact}
                label="Contact"
                address="/contact-us"
              />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
