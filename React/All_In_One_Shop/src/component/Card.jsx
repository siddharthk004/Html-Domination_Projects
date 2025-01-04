import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Card = () => {
  const [products] = useContext(productContext);
  console.log(products);
  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] overflow-x-hidden overflow-y-auto pt-[5%] p-10 flex flex-wrap">
        <Link
          to="/detail/1"
          className=" mr-3 mb-3 card p-5 border shadow rounded w-[16%] h-[30vh] p-3 flex flex-col justify-center items-center"
        >
          <div
            className="hover:scale-110 mb-3 w-full h-[70%] bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1068843992/photo/luxury-watch-isolated-on-white-background-with-clipping-path-gold-watch-women-watch-female.webp?a=1&b=1&s=612x612&w=0&k=20&c=sL4a3GyIu6guFkdFZdil0MYKBKJHz3fvxdnpqhssCjw=)",
            }}
          ></div>
          <h1 className="hover:text-blue-400">Heading</h1>
        </Link>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Card;
