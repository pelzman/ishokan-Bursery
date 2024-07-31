

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Handles */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p className="text-gray-400">Email: info@idilemajemufoundation.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Address: 123 Idile Majemu, Isokan, Ile-Ife, Osun, Nigeria.</p>
        </div>
      </div>
    </footer>
    )
}

export default Footer