import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useShopOptions from "./useShopOptions";

const ShopByOptions = () => {

  const {ShopByBrand, shopByPrice} = useShopOptions()

  return (
    <Box className="pt-44 lg:pt-14 container mx-auto px-3 lg:px-8">
      {/* Shop by Price */}
      <Box>
        <Box className="pt-12 mb:pt-16 pb-7 flex justify-between items-center px-3">
          <Typography className="text-black !font-semibold !text-lg">
            Shop by Price
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View all
          </Button>
        </Box>

        <Box className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {shopByPrice.map((price) => (
            <Button
              key={price.id}
              class="relative w-full overflow-hidden px-3 md:px-6 py-2 md:py-4 bg-[#FFF348] text-black font-semibold rounded-lg group"
            >
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out text-xs lg:text-base">
                {price.priceRanges}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>

      {/* Shop by Brand */}
      <Box>
        <Box className="pt-12 mb:pt-16 pb-7 flex justify-between items-center px-3">
          <Typography className="text-black !font-semibold !text-lg">
            Shop by Brand
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View all
          </Button>
        </Box>

        <Box className="flex justify-center flex-wrap items-center gap-4 lg:gap-6 lg:mx-24" >
          {ShopByBrand.map((brand) => (
            <Box key={brand.id} className="text-center">
              <img className="w-14 lg:w-20" src={brand.image} alt={brand.title} />
              <Typography className="!mt-3">{brand.title}</Typography>
            </Box>
          ))}

        </Box>
      </Box>
    </Box>
  );
};

export default ShopByOptions;
