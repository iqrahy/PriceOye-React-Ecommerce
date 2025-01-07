import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useProductMedia from "./useProductMedia";

const ProductWithMedia = () => {
  const { product } = useProductMedia();

  return (
    <Box className="!w-full !py-20 mt-96 lg:mt-0">
      <Box className="text-center mb-8">
        <Typography className="!text-xl !font-semibold text-[#3a3b3a]">
          Loved and Recommended
        </Typography>
        <Typography className="!text-md text-[#4d4e4d]">
          Influencers talk about priceoye as a trusted brand
        </Typography>
      </Box>

      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        className="container mx-auto !px-3 lg:!px-8"
      >
        {product.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-white rounded-2xl !w-60 cursor-pointer drop-shadow-md"
          >
            <Box className="flex flex-col justify-center items-center">
              <Box className="text-center">
                <video
                  className="relative object-cover rounded-t-2xl "
                  autoPlay
                  muted
                  loop
                  src={item.video}
                  alt={item.title}
                />
                <img
                  className="w-20 lg:w-24 bg-white p-3 absolute left-[30%] bottom-[27%] drop-shadow-md rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
              </Box>
              <Box className="flex flex-col items-start gap-3 mt-4 w-60 text-start p-4">
                <Tooltip
                  title={item.title}
                  placement="top"
                  slots={{
                    transition: Zoom,
                  }}
                >
                  <Typography className="!text-[15px]">
                    {" "}
                    {item.title.length > 20
                      ? `${item.title.substring(0, 23)}...`
                      : item.title}
                  </Typography>{" "}
                </Tooltip>
                <Typography className="!font-semibold !text-xl lining-nums">
                  <span className="text-sm font-medium relative -top-2">
                    Rs
                  </span>{" "}
                  {item.currentPrice}
                </Typography>
                <Typography className="!text-sm lining-nums line-through decoration-red-500 text-slate-400">
                  <span className="text-xs relative -top-1">Rs</span>
                  {item.originalPrice}
                </Typography>
                <Box className="flex justify-between items-center w-full pb-2">
                  <Box className="flex items-center bg-[#FBF7EB] px-2 rounded-full">
                    <Typography className="!text-sm">
                      <FontAwesomeIcon
                        className="text-[#FFC61C]"
                        icon={faStar}
                      />{" "}
                      {item.rating}
                    </Typography>
                    <Typography className="!text-[11px] ps-2">
                      {item.reviews} Reviews
                    </Typography>
                  </Box>
                  <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                    {item.discountPercentage}% OFF
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductWithMedia;
