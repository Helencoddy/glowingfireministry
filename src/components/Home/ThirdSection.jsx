import React from "react";

const ThirdSection = () => {
  return (
    <div className="mt-8">
      {/* video section */}
      <div className="flex flex-col gap-6 px-12 md:flex-row mt-20">
        {/* Left Image Section */}

        <div className="w-full md:w-[50%]">
          <iframe
            width="580"
            height="400"
            src="https://www.youtube.com/embed/-xem-KCuNGw"
            className="w-full h-[100] md:w-[580px] md:h-[400]"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* Right Text Section */}
        <div className="card p-2 md:p-10 flex flex-col w-full md:w-[50%]">
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
    </div>
  );
};

export default ThirdSection;
