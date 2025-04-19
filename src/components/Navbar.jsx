import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-[#FBEC13] hover:bg-blue text-[#010227]  rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-[#010227]  shadow-md p-5 md:px-16 py-6 overflow-hidden">
    //   <div className="container mx-auto flex justify-between items-center ">
    //     {/* Left: Logo */}
    //     <div className=" ">
    //       <img className="w-[20%] md:w-[10%]" src="Logo.png" alt="Logo" />
    //     </div>

    //     {/* Center: About, Ministry, Contact */}
    //     <ul className="hidden lg:flex md:flex gap-6 text-[#fff] hover:text-[#FEDF11]">
    //       <li>
    //         <a href="/home" className="hover:text-blue-500">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/about" className="hover:text-blue-500">
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/contact" className="hover:text-blue-500">
    //           Contact
    //         </a>
    //       </li>
    //     </ul>

    //     {/* Right: Give & Receive Jesus */}
    //     <div className="hidden lg:flex md:flex gap-4">
    //       <Button>
    //         <a href="/give">Give</a>
    //       </Button>
    //       <Button>
    //         <a href="/receive">Receive Jesus</a>
    //       </Button>
    //     </div>

    //     {/* Mobile Menu Button */}
    //     <div className="lg:hidden md:hidden">
    //       <Button onClick={() => setIsOpen(!isOpen)}>
    //         {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    //       </Button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div
    //     className={`absolute top-16 left-0 w-full h-screen bg-[#010227] text-[#fff] shadow-md p-4 transition-all duration-300 ${
    //       isOpen ? "block" : "hidden"
    //     }`}
    //   >
    //     <ul className="flex flex-col gap-4 text-left pl-2 text-[#fff] hover:text-[#FEDF11]">
    //       <li>
    //         <a href="/about" className="hover:text-blue-500">
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/ministry" className="hover:text-blue-500">
    //           Ministry
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/contact" className="hover:text-blue-500">
    //           Contact
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/give" className="hover:text-blue-500">
    //           Give
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/receive" className="hover:text-blue-500">
    //           Receive Jesus
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="bg-[#010227] shadow-md p-5 md:px-16 py-6 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex w-full items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img className="w-[60px] md:w-[80px]" src="Logo.png" alt="Logo" />
          </div>

          {/* Center: Links */}
          <ul className="hidden md:flex flex-1 justify-center gap-6 text-[#fff]">
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
          </ul>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center gap-4 ">
            <Button>
              <a href="/give">Give</a>
            </Button>
            <Button>
              <a href="/receive">Receive Jesus</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#010227] text-[#fff] shadow-md p-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-left text-[#fff]">
          <li>
            <a href="/home" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <a href="/give" className="hover:text-blue-500">
              Give
            </a>
          </li>
          <li>
            <a href="/receive" className="hover:text-blue-500">
              Receive Jesus
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
