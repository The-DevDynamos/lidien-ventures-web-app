// app/my-account/components/OrderHistory.tsx
import React from "react";
import Link from "next/link";
import { Order } from "./clientTypes";

interface OrderHistoryProps {
  orders: Order[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
    }).format(amount);
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
        <div className="text-sm text-gray-600">
          {orders.length} order{orders.length !== 1 ? "s" : ""} total
        </div>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Order Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    #{order.orderNumber}
                  </p>
                  <p className="text-gray-600">
                    Placed on {formatDate(order.date)}
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-2 lg:mt-0">
                  <span
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                  <p className="font-bold text-gray-900 text-xl">
                    {formatCurrency(order.total)}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Items</h4>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-sm">{item.category}</p>
                        <p className="text-gray-600 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="border-t border-gray-100 pt-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Shipping Address
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">
                      {order.shippingAddress.fullName}
                    </p>
                    <p>{order.shippingAddress.address}</p>
                  </div>
                  <div>
                    <p>
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.postalCode}
                    </p>
                    <p>{order.shippingAddress.phone}</p>
                  </div>
                </div>
              </div>

              {/* Order Actions */}
              <div className="border-t border-gray-100 pt-6 mt-6 flex flex-wrap gap-3 justify-end">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                  View Details
                </button>
                {order.status === "pending" && (
                  <button className="bg-white hover:bg-gray-50 text-red-600 px-6 py-2.5 rounded-xl font-semibold border border-red-200 transition-all duration-300">
                    Cancel Order
                  </button>
                )}
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-xl font-semibold border border-gray-200 transition-all duration-300">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No orders yet
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Start exploring our solar solutions and place your first order!
          </p>
          <Link
            href="/solutions"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Browse Solutions
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
