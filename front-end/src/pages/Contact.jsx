import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY'; // Replace with your Web3Forms key

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formDataObj = new FormData();
    formDataObj.append('access_key', WEB3FORMS_ACCESS_KEY);
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('subject', formData.subject);
    formDataObj.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const json = await response.json();
      
      if (json.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(json.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 md:p-12 lg:p-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions? We're here to help!
          </p>
        </div>

        {status && (
          <div className={`mb-8 p-4 rounded-lg text-center ${
            status.includes('success') ? 
            'bg-green-100 text-green-700' : 
            'bg-red-100 text-red-700'
          }`}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <input 
            type="hidden" 
            name="access_key" 
            value={WEB3FORMS_ACCESS_KEY} 
          />
          
          {/* Honeypot for spam prevention */}
          <input 
            type="checkbox" 
            name="botcheck" 
            className="hidden" 
            style={{ display: 'none' }}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
                placeholder=" "
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 top-3 text-gray-500 transition-all pointer-events-none
                          peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600
                          text-sm bg-white px-1"
              >
                Full Name
              </label>
              <svg className="w-5 h-5 absolute right-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
                placeholder=" "
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-3 text-gray-500 transition-all pointer-events-none
                          peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600
                          -top-3 text-sm bg-white px-1"
              >
                Email Address
              </label>
              <svg className="w-5 h-5 absolute right-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label 
              htmlFor="subject" 
              className="absolute left-4 top-3 text-gray-500 transition-all pointer-events-none
                        peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600
                        -top-3 text-sm bg-white px-1"
            >
              Subject
            </label>
            <svg className="w-5 h-5 absolute right-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent peer resize-none"
              placeholder=" "
            />
            <label 
              htmlFor="message" 
              className="absolute left-4 top-3 text-gray-500 transition-all pointer-events-none
                        peer-placeholder-shown:text-base peer-placeholder-shown:top-3
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600
                        -top-3 text-sm bg-white px-1"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg
                      font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all
                      focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;