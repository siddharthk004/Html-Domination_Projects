import React from "react";
import { BsArrowRight } from "react-icons/bs";
function Card({ width,start,para,hover}) {
  return (
    <div className={`${width} h-[37vw] hover:${hover} bg-zinc-800 min-h-[30rem] p-5 rounded-xl flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <BsArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">New Heading</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a Project
            </h1>
            <button className="rounded-full mt-5 border-[1px] border-zinc-500 py-2 px-5">
              Contact us
            </button>
          </>
        )}
        { para && (
        <p className="text-sm text-zinc-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        )}
      </div>
    </div>
  );
}

export default Card;
