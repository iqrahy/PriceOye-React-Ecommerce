import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useReasonToBuy from "./useReasonToBuy";

const ReasonToBuy = () => {
  
  const {reasonToBuy} = useReasonToBuy()

  return (
    <Box className="container mx-auto px-3 md:px-8 mt-14">
      <Typography className="!text-xl pb-5">Reason to Buy</Typography>
      <Box className="flex justify-between items-center flex-wrap gap-2 lg:gap-4 ">
        {reasonToBuy.map((item) => (
          <Box
            key={item.id}
            className="bg-[#0279D6] w-full md:w-[49%] rounded-xl h-48 flex p-4 justify-between lg:px-12 items-center"
          >
            <Box className="w-1/2 flex justify-center">
              <img className="w-32 lg:w-40" src={item.image} alt="" />
            </Box>
            <Box className="text-center w-1/2">
              <Typography className="text-xl md:text-2xl lg:!text-[27px] text-white">
                {item.title}
              </Typography>
              <Typography className="text-xl md:text-2xl lg:!text-[27px] text-white">
                {item.description}
              </Typography>
              <Button className="!px-6 !capitalize !bg-[#F88B2A] !text-white !mt-2 rounded-lg">
  {item.button}
</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReasonToBuy;
