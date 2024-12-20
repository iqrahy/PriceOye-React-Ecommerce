import { Box, Button, Tooltip, Typography, Zoom } from "@mui/material";
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

const MobileGallery = () => {
  const product = [
    {
      id: 1,
      image:
        "	https://images.priceoye.pk/xiaomi-poco-c75-pakistan-priceoye-aowis-270x270.webp",
      title: "Xiaomi Poco C75",
      currentPrice: "32,899",
      originalPrice: "36,999",
      discountPercentage: 11,
      rating: 5.0,
      reviews: 6,
    },
    {
      id: 2,
      image:
        "	https://images.priceoye.pk/itel-s24-pakistan-priceoye-sabyj-270x270.webp",
      title: "Itel S24",
      currentPrice: "25,299",
      originalPrice: "33,999",
      discountPercentage: 26,
      rating: 4.8,
      reviews: 99,
    },
    {
      id: 3,
      image:
        "	https://images.priceoye.pk/realme-c61-pakistan-priceoye-v5h3g-270x270.webp",
      title: "Realme C61",
      currentPrice: "29,300",
      originalPrice: "32,999",
      discountPercentage: 11,
      rating: 4.9,
      reviews: 23,
    },
    {
      id: 4,
      image:
        "https://images.priceoye.pk/tecno-spark-30-pakistan-priceoye-rcs5e-270x270.webp",
      title: "Tecno Spark 30 ",
      currentPrice: "35,500",
      originalPrice: "39,999",
      discountPercentage: 11,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 5,
      image:
        "https://images.priceoye.pk/xiaomi-redmi-a3-pakistan-priceoye-z5m8c-270x270.webp",
      title: "Xiaomi Redmi A3",
      currentPrice: "19,299",
      originalPrice: "23,999",
      discountPercentage: 20,
      rating: 4.8,
      reviews: 282,
    },
    {
      id: 6,
      image:
        "	https://images.priceoye.pk/oppo-a3-pakistan-priceoye-hn4ho-270x270.webp",
      title: "Oppo A3 ",
      currentPrice: "45,999",
      originalPrice: "49,999",
      discountPercentage: 8,
      rating: 5.0,
      reviews: 3,
    },

    {
      id: 7,
      image:
        "	https://images.priceoye.pk/realme-13-plus-5g-pakistan-priceoye-78si6-270x270.webp",
      title: "Realme 13+ 5G",
      currentPrice: "77,999",
      originalPrice: "89,999",
      discountPercentage: 13,
      rating: 4.9,
      reviews: 7,
    },
    {
      id: 8,
      image:
        "	https://images.priceoye.pk/samsung-galaxy-z-fold-6-pakistan-priceoye-6jsny-270x270.webp",
      title: "Samsung Galaxy Z Fold 6",
      currentPrice: "529,999",
      originalPrice: "604,999",
      discountPercentage: 12,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 9,
      image:
        "https://images.priceoye.pk/infinix-zero-40-4g-pakistan-priceoye-bqj0g-270x270.webp",
      title: "Infinix Zero 40 4G",
      currentPrice: "65,499",
      originalPrice: "69,999",
      discountPercentage: 6,
      rating: 4.7,
      reviews: 10,
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/vivo-v40e-pakistan-priceoye-gylye-270x270.webp",
      title: "Vivo V40e",
      currentPrice: "89,999",
      originalPrice: "99,999",
      discountPercentage: 10,
      rating: 5.0,
      reviews: 3,
    },
    {
      id: 11,
      image:
        "	https://images.priceoye.pk/apple-iphone-16-pro-pakistan-priceoye-u4pw9-270x270.webp",
      title: "Apple iPhone 16 Pro",
      currentPrice: "436,999",
      originalPrice: "460,000",
      discountPercentage: 5,
      rating: 4.4,
      reviews: 14,
    },
    {
      id: 12,
      image:
        "	https://images.priceoye.pk/apple-iphone-16-pro-max-pakistan-priceoye-v0q3c-270x270.webp",
      title: "Apple iPhone 16 Pro Max",
      currentPrice: "512,999",
      originalPrice: "540,500",
      discountPercentage: 5,
      rating: 5.0,
      reviews: 1,
    },
  ];

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
          pagination={{
            clickable: true,
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
        </Swiper>
      </Box>
    </>
  );
};

export default MobileGallery;
