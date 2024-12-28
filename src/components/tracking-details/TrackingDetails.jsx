import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TrackingDetails = () => {
  const orders = useSelector((state) => state.cart.orders);

  return (
    <Box className="bg-slate-100 h-full">
      <Box className="pt-28 pb-20 md:w-[60%] mx-auto">
        <AppBar position="static" className="!bg-white !text-black !shadow-md">
          <Toolbar variant="dense">
            <Typography className="!text-lg">Order History</Typography>
          </Toolbar>
        </AppBar>

        <Box className=" w-[90%] mx-auto mt-6">
          <Box>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <Box key={index}>
                  {order.items.map((item) => (
                    <Box className="mb-2 bg-white py-4 px-6" key={item.id}>
                      <Box className="flex justify-end">
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
                       <Typography>
                          {item.name}
                        </Typography>
                        <Typography>
                          {item.current_price}
                        </Typography>
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

//   <div className='!mt-40'>
//   <h2>Track Your Orders</h2>
//   {orders.length > 0 ? (
//     orders.map((order, index) => (
//       <div key={index}>
//         <h3>Order {index + 1} - Successful!</h3>
//         <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
//         <h4>Items:</h4>
//         {order.items.map(item => (
//           <div key={item.id}>
//             <p>{item.name} - {item.price}</p>
//             <img className='w-20' src={item.image} alt={item.name} />
//           </div>
//         ))}
//       </div>
//     ))
//   ) : (
//     <p>No orders placed yet.</p>
//   )}
// </div>
