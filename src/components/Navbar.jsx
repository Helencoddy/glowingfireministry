import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#010227] shadow-md p-5 md:px-16 py-6 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img className="w-[60px] md:w-[80px]" src="Logo.png" alt="Logo" />
            </a>

          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex flex-1 justify-center gap-6 text-[#fff]">
            <li>
              <a href="/" className="hover:text-[#FBEC13]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#FBEC13]">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#FBEC13]">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/give"
              className="text-[#010227] bg-[#FBEC13] px-4 py-2 rounded"
            >
              Give
            </a>
            <a
              href="/receive"
              className="text-[#010227] bg-[#FBEC13] px-4 py-2 rounded"
            >
              Receive Jesus
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 h-full w-full bg-[#010227] text-[#fff] shadow-md p-4 transition-all duration-300 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-left">
          <li>
            <a href="/home" className="hover:text-[#FBEC13]">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#FBEC13]">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#FBEC13]">
              Contact
            </a>
          </li>
          <li>
            <a href="/give" className="hover:text-[#FBEC13]">
              Give
            </a>
          </li>
          <li>
            <a href="/receive" className="hover:text-[#FBEC13]">
              Receive Jesus
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

