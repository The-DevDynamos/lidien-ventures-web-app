// app/my-account/components/AccountOverview.tsx
import React from "react";
import Link from "next/link";
import { User, Order } from "./clientTypes";

interface AccountOverviewProps {
  user: User;
  orders: Order[];
}

const AccountOverview: React.FC<AccountOverviewProps> = ({ user, orders }) => {
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

  const stats = [
    { label: "Total Orders", value: orders.length, color: "text-blue-600" },
    {
      label: "Completed",
      value: orders.filter((o) => o.status === "completed").length,
      color: "text-green-600",
    },
    {
      label: "Pending",
      value: orders.filter((o) => o.status === "pending").length,
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Contact Information
            </h3>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-200">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">👤</span>
              </div>
              <span className="text-gray-700">{user.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">📧</span>
              </div>
              <span className="text-gray-700">{user.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">📱</span>
              </div>
              <span className="text-gray-700">{user.phone}</span>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Account Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Member since</span>
              <span className="font-medium text-gray-900">
                {formatDate(user.joinDate)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Loyalty Points</span>
              <span className="font-medium text-orange-600">1,250</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Account Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          <Link
            href="/my_account?tab=orders"
            className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-200"
          >
            View All
          </Link>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.slice(0, 3).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <p className="font-semibold text-gray-900">
                      #{order.orderNumber}
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {formatDate(order.date)} • {order.items.length} item(s)
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-lg">
                    {formatCurrency(order.total)}
                  </p>
                  <button className="text-orange-500 hover:text-orange-600 text-sm font-medium mt-1">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-500 mb-4">No orders yet</p>
            <Link
              href="/solutions"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Browse Solutions
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOverview;
