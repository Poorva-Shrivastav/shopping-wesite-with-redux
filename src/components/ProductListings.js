import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function ProductListings() {
  const products = useSelector((state) => state);

  return (
    <div>
      <h2>ProductListings</h2>
      <Product />
    </div>
  );
}

export default ProductListings;
