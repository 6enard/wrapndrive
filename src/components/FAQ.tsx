import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a vinyl wrap last?",
      answer: "A high-quality vinyl wrap typically lasts 5-7 years when properly maintained. Factors like climate, usage, and maintenance can affect longevity. We use premium materials that come with manufacturer warranties."
    },
    {
      question: "Will wrapping damage my car's original paint?",
      answer: "No, when professionally applied and removed, vinyl wraps actually protect your original paint. The adhesive is designed to be removable without damaging the underlying surface, provided the paint is in good condition."
    },
    {
      question: "How much does car wrapping cost?",
      answer: "Costs vary depending on the vehicle size, wrap type, and complexity of the design. Full wraps typically start from KSh 80,000 for smaller vehicles. We provide free quotes after evaluating your specific requirements."
    },
    {
      question: "Can I wash my wrapped car normally?",
      answer: "Yes, but we recommend hand washing or touchless car washes. Avoid high-pressure washers directly on edges and seams. Use pH-neutral soaps and avoid abrasive materials. We provide detailed care instructions with every installation."
    },
    {
      question: "What's the difference between PPF and ceramic coating?",
      answer: "PPF (Paint Protection Film) is a physical barrier that protects against rock chips, scratches, and UV damage. Ceramic coating creates a chemical bond with the paint for enhanced gloss and easier cleaning. They can be used together for maximum protection."
    },
    {
      question: "How long does the installation process take?",
      answer: "Installation time varies by service: Full wraps take 3-5 days, PPF installation takes 2-3 days, ceramic coating takes 1-2 days, and detailing takes 1 day. We'll provide accurate timelines during consultation."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes! We offer comprehensive warranties: 5 years on vinyl wraps, 10 years on PPF, 2 years on ceramic coating, and 30 days on detailing services. All warranties cover material defects and installation issues."
    },
    {
      question: "Can I choose custom colors and designs?",
      answer: "Absolutely! We offer unlimited color options, custom graphics, patterns, and even printed designs. Our design team can help create unique looks or replicate specific designs you have in mind."
    },
    {
      question: "What preparation is needed before wrapping?",
      answer: "Your vehicle should be clean and free of damage. We perform a thorough inspection and may recommend paint correction if needed. Minor scratches and imperfections should be addressed before wrapping for best results."
    },
    {
      question: "Can wraps be removed if I change my mind?",
      answer: "Yes, wraps are completely removable. Professional removal ensures no damage to the original paint. We recommend having wraps removed by professionals to maintain your vehicle's finish."
    },
    {
      question: "Do you work on all types of vehicles?",
      answer: "We work on cars, SUVs, trucks, motorcycles, and commercial vehicles. Each vehicle type may have specific considerations, and we'll discuss these during your consultation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, mobile money (M-Pesa), bank transfers, and major credit cards. We also offer flexible payment plans for larger projects. A deposit is required to begin work, with the balance due upon completion."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-blue-100 mb-6">
            Our team is here to help with any specific questions about your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254792391610"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Us: +254 792 391 610
            </a>
            <a
              href="mailto:wrapndrivelimited@gmail.com"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;