import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-[#0B0712] text-white py-10">
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <img
              src="/Logo.png"
              alt="Glowing fire Ministry Logo"
              className="w-20 mb-4"
            />
            <p className="text-gray-400">
              Glowing Fire Christian Ministry is a ministry saddled with the
              mandate to reclaim, restore, and revive this generation.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok />
              </a>
            </div>
          </div>

          {/* Middle Section - Contact Info */}
          <div>
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="mt-4 space-y-3">
              <p className="flex items-center gap-2">
                <FaEnvelope className="" />
                <span>info@theglowingfireministry.com</span>
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="" />
                <span>
                  <strong>Glowing Fire Ministry</strong>
                  <br />
                  Plot 22C, Cluster 3, River Park Estate, Lugbe, Abuja, Nigeria.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaRegClock className="" />
                <span>Monday-Friday: 9am - 4pm</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="" />
                <span>+234 913 134 8346</span>
              </p>
            </div>
          </div>

          {/* Right Section - Useful Links & Profile */}
          <div>
            <h3 className="font-bold text-lg">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About The Ministry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Media Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Join The Tribe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Give Online
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Join The M2G Academy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Volunteer
                </a>
              </li> */}
            </ul>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center md:col-span-1">
            <img
              src="/Prophet.jpg"
              alt="Prophet Akingbade"
              className="w-40 h-40 object-cover "
            />
            <h3 className="font-bold mt-2">Prophet Akingbade</h3>
            <p className="text-gray-400 text-center">
              Follower of Christ, Husband, Father, Evangelist and Author.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="hidden md:flex mt-10 border-t border-gray-700 pt-4  justify-between items-center text-center text-gray-400 text-sm">
          <p className="text-[9px]">
            Copyright © 2024 Anazao Generation Connect a.k.a The Isaac Oyedepo
            Evangelistic Ministries
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              About The Ministry
            </a>
            <a href="#" className="hover:text-white">
              Media Resources
            </a>
            <a href="#" className="hover:text-white">
              Events
            </a>
            <a href="#" className="hover:text-white">
              Store
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Join Tribe
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
