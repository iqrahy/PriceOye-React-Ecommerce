import { Box, Typography } from "@mui/material";
import React from "react";

const ProductSpecifications = () => {
  return (
    <Box className="container mx-auto">
      <Typography className="py-7 px-3 lg:px-8 !font-medium">
        Specifications
      </Typography>

      <Box className="bg-white flex flex-wrap gap-3 items-center justify-between py-3 px-10 md:px-8 !mb-4">
        <Box className="flex justify-center items-center text-center flex-col w-[45%] md:w-[23%]">
          <img
            className="!mb-2 w-16"
            src="https://static.priceoye.pk/icons/earbuds-icon.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">40mAh</Typography>
          <Typography className="!text-xs !text-gray-500">
            Battery Capacity for buds
          </Typography>
        </Box>

        <Box className="flex justify-center items-center text-center flex-col w-[45%] md:w-[23%]">
          <img
            className="!mb-2 w-16"
            src="https://static.priceoye.pk/icons/earbudscase-icon.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">300mAh</Typography>
          <Typography className="!text-xs !text-gray-500">
            Battery Capacity for Case
          </Typography>
        </Box>

        <Box className="flex justify-center items-center text-center flex-col w-[45%] md:w-[23%]">
          <img
            className="!mb-2 w-16"
            src="https://static.priceoye.pk/icons/anc-icon.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">ENC</Typography>
          <Typography className="!text-xs !text-gray-500">
            Active Noise Cancellation
          </Typography>
        </Box>

        <Box className="flex justify-center items-center text-center flex-col w-[45%] md:w-[23%]">
          <img
            className="!mb-2 w-16"
            src="https://static.priceoye.pk/icons/playtime-icon.svg"
            alt=""
          />
          <Typography className="!text-xs !font-bold">Up to 7 hours</Typography>
          <Typography className="!text-xs !text-gray-500">Playtime</Typography>
        </Box>
      </Box>

      <Typography className="py-7 px-3 lg:px-8 !font-medium">
        What’s In The Box
      </Typography>

      <Box className="bg-white flex gap-6 flex-col md:flex-row justify-between items-center py-9 px-3 lg:px-36">
        <Box className="flex flex-col items-center justify-center">
          <img
            className="w-32"
            src="https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp"
            alt=""
          />
          <Typography>Audionic Airbud 550</Typography>
        </Box>

        <Box className="flex flex-col items-center justify-center">
          <img
            className="w-16"
            src="https://static.priceoye.pk/images/product-detail/type-c-cable.svg"
            alt=""
          />
          <Typography>Type C Cable</Typography>
        </Box>

        <Box className="flex flex-col items-center justify-center">
          <img
            className="w-24"
            src="https://static.priceoye.pk/images/product-detail/ear-tips.svg"
            alt=""
          />
          <Typography>Ear Tips</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSpecifications;
