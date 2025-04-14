const HeroImgText = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white bg-opacity-90 px-8 md:px-16 py-10 md:py-32 flex flex-col md:flex-row gap-5 md:gap-10 w-full overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[50%]">
          <img
            src="Prophet.jpg"
            alt="Left Section"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="card p-2 md:p-8 flex flex-col w-full md:w-[50%]">
          <h2 className="text-3xl font-bold text-gray-800">The Man</h2>
          <h2>The Mandate </h2>
          <h2>The Isaac Oyedepo</h2>
          <p className="text-gray-600 mt-4">
            Isaac Oyedepo is on an Apostolic mission to reclaim a generation,
            restore the fire, and revive a people. God has called him to set his
            generation ablaze and ignite the upcoming generation. He has been
            called to Ignite the Fire, Enlist an Army, Emphasize Holiness,
            Demonstrate Power, and Experience Glory. He carries out his
            God-given assignment doggedly and with urgency, knowing that he will
            give account to the One that called him. He served as a Full-time
            Pastor with Living Faith Church Worldwide a.k.a Winners Chapel
            International, for sixteen years. During his service with Living
            Faith, he pastored several branches in the USA, South Africa, and
            Nigeria.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroImgText;
