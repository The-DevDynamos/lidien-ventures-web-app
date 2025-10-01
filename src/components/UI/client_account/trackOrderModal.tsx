// app/my-account/components/TrackOrderModal.tsx
import React, { useState, useEffect } from "react";
import { Order } from "./clientTypes";

interface TrackOrderModalProps {
  order: Order;
  onClose: () => void;
}

interface TrackingEvent {
  id: string;
  status:
    | "ordered"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";
  title: string;
  description: string;
  timestamp: string;
  location?: string;
  estimatedDelivery?: string;
}

const TrackOrderModal: React.FC<TrackOrderModalProps> = ({
  order,
  onClose,
}) => {
  const [currentStatus, setCurrentStatus] = useState<Order["status"]>(
    order.status
  );
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>("");

  // Generate tracking events based on order status
  const generateTrackingEvents = (): TrackingEvent[] => {
    const baseEvents: Omit<TrackingEvent, "id">[] = [
      {
        status: "ordered",
        title: "Order Placed",
        description: "We've received your order",
        timestamp: order.date,
        location: "Nairobi, Kenya",
      },
      {
        status: "confirmed",
        title: "Order Confirmed",
        description: "Your order has been confirmed",
        timestamp: new Date(
          new Date(order.date).getTime() + 2 * 60 * 60 * 1000
        ).toISOString(),
        location: "Order Processing Center",
      },
      {
        status: "processing",
        title: "Processing Order",
        description: "We're preparing your items",
        timestamp: new Date(
          new Date(order.date).getTime() + 24 * 60 * 60 * 1000
        ).toISOString(),
        location: "Warehouse Facility",
      },
      {
        status: "shipped",
        title: "Shipped",
        description: "Your order is on the way",
        timestamp: new Date(
          new Date(order.date).getTime() + 48 * 60 * 60 * 1000
        ).toISOString(),
        location: "In Transit",
        estimatedDelivery: new Date(
          new Date(order.date).getTime() + 5 * 24 * 60 * 60 * 1000
        ).toISOString(),
      },
      {
        status: "delivered",
        title: "Delivered",
        description: "Your order has been delivered",
        timestamp: new Date(
          new Date(order.date).getTime() + 5 * 24 * 60 * 60 * 1000
        ).toISOString(),
        location: order.shippingAddress.city,
      },
    ];

    // Filter events based on current order status
    const statusOrder: Order["status"][] = [
      "pending",
      "processing",
      "completed",
      "cancelled",
    ];
    const currentIndex = statusOrder.indexOf(currentStatus);

    return baseEvents
      .filter((_, index) => index <= currentIndex + 1) // Show current and next step
      .map((event, index) => ({
        ...event,
        id: `event-${index}`,
        timestamp: event.timestamp.split("T")[0], // Format date
      }));
  };

  const trackingEvents = generateTrackingEvents();
  const activeStep = trackingEvents.findIndex(
    (event) => event.status === currentStatus
  );

  // Generate tracking number and estimated delivery on component mount
  useEffect(() => {
    // Generate a realistic tracking number
    const generatedTracking = `TRK${order.orderNumber.replace("SOL-", "")}KE`;
    setTrackingNumber(generatedTracking);

    // Calculate estimated delivery (5 days from order date)
    const deliveryDate = new Date(
      new Date(order.date).getTime() + 5 * 24 * 60 * 60 * 1000
    );
    setEstimatedDelivery(
      deliveryDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [order]);

  const getStatusColor = (status: TrackingEvent["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "shipped":
        return "bg-blue-500";
      case "processing":
        return "bg-amber-500";
      case "confirmed":
        return "bg-purple-500";
      case "ordered":
        return "bg-gray-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: TrackingEvent["status"]) => {
    switch (status) {
      case "ordered":
        return "📦";
      case "confirmed":
        return "✅";
      case "processing":
        return "⚙️";
      case "shipped":
        return "🚚";
      case "delivered":
        return "🏠";
      case "cancelled":
        return "❌";
      default:
        return "📦";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Track Your Order</h2>
                <p className="text-green-100 opacity-90">
                  Order #{order.orderNumber}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-xl font-light">×</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Order Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Order Details
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Tracking Number:</span>{" "}
                      {trackingNumber}
                    </p>
                    <p>
                      <span className="font-medium">Order Date:</span>{" "}
                      {formatDate(order.date)}
                    </p>
                    <p>
                      <span className="font-medium">Total Amount:</span> KES{" "}
                      {order.total.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Delivery Information
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Est. Delivery:</span>{" "}
                      {estimatedDelivery}
                    </p>
                    <p>
                      <span className="font-medium">Delivery Address:</span>{" "}
                      {order.shippingAddress.city}
                    </p>
                    <p>
                      <span className="font-medium">Recipient:</span>{" "}
                      {order.shippingAddress.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Current Status
                  </h3>
                  <p className="text-gray-600 capitalize">{currentStatus}</p>
                </div>
                <div
                  className={`px-4 py-2 rounded-2xl font-semibold ${
                    currentStatus === "completed"
                      ? "bg-green-500 text-white"
                      : currentStatus === "processing"
                      ? "bg-amber-500 text-white"
                      : currentStatus === "pending"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {currentStatus.charAt(0).toUpperCase() +
                    currentStatus.slice(1)}
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Tracking History
              </h3>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-8">
                  {trackingEvents.map((event, index) => {
                    const isActive = index <= activeStep;
                    const isLast = index === trackingEvents.length - 1;

                    return (
                      <div
                        key={event.id}
                        className="relative flex items-start gap-4"
                      >
                        {/* Icon */}
                        <div
                          className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white ${
                            isActive
                              ? getStatusColor(event.status)
                              : "bg-gray-300"
                          } transition-all duration-300 transform hover:scale-110`}
                        >
                          <span className="text-lg">
                            {getStatusIcon(event.status)}
                          </span>

                          {/* Active Pulse Animation */}
                          {isActive && !isLast && (
                            <div className="absolute inset-0 rounded-2xl bg-current animate-ping opacity-20"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div
                          className={`flex-1 pt-1 ${
                            index === trackingEvents.length - 1 ? "" : "pb-8"
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4
                              className={`font-semibold ${
                                isActive ? "text-gray-900" : "text-gray-400"
                              }`}
                            >
                              {event.title}
                            </h4>
                            <span
                              className={`text-sm ${
                                isActive ? "text-gray-600" : "text-gray-400"
                              }`}
                            >
                              {formatDate(event.timestamp)}
                            </span>
                          </div>

                          <p
                            className={`mb-2 ${
                              isActive ? "text-gray-600" : "text-gray-400"
                            }`}
                          >
                            {event.description}
                          </p>

                          {event.location && (
                            <p
                              className={`text-sm ${
                                isActive ? "text-gray-500" : "text-gray-400"
                              }`}
                            >
                              📍 {event.location}
                            </p>
                          )}

                          {event.estimatedDelivery && isActive && (
                            <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-3">
                              <p className="text-sm text-blue-700 font-medium">
                                Estimated delivery:{" "}
                                {formatDate(event.estimatedDelivery)}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>📦</span>
                Delivery Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">
                    {order.shippingAddress.fullName}
                  </p>
                  <p>{order.shippingAddress.address}</p>
                  <p>
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.postalCode}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Contact Information
                  </p>
                  <p>📞 {order.shippingAddress.phone}</p>
                  <p>🕒 Delivery Hours: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>💬</span>
                Need Help with Your Delivery?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                If you have questions about your delivery or need to make
                changes, our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <span>📞</span>
                  Call Support
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-2xl font-semibold border border-gray-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <span>💬</span>
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderModal;
