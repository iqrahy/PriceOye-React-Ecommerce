import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
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
          <Box key={index} className="mb-4">
            <Accordion className="!shadow-none border border-gray-300 !rounded-lg">
              <AccordionSummary
                expandIcon={
                  <FontAwesomeIcon
                    className="text-lg text-black rounded-full"
                    icon={faAngleDown}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" className="!text-sm !font-medium">
                  Q. {q.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="!text-xs !text-gray-500">
                {q.answer}
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}

        <Box className="!flex justify-end">
          <Button
            variant="contained"
            className="!capitalize !px-5 !py-2 !shadow-none !text-black !text-sm !bg-slate-100 hover:!bg-gray-300 duration-300"
          >
            Show More
          </Button>
        </Box>

        <Box>
          <Typography>Ask a question</Typography>
          <TextField
            fullWidth
            placeholder="Write question here"
            multiline
            rows={4}
            maxRows={4}
            className="!mt-5"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                  borderWidth: "1px",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            className="!bg-[#48afff] !capitalize w-32 !mt-4 !text-sm !py-2 !shadow-none"
          >
            Ask Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerQueries;
