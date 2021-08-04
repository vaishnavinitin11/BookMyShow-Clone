import React from "react";
import {BiChevronRight, BiSearch} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It all Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center"> 
            Mumbai <BiChevronRight />
          </span> 
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full"/>
        </div>
      </div>
    </>
  );
};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">{/* Medium/Tab screen */}</div>
        <div className="hidden lg:flex">{/* Large screen */}</div>
      </nav>
    </>
  );
};

export default Navbar;