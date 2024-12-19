import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ShopByOptions = () => {
  return (
    <Box className="pt-14 container mx-auto">
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

        <Box className="flex flex-col gap-5">
          <Box className="flex justify-between items-center gap-5">
            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Below Rs. 15,000
              </Typography>
            </Button>

            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Rs. 15,000 - Rs. 25,000
              </Typography>
            </Button>

            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Rs. 25,000 - Rs. 40,000
              </Typography>
            </Button>

            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Rs. 40,000 - Rs. 60,000
              </Typography>
            </Button>
          </Box>

          <Box className="flex justify-between items-center gap-5">
            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Below Rs. 15,000
              </Typography>
            </Button>

            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Rs. 15,000 - Rs. 25,000
              </Typography>
            </Button>

            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Rs. 25,000 - Rs. 40,000
              </Typography>
            </Button>

            <Button class="relative w-[25%] overflow-hidden px-6 py-3 bg-[#FFF348] text-black font-semibold rounded-lg group">
              <Typography class="absolute inset-0 w-full h-full bg-[#48afff] transform scale-y-0 origin-bottom rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-y-100"></Typography>
              <Typography class="relative z-10 group-hover:text-white transition-colors duration-700 ease-in-out">
                Rs. 40,000 - Rs. 60,000
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Shop by Brand */}
      <Box></Box>
    </Box>
  );
};

export default ShopByOptions;
