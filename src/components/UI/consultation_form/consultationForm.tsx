"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
  message: string;
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold  mb-4 md:mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Get Free Consultation
            </h3>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all duration-200"
                  placeholder="+254 7XX XXX XXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all duration-200"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="solar">Solar Energy</option>
                  <option value="biogas">Biogas Systems</option>
                  <option value="lpg">LPG Solutions</option>
                  <option value="borehole">Borehole & Water</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm md:text-base">
                      +254 724 796 406
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm mt-1">
                      24/7 Support Available
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm md:text-base">
                      info@lidienventures.com
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm mt-1">
                      Email us anytime
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm md:text-base">
                      Afya Business Plaza
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm mt-1">
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 text-lg mb-3">
                Office Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between items-center py-1 border-b border-gray-200">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-200">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
