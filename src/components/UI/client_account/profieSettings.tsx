"use client";
import React, { useState } from "react";
import { User } from "./clientTypes";

interface ProfileSettingsProps {
  user: User;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Profile Settings
        </h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          {isEditing ? "Cancel Editing" : "Edit Profile"}
        </button>
      </div>

      <form className="space-y-8">
        {/* Personal Information */}
        <div className="border-b border-gray-100 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user.name}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue={user.email}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue={user.phone}
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Password Change */}
        <div className="border-b border-gray-100 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Password Change
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <input
                type="password"
                disabled={!isEditing}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Preferences
          </h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-gray-700">Receive promotional emails</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                defaultChecked
              />
              <span className="text-gray-700">
                Receive order updates via SMS
              </span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                defaultChecked
              />
              <span className="text-gray-700">Subscribe to newsletter</span>
            </label>
          </div>
        </div>

        {isEditing && (
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-6 sm:px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md order-1 sm:order-2"
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileSettings;
