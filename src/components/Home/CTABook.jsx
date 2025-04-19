import { useEffect, useState } from "react";
import Book from "../Home/assetsbook/WhatsApp Image 2025-04-15 at 18.29.11_7509c677.jpg";
import Book2 from "../Home/assetsbook/WhatsApp Image 2025-04-15 at 18.29.12_2ef0efa1.jpg";
import Book3 from "../Home/assetsbook/WhatsApp Image 2025-04-15 at 18.29.12_7ca4add1.jpg";

const images = [Book, Book2, Book3];

const CTABook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* Book CTA Section */}
      <div className="bg-white bg-opacity-90 px-5 md:px-16 pt-10 md:pt-32 flex flex-col justify-center items-center md:flex-row gap-5 md:gap-10 w-full overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[50%] relative">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Side Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700"
          >
            &rarr;
          </button>
        </div>

        {/* Right Text Section */}
        <div className="p-2 md:p-8 flex flex-col w-full md:w-[50%]">
          <h2 className="w-full md:w-[80%] text-[2.2rem] md:text-[3rem] font-bold text-gray-800">
            Echoes of Truth: Media Center
          </h2>
          <p className="text-gray-600 mt-4">
            Immerse yourself in the transformative power of our multimedia
            resources. From sermons to testimonials, our Media Center amplifies
            the echoes of truth, guiding hearts towards revival, restoration,
            and redemption. Explore, engage, and be inspired.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTABook;
