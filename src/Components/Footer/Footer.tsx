import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-slate-200 bg-secondary pt-16">
      <footer className="max-w-7xl mx-auto md:px-10 px-5">
        <div className="md:flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/">
              <div className="flex items-center font-semibold relative text-2xl text-[#ffffff] ">
                <img
                  className="w-36"
                  src="https://autocare.dexignlab.com/xhtml/images/logo2.png"
                  alt=""
                />
              </div>
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                harum explicabo illo, magnam vitae expedita.
              </p>
              <div className="gap-3 my-6 flex items-center">
                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-primary">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Order Tracking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Wishlist</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms of use</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact support</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">2 year guarantee</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> About Us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Services</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Success</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Guide</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Mission</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] border  outline-none bg-transparent rounded-lg "
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-sm mt-3 text-center border-t text-muted py-4">
        <p>
          Copyright © 2024{" "}
          <span className="text-primary cursor-pointer">
            RealEstate Community
          </span>
          . All Rights Reserved || Designed By{" "}
          <a
            className="text-primary cursor-pointer"
            target="_blank"
            href="https://www.linkedin.com/in/arafatibnabdullah/"
            rel="noreferrer"
          >
            Arafat Hosen
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
