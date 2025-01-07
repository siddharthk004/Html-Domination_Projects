import React from "react";
import { FiHeart } from "react-icons/fi"; 
import { LuLogIn } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

function MainNavbar() {
  return (
    <div class="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="pl-2 pr-6 bg-green-800 h-[15%] w-full text-white flex justify-between">
        <div className="flex text-center">
          <img
            className="h-14 m-2 ml-9 rounded-2xl p-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFs3RH7IdFNLVHHQ_XQo8asDhGCFJYBMh0Hg&s"
            alt=""
          />
        </div>
        <div className="flex text-center">
          <h1 className="text-center text-3xl p-4 font-semibold">
            Growing Smarter, Farming Better !
          </h1>
        </div>
        <div className="flex flex-row pt-5 text-xl">
          <div className="flex gap-9">
            <div className="flex">
              <FiHeart className="h-8 w-[27px]" />
              <h1 className="ml-2 text-2xl">Wishlist</h1>
            </div>
            <div className="flex">
              <MdOutlineShoppingCart className="h-8 w-[27px]" />
              <h1 className="ml-3 text-2xl">Cart</h1>
            </div>
            <div className="flex">
              <LuLogIn className="h-8 w-[27px]" />
              <h1 className="ml-2 text-2xl">Login</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
