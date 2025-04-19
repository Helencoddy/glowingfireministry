import React from "react";

const ThirdSection = () => {
  return (
    <div className="mt-8">
      {/* video section */}
      <div className="flex flex-col gap-6 px-5 md:px-12 md:flex-row mt-20">
        {/* Left Image Section */}

        <div className="w-full h-full md:w-[50%] ">
          <iframe
            width="580"
            height="400"
            src="https://www.youtube.com/embed/-xem-KCuNGw"
            className="w-full h-[100px] md:w-[580px] md:h-[500px]"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* Right Text Section */}
        <div className="md:card p-2 md:p-10 flex flex-col w-full md:w-[50%]">
          <h2 className="text-3xl font-bold text-gray-800">The Man</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            similique deserunt eligendi dolorum omnis soluta dolorem earum nemo
            architecto illo quidem, porro optio. Id, itaque iste neque vel
            quaerat voluptate! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Numquam similique deserunt eligendi dolorum omnis
            soluta dolorem earum nemo architecto illo quidem, porro optio. Id,
            itaque iste neque vel quaerat voluptate! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Numquam similique deserunt eligendi
            dolorum omnis soluta dolorem earum nemo architecto illo quidem,
            porro optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
