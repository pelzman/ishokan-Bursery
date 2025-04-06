const ToDonate = () => {
  return (
    <div className="pt-[60px] px-4 lg:px-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-6">
        Support Our Cause 💙
      </h1>

      {/* Description */}
      <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Your generous donations help us make a difference in the lives of those in need. Join us in our mission to create a brighter future for everyone.
      </p>

      {/* Donation Form */}
      <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          Make a Donation
        </h2>
        <form>
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Donation Amount */}
          <div className="mb-6">
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount (e.g., 50)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg"
          >
            Donate Now
          </button>
        </form>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-700 text-lg">
          Want to learn more about our mission?{' '}
          <a href="/about" className="text-blue-600 font-semibold hover:underline">
            Click here
          </a>.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-600">
        <p>Thank you for your support! Together, we can make a difference. 🌟</p>
      </footer>
    </div>
  );
};

export default ToDonate;