import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const SecondSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time through your account settings.",
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time without any penalties.",
    },
    {
      id: 4,
      question: "How does billing work?",
      answer:
        "Billing is done on a monthly basis. You can view your invoices in the billing section of your account.",
    },
  ];
  return (
    <div>
      {" "}
      {/* FAQ Section */}
      <div className="flex flex-col gap-5 px-6 md:px-12 md:flex-row">
        {/* Left Image Section */}

        <div className="w-full card md:w-[50%]">
          <img
            src="Prophet.jpg"
            alt="Left Section"
            className="w-full h-full object-cover md:rounded-lg"
          />
        </div>

        {/* Right FAQ Section */}
        <div className="flex md:flex-1 w-full md:w-[50%] bg-white card md:px-3  ">
          {/* FAQ Section */}
          {/* <section className="py-8 md:py-12 bg-black text-white md:rounded-lg shadow-lg"> */}
          <div
            className="w-full md:w-[80%] lg:w-[80%] md:mx-auto "
            id="accordion"
          >
            {/* Title Section */}
            <div className="mt-10 mb-3 px-2 text-left">
              <p className="text-lg font-semibold text-black">
                Become a Partner of TAM
              </p>
            </div>
            {faqs.map(({ id, question, answer }) => (
              <div key={id} className="mb-4 border-[1px] border-[#121212]">
                <h2 id={`accordion-heading-${id}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-left text-black border-b border-gray-600 gap-3 hover:bg-gray-400 "
                    onClick={() => handleToggle(id)}
                    aria-expanded={activeIndex === id}
                    aria-controls={`accordion-body-${id}`}
                  >
                    <span>{question}</span>
                    {activeIndex === id ? (
                      <CiCircleMinus size={24} className="text-black" />
                    ) : (
                      <CiCirclePlus size={24} className="text-black" />
                    )}
                  </button>
                </h2>
                {activeIndex === id && (
                  <div
                    id={`accordion-body-${id}`}
                    className="py-4 px-4 text-base font-normal text-white border-b border-gray-600 bg-gray-400 "
                    aria-labelledby={`accordion-heading-${id}`}
                  >
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
