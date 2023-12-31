/* eslint-disable no-constant-condition */

import { useState } from "react";
import Mex from "../assets/Mex.svg";

function Navbar() {
  // State to toggle the menu icon
  const [menu, setMenu] = useState(false);
  // Function to toggle the menu icon
  const toggleMenu = () => {
  
    setMenu(!menu);
  }
  return (
    
<nav className="bg-[#fff] text-black border-gray-200 ">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <a href="#" className="flex items-center text-black">
        <img src={Mex} className="h-8 mr-3" alt="Mex Logo" />
        <span className="self-center text-l font-[300] whitespace-nowrap dark:text-black">MEX.AI</span>
    </a>
    <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden hover:bg-[#6D49FD] focus:outline-none focus:ring-2 focus:ring-gray-200  bg-[#6D49FD] " >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={` ${ menu ? " " : "hidden"} w-full md:block md:w-auto` }>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg xs:bg-[#6D49FD] md:flex-row md:space-x-0 lg:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:border-[#fff] items-center text-center">
        <li>
          <a href="#problem" className="block py-2 pl-3 pr-4 text-white hover:bg-blue-700 w-full rounded text- md:bg-transparent md:p-0 md:text-black xs:text-white dark:text-white md:dark:text-blue-500 md:hover:text-[#6D49FD]" >The Problem</a>
        </li>
        <li>
          <a href="#solution" className="md:hover:text-[#6D49FD] block py-2 pl-3 pr-4 rounded md:text-black xs:text-white hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent">The Solution</a>
        </li>
        <li>
          <a href="#works" className="md:hover:text-[#6D49FD] block py-2 pl-3 pr-4 rounded md:text-black xs:text-white hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent">How it works</a>
        </li>
        <li>
          <a href="#started" className="md:hover:text-[#6D49FD] block py-2 pl-3 pr-4 rounded md:text-black xs:text-white hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent">Get Started</a>
        </li>
        <li>
          <a href="#join" className="md:hover:text-[#6D49FD] block py-2 pl-3 pr-4 rounded md:text-black xs:text-white hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent">Join Us</a>
        </li>
        <li>
          <a href="#contact"  className="md:hover:text-[#6D49FD] block py-2 pl-3 pr-4 rounded xs:text-white hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:dark:hover:bg-transparent md:bg-[#6D49FD] md:text-white md:rounded-md md:p-2 ">Contact us</a>
        </li>
      </ul>
    </div>
  
  </div>
</nav>

  );
}

export default Navbar;
