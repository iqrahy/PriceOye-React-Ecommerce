import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ShopByOptions = () => {
  const shopByPrice = [
    {
      id: 1,
      priceRanges: "Below Rs. 15,000",
    },
    {
      id: 2,
      priceRanges: "Rs. 15,000 - Rs. 25,000",
    },
    {
      id: 3,
      priceRanges: "Rs. 25,000 - Rs. 40,000",
    },
    {
      id: 4,
      priceRanges: "Rs. 40,000 - Rs. 60,000",
    },
    {
      id: 5,
      priceRanges: "Rs. 60,000 - Rs. 80,000",
    },
    {
      id: 6,
      priceRanges: "Rs. 80,000 - Rs. 100,000",
    },
    {
      id: 7,
      priceRanges: "Rs. 100,000 - Rs. 150,000",
    },
    {
      id: 8,
      priceRanges: "Above 150,000",
    },
  ];

  const ShopByBrand = [
    {
      id: 1,
      image: "https://static.priceoye.pk/images/brands/svg/samsung.svg",
      title: "Samsung ",
    },
    {
      id: 2,
      image: "https://static.priceoye.pk/images/brands/svg/infinix.svg",
      title: "Infinix ",
    },
    {
      id: 3,
      image: "https://static.priceoye.pk/images/brands/svg/oppo.svg",
      title: "OPPO ",
    },
    {
      id: 4,
      image: "	https://static.priceoye.pk/images/brands/svg/xiaomi.svg",
      title: "Xiaomi ",
    },
    {
      id: 5,
      image: "	https://static.priceoye.pk/images/brands/svg/vivo.svg",
      title: "Vivo ",
    },
    {
      id: 6,
      image: "https://static.priceoye.pk/images/brands/svg/tecno.svg",
      title: "Tecno ",
    },
    {
      id: 7,
      image: "	https://static.priceoye.pk/images/brands/svg/realme.svg",
      title: "Realme ",
    },
    {
      id: 8,
      image: "	https://static.priceoye.pk/images/brands/svg/itel.svg",
      title: "itel ",
    },
    {
      id: 9,
      image: "	https://static.priceoye.pk/images/brands/svg/apple.svg",
      title: "Apple ",
    },
    {
      id: 10,
      image: "	https://static.priceoye.pk/images/brands/svg/nokia.svg",
      title: "Nokia ",
    },
  ];

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

        <Box className="flex justify-between flex-wrap items-center gap-2 md:gap-4 lg:mx-24" >
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
