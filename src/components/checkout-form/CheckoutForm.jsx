import { Box } from '@mui/material'
import React from 'react'
import Stepper from './stepper/CheckoutStepper'

const CheckoutForm = () => {
  return (
    <Box className="pt-32 pb-16 !bg-slate-100" >
     <Stepper/>
    </Box>
  )
}

export default CheckoutForm
