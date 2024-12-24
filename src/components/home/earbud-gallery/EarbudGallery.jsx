import { Box, Button, Tooltip, Typography, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductData from "../../data/product.json";
import { useNavigate } from "react-router-dom";

const EarbudGallery = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://static.priceoye.pk/images/categories/section-earbuds-bg-md.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] mb-52"
      >
        <Box className="container mx-auto pt-12 mb:pt-16 pb-7 flex justify-between items-center !px-3 lg:!px-8">
          <Typography className="text-white">
            Latest Wireless Earbuds
          </Typography>
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
          {products.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-lg mx-3 !w-72 !px-5 cursor-pointer drop-shadow-md flex justify-center items-center"
              onClick={() => handleProductClick(item.name)}
            >
              <Box className="flex flex-col justify-center items-center !mt-5">
                <Box className="text-center">
                  <img className="w-28" src={item.image} alt={item.name} />
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
                      {item.reviews_count} Reviews
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start gap-3 mt-4 w-60 text-start pb-4 ">
                  <Tooltip
                    title={item.name}
                    placement="top"
                    slots={{
                      transition: Zoom,
                    }}
                  >
                    <Typography className="!text-[15px]">
                      {" "}
                      {item.name.length > 20
                        ? `${item.name.substring(0, 23)}...`
                        : item.name}
                    </Typography>{" "}
                  </Tooltip>
                  <Box className="flex gap-1">
                    <Typography className="!text-sm !font-medium !relative -!top-2">
                      Rs
                    </Typography>
                    <Typography className="!font-semibold !text-xl !lining-nums">
                      {item.current_price}
                    </Typography>
                  </Box>

                  <Box className="flex justify-between items-center w-full pb-2">
                    <Box className="flex gap-1 !line-through decoration-red-500 text-slate-400">
                      <Typography className="!text-xs !font-medium !relative -!top-2">
                        Rs
                      </Typography>
                      <Typography className="!font-medium !text-sm !lining-nums">
                        {item.original_price}
                      </Typography>
                    </Box>
                    <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                      {item.discount}% OFF
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

export default EarbudGallery;
