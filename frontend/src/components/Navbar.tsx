import { Link } from "react-router-dom";
import { useState } from "react";

//icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";

//images
import logo from "../assets/images/raffle-logo.png";
import upgrade from "../assets/images/upgrade.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleChange = () => {
    setMenu(!menu);
    setIsMenuOpen(!isMenuOpen);
    console.log(menu);
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center p-5 px-5 md:px-32 bg-white border-b-2">
        <div>
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="Logo" className="w-36" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-5 font-medium p-1 text-sm">
          <Link
            to="home"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="courses"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <div
          className="flex md:hidden z-50 transition-all"
          onClick={handleChange}
        >
          <div className="p-2">
            {isMenuOpen ? (
              <AiOutlineMenu size={22} />
            ) : (
              <AiOutlineClose size={22} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex justify-end absolute bg-black/50 right-0 top-0 overflow-x-hidden w-full h-screen transition-transform duration-300 `}
        >
          <div className="flex flex-col bg-white w-3/4 h-screen px-5 pt-4 pb-4 gap-6 overflow-hidden">
            <div className="flex gap-2 items-center">
              <img src={upgrade} className="w-10" alt="Upgrade" />
              <Link to="shop" className="underline">
                Upgrade
              </Link>
              <FcFlashOn size={22} />
            </div>
            <Link
              to="home"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="courses"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              Courses
            </Link>
            <Link
              to="reviews"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <Link
              to="contact"
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
