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
      <div className="flex flex-col px-12 md:flex-row">
        {/* Left Image Section */}

        <div className="w-full md:w-[50%]">
          <img
            src="Prophet.jpg"
            alt="Left Section"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right FAQ Section */}
        <div className="flex-1 w-full md:w-[50%] px-8  ">
          <div>
            {/* FAQ Section */}
            <section className="py-8 md:py-12 bg-black text-white rounded-lg shadow-lg">
              <div
                className="w-full md:w-[80%] lg:w-[70%] md:mx-auto"
                id="accordion"
              >
                {/* Title Section */}
                <div className="mb-6 text-center md:text-left">
                  <p className="text-lg font-semibold text-gray-200">
                    Become a Partner of TAM
                  </p>
                </div>
                {faqs.map(({ id, question, answer }) => (
                  <div key={id} className="mb-4">
                    <h2 id={`accordion-heading-${id}`}>
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-left text-white border-b border-gray-600 gap-3 hover:bg-gray-800 rounded-md"
                        onClick={() => handleToggle(id)}
                        aria-expanded={activeIndex === id}
                        aria-controls={`accordion-body-${id}`}
                      >
                        <span>{question}</span>
                        {activeIndex === id ? (
                          <CiCircleMinus size={24} className="text-white" />
                        ) : (
                          <CiCirclePlus size={24} className="text-white" />
                        )}
                      </button>
                    </h2>
                    {activeIndex === id && (
                      <div
                        id={`accordion-body-${id}`}
                        className="py-4 px-4 text-base font-normal text-white border-b border-gray-600 bg-gray-900 rounded-md"
                        aria-labelledby={`accordion-heading-${id}`}
                      >
                        {answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
