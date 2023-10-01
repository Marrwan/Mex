import { useState } from "react";
import Mex from "../assets/Mex.svg";

function Navbar() {
    // State to toggle the menu icon
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu icon
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <nav className="grid w-full h-3 grid-cols-9 p-2 my-3 mb-12 px-10">
      <div className="flex items-center ">
        <img className="w-10 h-7 " src={Mex} alt="Mex Logo" />
       
        <p className="ml-2">MEX.AI</p>
      </div>
       {/* Hamburger Menu (hidden on larger screens) */}
       <div className="bg-[#6D49FD] xs:w-max col-start-12 p-3 text-center rounded-lg lg:hidden">
          <button
            className={`${
              isMenuOpen ? 'border-transparent' : 'border-white'
            } text-white hover:text-gray-300 focus:outline-none focus:text-gray-300`}
            id="mobile-menu-button"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open Menu</span>
            {/* Transition from Hamburger to X */}
            <span
              className={`${
                isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
              } block h-1 xs:w-4 sm:w-5 md:w-6 border-2 border-t-red mb-1 transition duration-300 ease-in-out`}
            ></span>
            <span
              className={`${
                isMenuOpen ? 'opacity-0' : ''
              } block h-1 xs:w-4 sm:w-5 md:w-6 border-2 border-t-white mb-1 transition duration-300 ease-in-out`}
            ></span>
            <span
              className={`${
                isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
              } block h-1 xs:w-4 sm:w-5 md:w-6 border-2 border-t-white transition duration-300 ease-in-out`}
            ></span>
          </button>
        </div>

      <div className={`${isMenuOpen ? 'block col-start-5' : 'hidden'} lg:flex justify-between col-span-5 col-start-3`}>
        <p className="cursor-pointer">The Problem</p>
        <p className="cursor-pointer">The Solution</p>
        <p className="cursor-pointer">How it works</p>
        <p className="cursor-pointer">Get Started</p>
        <p className="cursor-pointer">Join us</p>
      </div>
      <div className="hidden lg:block col-start-13 bg-[#6D49FD] text-white rounded-md p-2 w-max">
        Contact us
      </div>
    </nav>
  );
}

export default Navbar;
