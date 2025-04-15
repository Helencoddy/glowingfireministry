import React from "react";

const CTABook = () => {
  return (
    <div className="">
      {/* Book CTA Section */}
      <div className="bg-white bg-opacity-90 px-5 md:px-16 py-20 md:py-32 flex flex-col md:flex-row gap-5 md:gap-10 w-full overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[50%]">
          <img
            src="Book.png"
            alt="Left Section"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="p-2 md:p-8 flex flex-col w-full md:w-[50%]">
          <h2 className="text-3xl font-bold text-gray-800">
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
