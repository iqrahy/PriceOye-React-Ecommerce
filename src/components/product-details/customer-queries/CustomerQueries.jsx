import { Box, Typography } from "@mui/material";
import React from "react";

const CustomerQueries = (props) => {
  const { product } = props;
  return (
    <Box className="container mx-auto">
      <Typography className="py-7 px-3 lg:px-8 !font-medium">
        Questions About {product.name}
      </Typography>

      <Box className="bg-white px-3 lg:px-8 py-6">
        {product.questions_answers.map((q, index) => (
          <Box key={index}></Box>
        ))}
      </Box>
    </Box>
  );
};

export default CustomerQueries;
