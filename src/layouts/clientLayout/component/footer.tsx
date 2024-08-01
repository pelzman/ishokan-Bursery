import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { MdContactMail, MdLocationPin, MdContactPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Handles */}
        <div className="items-top">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF className="w-6 h-6 hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaXTwitter className="w-6 h-6 hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <div className="flex items-start">
            <MdContactMail className="mr-2 mt-1" />
            <div>
              <p className="text-gray-400">Email:</p>
              <p className="text-gray-400">isokanoaubursary@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <MdContactPhone className="mr-2 mt-1" />
            <div>
              <p className="text-gray-400">Phone:</p>
              <p className="text-gray-400">(+44) 7770 565986</p>
              <p className="text-gray-400">(+234) 808 605 6491</p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <MdLocationPin className="mr-2 mt-1" />
            <div>
              <p className="text-gray-400">Address:</p>
              <p className="text-gray-400">
                Idile Majemu Human Empowerment Foundation,
              </p>
              <p className="text-gray-400">Isokan, Ile-Ife,</p>
              <p className="text-gray-400">Osun, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
