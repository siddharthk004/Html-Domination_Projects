import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Card = () => {
  const [products] = useContext(productContext);
  console.log(products);

  return products.length > 0 ? (
    <>
      <Nav />
      <div className="h-full w-[85%] overflow-x-hidden overflow-y-auto pt-[5%] p-10 flex flex-wrap">
        {products.map((p, i) => (
          <div
            key={i}
            // to={`/detail/${p.id}`}
            className="mr-3 mb-3 card p-5 border shadow rounded w-[17%] min-w-[200px] h-[45vh] flex flex-col justify-center items-center hover:shadow-lg transition-all duration-200"
          >
            <img
              src={p.image}
              alt={p.title}
              className="hover:scale-110 mb-3 w-full h-[80%] object-contain"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop in case fallback image also fails
                e.target.src = "fallback-image-url.jpg"; // Provide the URL of your fallback image
              }}
            />
            <h1 className="text-xs text-center overflow-hidden whitespace-wrap">
              {p.title}
            </h1>

            <Link
          className="group hover:text-white hover:bg-sky-500 hover:ring-sky-500 mt-1 py-0.1 px-2 rounded text-blue-300"
            to={`/detail/${p.id}`}>View</Link>
          </div>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Card;
