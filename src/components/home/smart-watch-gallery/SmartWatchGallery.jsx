import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import required modules
import { Grid } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SamsungGalaxyImage from "../../../assets/samsung-galaxy-fit.webp";

const SmartWatchGallery = () => {
  const product = [
    {
      id: 1,
      image:
        "	https://images.priceoye.pk/yolo-ultron-smart-watch-pakistan-priceoye-0jv0u-270x270.webp",
      title: "YOLO Ultron Smart Watch",
      currentPrice: '7,999',
      originalPrice: '17,999',
      discountPercentage: 56,
      rating: 4.4,
      reviews: 10,
    },
    {
      id: 2,
      image:
        "https://images.priceoye.pk/huawei-band-9-pakistan-priceoye-9kqv0-270x270.webp",
      title: "HUAWEI Band 9",
      currentPrice: '9,399',
      originalPrice: '20,000',
      discountPercentage: 53,
      rating: 5.0,
      reviews: 9,
    },
    {
      id: 3,
      image: SamsungGalaxyImage,
      title: "Samsung Galaxy Fit 3 With One Year Brand Warranty",
      currentPrice: '13,499',
      originalPrice: '15,999',
      discountPercentage: 14,
      rating: 5.0,
      reviews: 2,
    },
    {
      id: 4,
      image:
        "	https://images.priceoye.pk/hk9-pro-max-plus-smartwatch-pakistan-priceoye-4n0i7-270x270.webp",
      title: " HK9 PRO Max Plus Smartwatch ",
      currentPrice: '5,799',
      originalPrice: '8,000',
      discountPercentage: 28,
      rating: 4.8,
      reviews: 17,
    },
    {
      id: 5,
      image:
        "	https://images.priceoye.pk/g-tide-r1-smart-watch-pakistan-priceoye-xlubt-270x270.webp",
      title: "G-TiDE R1 Smart Watch ",
      currentPrice: '4,979',
      originalPrice: '10,000',
      discountPercentage: 50,
      rating: 5.0,
      reviews: 26,
    },
    {
      id: 6,
      image:
        "https://images.priceoye.pk/mibro-watch-lite-3-pakistan-priceoye-nq89u-270x270.webp",
      title: "Mibro Watch Lite 3 With Dual Strap ",
      currentPrice: '11,999',
      originalPrice: '22,500',
      discountPercentage: 47,
      rating: 4.7,
      reviews: 7,
    },

    {
      id: 7,
      image:
        "https://images.priceoye.pk/mibro-watch-lite3-pro-pakistan-priceoye-v5v3v-270x270.webp",
      title: "Mibro Watch Lite 3 Pro",
      currentPrice: '14,799',
      originalPrice: '18,000',
      discountPercentage: 18,
      rating: 4.2,
      reviews: 5,
    },
    {
      id: 8,
      image:
        "	https://images.priceoye.pk/xiaomi-redmi-watch-5-active-pakistan-priceoye-n4ewq-270x270.webp",
      title: "Xiaomi Redmi Watch 5 Activ",
      currentPrice: '8,699',
      originalPrice: '18,000',
      discountPercentage: 52,
      rating: 4.3,
      reviews: 3,
    },
    {
      id: 9,
      image:
        "https://images.priceoye.pk/ultra-smart-watch-7-in-1-pakistan-priceoye-3ybh3-270x270.webp",
      title: "Ultra Smart Watch With 7 Straps",
      currentPrice: '1,679',
      originalPrice: '8,000',
      discountPercentage: 79,
      rating: 4.7,
      reviews: 195,
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/realme-watch-pakistan-priceoye-g61ky-270x270.webp",
      title: "Realme Smart Watch",
      currentPrice: '3,499',
      originalPrice: '14,999',
      discountPercentage: 77,
      rating: 4.8,
      reviews: 26,
    },
    {
      id: 11,
      image:
        "	https://images.priceoye.pk/y80-ultra-8-in-1-smart-watch-pakistan-priceoye-wuwt7-270x270.webp",
      title: "Y80 Ultra 8 in 1 Smart watch",
      currentPrice: '1,799',
      originalPrice: '6,000',
      discountPercentage: 70,
      rating: 4.4,
      reviews: 14,
    },
    {
      id: 12,
      image:
        "https://images.priceoye.pk/op88-smart-watch-pakistan-priceoye-q11q9-270x270.webp",
      title: "OP88 Smart Watch",
      currentPrice: '4,799',
      originalPrice: '8,000',
      discountPercentage: 40,
      rating: 4.9,
      reviews: 110,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://static.priceoye.pk/images/categories/section-smart-watches-bg-md.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] mb-52 mt-8"
      >
        <Box className="container mx-auto pt-12 mb:pt-16 pb-7 flex justify-between items-center px-3">
          <Typography className="text-white">Latest Smart Watches</Typography>
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
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation]}
          className=" container mx-auto !w-full !h-[580px] "
        >
          {product.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-lg mx-3 !w-72 !px-5 cursor-pointer drop-shadow-md flex justify-center items-center"
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
                  <Typography className="!text-[15px]">{item.title}</Typography>
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
        </Swiper>
      </Box>

      <Box className="pt-52 lg:pt-28">
        <img className="object-cover w-full" src="https://static.priceoye.pk/images/bnpl_banner/static-banner-bnpl-v4.jpg" alt="" />
      </Box>
    </>
  );
};

export default SmartWatchGallery;
