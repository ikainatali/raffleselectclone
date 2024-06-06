import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

//icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FcFlashOn } from "react-icons/fc";

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
      <div>
        <div className="sm:flex hidden justify-center bg-blackDark">
          <p className="text-sm text-white py-1">
            ✨Unlock the Excitement: Win Big with Our{" "}
            <span className="animated-text">Raffles & Giveaways!!</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center p-2 px-5 md:px-32 bg-white border-b-[1px] border-gray/40">
          <div>
            <NavLink to="/" className="cursor-pointer">
              <img src={logo} alt="Logo" className="w-44" />
            </NavLink>
          </div>
          <nav className="hidden xl:flex gap-5 p-1 text-gray text-sm font-poppins">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "hover:text-black transition-all cursor-pointer",
                  isActive
                    ? "font-bold underline decoration-2 underline-offset-8 text-black"
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
                    ? "font-bold underline decoration-2 underline-offset-8 text-black"
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
                    ? "font-bold underline decoration-2 underline-offset-8 text-black"
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
                    ? "font-bold underline decoration-2 underline-offset-8 text-black"
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
                    ? "font-bold underline decoration-2 underline-offset-8 text-black"
                    : null
                )
              }
            >
              Games
            </NavLink>
          </nav>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <img className="w-10" src={usaFlag} alt="USA Flag" />
              <p className="uppercase text-[13px] font-medium font-poppins">
                ENG
              </p>
            </div>
            <button className="relative overflow-hidden bg-blackLight px-10 py-2 rounded-full transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-purple via-red to-yellow before:transition-all before:duration-500 text-white hover:before:left-0 hover:before:w-full">
              <span className="relative z-10 font-poppins text-sm font-medium">
                Login
              </span>
            </button>
            {/* <button className="px-10 py-2 rounded-full bg-blackLight text-white font-poppins text-sm font-medium">
              Login
            </button> */}
          </div>
          <div
            className="flex xl:hidden z-50 transition-all"
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
            } xl:hidden flex justify-end absolute bg-black/50 right-0 top-0 overflow-x-hidden w-full h-screen transition-transform duration-300 `}
          >
            <div className="flex flex-col bg-white lg:w-2/5 md:w-3/6 w-2/4 font-poppins text-blackLight h-screen pt-4 pb-4 overflow-hidden">
              <div className="flex gap-2 items-center pb-5 px-2">
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
                    isActive
                      ? "font-bold underline underline-offset-8 text-black"
                      : null
                  )
                }
              >
                About
              </NavLink>
              <NavLink
                to="courses"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive
                      ? "font-bold underline underline-offset-8 text-black"
                      : null
                  )
                }
              >
                Courses
              </NavLink>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive
                      ? "font-bold underline underline-offset-8 text-black"
                      : null
                  )
                }
              >
                Reviews
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  clsx(
                    "px-5 py-3 transition-all cursor-pointer",
                    isActive
                      ? "font-bold underline underline-offset-8 text-black"
                      : null
                  )
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
