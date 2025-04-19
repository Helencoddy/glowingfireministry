import React from "react";

const HomeCTA = () => {
  return (
    <div className="relative w-full md:w-[92%] mt-24 flex justify-center mx-auto bg-[url('/Crowd.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/80 rounded-xl z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center px-2 py-10 w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-14 px-3 md:px-8 w-full">
          {/* Text section (70%) */}
          <div className="w-full md:w-[68%] text-white">
            <h4 className="text-center md:text-left text-[1.8rem] md:text-[2.9rem] md:leading-[50px] font-bold">
              Embrace God's boundless love. Start your transformative journey
              now
            </h4>
          </div>
          {/* Button section (30%) */}
          <div className="w-full flex justify-center md:block md:justify-normal md:w-[33%]">
            <button className="bg-white text-black w-[60%] py-5 rounded-full">
              Receive Jesus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
