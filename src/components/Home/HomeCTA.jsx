import React from "react";

const HomeCTA = () => {
  return (
    <div className="w-full md:w-[92%] mt-16 flex justify-center mx-auto bg-[url('/Crowd.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center bg-black/50 px-2 py-10 rounded-xl">
        <div className="flex flex-row justify-center items-center gap-14 px-8">
          <div className="w-full md:w-[60%] text-white">
            <h4 className="text-center md:text-left text-lg md:text-[2.9rem] leading-[50px] font-bold">
              Embrace God's boundless love. Start your transformative journey
              now
            </h4>
          </div>
          <div className="w-full md:w-[40%]">
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
