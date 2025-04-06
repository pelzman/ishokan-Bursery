const Contact = () => {
  return (
    <div className="pt-[60px] px-4 lg:px-20 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-6">
        Get in Touch 💬
      </h1>

      {/* Description */}
      <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-2xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
            Contact Us
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

            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location Map */}
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center pt-6">
            Our Location
          </h2>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5262501310217!2d4.520188675291746!3d7.517431392495436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10383709244c6427%3A0x930bcf60a44908e7!2sObafemi%20Awolowo%20University!5e0!3m2!1sen!2suk!4v1743961585926!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-600">
        <p>📍 Idile Majemu Human Empowerment Foundation, Isokan, Ile-Ife, Osun, Nigeria.</p>
        <p>📧 isokanoaubursary@gmail.com | ☎️ +44 7770 565986</p>
      </footer>
    </div>
  );
};

export default Contact;