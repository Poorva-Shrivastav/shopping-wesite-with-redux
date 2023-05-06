import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Product() {
  const products = useSelector((state) => state.allProduct.products);

  const renderData = products.map((item) => (
    <div key={item.id}>
      <Link to={`/product/${item.id}`}>
        <div>{/* <img src={item.image} alt="product-img" /> */}</div>
        <div>{item.price}</div>
        <div>{item.category}</div>
        <div>{item.title}</div>
      </Link>
    </div>
  ));

  return <div>{renderData}</div>;
}

export default Product;
