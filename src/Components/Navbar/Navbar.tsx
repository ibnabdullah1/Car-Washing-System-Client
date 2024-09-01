import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Dropdown from "../Dropdown/MenuDropdown";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "FAQs", link: "/faqs" },
    { name: "Our Team", link: "/our-team" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <header className="max-w-7xl mx-auto  flex justify-between items-center px-4 lg:px-8 py-2">
      <Link to="/">
        <img className="w-32" src={logo} alt="Logo" />
      </Link>
      <div
        className={`fixed top-[63px] bg-gray-100  lg:bg-transparent right-0  lg:px-7 pb-7 pt-4 w-[250px] lg:w-auto h-full overflow-auto transform transition-transform duration-500 ${
          isMenuOpen
            ? "translate-x-0  "
            : "translate-x-full lg:translate-x-0   "
        } lg:static lg:p-0 lg:overflow-visible `}
      >
        <ul className="list-none block bg-opacity-5 lg:flex gap-5">
          {Links.map((item) => (
            <li
              key={item.link}
              className="my-2 border-b lg:border-b-0 border-b-gray-300 pb-1 lg:pb-0 px-4 lg:px-0"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `  duration-300 lg:pb-[2px] font-questrial 
                font-semibold ${
                  isActive
                    ? "text-primary lg:border-b-2  border-primary"
                    : "text-[#333333] hover:text-primary"
                }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Dropdown />
        <button
          onClick={toggleMenu}
          className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary hover:bg-primary/10 duration-500"
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <HiMiniBars3 className="text-2xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
