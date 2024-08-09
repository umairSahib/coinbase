import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#ffffff] ml-10 mt-6 mr-10">
        <div>
          <Image src="/logo.png" width={112} height={20} alt="logoo" />
        </div>
        <div>
          <ul className="flex gap-9 pl-81 pr-81 pt-0 pb-0 bg-[#ffffff]">
            <li className="font-semibold text-sm ">Prices</li>
            <li className="font-semibold text-sm ">Learn</li>
            <li className="font-semibold text-sm ">Individuals</li>
            <li className="font-semibold text-sm ">Businesses</li>
            <li className="font-semibold text-sm ">Developers</li>
            <li className="font-semibold text-sm ">Company</li>
          </ul>
        </div>
        <div className="flex gap-3 items-center text-center">
          <button>Sign In</button>
          <button className="bg-[#0052FF] rounded pt-2 pl-3 pb-2 pr-3 text-[#FFFFFF] font-bold text-sm ">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
