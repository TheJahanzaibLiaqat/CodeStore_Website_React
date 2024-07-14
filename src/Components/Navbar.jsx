
import { MdLanguage } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { useState } from "react";
import {Link} from "react-scroll"

const Navbar = () => {
  const navItems = [
    { link: "Overview", path: "/" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  const [Open, setOpen] =useState(false)

  const toggle = ()=>{
    setOpen(!Open)
  }
  return (
    <div className="flex bg-white z-[1] fixed top-0 right-0 left-0 border border-gray-200 md:block md:items-start justify-between items-center">
      <nav className="md:flex md:justify-between md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:mx-auto p-3">
        <div className="flex items-center md:space-x-6 lg:space-x-20">
          <div className="flex text-3xl font-semibold items-center space-x-2">
            <img src="./images/codStore.png" alt="CodStore" />
            <span>CodStore</span>
          </div>
          <div className="lg:text-xl hidden md:block md:mt-2 lg:mt-0 ">
            <ul className="md:space-x-3 lg:space-x-14">
              {navItems.map(({ link, path }) => (
               
                  <Link className="hover:text-gray-300 cursor-pointer" to={path} key={link}>{link}</Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:flex items-center md:mt-2 lg:mt-0 space-x-5 hidden ">
          <div className="flex items-center gap-1"><MdLanguage className="text-2xl" />Language</div>
          <button className="bg-purple-700 text-white p-2 hover:bg-purple-800">Sign Up</button>
        </div>
      </nav>


      {/* Responsive navbar */}

      <div className="block md:hidden items-center text-2xl mt-2 me-5" onClick={toggle}>
        <button>
          {Open ? <FaEye/>  : <PiEyeClosedDuotone />}
        </button>

        <div className="text-xl md:hidden">
            <ul className={` flex flex-col fixed ease-in duration-150 bg-gradient-to-b from-pink-300 via-purple-300 z-[1]  to-purple-700 w-full text-center space-y-5 py-7 text-white  top-[90px] ${Open ? "left-0" : "-left-full"} `}>
              {navItems.map(({ link, path }) => (
               
                  <Link className="hover:text-gray-300" to={path} key={link}>{link}</Link>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
