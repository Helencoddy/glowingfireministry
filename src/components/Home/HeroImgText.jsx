const HeroImgText = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white bg-opacity-90 px-5 md:px-16 py-10 md:py-32 flex flex-col md:flex-row gap-5 md:gap-10 w-full  overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[50%] md:h-[30%] ]">
          <img
            src="Hero.jpg"
            alt="Left Section"
            className="w-[100%] object-cover rounded-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:card p-2 md:p-8 flex flex-col w-full  md:w-[50%] md:h-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">The Man</h2>
          <h2>The Mandate </h2>
          <h2>The Prophet Akingbade</h2>
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
            porro optio. Id, itaque iste neque vel quaerat voluptate! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            similique deserunt eligendi dolorum omnis soluta dolorem earum nemo
            architecto illo quidem, porro optio. Id, itaque iste neque vel
            quaerat voluptate! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Numquam similique deserunt eligendi dolorum omnis
            soluta dolorem earum nemo architecto illo quidem, porro optio. Id,
            itaque iste neque vel quaerat voluptate!
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroImgText;
