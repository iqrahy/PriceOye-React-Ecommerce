import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Stepper from "./stepper/CheckoutStepper";
import OrderDetailsForm from "./order-details-form/OrderDetailsForm";
import { useSelector } from "react-redux";
import CheckoutProductDetail from "./checkout-product-detail/CheckoutProductDetail";

const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cartItems) return <p>No item in cart</p>;

  return (
    <Box className="flex justify-between gap-5 !bg-slate-100 pt-32 pb-16 px-3 lg:px-8">
      <Box className="w-[70%]">
        <Stepper />
        <OrderDetailsForm />
      </Box>
      <Box className="w-[30%]">
        <CheckoutProductDetail cartItems={cartItems} />
      </Box>
    </Box>
  );
};

export default CheckoutForm;
