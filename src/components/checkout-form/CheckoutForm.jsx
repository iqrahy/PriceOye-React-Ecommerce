import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Stepper from "./stepper/CheckoutStepper";
import OrderDetailsForm from "./order-details-form/OrderDetailsForm";

const CheckoutForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="pt-32 pb-16 px-3 lg:px-8 !bg-slate-100">
      <Stepper />
      <OrderDetailsForm />
    </Box>
  );
};

export default CheckoutForm;
