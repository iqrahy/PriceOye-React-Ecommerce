import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../data/product.json";
import Product from "./product/Product";
import ProductHighlights from "./product-highlights/ProductHighlights";
import ProductSpecifications from "./product-specifications/ProductSpecifications";
import Reviews from "./reviews/Reviews";
import CustomerQueries from "./customer-queries/CustomerQueries";

const ProductDetails = () => {
 
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const foundProduct = ProductData.find((item) => item.name === productName);
    setProduct(foundProduct);
  }, [productName]);

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <Box className="bg-slate-100 container mx-auto ">
    <Product product={product}/>
    <ProductHighlights highlights_images={product.highlights_images}/>
    <ProductSpecifications/>
    <Reviews reviews={product.reviews}/>
    <CustomerQueries product={product}/>
    </Box>
  );
};

export default ProductDetails;
