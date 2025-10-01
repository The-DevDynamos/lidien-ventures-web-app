import React from "react";
import { Order } from "./clientTypes";

interface OrderDetailsModalProps {
  order: Order;
  onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  order,
  onClose,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-emerald-100 text-emerald-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Order Information
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">#{order.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="font-medium">{formatDate(order.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-medium text-green-600">
                    {formatCurrency(order.total)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Shipping Address
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium text-gray-900">
                  {order.shippingAddress.fullName}
                </p>
                <p>{order.shippingAddress.address}</p>
                <p>
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.postalCode}
                </p>
                <p>{order.shippingAddress.phone}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <p className="text-gray-600 text-sm">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(item.price)}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Total: {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Total */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-green-600">
                {formatCurrency(order.total)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
              Download Invoice
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-300 transition-all duration-300">
              Track Order
            </button>
            {order.status === "pending" && (
              <button className="bg-white hover:bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold border border-red-300 transition-all duration-300">
                Cancel Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
