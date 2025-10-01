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
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 sticky top-8 border border-gray-100">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onTabChange(item.key)}
            className={`w-full flex items-center space-x-3 px-4 py-3 sm:py-4 rounded-xl transition-all duration-200 ${
              activeTab === item.key
                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 font-semibold border border-green-200 shadow-sm"
                : "text-gray-600 hover:bg-gray-50 hover:shadow-sm"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Support Card */}
      <div className="mt-6 sm:mt-8 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
        <div className="text-center">
          <div className="text-2xl mb-2">💬</div>
          <h4 className="font-semibold text-green-900 text-sm mb-1">
            Need Help?
          </h4>
          <p className="text-green-700 text-xs mb-3">
            Our support team is here for you
          </p>
          <button className="w-full bg-white text-green-600 hover:bg-green-50 text-sm font-medium py-2 px-4 rounded-lg border border-green-200 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
