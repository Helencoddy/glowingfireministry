import React from "react";

const HomeCTA = () => {
  return (
    <div className="w-full md:w-[80%] flex justify-center mx-auto bg-[url('/Crowd.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center bg-black/50 p-4">
        <div className="w-[70%] text-white">
          <h4 className="text-lg md:text-[2rem] font-semibold">
            Embrace God's boundless love. Start your transformative journey now
          </h4>
        </div>
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Receive Jesus
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
