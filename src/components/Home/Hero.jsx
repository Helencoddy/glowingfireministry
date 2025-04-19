// File: components/ImageSlider.tsx

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/Exploit.jpg",
  "/Partner.jpg",
  "/Background.jpg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    // <div className="relative w-full h-screen overflow-hidden">
    //   <img
    //     src={images[index]}
    //     alt={`Slide ${index}`}
    //     className="absolute w-full h-full object-cover transition-opacity duration-500"
    //   />

    //   {/* Left Button */}
    //   <button
    //     onClick={prevImage}
    //     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
    //   >
    //     <FaChevronLeft size={32} />
    //   </button>

    //   {/* Right Button */}
    //   <button
    //     onClick={nextImage}
    //     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
    //   >
    //     <FaChevronRight size={32} />
    //   </button>
    // </div>
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[350px] overflow-hidden mx-auto ">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Left Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
