import React, { useState } from "react";
import AboutHeader from "../About/AboutHeader";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Reclaim Fire",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      question: "Restore the Fire ",
      answer:
        "Yes, you can change your plan at any time through your account settings.",
    },
    {
      id: 3,
      question: "Revive a people",
      answer:
        "You can cancel your subscription at any time without any penalties.",
    },
    {
      id: 4,
      question: "Transform a Generation",
      answer:
        "Billing is done on a monthly basis. You can view your invoices in the billing section of your account.",
    },
  ];
  return (
    <>
      {/* Header Section */}
      <AboutHeader />
      {/* Image and Text section */}
      <div className="my-14 flex flex-col gap-5 px-6 md:px-12 md:flex-row">
        {/* Left Image Section */}

        <div className="w-full card md:w-[50%]">
          <img
            src="DnM.jpg"
            alt="Left Section"
            className="w-full h-full object-cover md:rounded-lg"
          />
        </div>

        {/* Right FAQ Section */}
        <div className="flex md:flex-1 w-full md:w-[50%] bg-white card md:px-3 py-10  ">
          {/* FAQ Section */}
          {/* <section className="py-8 md:py-12 bg-black text-white md:rounded-lg shadow-lg"> */}
          <div
            className="w-full md:w-[80%] lg:w-[80%] md:mx-auto "
            id="accordion"
          >
            {/* Title Section */}
            <div className="mt-10 mb-3 px-2 text-left">
              <p className="text-lg font-semibold text-black">The Ministry</p>
              <p>
                Glowing Fire Christian Ministry is an apostolic ministry saddled
                with the mandate to reclaim, restore, and revive this
                generation. “Preach the Word; be instant in season and out of
                season… Do the work of an Evangelist, make full proof of thy
                ministry.” [2 Timothy 4:2/5] As the mandate implies, the
                ministry’s focus is three-fold.
              </p>
            </div>
            {faqs.map(({ id, question, answer }) => (
              <div
                key={id}
                className="mb-4 rounded-xl border border-gray-200 shadow-md overflow-hidden transition-all duration-300"
              >
                <h2 id={`accordion-heading-${id}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 px-6 text-lg font-semibold text-left bg-white hover:bg-blue-50 transition-all duration-200"
                    onClick={() => handleToggle(id)}
                    aria-expanded={activeIndex === id}
                    aria-controls={`accordion-body-${id}`}
                  >
                    <span className="text-gray-800">{question}</span>
                    {activeIndex === id ? (
                      <CiCircleMinus size={24} className="text-blue-600" />
                    ) : (
                      <CiCirclePlus size={24} className="text-blue-600" />
                    )}
                  </button>
                </h2>

                {activeIndex === id && (
                  <div
                    id={`accordion-body-${id}`}
                    className="bg-blue-50 px-6 py-4 text-gray-700 transition-all duration-200"
                    aria-labelledby={`accordion-heading-${id}`}
                  >
                    {answer}
                  </div>
                )}
              </div>
            ))}

            <p>
              Glowing Fire Christian Ministry is an apostolic ministry saddled
              with the mandate to reclaim, restore, and revive this generation.
              “Preach the Word; be instant in season and out of season… Do the
              work of an Evangelist, make full proof of thy ministry.” [2
              Timothy 4:2/5] As the mandate implies, the ministry’s focus is
              three-fold.
            </p>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="relative w-full md:w-[92%] mt-24 mb-20 flex justify-center mx-auto bg-[url('/Crowd.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
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
    </>
  );
};

export default About;
