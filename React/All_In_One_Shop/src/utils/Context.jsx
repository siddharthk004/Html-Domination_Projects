import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState([]); // Renamed for clarity

  const getProducts = async () => {
    try {
      const response = await axios("/products");
      console.log("Full Response:", response);
      console.log("Response Data:", response.data);

      // Extract the products array from the nested object
      const { products } = response.data;

      if (Array.isArray(products)) {
        setProducts(products); // Set the state with the products array
        console.log("Products set successfully:", products);
      } else {
        console.warn("Products key is not an array:", products);
        setProducts([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error("Error fetching products:", error.message || error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log("Products Updated:", products);
  }, []);

  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;
