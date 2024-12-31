import React from "react";
import useScrollTo from "../useScrollTo/useScrollTo";
import { removeFromOrders } from "../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrackingDetails = () => {
  const orders = useSelector((state) => state.cart.orders);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromOrders({ id: itemId }));
  };

  useScrollTo();

  return { orders, handleRemoveItem };
};

export default useTrackingDetails;
