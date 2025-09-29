import {
  FiShield,
  FiAward,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";

const TrustSafetySection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Trust & Safety
          </h2>
          <p className="text-lg text-gray-600">
            Your peace of mind is our priority
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Safety Guaranteed */}
          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4 group-hover:shadow-md transition-all duration-200">
              <FiShield className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Safety Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              100% certified installations and equipment
            </p>
          </div>

          {/* Certified Installers */}
          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4 group-hover:shadow-md transition-all duration-200">
              <FiAward className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Certified Installers
            </h3>
            <p className="text-gray-600 text-sm">
              Professional, trained, and certified technicians
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4 group-hover:shadow-md transition-all duration-200">
              <FiClock className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">
              Round-the-clock customer service and emergency support
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="text-center group">
            <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-4 group-hover:shadow-md transition-all duration-200">
              <FiDollarSign className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 text-sm">
              No hidden fees, clear upfront pricing
            </p>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Certifications & Partnerships
            </h3>
            <p className="text-gray-600">
              Trusted by communities and certified by authorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                ISO 9001 Certified
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                Safety Standards Compliant
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                Approved By EPRA
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-800">
                NGO Partnership Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;
