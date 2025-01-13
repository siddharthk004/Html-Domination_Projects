import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";

const Nav = () => {
  const [product] = useContext(productContext);

  let categoryDist =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);

  categoryDist = [...new Set(categoryDist)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };


  return (
    <>
      <nav className="w-[15%] h-full p-5 pt-5 bg-zinc-100 flex flex-col items-center">
        <a
          className="py-2 px-5 border rounded border-blue-400 text-blue-300"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[70%] my-3" />
        <h1 className="text-2xl w-[80%] mb-3 ">Category</h1>
        <div className="w-[80%]">
          {categoryDist.map((dist, ind) => (
            <Link
              key={ind}
              to={`/?category=${dist}`}
              className="mb-3 flex items-center"
            >
              <span className="rounded-full mr-2 w-[15px] h-[15px]" style={{backgroundColor: color()}}></span>
              {""}
              {dist}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
