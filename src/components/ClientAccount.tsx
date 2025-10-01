// app/my-account/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/UI/navbar/navbar";
import AccountSidebar from "./UI/client_account/accoutSidebar";
import AccountOverview from "./UI/client_account/accountOverview";
import OrderHistory from "./UI/client_account/orderHistory";
import ProfileSettings from "./UI/client_account/profieSettings";
import OrderDetailsModal from "./UI/client_account/orderDetailsModal";
import { User, Order } from "./UI/client_account/clientTypes";
import Link from "next/link";
import TrackOrderModal from "./UI/client_account/trackOrderModal";

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
];

export default function ClientAccountPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "profile">(
    "overview"
  );
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user] = useState<User>(mockUser);
  const [trackingOrder, setTrackingOrder] = useState<Order | null>(null);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [orders] = useState<Order[]>(mockOrders);

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleTrackOrder = (order: Order) => {
    setTrackingOrder(order);
    setIsTrackModalOpen(true);
  };

  const handleCloseTrackModal = () => {
    setIsTrackModalOpen(false);
    setTrackingOrder(null);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <AccountOverview
            user={user}
            orders={orders}
            onTrackOrder={handleTrackOrder}
            onViewDetails={handleViewDetails}
          />
        );
      case "orders":
        return (
          <OrderHistory
            orders={orders}
            onViewDetails={handleViewDetails}
            onTrackOrder={handleTrackOrder}
          />
        );
      case "profile":
        return <ProfileSettings user={user} />;
      default:
        return (
          <AccountOverview
            user={user}
            orders={orders}
            onViewDetails={handleViewDetails}
            onTrackOrder={handleTrackOrder}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-green-600 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-green-600 font-medium">My Account</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-6 sm:mb-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  My Account
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                  Welcome back, {user.name}!
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full self-start">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-700 font-medium">
                  Account Active
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AccountSidebar
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">{renderActiveTab()}</div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={handleCloseModal} />
      )}

      {/* Track Order Modal */}
      {isTrackModalOpen && trackingOrder && (
        <TrackOrderModal
          order={trackingOrder}
          onClose={handleCloseTrackModal}
        />
      )}
    </div>
  );
}
