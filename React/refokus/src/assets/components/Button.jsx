import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({title = "Get Started"}) {
  return (
    <div className="relative inline-block min-w-40 px-5 py-1 bg-white text-black rounded-full border-b-2 border-green-900 group overflow-hidden transition-all duration-300 hover:bg-white hover:brightness-110">
      <span className="text-sm font-medium flex items-center justify-center space-x-1 relative transform transition-transform duration-500 group-hover:-translate-y-full">
        <span>{title}</span>
        <BsArrowReturnRight className="m-1" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium space-x-1 text-black transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <span>{title}</span>
        <BsArrowReturnRight className="m-1" />
      </span>
    </div>
  );
}

export default Button;
