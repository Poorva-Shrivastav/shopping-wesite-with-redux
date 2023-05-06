import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProduct } from "../redux/actions/productActions";

function ProductListings() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>ProductListings</h2>
      <Product />
    </div>
  );
}

export default ProductListings;
