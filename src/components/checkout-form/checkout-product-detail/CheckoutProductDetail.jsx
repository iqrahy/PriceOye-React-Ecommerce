import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import useCheckoutProductDetails from "./useCheckoutProductDetails";

const CheckoutProductDetail = () => {

  const {cartItem} = useCheckoutProductDetails()

  return (
    <>
      {cartItem ? (
        <Box className="bg-white w-full py-5 px-3 mt-12 rounded-md">
          <Box className="flex gap-3 items-center pb-10">
            <img className="w-24 border p-2" src={cartItem?.image} alt="" />
            <Box>
              <Typography className="!text-lg">{cartItem?.name}</Typography>
              <Typography className="text-gray-500 !text-sm">
                Rs {cartItem?.current_price}
              </Typography>
            </Box>
          </Box>
          <Divider />

          <Box className="py-4">
            <Typography className="!text-sm pb-3">Price Detail</Typography>

            <Box className="flex justify-between items-center pb-3">
              <Typography className="!text-sm text-gray-500">
                Market Price
              </Typography>
              <Typography className="!text-xs line-through text-gray-700">
                Rs {cartItem?.original_price}
              </Typography>
            </Box>

            <Box className="flex justify-between items-center pb-3">
              <Typography className="!text-sm text-gray-500">
                Sale Price
              </Typography>
              <Typography className="!text-xs text-gray-700">
                Rs {cartItem?.current_price}
              </Typography>
            </Box>

            <Box className="flex justify-between items-center pb-3">
              <Typography className="!text-sm text-gray-500">
                Delivery Charges
              </Typography>
              <Typography className="!text-xs text-[#75D72B]">Rs 0</Typography>
            </Box>

            <Typography className="!text-sm text-[#75D72B] !mt-9 bg-slate-100 text-center py-2 lg:px-20">
              You're saving Rs{" "}
              {parseFloat(cartItem?.original_price?.replace(/,/g, "")) -
                parseFloat(cartItem?.current_price?.replace(/,/g, ""))}
            </Typography>

            <Box className="flex justify-between items-center mt-5">
              <Typography className="!text-sm">Total Price</Typography>
              <Typography className="!text-sm text-gray-800">
                Rs {cartItem?.current_price}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
       <Box className="bg-white w-full py-5 px-3 mt-12 rounded-md !text-center flex flex-col justify-center items-center h-72">
         <Typography className="!text-xl !font-semibold">Your cart is empty.</Typography>

       </Box>
      )}
    </>
  );
};

export default CheckoutProductDetail;
