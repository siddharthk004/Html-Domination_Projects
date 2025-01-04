import React, { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "./axios";

export const productContext = createContext();

const Context = (props) => {
  const [product, setproduct] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      setproduct(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider value={[product, setproduct]}>
      {props.children}
    </productContext.Provider>
  );
};

export default Context;
