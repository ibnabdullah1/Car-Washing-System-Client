import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }: any) => {
  return (
    <div className=" mb-4">
      <NavLink
        to={address}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-[6px]  transition-colors duration-300 transform  ${
            isActive
              ? "bg-[#1E69B8] hover:bg-[#1E69B8] hover:text-white  text-[#ffffff]"
              : "text-[#2d2c2c] hover:bg-[rgb(30,105,184,0.3)]   hover:text-[#1E69B8] "
          }`
        }
      >
        <Icon className="w-6 h-6" />

        <span className="font-medium text-sm uppercase">{label}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
