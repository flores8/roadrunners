import { siteContent } from '@/lib/content'

export default function Testimonials() {
  const { testimonials } = siteContent

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{testimonials.title}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.list.map((testimonial, index) => (
            <div key={index} className="card relative">
              <div className="absolute top-4 left-4 text-6xl text-accent-orange/20">
                &ldquo;
              </div>
              <div className="relative z-10 pt-8">
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-light-yellow">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
