import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-6 gap-8">
        {/* Left Section: Logo */}
        <div className="flex-1">
          <Image
            src="/images/Logo.png" // Replace with your logo path
            alt="Japura JobHub Logo"
            width={150} // Set the width for optimization
            height={48} // Set the height for optimization
            className="mb-4"
          />
          <p className="text-sm text-gray-300">
            Connecting graduates with their dream careers.
          </p>
        </div>

        {/* Middle Section: Contact Details */}
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="list-none text-sm space-y-2">
            {/* Combined Location */}
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-gray-400 mt-1" />
              <div>
                <span>Department of ICT</span>
                <br />
                <span>Faculty of Humanities and Social Sciences</span>
                <br />
                <span>University of Sri Jayewardenepura</span>
              </div>
            </li>
            {/* Email */}
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              <a
                href="mailto:ictdept@sjp.ac.lk"
                className="hover:underline text-gray-300"
              >
                ictdept@sjp.ac.lk
              </a>
            </li>
            {/* Phone */}
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-400" />
              <span>+94 11 280 2800</span>
            </li>
          </ul>
        </div>

        {/* Right Section: Quick Links */}
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="list-none text-sm space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Find Us</h3>
          <iframe
            title="University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3152256557387!2d79.9035846!3d6.852767000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8936886579%3A0xa8c769f4b86d85b5!2sUniversity%20of%20Sri%20Jayewardenepura!5e0!3m2!1sen!2slk!4v1734425352647!5m2!1sen!2slk"
            width="100%"
            height="150"
            style={{ border: "0", borderRadius: "8px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">© 2024 Japura JobHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
