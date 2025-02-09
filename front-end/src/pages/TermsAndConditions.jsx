import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Car Rental Terms &amp; Conditions
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Section 1 */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to [Car Rental Name]. By accessing and using our website and services, you agree to be bound by these Terms &amp; Conditions. Please read them carefully.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. License to Use Our Services</h2>
              <p className="text-gray-700">
                We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes only.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Booking and Payment</h2>
              <p className="text-gray-700 mb-2">
                All car rental bookings are subject to availability and confirmation. Full payment is required at the time of booking.
              </p>
              <p className="text-gray-700">
                Prices, promotions, and discounts are subject to change without prior notice.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700">
                You are responsible for providing accurate information during the booking process and ensuring compliance with all local and national laws while using our services.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700">
                [Car Rental Name] shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Governing Law</h2>
              <p className="text-gray-700">
                These Terms &amp; Conditions are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved exclusively in the courts located within that jurisdiction.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms &amp; Conditions, please contact us at{" "}
                <a
                  href="mailto:support@carrental.com"
                  className="text-blue-600 hover:underline"
                >
                  support@carrental.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} [Car Rental Name]. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
