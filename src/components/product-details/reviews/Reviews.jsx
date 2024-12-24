import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";

const Reviews = (props) => {
  const { reviews } = props;

  return (
    <Box className="container mx-auto">
      <Typography className="py-7 px-3 lg:px-8 !font-medium">
        Reviews
      </Typography>

      <Box className="bg-white py-8 px-4 lg:px-8">
        {reviews.map((review, index) => (
          <Box key={index} className="my-4 border-b py-8">
            <Box className="flex justify-between">
              <Box className="flex justify-between items-center gap-4">
                <Typography className="bg-gray-100 !text-xl !p-1 w-14 h-14 flex justify-center items-center text-gray-500 rounded-full">
                  {review.reviewer_short_name}
                </Typography>
                <Box>
                  <Typography className="!text-sm">
                    {review.reviewer_full_name}
                  </Typography>
                  <Box className="!text-[#FFC107] !text-xs flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Typography className="!text-xs text-gray-500 !mt-5">
              {review.description}
            </Typography>
            <Box className="flex flex-wrap gap-4 mt-3">
              {review.review_images.map((image, imageIndex) => (
                <Box key={imageIndex} className="w-20 h-20 overflow-hidden">
                  <img
                    src={image}
                    alt={`Review ${index + 1} Image ${imageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
