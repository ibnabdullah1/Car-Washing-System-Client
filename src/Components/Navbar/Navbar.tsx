import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import logo from "../../assets/logo.png";
import Dropdown from "../Dropdown/MenuDropdown";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const mediaSize = 991;

  const toggleNav = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("hidden-scrolling");
  };

  const handleSubMenuToggle = (event: any) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      const menuItemId = menuItemHasChildren.getAttribute("data-id");
      if (activeSubMenu && activeSubMenu !== menuItemId) {
        setActiveSubMenu(null);
      }
      setActiveSubMenu((prev) => (prev === menuItemId ? null : menuItemId));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        if (isMenuOpen) toggleNav();
        if (activeSubMenu) setActiveSubMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, activeSubMenu]);

  return (
    <header className="header font-questrial py-2 px-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img className="w-32" src={logo} alt="Logo" />

        <div
          onClick={toggleNav}
          className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        ></div>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="flex lg:hidden justify-between mb-5 pb-5 mt-6 border-b items-center border-secondary/20 mx-3">
            <div
              onClick={toggleNav}
              className=" hover:text-primary duration-200"
            >
              <IoCloseOutline className="text-3xl" />
            </div>

            <img src={logo} alt="" className="w-[140px] lg:hidden flex" />
          </div>

          <div className="lg:hidden flex items-center justify-between bg-transparent border border-secondary/20 gap-2 px-4 py-2 mx-3 mb-4">
            <input
              type="text"
              name=""
              id=""
              className="placeholder:text-sm w-[400px] bg-transparent placeholder:text-secondary border-none outline-none focus:ring-0"
              placeholder="Search our store"
            />{" "}
            <LuSearch className="text-secondary text-3xl" />
          </div>

          <ul className="menu" onClick={handleSubMenuToggle}>
            <li className="menu-item">
              <a href="/">Home</a>
            </li>
            <li className="menu-item">
              <a href="/about-us">About Us</a>
            </li>

            <li className="menu-item">
              <a href="/services">Services</a>
            </li>

            <li className="menu-item">
              <a href="/faqs">FAQ</a>
            </li>
            <li className="menu-item">
              <a href="/our-team">Our Team</a>
            </li>

            <li className="menu-item">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Dropdown />
          <button onClick={toggleNav} className="">
            <FaBars className="text-3xl lg:hidden flex text-primary" />
          </button>
        </div>
      </div>{" "}
    </header>
  );
};

export default Navbar;
