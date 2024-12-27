import { Box } from "@mui/material";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const CheckoutStepper = () => {
  const activeStep = 3;
  return (
    <>
      <Box className="">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={index < activeStep}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    color:
                      index < activeStep
                        ? "#48AFFF !important"
                        : index === activeStep
                        ? "gray !important"
                        : "gray !important",
                  },
                  "& .MuiStepIcon-root": {
                    color:
                      index < activeStep
                        ? "#48AFFF !important"
                        : index === activeStep
                        ? "gray !important"
                        : "gray !important",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

export default CheckoutStepper;
