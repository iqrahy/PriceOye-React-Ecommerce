import { Box, Button, Tooltip, Typography, Zoom } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import useMobileGallery from "./useMobileGallery";

const MobileGallery = () => {
  const { product } = useMobileGallery();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://static.priceoye.pk/images/categories/section-mobiles-bg-md.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] mb-52 mt-8"
      >
        <Box className="container mx-auto pt-12 mb:pt-16 pb-7 flex justify-between items-center px-3 lg:px-8">
          <Typography className="text-white">Latest Mobiles</Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View all
          </Button>
        </Box>
        <Swiper
          slidesPerView="auto"
          grid={{
            rows: 2,
          }}
          spaceBetween={15}
          loop={false}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Grid, Navigation]}
          className=" container mx-auto !px-3 lg:!px-5 !w-full !h-[580px]"
        >
          {product.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-lg mx-3 !w-72 !px-5  cursor-pointer drop-shadow-md flex justify-center items-center"
            >
              <Box className="flex flex-col justify-center items-center !mt-5">
                <Box className="text-center">
                  <img className="w-28" src={item.image} alt={item.title} />
                  <Box className="flex items-center bg-[#FBF7EB] px-2 rounded-full relative -left-16 -top-2">
                    <Typography className="!text-sm">
                      {" "}
                      <FontAwesomeIcon
                        className="text-[#FFC61C]"
                        icon={faStar}
                      />{" "}
                      {item.rating}
                    </Typography>
                    <Typography className="!text-[11px] ps-2">
                      {" "}
                      {item.reviews} Reviews
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start gap-3 mt-4 w-60 text-start pb-4 ">
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
                  <Box className="flex justify-between items-center w-full pb-2">
                    <Typography className="!text-sm lining-nums line-through decoration-red-500 text-slate-400">
                      <span className="text-xs relative -top-2">Rs</span>{" "}
                      {item.originalPrice}
                    </Typography>
                    <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                      {item.discountPercentage}% OFF
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}

          <Box className="custom-prev z-10 h-8 w-8 text-center flex justify-center items-center bg-black bg-opacity-45 text-white absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-opacity-60 hover:border">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Box>

          <Box className="custom-next z-10 h-8 w-8 text-center flex justify-center items-center bg-black bg-opacity-45 text-white absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-opacity-60 hover:border">
            <FontAwesomeIcon icon={faChevronRight} />
          </Box>
        </Swiper>
      </Box>
    </>
  );
};

export default MobileGallery;
