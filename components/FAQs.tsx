'use client'

import { useState } from 'react'
import { siteContent } from '@/lib/content'

export default function FAQs() {
  const { faqs } = siteContent
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="section-padding">
      <div className="container-max max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {faqs.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.list.map((faq, index) => (
            <div key={index} className="card">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left focus-visible-ring rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-light-yellow pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-accent-orange transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                  {faq.link && (
                    <>
                      {' '}
                      <a
                        href={faq.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue hover:text-blue-400 underline font-semibold"
                      >
                        {faq.linkText}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
