import axios from "../utils/axios";
import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const getsingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data.product || data); // Adjust based on API response

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getsingleProduct();
  }, []);

  return product ? (
    <div className="w-[80%] flex h-full m-auto p-[10%]">
      <img
        className="object-contain h-[70%] w-[70%]"
        src={product.image}
        alt={product.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "fallback-image-url.jpg"; // Replace with your fallback image URL
        }}
      />

      <div className="p-5 content">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <h3 className="text-zinc-400 mt-1">{product.category}</h3>
        <h2 className="text-green-500 mt-2 mb-5 ml-3">$ 98.12</h2>
        <p className="text-xs">{product.description}</p>
        <br></br>
        <Link
          className=" mt-6 py-2 px-5 border rounded border-blue-400 text-blue-300"
          to="/edit"
        >
          Edit
        </Link>
        <Link
          className="py-2 ml-4 px-5 border rounded border-red-500 text-red-500"
          to="/delete"
        >
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
