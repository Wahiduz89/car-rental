import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Header Section */}
          <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-3">Car Rental Terms & Conditions</h1>
              <p className="opacity-90">
                Effective: {new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}
              </p>
            </div>
          </header>

          {/* Main Content */}
          <div className="p-8">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-gray-600 text-lg mb-8">
                These Terms and Conditions govern your use of our car rental services. 
                Please read them carefully before making a reservation.
              </p>
            </section>

            {/* Key Sections */}
            <div className="space-y-12">
              {/* Eligibility */}
              <section className="border-l-4 border-blue-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">1. Eligibility</h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-xl mr-3">•</span>
                    <div>
                      <h3 className="font-semibold mb-1">Age Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Minimum 21 years for standard vehicles</li>
                        <li>Minimum 25 years for premium/luxury vehicles</li>
                        <li>Young driver fee: $15/day under 25</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Pricing & Fees */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Pricing & Fees</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Standard Charges</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Base daily rate</span>
                        <span className="font-medium">$49.99</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Security deposit</span>
                        <span className="font-medium">$500.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-3">Additional Fees</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Late return (per hour)</span>
                        <span className="font-medium">1.5× hourly rate</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Cleaning fee</span>
                        <span className="font-medium">$150.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prohibited Uses */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Prohibited Uses</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Vehicle Restrictions</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>No off-road driving</li>
                      <li>No towing without approval</li>
                      <li>No smoking in vehicles</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Legal Restrictions</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>No illegal activities</li>
                      <li>No unauthorized drivers</li>
                      <li>No alcohol/drug use</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Insurance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Insurance</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left">Coverage Type</th>
                        <th className="p-3 text-left">Included</th>
                        <th className="p-3 text-left">Optional Upgrade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">Collision Damage</td>
                        <td className="p-3">$500 deductible</td>
                        <td className="p-3">$0 deductible ($15/day)</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-3">Liability</td>
                        <td className="p-3">$1M coverage</td>
                        <td className="p-3">$2M coverage ($5/day)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-2">Customer Support</h3>
                    <p className="text-gray-600">
                      📞 +1 (800) 123-4567<br />
                      ✉️ support@rental.com<br />
                      🕒 24/7 Availability
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Legal Department</h3>
                    <p className="text-gray-600">
                      ✉️ legal@rental.com<br />
                      📍 123 Rental St, Car City<br />
                      📠 +1 (800) 765-4321
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t p-8 bg-gray-50">
            <div className="text-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} Premium Car Rentals. All rights reserved.</p>
              <p className="mt-2">Subject to change without notice. Verify terms at time of rental.</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default TermsAndConditions;