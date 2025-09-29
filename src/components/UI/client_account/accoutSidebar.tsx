// app/my-account/components/AccountSidebar.tsx
import React from "react";

interface AccountSidebarProps {
  activeTab: "overview" | "orders" | "profile";
  onTabChange: (tab: "overview" | "orders" | "profile") => void;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  activeTab,
  onTabChange,
}) => {
  const menuItems = [
    { key: "overview" as const, label: "Account Overview", icon: "📊" },
    { key: "orders" as const, label: "Order History", icon: "📦" },
    { key: "profile" as const, label: "Profile Settings", icon: "👤" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8 border border-gray-100">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onTabChange(item.key)}
            className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-200 ${
              activeTab === item.key
                ? "bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 font-semibold border border-orange-200 shadow-sm"
                : "text-gray-600 hover:bg-gray-50 hover:shadow-sm"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Support Card */}
      <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <div className="text-center">
          <div className="text-2xl mb-2">💬</div>
          <h4 className="font-semibold text-blue-900 text-sm mb-1">
            Need Help?
          </h4>
          <p className="text-blue-700 text-xs mb-3">
            Our support team is here for you
          </p>
          <button className="w-full bg-white text-blue-600 hover:bg-blue-50 text-sm font-medium py-2 px-4 rounded-lg border border-blue-200 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
