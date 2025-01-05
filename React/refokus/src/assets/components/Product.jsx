import React from "react";
import Button from "./Button";

function Product({ elem, value }) {
  return (
    <>
      <div
        key={value}
        className="relative w-full p-3 py-4 text-white bg-black"
        // <div className="w-full relative items-center justify-center text-center mt-20">
      >
        <div
          style={{ boxShadow: "0 0 0.em #29231a" }}
          className="flex border bg-zinc-900 border-zinc-800 items-center justify-between max-w-screen-xl mx-auto p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl p-7 capitalize font-bold">{elem.title}</h1>
          <div className="w-1/3 text-left">
            <p className="p-1 mb-6 text-lg">{elem.desc}</p>
            <div className="flex items-center gap-10">
              {elem.live && <Button />}
              {elem.case && <Button title={elem.title} />}
            </div>
          </div>
        </div>
        <div className="absolute top-3 rounded-lg w-[25%] left-[37%] h-[92%]">
          <video id="" className="h-full rounded-2xl border border-zinc-700 object-cover w-full aspect-auto"autoPlay muted loop>
            <source src={elem.url} />
          </video>
        </div>
      </div>
    </>
  );
}

export default Product;
