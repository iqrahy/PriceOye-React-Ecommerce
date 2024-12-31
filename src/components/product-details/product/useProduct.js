import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../slices/cartSlice";

const useProduct = (product) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    dispatch(addToCart(product));
    navigate("/checkout");
  };

  return { thumbsSwiper, setThumbsSwiper, handleAddToCartClick };
};

export default useProduct;
