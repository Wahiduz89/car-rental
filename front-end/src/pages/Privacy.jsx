import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 py-6 px-6">
            <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-blue-100">Last Updated: April 7, 2025</p>
          </div>
          
          <div className="px-6 py-8 space-y-8">
            {/* Introduction Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
              <p className="mt-3 text-gray-600">
                Welcome to SpeedWheels Car Rental. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our website
                and services.
              </p>
            </section>
            
            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">2. Information We Collect</h2>
              <div className="mt-3 text-gray-600 space-y-3">
                <h3 className="font-medium text-gray-700">2.1 Personal Information</h3>
                <p>We may collect the following personal information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Identification details (driver's license, passport)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Demographic information (age, nationality)</li>
                  <li>Driving history and preferences</li>
                </ul>
                
                <h3 className="font-medium text-gray-700 mt-4">2.2 Technical Information</h3>
                <p>When you use our website, we automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Device information (IP address, browser type, device type)</li>
                  <li>Usage data (pages visited, time spent, clicks)</li>
                  <li>Location data (with your permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>
            
            {/* How We Use Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">3. How We Use Your Information</h2>
              <div className="mt-3 text-gray-600">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Process and manage vehicle rentals and reservations</li>
                  <li>Verify your identity and driving eligibility</li>
                  <li>Process payments and issue refunds</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send rental confirmations, updates, and reminders</li>
                  <li>Improve our services and website functionality</li>
                  <li>Personalize your experience and recommend relevant offerings</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </div>
            </section>
            
            {/* Information Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">4. Information Sharing and Disclosure</h2>
              <div className="mt-3 text-gray-600 space-y-3">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment processors to complete transactions</li>
                  <li>Insurance providers for coverage verification</li>
                  <li>Service providers who assist with our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for joint offerings (with your consent)</li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </section>
            
            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">5. Data Security</h2>
              <p className="mt-3 text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction. These include encryption, secure payment 
                processing, regular security assessments, and strict access controls for our staff.
              </p>
            </section>
            
            {/* Cookies Policy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">6. Cookies and Tracking Technologies</h2>
              <div className="mt-3 text-gray-600">
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience,
                  analyze website traffic, and personalize content. You can control cookies through your browser settings.
                </p>
                <div className="mt-3 bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-700">Types of cookies we use:</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies for targeted advertising</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* User Rights */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">7. Your Privacy Rights</h2>
              <div className="mt-3 text-gray-600">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability (receiving your data in a structured format)</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us at privacy@speedwheels.example.com.
                </p>
              </div>
            </section>
            
            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">8. Children's Privacy</h2>
              <p className="mt-3 text-gray-600">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>
            
            {/* International Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">9. International Data Transfers</h2>
              <p className="mt-3 text-gray-600">
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have different data protection laws. We ensure appropriate safeguards are in place to
                protect your information when transferred internationally.
              </p>
            </section>
            
            {/* Policy Changes */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">10. Changes to This Privacy Policy</h2>
              <p className="mt-3 text-gray-600">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.
                We will post the updated policy on this page with a revised "Last Updated" date. We encourage you to review
                this policy periodically.
              </p>
            </section>
            
            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800">11. Contact Us</h2>
              <div className="mt-3 text-gray-600">
                <p>If you have questions about this privacy policy or our privacy practices, please contact us at:</p>
                <div className="mt-3 bg-gray-50 p-4 rounded-md">
                  <p className="font-medium">SpeedWheels Car Rental</p>
                  <p>Email: privacy@speedwheels.example.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Main Street, Anytown, ST 12345</p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2025 SpeedWheels Car Rental. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;