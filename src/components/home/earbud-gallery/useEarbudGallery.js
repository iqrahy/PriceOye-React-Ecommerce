import React, { useEffect, useState } from "react";
import ProductData from "../../data/product.json";
import { useNavigate } from "react-router-dom";

const useEarbudGallery = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return { handleProductClick, products };
};

export default useEarbudGallery;
