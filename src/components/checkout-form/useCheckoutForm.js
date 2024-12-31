import React, { useState } from "react";
import useScrollTo from "../useScrollTo/useScrollTo";
import { clearCart, setOrder } from "../../slices/cartSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const useCheckoutForm = () => {
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
      toast.error("Cart is empty. Add items to proceed.");
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

  useScrollTo();

  if (!cartItems) return <p>No item in cart</p>;

  return {
    name,
    setName,
    email,
    setEmail,
    isEditing,
    handleSave,
    deliveryType,
    showPaymentOptions,
    errorMessage,
    handleDeliveryTypeChange,
    handleContinue,
    handlePaymentChange,
    handleCheckout,
    paymentMethod,
    setIsEditing,
    cartItems,
  };
};

export default useCheckoutForm;
