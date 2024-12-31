import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import useCustomerReview from "./useCustomerReview";

const CustomerReviews = () => {
  const { reviewImages, review } = useCustomerReview();

  return (
    <>
      <Box className="mt-14 container mx-auto px-3 lg:px-8">
        <Box className="text-center mb-8">
          <Typography className="!text-xl !font-semibold text-[#3a3b3a]">
            Customer Reviews
          </Typography>
          <Typography className="!text-md text-[#4d4e4d]">
            What our Customers say about Priceoye.pk
          </Typography>
        </Box>

        <Box>
          <Swiper
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 10 },
              768: { slidesPerView: 6, spaceBetween: 20 },
              1024: { slidesPerView: 9, spaceBetween: 20 },
            }}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full h-full"
          >
            {reviewImages.map((img) => (
              <SwiperSlide
                key={img.id}
                className="flex items-center justify-center !h-auto"
              >
                <img className="h-24 w-36 rounded-md" src={img.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box className="mt-7">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full h-full"
          >
            {review.map((review) => (
              <SwiperSlide
                key={review.id}
                className="flex items-center justify-center !w-96 !h-48 bg-white border border-gray-300 rounded-md p-5"
              >
                <Box className="flex justify-between items-center">
                  <Typography className="bg-slate-100 p-5 rounded-full text-slate-500 !text-2xl">
                    {review.reviewerShortName}
                  </Typography>
                  <Box>
                    <Typography className="text-[#48AFFF] !text-sm">
                      {review.reviewerFullName}
                    </Typography>
                    <Box className="!text-[#FFC107]">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </Box>
                    <Typography className="!text-sm text-slate-500">
                      {review.date}
                    </Typography>
                  </Box>

                  <Box className="flex justify-between items-center gap-2 !text-[#0EB180]">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <Typography>Verified</Typography>
                  </Box>
                </Box>

                <Typography className="pt-6 text-slate-500 !text-sm">
                  {review.productCondition}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default CustomerReviews;
