import { siteContent } from '@/lib/content'

export default function WhatToExpect() {
  const { whatToExpect } = siteContent

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {whatToExpect.title}
          </h2>
          <p className="text-xl text-gray-300">{whatToExpect.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatToExpect.features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
              <h3 className="text-xl font-bold text-accent-orange mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
