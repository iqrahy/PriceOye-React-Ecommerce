import {
  faBoxOpen,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { setOrder } from "../../../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const DeliveryType = () => {
  const [deliveryType, setDeliveryType] = useState("");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleDeliveryTypeChange = (event) => {
    setDeliveryType(event.target.value);
  };

  const handleContinue = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    const orderDetails = {
      items: cartItems,
      paymentMethod,
    };

    dispatch(setOrder(orderDetails));


    alert("Order placed successfully!");

  };

  return (
    <>
      <Box className=" bg-white border px-4 py-6 mt-6 rounded-lg">
        <Typography className="!text-md !mb-4">3b. Delivery Type</Typography>

        <RadioGroup
          value={deliveryType}
          onChange={handleDeliveryTypeChange}
          className="mb-4 mx-3"
        >
          <FormControlLabel
            value="StandardShipping"
            control={<Radio size="small" className="!text-[#FBA338] " />}
            label={
              <Box className="flex items-center">
                <Typography className="!mr-2 !text-[#FBA338] !text-2xl !bg-slate-200 !w-8 !h-8 !rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faTruckFast} className="!w-5 !h-5" />
                </Typography>
                <Typography className="!text-sm">Standard Shipping</Typography>
              </Box>
            }
            className="px-2 py-1 border border-[#FBA338] rounded-lg bg-slate-50 mt-4 flex items-center"
          />
          <FormControlLabel
            value="CheckKaroPayKaro"
            control={<Radio size="small" className="!text-[#FBA338]" />}
            label={
              <Box className="flex items-center">
                {/* Icon before the label */}
                <Typography className="!mr-2 !text-[#FBA338] !text-2xl !bg-gray-200 !w-8 !h-8 !rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faBoxOpen} className="!w-5 !h-5" />
                </Typography>
                {/* Label Text */}
                <Typography className="!text-sm">
                  Check Karo, Pay Karo (Open Parcel)
                </Typography>
              </Box>
            }
            className="px-2 py-1 border border-[#FBA338] rounded-lg bg-gray-50 mt-4 flex items-center"
          />
        </RadioGroup>

        {!showPaymentOptions && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleContinue}
            disabled={!deliveryType}
            className={`w-24 !capitalize !px-4 !py-2 !text-xs !shadow-none
           ${
             !deliveryType
               ? "bg-[#B0D6F1] text-[#A3C4D7] cursor-not-allowed"
               : "!bg-[#48AFFF] text-white"
           }`}
          >
            Continue
          </Button>
        )}
      </Box>

      {showPaymentOptions && (
        <Box className=" bg-white border px-4 py-6 mt-6 rounded-lg">
          <Typography className="!text-md !mb-4">
            4. Choose Payment Method
          </Typography>

          {deliveryType === "StandardShipping" && (
            <Box className="mt-6">
              <RadioGroup
                value={paymentMethod}
                onChange={handlePaymentChange}
                className="mx-3"
              >
                {[
                  "BankTransfer",
                  "CashOnDelivery",
                  "JazzCash",
                  "Credit/DebitCard",
                  "Installment(Credit Card)",
                ].map((method) => (
                  <FormControlLabel
                    key={method}
                    value={method}
                    control={<Radio size="small" className="!text-[#FBA338]" />}
                    label={
                      <Box className="flex items-center">
                        <Typography className="!text-xs">
                          {method.replace(/([A-Z])/g, " $1")}
                        </Typography>
                      </Box>
                    }
                    className={`px-2 py-1 rounded-lg  mt-4 flex items-center ${
                      paymentMethod === method ? "border border-[#FBA338]" : ""
                    }`}
                  />
                ))}
              </RadioGroup>
            </Box>
          )}

          {deliveryType === "CheckKaroPayKaro" && (
            <Box>
              <Box className="!bg-[#FBA338] !text-white p-3 mb-3">
                <Typography className="!text-xs">
                  Rs. 300 delivery charges added.
                </Typography>
                <Typography className="!text-xs">
                  Do's: Open Flyer, Inspect Box, Check Seal, Confirm Color
                  <br />
                  Don'ts: Break Seal or Tear Shrink Wrap
                </Typography>
              </Box>
              <Box className="mt-6">
                <RadioGroup
                  value={paymentMethod}
                  onChange={handlePaymentChange}
                  className="mx-3"
                >
                  {[
                    "BankTransfer",
                    "CashOnDelivery",
                    "JazzCash",
                    "Credit/DebitCard",
                    "Installment(Credit Card)",
                  ].map((method) => (
                    <FormControlLabel
                      key={method}
                      value={method}
                      control={
                        <Radio size="small" className="!text-[#FBA338]" />
                      }
                      label={
                        <Box className="flex items-center">
                          <Typography className="!text-xs">
                            {method.replace(/([A-Z])/g, " $1")}
                          </Typography>
                        </Box>
                      }
                      className={`px-2 py-1 rounded-lg  mt-4 flex items-center ${
                        paymentMethod === method
                          ? "border border-[#FBA338]"
                          : ""
                      }`}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </Box>
          )}

          <Button
            variant="contained"
            size="small"
            onClick={handleCheckout}
            className="!bg-[#48AFFF] w-24 !capitalize !shadow-none !px-4 !py-2 !text-xs !mt-5"
          >
            Checkout
          </Button>
        </Box>
      )}
    </>
  );
};

export default DeliveryType;
