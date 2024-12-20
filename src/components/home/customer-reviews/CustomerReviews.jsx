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

const CustomerReviews = () => {
  const reviewImages = [
    {
      id: 1,
      image: "	https://images.priceoye.pk/review/9638/1540415-appbb-270x270.jpg",
    },
    {
      id: 2,
      image: "	https://images.priceoye.pk/review/7714/1513305-it28c-270x270.jpg",
    },
    {
      id: 3,
      image: "https://images.priceoye.pk/review/8826/1529783-gs6hs-270x270.jpg",
    },
    {
      id: 4,
      image: "https://images.priceoye.pk/review/9117/1534328-wjk9k-270x270.jpg",
    },
    {
      id: 5,
      image: "	https://images.priceoye.pk/review/5893/322290-8eci2-270x270.jpg",
    },
    {
      id: 6,
      image: "https://images.priceoye.pk/review/8012/1526730-psv9r-270x270.jpg",
    },
    {
      id: 7,
      image: "https://images.priceoye.pk/review/7764/1535235-j6q7r-270x270.jpg",
    },
    {
      id: 8,
      image:
        "	https://images.priceoye.pk/review/5189/1535244-t9l55-270x270.jpeg",
    },
    {
      id: 9,
      image: "https://images.priceoye.pk/review/9079/1535000-8t7tx-270x270.jpg",
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/review/6194/1530552-uz7nx-270x270.jpeg",
    },
  ];

  const review = [
    {
      id: 1,
      reviewerShortName: "SA",
      reviewerFullName: "Shaheer Ashfaq",
      date: "18 December 2024",
      productCondition: "Original Product Brand New 100% Satisfy",
    },
    {
      id: 2,
      reviewerShortName: "JA",
      reviewerFullName: "Junaid Ali",
      date: "19 December 2024",
      productCondition: "Nyc phone..Packing is good.. Recommended",
    },
    {
      id: 3,
      reviewerShortName: "FM",
      reviewerFullName: "Faisal Mahmood",
      date: "17 December 2024",
      productCondition: " Good & recommended",
    },
    {
      id: 4,
      reviewerShortName: "SA",
      reviewerFullName: "Faris Sajjad",
      date: "17 December 2024",
      productCondition: " Good product",
    },
    {
      id: 5,
      reviewerShortName: "RA",
      reviewerFullName: " Rashid Ali",
      date: "18 December 2024",
      productCondition: "Zabardast",
    },
    {
      id: 6,
      reviewerShortName: "SK",
      reviewerFullName: " Saim Khan",
      date: "18 December 2024",
      productCondition: "Thanks price Oye your product is parfact",
    },
  ];

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
                  <Typography className="bg-slate-100 p-5 rounded-full text-slate-500 !text-2xl">{review.reviewerShortName}</Typography>
                  <Box>
                    <Typography className="text-[#48AFFF] !text-sm">{review.reviewerFullName}</Typography>
                    <Box className="!text-[#FFC107]">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </Box>
                    <Typography className="!text-sm text-slate-500">{review.date}</Typography>
                  </Box>

                  <Box className="flex justify-between items-center gap-2 !text-[#0EB180]">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <Typography>Verified</Typography>
                  </Box>
                </Box>

                <Typography className="pt-6 text-slate-500 !text-sm">{review.productCondition}</Typography>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default CustomerReviews;
