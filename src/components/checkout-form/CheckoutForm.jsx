import React, { useEffect } from "react";
import Stepper from "./stepper/CheckoutStepper";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProductDetail from "./checkout-product-detail/CheckoutProductDetail";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxOpen,
  faCircleCheck,
  faLocationDot,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { clearCart, setOrder } from "../../slices/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const storedName = user?.name;
  const storedEmail = user?.email;

  const [name, setName] = useState(storedName);
  const [email, setEmail] = useState(storedEmail);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const [deliveryType, setDeliveryType] = useState("");
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleDeliveryTypeChange = (event) => {
    setDeliveryType(event.target.value);
    setShowPaymentOptions(false);
  };

  const handleContinue = () => {
    setShowPaymentOptions(true);
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    setErrorMessage("");
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      setErrorMessage("Please select a payment method before checking out.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error(
        "Cart is empty. Add items to proceed."
      );
      return;
    }

    const orderDetails = {
      items: cartItems,
      paymentMethod,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = [...existingOrders, orderDetails];

    dispatch(setOrder(orderDetails));
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    dispatch(clearCart());

    toast.success("Order placed successfully!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cartItems) return <p>No item in cart</p>;

  return (
    <>
      <Box className="flex flex-col-reverse md:flex-row justify-between gap-5 !bg-slate-100 pt-16 md:pt-32 pb-16 px-3 lg:px-8">
        <Box className="md:w-[70%]">
          <Stepper />

          {/* Number */}
          <Box className=" bg-white border px-4 py-6 mt-6 rounded-lg">
            <Typography className="!text-md">1. Mobile Number</Typography>
            <Box className="flex items-center gap-4 mt-4">
              <Typography className="!text-xs">03111234567</Typography>
              <Box className="flex items-center gap-1">
                <FontAwesomeIcon
                  className="!text-sm !text-[#A0CB5A]"
                  icon={faCircleCheck}
                />
                <Typography className="!text-xs">Verified</Typography>
              </Box>
            </Box>
          </Box>

          {/* Contact info */}
          <Box className="bg-white border px-4 py-6 mt-6 rounded-lg">
            <Box className="flex justify-between items-center">
              <Typography className="!text-md">
                2. Contact Information
              </Typography>
              {!isEditing && (
                <IconButton
                  className="hover:!bg-transparent"
                  onClick={() => setIsEditing(true)}
                >
                  <FontAwesomeIcon className="text-[#48AFFF]" icon={faEdit} />
                </IconButton>
              )}
            </Box>

            {isEditing ? (
              <Box className="mt-4">
                <Box className="flex items-center gap-5">
                  <TextField
                    label="Full Name"
                    fullWidth
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Box>
                <Button
                  variant="contained"
                  className="!bg-[#48AFFF] !capitalize !shadow-none !px-4 !py-2 !text-xs !mt-3"
                  onClick={handleSave}
                >
                  Continue
                </Button>
              </Box>
            ) : (
              <Box className="mt-4 flex items-center">
                <Box className="flex flex-col w-1/2">
                  <Typography className="!text-xs !text-gray-500">
                    Full Name
                  </Typography>
                  <Typography className="!text-sm">{name}</Typography>
                </Box>
                <Box className="flex flex-col w-1/2">
                  <Typography className="!text-xs !text-gray-500">
                    Email
                  </Typography>
                  <Typography className="!text-sm">{email}</Typography>
                </Box>
              </Box>
            )}
          </Box>

          {/* delivery info */}
          <Box className="bg-white border px-4 py-6 mt-6 rounded-lg">
            <Typography className="!text-md">
              3a. Delivery Information
            </Typography>

            <Box className="flex gap-2 items-center !mt-5 !mb-2 border border-[#FBA338] py-3 px-4 rounded-md">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="!w-5 !h-5 !text-[#FBA338]"
              />
              <Typography className="!text-sm">
                Street 123, house 12, Block 4, Karachi - Clifton, Sindh
              </Typography>
            </Box>
          </Box>

          {/* delivery type */}
          <Box className=" bg-white border px-4 py-6 mt-6 rounded-lg">
            <Typography className="!text-md !mb-4">
              3b. Delivery Type
            </Typography>

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
                      <FontAwesomeIcon
                        icon={faTruckFast}
                        className="!w-5 !h-5"
                      />
                    </Typography>
                    <Typography className="!text-sm">
                      Standard Shipping
                    </Typography>
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

              {errorMessage && (
                <Typography className="!text-red-500 !text-sm !mt-2">
                  {errorMessage}
                </Typography>
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

          {/* <OrderDetailsForm /> */}
        </Box>
        <Box className="md:w-[30%]">
          <CheckoutProductDetail cartItems={cartItems} />
        </Box>

        <ToastContainer />
      </Box>
    </>
  );
};

export default CheckoutForm;
