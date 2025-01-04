import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="w-[70%] flex h-full m-auto p-[10%]">
      <img className="object-contain h-[70%] w-[50%]"
        src="https://media.istockphoto.com/id/1068843992/photo/luxury-watch-isolated-on-white-background-with-clipping-path-gold-watch-women-watch-female.webp?a=1&b=1&s=612x612&w=0&k=20&c=sL4a3GyIu6guFkdFZdil0MYKBKJHz3fvxdnpqhssCjw="
        alt=""
      />
      <div className="p-5 content">
        <h1 className="text-3xl font-semibold">Golden Rewol Watch</h1>
        <h3 className="text-zinc-400 mt-1">Men`s Clothing</h3>
        <h2 className="text-green-500 mt-2 mb-5 ml-3">$ 98.12</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur error harum corporis recusandae saepe cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus excepturi minima, repudiandae ut id?</p>
        <br></br>
        <Link
          className=" mt-5 py-2 px-5 border rounded border-blue-400 text-blue-300"
          href="/"
        >
          Edit
        </Link>
        <Link
          className="py-2 ml-4 px-5 border rounded border-red-500 text-red-500"
          href="/"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}

export default Details;
