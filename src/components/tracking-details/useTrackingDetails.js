import React from "react";
import useScrollTo from "../useScrollTo/useScrollTo";
import { useSelector } from "react-redux";

const useTrackingDetails = () => {
  const orders = useSelector((state) => state.cart.orders);

  useScrollTo();

  return { orders };
};

export default useTrackingDetails;
