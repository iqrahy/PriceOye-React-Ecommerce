import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { product } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box className="pt-24 pb-4">
      <Box className="h-full bg-white flex flex-col-reverse md:flex-row !gap-8 p-8">
        {/* left images */}
        <Box className="md:w-[40%]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {product.images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="border-2 rounded-2xl !flex !items-center !justify-center py-5"
              >
                <img className="w-96 object-contain" src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper !mt-4 !mx-14"
          >
            {product.images.map((img) => (
              <SwiperSlide className="border rounded-lg !flex !items-center !justify-center">
                <img className="w-14 p-2 object-contain" src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* right details */}
        <Box className="md:w-[45%] md:!mt-14">
          {/* title */}
          <Box>
            <Typography className="!text-2xl">{product.name}</Typography>
            <Box className="flex items-center gap-3 !text-xs !bg-[#FBF7EB] w-56 px-2 py-1 rounded-md mt-4">
              <Box className="!text-[#FFC107] flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </Box>
              <Typography className="!text-xs">{product.rating} </Typography>
              <Divider
                className="!border-black"
                orientation="vertical"
                flexItem
              />
              <Typography className="!text-xs">
                {product.reviews_count} Reviews
              </Typography>
            </Box>
          </Box>

          {/* price */}
          <Box className="mt-12 flex justify-between">
            <Box>
              <Typography className="text-gray-500 !text-sm">
                Priceoye Price
              </Typography>
              <Box className="flex gap-2">
                <Typography className="!text-md !font-medium !relative -!top-2">
                  Rs
                </Typography>
                <Typography className="!font-medium !text-2xl !lining-nums">
                  {product.current_price}
                </Typography>
              </Box>

              <Box className="flex items-center w-full gap-2">
                <Box className="flex !line-through decoration-gray-500 text-gray-500">
                  <Typography className="!text-xs !font-medium !relative -!top-2">
                    Rs
                  </Typography>
                  <Typography className="!font-medium !text-sm !lining-nums">
                    {product.original_price}
                  </Typography>
                </Box>
                <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-lg px-3 py-1">
                  {product.discount}% OFF
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography className="text-gray-500 !text-md">
                Availability
              </Typography>
              <Typography className="!text-2xl">In Stock</Typography>
            </Box>
          </Box>

          {/* Add cart button */}
          <Box>
            <Button variant="contained" className="!capitalize !mt-10 !bg-[#F88B2A] w-56">Add to Cart</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
