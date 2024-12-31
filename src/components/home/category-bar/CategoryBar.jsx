import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import useCategory from "./useCategory";

const CategoryBar = () => {
 
const {product} = useCategory()
  return (

    <Box className="pb-4 bg-slate-100 mt-[90px]">

<Box className="py-2 bg-white">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 8 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 8, spaceBetween: 25 },
        }}
        className="mySwiper container mx-auto"
      >
        {product.map((item) => (
          <SwiperSlide key={item.id}>
            <Box className="flex flex-col justify-center items-center">
              <img
                className="object-contain w-12 h-12"
                src={item.image}
                alt={item.text}
              />
              <Typography sx={{ fontSize: "13px" }}>{item.title}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </Box>
  
  );
};

export default CategoryBar;
