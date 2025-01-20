import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between bg-zinc-900 shadow-2xl shadow-zinc-700 text-white h-[9%] w-full ">
      <div className="font-serif text-5xl font-semibold text-center w-[15%] h-full p-5 ml-7">
        Portfolio
      </div>
      <div className="flex font-sans">
      <div className="text-2xl font-semibold text-center h-full p-8">
        Home
      </div>
      <div className="text-2xl font-semibold text-center h-full p-8">
        Project
      </div>
      <div className="text-2xl font-semibold text-center h-full p-8">
        Contact
      </div>
      <div className="text-2xl font-semibold text-center h-full p-8 mr-10">
        About
        </div>
      </div>
    </div>
  );
}

export default Navbar;
