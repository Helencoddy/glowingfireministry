import React, { useState, useEffect } from "react";
// import { AnimatePresences, motion} from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageOne from "../";
const images = [
  "https://source.unsplash.com/1600x900/?nature,water",
  "https://source.unsplash.com/1600x900/?mountains",
  "https://source.unsplash.com/1600x900/?forest",
  "https://source.unsplash.com/1600x900/?sunset",
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
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
      >
        <FaChevronLeft size={32} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
      >
        <FaChevronRight size={32} />
      </button>
    </div>
  );
}
