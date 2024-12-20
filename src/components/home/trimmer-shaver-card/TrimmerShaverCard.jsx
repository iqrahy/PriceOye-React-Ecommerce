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
import Image1 from "../../../assets/stainless-steel-blade.webp";
import Image2 from "../../../assets/remington-pilot.webp";
import Image3 from "../../../assets/kemei.webp";
import Image4 from "../../../assets/kemei-3-in-1.webp";
import Image5 from "../../../assets/dinglong.webp";
import Image6 from "../../../assets/kemei-km.webp";
import Image7 from "../../../assets/kemei-7-in-1.webp";
import Image8 from "../../../assets/kemei-hair.webp";

const TrimmerShaverCard = () => {
  const product = [
    {
      id: 1,
      image: Image1,
      title: "VGR Stainless Steel Blade Trimmer - V-031",
      currentPrice: "2,499",
      originalPrice: "6,000",
      discountPercentage: 58,
      rating: 4.7,
      reviews: 9,
    },
    {
      id: 2,
      image:
        "https://images.priceoye.pk/vgr-zero-t-blade-trimmer-v-030-pakistan-priceoye-c2lke-270x270.webp",
      title: "VGR Zero T-Blade Trimmer - V-030",
      currentPrice: "2,559",
      originalPrice: "5,500",
      discountPercentage: 53,
      rating: 3.7,
      reviews: 1,
    },
    {
      id: 3,
      image: Image2,
      title: "REMINGTON Pilot Personal Groomer Kit PG180",
      currentPrice: "5,899",
      originalPrice: "6,900",
      discountPercentage: 15,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 4,
      image: Image3,
      title: "Kemei KM-6331 3 in 1 Grooming Kit with USB Charging",
      currentPrice: "1,849",
      originalPrice: "3,000",
      discountPercentage: 38,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 5,
      image: Image4,
      title: "KEMEI 3 In 1 Rechargeable Electric Shaver & Trimmer KM-6332 ",
      currentPrice: "1,749",
      originalPrice: "3,700",
      discountPercentage: 53,
      rating: 4.9,
      reviews: 42,
    },
    {
      id: 6,
      image: Image5,
      title: "Dinglong Professional Beard And Hair Trimmer RF-609",
      currentPrice: "2,399",
      originalPrice: "4,000",
      discountPercentage: 40,
      rating: 4.8,
      reviews: 37,
    },

    {
      id: 7,
      image:
        "	https://images.priceoye.pk/mi-5-blade-electric-shaver-pakistan-priceoye-bd88p-270x270.webp",
      title: "Mi 5-Blade Electric Shaver",
      currentPrice: "6,299",
      originalPrice: "15,299",
      discountPercentage: 8,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 8,
      image: Image6,
      title: "Kemei KM-6330 Hair & Beard Trimmer 3 in 1",
      currentPrice: "1,799",
      originalPrice: "3,000",
      discountPercentage: 40,
      rating: 4.9,
      reviews: 22,
    },
    {
      id: 9,
      image: Image7,
      title: " Kemei 7 in 1 Grooming Kit Shaving Machine Set KM-580",
      currentPrice: "3,699",
      originalPrice: "7,000",
      discountPercentage: 62,
      rating: 4.7,
      reviews: 2,
    },
    {
      id: 10,
      image: Image8,
      title: "Kemei Km-1613 Hair Clippers Men Professional Electric Trimmer",
      currentPrice: "3,499",
      originalPrice: "5,900",
      discountPercentage: 41,
      rating: 4.6,
      reviews: 14,
    },
    {
      id: 11,
      image:
        "	https://images.priceoye.pk/dingling-professional-rf-608b-pakistan-priceoye-47iad-270x270.webp",
      title: "Dingling Professional Rf 608B",
      currentPrice: "1,799",
      originalPrice: "3,500",
      discountPercentage: 49,
      rating: 4.7,
      reviews: 6,
    },
    {
      id: 12,
      image:
        "https://images.priceoye.pk/mi-hair-clipper-pakistan-priceoye-nwoxh-270x270.webp",
      title: "MI HAIR CLIPPER",
      currentPrice: "8,199",
      originalPrice: "11,000",
      discountPercentage: 25,
      rating: 4.9,
      reviews: 110,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://static.priceoye.pk/images/categories/section-trimmers-shaver-bg-md.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] mb-52 mt-8"
      >
        <Box className="container mx-auto pt-12 mb:pt-16 pb-7 flex justify-between items-center !px-3 lg:!px-8">
          <Typography className="text-white">Latest Trimmers Shaver</Typography>
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
          className=" container mx-auto !px-3 lg:!px-5 !w-full !h-[580px] "
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

export default TrimmerShaverCard;
