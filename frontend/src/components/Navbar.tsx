import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

//icons
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FcFlashOn } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";

//images
import logo from "../assets/images/raffle-logo.png";
import upgrade from "../assets/images/upgrade.png";
import usaFlag from "../assets/images/usa-flag.jpg";

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
      <div className="w-screen">
        <div className="sm:flex hidden justify-center bg-blackDark">
          <p className="text-[12px] text-white font-poppins py-1">
            ✨Unlock the Excitement: Win Big with Our{" "}
            <span className="animated-text">Raffles & Giveaways!!</span>
          </p>
        </div>
        <div className="w-screen flex flex-row justify-between items-center p-1 px-5 lg:px-10 xl:px-20 bg-white border-b-[1px] border-gray/40">
          <div>
            <NavLink to="/" className="cursor-pointer">
              <img src={logo} alt="Logo" className="w-44 -mt-1 pb-1" />
            </NavLink>
          </div>
          <nav className="hidden xl:flex gap-5 p-1 text-gray text-sm font-poppins">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "hover:text-black transition-all cursor-pointer",
                  isActive
                    ? "font-semibold underline decoration-2 underline-offset-8 text-black"
                    : null
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                clsx(
                  "hover:text-black transition-all cursor-pointer",
                  isActive
                    ? "font-semibold underline decoration-2 underline-offset-8 text-black"
                    : null
                )
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="shop"
              className={({ isActive }) =>
                clsx(
                  "hover:text-black transition-all cursor-pointer",
                  isActive
                    ? "font-semibold underline decoration-2 underline-offset-8 text-black"
                    : null
                )
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="myAccount"
              className={({ isActive }) =>
                clsx(
                  "hover:text-black transition-all cursor-pointer",
                  isActive
                    ? "font-semibold underline decoration-2 underline-offset-8 text-black"
                    : null
                )
              }
            >
              My account
            </NavLink>
            <NavLink
              to="games"
              className={({ isActive }) =>
                clsx(
                  "hover:text-black transition-all cursor-pointer",
                  isActive
                    ? "font-semibold underline decoration-2 underline-offset-8 text-black"
                    : null
                )
              }
            >
              Games
            </NavLink>
          </nav>
          <div className="xl:flex hidden gap-5">
            <div className="flex gap-2 items-center">
              <img className="w-9" src={usaFlag} alt="USA Flag" />
              <p className="uppercase text-[13px] font-medium font-poppins">
                ENG
              </p>
            </div>
            <button className="btn-transition btn-arrow flex justify-center items-center gap-2 w-28 px-10 py-2 rounded-full bg-blackLight text-white font-poppins text-sm font-medium">
              Login
              <span className="arrow-hidden hidden transition ease-in-out">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <div
            className="flex xl:hidden z-50 transition-all"
            onClick={handleChange}
          >
            <div className="p-2">
              {isMenuOpen ? (
                <IoMdMenu size={24} />
              ) : (
                <div className="sm:-mt-12 -mt-3 sm:-mr-2 -mr-3 border-[1px] border-gray/50 rounded-full p-1">
                  <IoMdClose size={18} />
                </div>
              )}
            </div>
          </div>
          <div
            className={` ${
              menu ? "translate-x-0" : "-translate-x-full"
            } xl:hidden flex justify-end absolute bg-black/50 left-0 top-0 overflow-x-hidden w-full h-screen transition-transform duration-300`}
          >
            <div className="flex flex-col bg-white lg:w-2/5 md:w-3/6 w-2/4 font-poppins text-blackLight h-screen pt-4 pb-4 overflow-hidden">
              <div className="flex gap-2 items-center pb-3 px-2">
                <img src={upgrade} className="w-10" alt="Upgrade" />
                <NavLink to="shop" className="underline">
                  Upgrade
                </NavLink>
                <FcFlashOn size={22} />
              </div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive ? "bg-[#f3f3f3]" : null
                  )
                }
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive ? "bg-[#f3f3f3]" : null
                  )
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="courses"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive ? "bg-[#f3f3f3]" : null
                  )
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive ? "bg-[#f3f3f3]" : null
                  )
                }
              >
                My Account
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive ? "bg-[#f3f3f3]" : null
                  )
                }
              >
                Games
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive ? "bg-[#f3f3f3]" : null
                  )
                }
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
