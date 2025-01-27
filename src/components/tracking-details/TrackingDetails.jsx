import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import useTrackingDetails from "./useTrackingDetails";

const TrackingDetails = () => {
  const { orders } = useTrackingDetails();

  return (
    <Box className="bg-slate-100 !pb-20 min-h-screen">
      <Box className="pt-28 md:w-[90%] lg:w-[60%] mx-auto">
        <AppBar position="static" className="!bg-white !text-black !shadow-md">
          <Toolbar variant="dense">
            <Typography className="!text-lg">Order History</Typography>
          </Toolbar>
        </AppBar>

        <Box className="w-[90%] mx-auto mt-6">
          <Box>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <Box key={index}>
                  {order.items.map((item) => (
                    <Box
                      className="mb-2 bg-white py-9 px-3 md:px-6"
                      key={item.id}
                    >
                      <Box className="flex justify-end mb-7">
                        <Typography className=" !text-[#0BB07E] !bg-[#F0FAF7] w-28 text-center !rounded-md px-2 py-1 !text-sm">
                          Order Placed
                        </Typography>
                      </Box>

                      <Box className="flex gap-4 items-center">
                        <img
                          className="w-24"
                          src={item.image}
                          alt={item.name}
                        />

                        <Box className="flex flex-col">
                          <Typography className="!text-lg">
                            {item.name}
                          </Typography>
                          <Typography className="!text-md !text-gray-500">
                            {item.quantity}
                          </Typography>
                          <Box className="flex items-start gap-1 mt-2">
                            <Typography className="!text-sm">Rs</Typography>
                            <Typography className="!text-lg">
                              {item.current_price}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ))
            ) : (
              <Box className="flex justify-center bg-white h-80 items-center flex-col pt-20">
                <img
                  className="w-28"
                  src="https://static.priceoye.pk/images/bucket.svg"
                  alt=""
                />
                <Typography className="!text-md !mt-2">
                  There are no orders placed yet
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingDetails;
