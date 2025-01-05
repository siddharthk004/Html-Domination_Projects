import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto py-3 items-center p-3 pl-40 flex">
      <div className="nleft flex">
      <img
        className="h-[8%] w-[10%] ml-20 pl-2"
        src="https://plus.unsplash.com/premium_photo-1725262826033-c7c7859e8633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGxvZ28lMjBuYW1lJTIwaW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D"
        alt="#"
      />
      
      <div className="links flex gap-10 text-x ml-20 items-center">
      {["Home", "Work", "Culture"].map((elem, ind) => (
        <a key={ind} href="#">
            {ind === 1 && (
            <span style={{boxShadow: "0 0 0.35em #00FF19"}} className="inline-block w-[0.1%] h-[0.1%] p-1.5 mb-0.7 mr-2 bg-green-500 rounded-full"></span>
            )}
            {elem}
        </a>
        ))}
      </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
