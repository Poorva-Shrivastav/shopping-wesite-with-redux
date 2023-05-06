import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  clearSelectedProduct,
} from "../redux/actions/productActions";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetails();
    return () => dispatch(clearSelectedProduct());
  }, [id]);

  const product = useSelector((state) => state.product);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <h3>ProductDetails</h3>
          <img src={product.image} />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
