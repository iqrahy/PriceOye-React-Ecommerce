import { Box } from '@mui/material'
import React from 'react'
import Stepper from './stepper/CheckoutStepper'
import OrderDetailsForm from './order-details-form/OrderDetailsForm'

const CheckoutForm = () => {
  return (
    <Box className="pt-32 pb-16 px-3 lg:px-8 !bg-slate-100" >
     <Stepper/>
     <OrderDetailsForm/>
    </Box>
  )
}

export default CheckoutForm
