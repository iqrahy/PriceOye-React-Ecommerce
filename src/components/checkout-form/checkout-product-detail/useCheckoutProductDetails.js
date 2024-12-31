import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const useCheckoutProductDetails = () => {
    const [cartItem, setCartItem] = useState(null);

    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  
      if (cartItems.length > 0) {
        const lastAddedItem = cartItems[cartItems.length - 1]; 
        setCartItem(lastAddedItem); 
      }
    }, []); 
  
  
    if (!cartItem) {
      return <Typography>No item in cart</Typography>;
    }

  return {cartItem}
}

export default useCheckoutProductDetails
