import { siteContent } from '@/lib/content'

export default function Programs() {
  const { programs } = siteContent

  return (
    <section id="programs" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{programs.title}</span>
          </h2>
          <p className="text-xl text-gray-300">{programs.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.list.map((program, index) => (
            <div
              key={index}
              className="card hover:transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-accent-orange mb-2">
                  {program.name}
                </h3>
                <p className="text-light-yellow font-semibold mb-4">{program.price}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {program.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="text-accent-blue mr-2 mt-1">✓</span>
                      <span className="text-gray-300">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={program.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                  aria-label={`Register for ${program.name}`}
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
