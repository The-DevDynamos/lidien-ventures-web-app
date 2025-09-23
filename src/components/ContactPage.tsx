import React from "react";
import ConsultationForm from "./UI/consultation_form/consultationForm";

export default function ContactPage() {
  return (
    <div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get Free Consultation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact our experts today to discuss your needs and get personalized
            solutions.
          </p>
        </div>

        <ConsultationForm />
      </div>
    </div>
  );
}
