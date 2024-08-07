import React from "react";
import "./Order.css";

const Order = ({ orders }) => {
  return (
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.customer}</td>
              <td>{order.id}</td>
              <td>${order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
