// app/my-account/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/UI/navbar/navbar";
import Link from "next/link";
import { CartItem } from "@/store/cart/cart";
import { Order, User } from "./clientTypes";

// Mock data - replace with actual API calls
const mockUser: User = {
  id: "user-001",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "0715-130-130",
  joinDate: "2023-01-15",
};

const mockOrders: Order[] = [
  {
    id: "order-001",
    orderNumber: "CP-SOL-23001",
    date: "2024-01-15",
    status: "completed",
    total: 150000,
    items: [
      {
        id: "cart-001",
        productId: "sol-gen-001",
        title: "Solar Power Generation System",
        price: 150000,
        quantity: 1,
        image: "/images/products/solar_system.jpg",
        category: "Solar Power Solutions",
      },
    ],
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main Street",
      city: "Nairobi",
      postalCode: "00100",
      phone: "0715-130-130",
    },
  },
  {
    id: "order-002",
    orderNumber: "CP-SOL-23002",
    date: "2024-02-20",
    status: "processing",
    total: 250000,
    items: [
      {
        id: "cart-002",
        productId: "sol-backup-001",
        title: "Power Backup Solutions",
        price: 250000,
        quantity: 1,
        image: "/images/products/solar_system.jpg",
        category: "Backup Systems",
      },
    ],
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main Street",
      city: "Nairobi",
      postalCode: "00100",
      phone: "0715-130-130",
    },
  },
  {
    id: "order-003",
    orderNumber: "CP-SOL-23003",
    date: "2024-03-10",
    status: "pending",
    total: 180000,
    items: [
      {
        id: "cart-003",
        productId: "sol-pump-001",
        title: "Solar Water Pump Solution",
        price: 180000,
        quantity: 1,
        image: "/images/products/solar_system.jpg",
        category: "Water Solutions",
      },
    ],
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main Street",
      city: "Nairobi",
      postalCode: "00100",
      phone: "0715-130-130",
    },
  },
];

export default function ClientAccountPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "profile">(
    "overview"
  );
  const [user] = useState<User>(mockUser);
  const [orders] = useState<Order[]>(mockOrders);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-orange-500 font-semibold">My Account</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Account
            </h1>
            <p className="text-gray-600">Welcome back, {user.name}!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${
                      activeTab === "overview"
                        ? "bg-orange-50 text-orange-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    📊 Account Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${
                      activeTab === "orders"
                        ? "bg-orange-50 text-orange-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    📦 My Orders
                  </button>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${
                      activeTab === "profile"
                        ? "bg-orange-50 text-orange-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    👤 Profile Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Account Overview */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Account Overview
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Contact Information
                        </h3>
                        <p className="text-gray-600">{user.name}</p>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600">{user.phone}</p>
                        <button className="text-orange-500 hover:text-orange-600 mt-2 text-sm">
                          Edit
                        </button>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Account Details
                        </h3>
                        <p className="text-gray-600">
                          Member since {formatDate(user.joinDate)}
                        </p>
                        <p className="text-gray-600">
                          {orders.length} orders placed
                        </p>
                      </div>
                    </div>

                    {/* Recent Orders Preview */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Recent Orders
                      </h3>
                      {orders.slice(0, 3).map((order) => (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-lg p-4 mb-3"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold">
                                Order #{order.orderNumber}
                              </p>
                              <p className="text-sm text-gray-600">
                                {formatDate(order.date)}
                              </p>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-600">
                            {order.items.length} item(s)
                          </p>
                          <p className="font-semibold text-gray-900">
                            {formatCurrency(order.total)}
                          </p>
                        </div>
                      ))}

                      {orders.length === 0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">No orders yet</p>
                          <Link
                            href="/solutions"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                          >
                            Browse Solutions
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* My Orders */}
              {activeTab === "orders" && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    My Orders
                  </h2>

                  {orders.length > 0 ? (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          {/* Order Header */}
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <p className="font-semibold text-lg">
                                Order #{order.orderNumber}
                              </p>
                              <p className="text-gray-600">
                                Placed on {formatDate(order.date)}
                              </p>
                            </div>
                            <div className="flex items-center space-x-4 mt-2 md:mt-0">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                                  order.status
                                )}`}
                              >
                                {order.status.charAt(0).toUpperCase() +
                                  order.status.slice(1)}
                              </span>
                              <p className="font-semibold text-lg">
                                {formatCurrency(order.total)}
                              </p>
                            </div>
                          </div>

                          {/* Order Items */}
                          <div className="border-t border-gray-200 pt-4">
                            <h4 className="font-semibold text-gray-900 mb-3">
                              Items
                            </h4>
                            <div className="space-y-3">
                              {order.items.map((item: CartItem) => (
                                <div
                                  key={item.id}
                                  className="flex items-center space-x-4"
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
                                    <p className="text-gray-600 text-sm">
                                      {item.category}
                                    </p>
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
                          <div className="border-t border-gray-200 pt-4 mt-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Shipping Address
                            </h4>
                            <p className="text-gray-600">
                              {order.shippingAddress.fullName}
                            </p>
                            <p className="text-gray-600">
                              {order.shippingAddress.address}
                            </p>
                            <p className="text-gray-600">
                              {order.shippingAddress.city},{" "}
                              {order.shippingAddress.postalCode}
                            </p>
                            <p className="text-gray-600">
                              {order.shippingAddress.phone}
                            </p>
                          </div>

                          {/* Order Actions */}
                          <div className="border-t border-gray-200 pt-4 mt-4 flex justify-end space-x-3">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300">
                              View Details
                            </button>
                            {order.status === "pending" && (
                              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300">
                                Cancel Order
                              </button>
                            )}
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
                      <p className="text-gray-600 mb-6">
                        Start exploring our solar solutions and place your first
                        order!
                      </p>
                      <Link
                        href="/solutions"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
                      >
                        Browse Solutions
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Profile Settings
                  </h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue={user.phone}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
