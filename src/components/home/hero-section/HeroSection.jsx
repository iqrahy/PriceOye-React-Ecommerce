import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Img1 from "../../../assets/hero-1.jpg";
import Img2 from "../../../assets/hero-2.jpg";
import Img3 from "../../../assets/hero-3.jpg";
import Img4 from "../../../assets/hero-4.jpg";
import Img5 from "../../../assets/hero-5.jpg";
import Img6 from "../../../assets/hero-6.jpg";
import Img7 from "../../../assets/hero-7.jpg";
import Img8 from "../../../assets/hero-8.jpg";
import Banner from "../../../assets/sale-campaign-banner.gif";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const heroImages = [
    {
      id: 1,
      image: Img1,
    },
    {
      id: 1,
      image: Img2,
    },
    {
      id: 1,
      image: Img3,
    },
    {
      id: 1,
      image: Img4,
    },
    {
      id: 1,
      image: Img5,
    },
    {
      id: 1,
      image: Img6,
    },
    {
      id: 1,
      image: Img7,
    },
    {
      id: 1,
      image: Img8,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
      >
        {heroImages.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="" />
          </SwiperSlide>
        ))}

        <Box className="custom-prev z-10 h-8 w-8 text-center flex justify-center items-center bg-black bg-opacity-45 text-white absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-opacity-60 hover:border">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Box>

        <Box className="custom-next z-10 h-8 w-8 text-center flex justify-center items-center bg-black bg-opacity-45 text-white absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer hover:bg-opacity-60 hover:border">
          <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </Swiper>

      <Box className="py-5 lg:py-7 md:px-12 bg-slate-100">
        <img src={Banner} alt="" />
      </Box>
    </>
  );
};

export default HeroSection;
