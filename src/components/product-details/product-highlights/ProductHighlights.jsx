import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

const ProductHighlights = (props) => {

    const {highlights_images} = props

  return (
    <Box className="!container !mx-auto ">
      <Box className="bg-white flex flex-wrap gap-8 items-center justify-between py-3 px-16 md:px-8 !mb-4">
        <Box className="flex justify-center items-center flex-col">
          <img
            className="!mb-2 w-20"
            src="https://static.priceoye.pk/icons/warranty-feature.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">
            1 Year Warranty
          </Typography>
          <Typography className="!text-xs !text-gray-500">
            Brand Warranty
          </Typography>
        </Box>

        <Box className="flex justify-center items-center flex-col">
          <img
            className="!mb-2 w-20"
            src="https://static.priceoye.pk/icons/easy-feature.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">Easy Returns</Typography>
          <Typography className="!text-xs !text-gray-500">
            Free of Charge
          </Typography>
        </Box>

        <Box className="flex justify-center items-center flex-col">
          <img
            className="!mb-2 w-20"
            src="https://static.priceoye.pk/icons/video-shooting-camera.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">
            Packaging Video
          </Typography>
          <Typography className="!text-xs !text-gray-500">
            See Your Product
          </Typography>
        </Box>

        <Box className="flex justify-center items-center flex-col">
          <img
            className="!mb-2 w-20"
            src="https://static.priceoye.pk/icons/shipping-feature.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">Fast Delivery</Typography>
          <Typography className="!text-xs !text-gray-500">
            All Over Pakistan
          </Typography>
        </Box>
      </Box>

      <Box className="bg-white flex flex-wrap gap-6 md:gap-4 items-center px-3 lg:px-8 py-7">
      <Typography className="!text-xs">Similar Products</Typography>
      <Typography className="!text-xs">Highlights</Typography>
      <Typography className="!text-xs">Specifications</Typography>
      <Typography className="!text-xs">What’s In The Box</Typography>
      <Typography className="!text-xs">Connect Your Accessories</Typography>
      <Typography className="!text-xs">Reviews</Typography>
      <Typography className="!text-xs">FAQs</Typography>
       
      </Box>

      <Typography className="py-7 px-3 lg:px-8 !font-medium">Highlights</Typography>

      <Box className="bg-white flex justify-center items-center flex-col">
      {highlights_images.map((image, index) => (
    <Box key={index} className="py-6 px-3 lg:px-8">
      <img src={image} alt={`Highlight ${index + 1}`} className="highlight-image" />
    </Box>
  ))}
      </Box>
    </Box>
  );
};

export default ProductHighlights;
