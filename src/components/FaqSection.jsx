"use client";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the main message of Moana?",
      answer:
        "Moana isn't suitable for children under the age of 8 years. We recommend parental guidance for children aged up to 10 years because of the movie's violent and scary scenes. The main messages from this movie are to follow your dreams and be true to yourself.",
    },
    {
      question: "What is Moana's weakness?",
      answer:
        "Despite her strong will and determination, Moana initially struggles with self-doubt and the conflict between her duties as the chief's daughter and her desire to explore beyond the reef.",
    },
    {
      question: "Did Moana fall in love?",
      answer:
        "No, Moana did not have a love interest in the movie. The story focuses on her journey of self-discovery and her mission to save her island.",
    },
    {
      question: "What is Moana's main goal?",
      answer:
        "Moana's main goal is to save her island and people by returning the heart of Te Fiti, restoring balance to the world.",
    },
    {
      question: "What makes Moana special?",
      answer:
        "Moana is special because of her unique connection to the ocean, her strong leadership qualities, and her unwavering determination to help her people.",
    },
    {
      question: "Why did Moana's mom help her?",
      answer:
        "Moana's mother helped her because she understood her daughter's calling and wanted to support her journey, even if it meant letting her face dangers.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between py-5 text-left transition-colors hover:bg-gray-50 focus:outline-none"
            >
              <span className="text-base font-medium text-gray-900 pr-8">
                {faq.question}
              </span>
              <span
                className="ml-6 flex-shrink-0 transition-transform duration-300"
                style={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {openIndex === index ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div
              className="transition-all duration-300 ease-in-out"
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
                opacity: openIndex === index ? 1 : 0,
                visibility: openIndex === index ? "visible" : "hidden",
              }}
            >
              <div className="pb-5">
                <p className="text-base text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
