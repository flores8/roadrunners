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

        {/* Track & Field Section */}
        <div className="mb-10">
          <div className="mb-6 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent-blue">{programs.track.title}</span>
            </h3>
          </div>

          {/* Training Groups displayed once */}
          <div className="mb-10">
            <div className="mb-3 flex items-baseline justify-between">
              <h6 className="text-lg font-semibold text-gray-200">Training Groups by Age</h6>
              <span className="text-sm text-gray-400">Placement based on age and experience</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(programs.track.seasons?.[0]?.groups || []).map((group, groupIndex) => (
                <div key={`track-groups-card-${groupIndex}`} className="card">
                  <div className="flex flex-col h-full">
                    <h5 className="text-xl font-bold text-accent-blue mb-2">{group.name}</h5>
                    {group.bullets?.length ? (
                      <ul className="space-y-2 mb-2 flex-grow">
                        {group.bullets.map((bullet: string, bulletIndex: number) => (
                          <li key={`track-group-${groupIndex}-bullet-${bulletIndex}`} className="flex items-start">
                            <span className="text-accent-blue mr-2 mt-1">✓</span>
                            <span className="text-gray-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seasons */}
          <div className="space-y-10">
            {programs.track.seasons?.map((season, seasonIndex) => (
              <div key={`season-${seasonIndex}`} className="animate-slide-up" style={{ animationDelay: `${seasonIndex * 100}ms` }}>
                <div className="mb-4 flex items-baseline justify-between">
                  <h4 className="text-2xl md:text-3xl font-bold text-accent-orange">{season.name}</h4>
                  <span className="text-gray-300">{season.dates}</span>
                </div>

                {/* Plans for the season */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {season.plans.map((plan, planIndex) => (
                    <div
                      key={`season-${seasonIndex}-plan-${planIndex}`}
                      className="card hover:transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="flex flex-col h-full">
                        <h5 className="text-xl font-bold text-accent-blue mb-2">{plan.name}</h5>
                        <p className="text-light-yellow font-semibold mb-4">{plan.price}</p>
                        {plan.bullets?.length ? (
                          <ul className="space-y-2 mb-6 flex-grow">
                            {plan.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="flex items-start">
                                <span className="text-accent-blue mr-2 mt-1">✓</span>
                                <span className="text-gray-300">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        <a
                          href={plan.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary w-full text-center"
                          aria-label={`Register for ${plan.name}`}
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Country Section */}
        <div>
          <div className="mb-6 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent-blue">{programs.crossCountry.title}</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.crossCountry.list.map((program, index) => (
              <div
                key={`xc-${index}`}
                className="card hover:transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <h4 className="text-2xl font-bold text-accent-orange mb-2">
                    {program.name}
                  </h4>
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
      </div>
    </section>
  )
}
