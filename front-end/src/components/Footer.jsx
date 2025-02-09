import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white">Car Rental Co.</h3>
            <p className="mt-4 text-gray-400">
              Drive your dreams with our wide selection of vehicles. Reliable, safe, and affordable car rental solutions for every journey.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Facebook */}
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,12A10,10,0,1,0,10.89,21.95V14.9H8.33V12h2.56V9.77c0-2.53,1.5-3.93,3.8-3.93a15.17,15.17,0,0,1,2.24.2V8.3H15.46c-1.24,0-1.63.78-1.63,1.57V12h2.78l-.44,2.9H13.83v7.05A10,10,0,0,0,22,12Z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6c-.77.35-1.6.58-2.46.69a4.3,4.3,0,0,0,1.88-2.37,8.59,8.59,0,0,1-2.72,1,4.28,4.28,0,0,0-7.3,3.9,12.13,12.13,0,0,1-8.8-4.46,4.27,4.27,0,0,0,1.32,5.7,4.21,4.21,0,0,1-1.94-.54v.06a4.28,4.28,0,0,0,3.43,4.19,4.28,4.28,0,0,1-1.93.07,4.28,4.28,0,0,0,4,3,8.58,8.58,0,0,1-5.31,1.83A8.72,8.72,0,0,1,2,18.16a12.1,12.1,0,0,0,6.56,1.92c7.87,0,12.18-6.53,12.18-12.18,0-.19,0-.38,0-.57A8.66,8.66,0,0,0,22.46,6Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.584.012,4.85.07a6.577,6.577,0,0,1,4.633,1.697,6.577,6.577,0,0,1,1.697,4.633c.058,1.266.07,1.65.07,4.85s-.012,3.584-.07,4.85a6.577,6.577,0,0,1-1.697,4.633,6.577,6.577,0,0,1-4.633,1.697c-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07a6.577,6.577,0,0,1-4.633-1.697,6.577,6.577,0,0,1-1.697-4.633c-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85A6.577,6.577,0,0,1,2.52,3.926,6.577,6.577,0,0,1,7.153,2.23c1.266-.058,1.65-.07,4.85-.07m0-2.16C8.735,0,8.332.013,7.052.072a8.74,8.74,0,0,0-6.21,2.557A8.74,8.74,0,0,0,.072,7.052C.013,8.332,0,8.735,0,12s.013,3.668.072,4.948a8.74,8.74,0,0,0,2.557,6.21A8.74,8.74,0,0,0,7.052,23.928C8.332,23.987,8.735,24,12,24s3.668-.013,4.948-.072a8.74,8.74,0,0,0,6.21-2.557,8.74,8.74,0,0,0,2.557-6.21C23.987,15.668,24,15.265,24,12s-.013-3.668-.072-4.948a8.74,8.74,0,0,0-2.557-6.21A8.74,8.74,0,0,0,16.948.072C15.668.013,15.265,0,12,0ZM12,5.838A6.162,6.162,0,1,0,18.162,12,6.169,6.169,0,0,0,12,5.838Zm0,10.162A4,4,0,1,1,16,12,4,4,0,0,1,12,16ZM18.406,4.594A1.44,1.44,0,1,1,17,3.155,1.44,1.44,0,0,1,18.406,4.594Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447,20.452H17.4V14.91c0-1.333-.028-3.048-1.859-3.048-1.862,0-2.147,1.453-2.147,2.951v5.64H10.383V9h2.95v1.561h.042a3.233,3.233,0,0,1,2.907-1.598c3.106,0,3.681,2.044,3.681,4.704ZM5.337,7.433A1.708,1.708,0,1,1,7.045,5.725,1.707,1.707,0,0,1,5.337,7.433ZM6.833,20.452H3.84V9H6.833ZM22.225,0H1.771A1.771,1.771,0,0,0,0,1.771V22.225A1.771,1.771,0,0,0,1.771,24H22.225A1.771,1.771,0,0,0,24,22.225V1.771A1.771,1.771,0,0,0,22.225,0Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/cars" className="hover:text-white transition-colors duration-200">Our Cars</a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/faq" className="hover:text-white transition-colors duration-200">FAQ</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors duration-200">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="/support" className="hover:text-white transition-colors duration-200">Support</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter for the latest updates and special offers.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Car Rental Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
