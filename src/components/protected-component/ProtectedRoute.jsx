import { Box, Button, Typography } from '@mui/material';
import React from 'react'

const ProtectedRoute = ({children}) => {


    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
        return (
            <Box 
              sx={{ textAlign: "center", mt: 5 }}
              className="flex flex-col items-center justify-center"
            >
              <Typography variant="h4" color="error" gutterBottom>
                Access Denied
              </Typography>
              <Typography variant="body1">
                You need to log in to access this page. Please sign in to continue.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                href="/login"
                className="mt-4"
              >
                Go to Login
              </Button>
            </Box>
          );
    }

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute