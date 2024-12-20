import { Box, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "https://static.priceoye.pk/icons/approved-feature.svg",
      title: "PTA Approved",
      description: "Mobile Phone",
    },
    {
      id: 2,
      image: "https://static.priceoye.pk/icons/warranty-feature.svg",
      title: "1 Year",
      description: "Brand Warranty",
    },
    {
      id: 3,
      image: "	https://static.priceoye.pk/icons/video-shooting-camera.svg",
      title: "Packaging Video",
      description: "See Your Product",
    },
    {
      id: 4,
      image: "https://static.priceoye.pk/icons/shipping-feature.svg",
      title: "Fast Delivery",
      description: "All Over Pakistan",
    },
  ];

  return (
    <Box className="pt-60 lg:pt-24 pb-4">
      <Box className="bg-white">
        <Box className="container mx-auto py-7 flex justify-between items-center flex-wrap gap-6 md:gap-3">
          {services.map((service) => (
            <Box key={service.id} className="mx-8 text-center">
             <Box className="flex justify-center mb-2" >
             <img className="w-14 lg:w-20" src={service.image} alt="" />
             </Box>
              <Typography className="!font-semibold">{service.title}</Typography>
              <Typography className="!text-xs text-slate-500">{service.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
