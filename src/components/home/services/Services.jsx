import { Box, Typography } from "@mui/material";
import React from "react";
import useServices from "./useServices";

const Services = () => {
  const { services } = useServices();

  return (
    <Box className="pt-60 lg:pt-24 pb-4">
      <Box className="bg-white">
        <Box className="container mx-auto py-7 flex justify-between items-center flex-wrap gap-6 md:gap-3">
          {services.map((service) => (
            <Box key={service.id} className="mx-8 text-center">
              <Box className="flex justify-center mb-2">
                <img className="w-14 lg:w-20" src={service.image} alt="" />
              </Box>
              <Typography className="!font-semibold">
                {service.title}
              </Typography>
              <Typography className="!text-xs text-slate-500">
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
