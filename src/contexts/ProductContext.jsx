import React, { createContext, useEffect, useState } from "react";

//create contex
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //Product state
  const [product, setProduct] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    };
    fetchProducts();
  }, []);

  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
