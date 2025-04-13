import React from "react";
import HeroImgText from "../components/Home/HeroImgText";
import SecondSection from "../components/Home/SecondSection";
import ThirdSection from "../components/Home/ThirdSection";
import HomeCTA from "../components/Home/HomeCTA";
import CTABook from "../components/Home/CTABook";
const Home = () => {
  return (
    <div>
      <HeroImgText />
      <SecondSection />
      <ThirdSection />
      <HomeCTA />
      <CTABook />
    </div>
  );
};

export default Home;
