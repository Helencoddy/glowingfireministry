// // src/components/Navbar.jsx
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";

// function Button({ children, onClick, className = "" }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 bg-[#FBEC13] hover:bg-blue-500 text-[#010227] rounded ${className}`}
//     >
//       {children}
//     </button>
//   );
// }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#010227] shadow-md px-5 md:px-16 py-6 overflow-hidden relative">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex w-full items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img
//                 className="w-[60px] md:w-[80px] cursor-pointer"
//                 src="/Logo.png"
//                 alt="Logo"
//               />
//             </Link>
//           </div>

//           {/* Nav Links */}
//           <ul className="hidden md:flex flex-1 justify-center gap-6 text-white">
//             <li>
//               <Link to="/home" className="hover:text-[#FBEC13]">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-[#FBEC13]">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-[#FBEC13]">
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             <Link to="/give">
//               <Button>Give</Button>
//             </Link>
//             <Link to="/receive">
//               <Button>Receive Jesus</Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <Button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-[#010227] text-white shadow-md p-4 z-10">
//           <ul className="flex flex-col gap-4">
//             <li>
//               <Link
//                 to="/home"
//                 className="hover:text-[#FBEC13]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="hover:text-[#FBEC13]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:text-[#FBEC13]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/give"
//                 className="hover:text-[#FBEC13]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Give
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/receive"
//                 className="hover:text-[#FBEC13]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Receive Jesus
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
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
          <li><a href="/home" className="hover:text-[#FBEC13]">Home</a></li>
          <li><a href="/about" className="hover:text-[#FBEC13]">About</a></li>
          <li><a href="/contact" className="hover:text-[#FBEC13]">Contact</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/give" className="text-[#010227] bg-[#FBEC13] px-4 py-2 rounded">Give</a>
          <a href="/receive" className="text-[#010227] bg-[#FBEC13] px-4 py-2 rounded">Receive Jesus</a>
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
      className={`md:hidden absolute top-20 left-0 w-full bg-[#010227] text-[#fff] shadow-md p-4 transition-all duration-300 z-10 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <ul className="flex flex-col gap-4 text-left">
        <li><a href="/home" className="hover:text-[#FBEC13]">Home</a></li>
        <li><a href="/about" className="hover:text-[#FBEC13]">About</a></li>
        <li><a href="/contact" className="hover:text-[#FBEC13]">Contact</a></li>
        <li><a href="/give" className="hover:text-[#FBEC13]">Give</a></li>
        <li><a href="/receive" className="hover:text-[#FBEC13]">Receive Jesus</a></li>
      </ul>
    </div>
  </nav>
  );
}
