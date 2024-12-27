import React from 'react'
import { useSelector } from 'react-redux';

const TrackingDetails = () => {
    const orders = useSelector(state => state.cart.orders); 

  return (
    <div>
    <h2>Track Your Orders</h2>
    {orders.length > 0 ? (
      orders.map((order, index) => (
        <div key={index}>
          <h3>Order {index + 1} - Successful!</h3>
          <p><strong>Address:</strong> {order.address}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <h4>Items:</h4>
          {order.items.map(item => (
            <div key={item.id}>
              <p>{item.name} - {item.price}</p>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      ))
    ) : (
      <p>No orders placed yet.</p>
    )}
  </div>
  )
}

export default TrackingDetails
