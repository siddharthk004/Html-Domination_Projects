import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgArrowTopRightR } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";

function ViewWishlist({data,ind}) {
  return (
    <div className="" key={ind}>
      
      <div className="flex justify-between shadow-2xl shadow-zinc-600 border-2 border-zinc-400 w-[91vh] h-40 p-4 mt-14 ml-14 mr-8 rounded-xl">
        <div className="h-full w-60 rounded-xl">
            <img src={data.productimage} className="h-full ml-[25%]" />
        </div>
        <div>
          {" "}
          <h1 className="text-3xl w-[100%] mt-4 ml-3 mb-4 font-semibold leading-none text-center">
            {data.productname}
          </h1>
          <h1 className="text-xl font-semibold leading-none text-center">
            {data.productcompanyname}
          </h1>
        </div>

        <div className="m-8">
          <h1 className="text-2xl font-bold text-green-700">
            {data.afterdiscount} RS
          </h1>{" "}
          <div className=" rounded-md bg-green-300 h-12 w-24 flex mt-2 border-green-500 border">
              <MdOutlineShoppingCart className="h-10 mt-1 ml-1 w-10" />
              <h1 className="text-xl text-center mt-2 font-bold">Add</h1>
            </div>
        </div>

        <div className="mt-8 gap-4">
          <s className="text-xl  font-lightbold text-red-700">
          {data.beforediscount} RS
          </s>{" "}
          <div className=" rounded-md bg-blue-600 text-white gap-2 h-12 w-24 flex mt-2 border-green-500 border">
              <CgArrowTopRightR className="h-10 mt-1 ml-1 w-10" />
              <h1 className="text-xl text-center mt-2 font-bold">Buy</h1>
            </div>
        </div>

        <div className="mt-10 ml-8 mr-2">
            <div className="rounded-md border-2 border-red-500  text-white h-12 w-12 flex border-green-500 border">
              <MdDeleteOutline className="h-12 w-10 ml-1 text-sm text-red-500" />
            </div>
        </div>

      </div>

    </div>
  );
}

export default ViewWishlist;
