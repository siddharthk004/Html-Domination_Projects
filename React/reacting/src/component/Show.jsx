import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Show() {
  const [product, setProduct] = useState([]);
  const GetProduct = () => {
    const api = "https://dummyjson.com/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products.data);
        setProduct(products.data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(()=> {
    GetProduct();
  },[]);
  
  return (
    <>
      <button onClick={GetProduct} className="px-5 rounded py-2 bg-red-400">
        Get Products
      </button>
      <hr className="my-10" />
      <ul>
        {product.length > 0 ? (
          product.map((p, index) => (
            <li key={index} className=" mb-2 p-5 bg-red-200 rounded">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </ul>
    </>
  );
}

export default Show;
