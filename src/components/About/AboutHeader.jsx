import React from "react";

const AboutHeader = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[350px] bg-[url('/Crowd.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden mx-auto">
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/90 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-3xl font-bold"></div>
    </div>
  );
};

export default AboutHeader;
