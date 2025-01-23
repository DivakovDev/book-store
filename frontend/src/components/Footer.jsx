import footerLogo from "../assets/logo-svg.svg";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 py-10 text-white bg-gradient-to-r from-gradientStart to-gradientEnd">
      {/* Top Section */}
      <div className="container flex flex-col items-center justify-between gap-8 mx-auto md:flex-row">
        {/* Logo and Nav */}
        <div className="w-full md:w-1/2">
          <img
            src={footerLogo}
            alt="Logo"
            className="hidden mb-5 w-36 md:block"
          />
          <ul className="flex flex-col items-center justify-center gap-4 text-lg md:justify-normal md:items-start md:text-base md:flex-row">
            <li>
              <a
                href="#home"
                className="transition duration-500 hover:text-second"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition duration-500 hover:text-second"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition duration-500 hover:text-second"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition duration-500 hover:text-second"
              >
                Contact
              </a>
            </li>
            <li className="block md:hidden">
              <a
                href="#privacy"
                className="transition duration-500 hover:text-second"
              >
                Privacy Policy
              </a>
            </li>
            <li className="block md:hidden">
              <a
                href="#terms"
                className="transition duration-500 hover:text-second"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="hidden w-full md:block md:w-1/2">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news, and
            offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="px-6 py-2 transition duration-500 bg-primary hover:bg-second rounded-r-md hover:bg-primary-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container flex flex-col items-center justify-between mx-auto mt-10 border-gray-700 md:pt-6 md:border-t md:flex-row">
        {/* Privacy Links */}
        <ul className="hidden gap-6 mb-4 md:mb-0 md:flex">
          <li>
            <a
              href="#privacy"
              className="transition duration-500 hover:text-second"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="transition duration-500 hover:text-second"
            >
              Terms of Service
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:text-second"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:text-second"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-500 hover:text-second"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
