import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const Orders = () => {
  const [ordersData, setOrdersData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadOrdersData = async () => {
    setLoading(true);
    try {
      const data = await api.getOrders();
      setOrdersData(data);
    } catch (error) {
      console.error("Order data loading failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrdersData();
  }, []);

  if (loading && !ordersData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div
          className="w-12 h-12 border-4 border-gray-200
          border-t-blue-500 rounded-full animate-spin"
        ></div>
      </div>
    );
  }

  if (!ordersData) {
    return (
      <div className="p-6 bg-white rounded-xl border-gray-200">
        <div className="">
          <p>Order data not available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl
    overflow-x-auto"
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 text-xs">
            <th
              className="px-5 py-3.5 text-left font-light
            uppercase tracking-wider"
            >
              Order Id
            </th>
            <th
              className="px-5 py-3.5 text-left font-light
            uppercase tracking-wider"
            >
              Customer
            </th>
            <th
              className="px-5 py-3.5 text-left font-light
            uppercase tracking-wider"
            >
              Total
            </th>
            <th
              className="px-5 py-3.5 text-left font-light
            uppercase tracking-wider"
            >
              Items
            </th>
            <th
              className="px-5 py-3.5 text-left font-light
            uppercase tracking-wider"
            >
              Status
            </th>
            <th
              className="px-5 py-3.5 text-left font-light
            uppercase tracking-wider"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {ordersData.items.map((order) => (
            <tr key={order.id} className="border-b border-gray-100">
              <td className="px-5 py-4 font-light text-sm text-left">
                #{order.id}
              </td>
              <td className="px-5 py-4 font-light text-sm text-left">
                {order.customer}
              </td>
              <td className="px-5 py-4 font-light text-sm text-left">
                {order.total}
              </td>
              <td className="px-5 py-4 font-light text-sm text-left">
                {order.items}
              </td>
              <td className="px-5 py-4 font-light text-sm text-left">
                {order.status}
              </td>
              <td className="px-5 py-4 font-light text-sm text-left">
                {order.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
