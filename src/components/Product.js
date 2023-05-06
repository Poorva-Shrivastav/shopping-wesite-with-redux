import React from "react";
import { useSelector } from "react-redux";

function Product() {
  const products = useSelector((state) => state.allProduct.products);
  const { id, title } = products[0];

  return (
    <div>
      <div>{title}</div>
    </div>
  );
}

export default Product;
