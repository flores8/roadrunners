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

          {/* Programs Note */}
          {programs.note ? (
            <div className="mb-8 animate-slide-up" style={{ animationDelay: '50ms' }}>
              <div className="rounded-md border border-gray-700 bg-gray-800/60 px-4 py-3 text-gray-200 text-sm">
                {programs.note}
              </div>
            </div>
          ) : null}

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
            <div className="my-10 border-t border-gray-800" />
          </div>

          {/* Seasons */}
          <div className="space-y-10">
            {programs.track.seasons?.map((season, seasonIndex) => {
              const isActive = (season as any).active !== false;
              return (
                <div key={`season-${seasonIndex}`} className={`animate-slide-up ${!isActive ? 'opacity-75' : ''}`} style={{ animationDelay: `${seasonIndex * 100}ms` }}>
                  <div className="mb-4 flex items-baseline gap-3">
                    <h4 className="text-2xl md:text-3xl font-bold text-accent-orange">
                      {season.name}
                      {!isActive && <span className="ml-3 text-lg font-normal text-gray-400">(Registration Closed)</span>}
                    </h4>
                    <span className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800/60 px-2.5 py-0.5 text-xs text-gray-300">{season.dates}</span>
                  </div>

                  {/* Plans for the season */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {season.plans.map((plan, planIndex) => (
                      <div
                        key={`season-${seasonIndex}-plan-${planIndex}`}
                        className={`card transition-all duration-300 ${isActive ? 'hover:transform hover:-translate-y-2' : 'grayscale'}`}
                      >
                        <div className="flex flex-col h-full">
                          <div className="mb-3 flex items-baseline justify-between">
                            <h5 className="text-xl font-bold text-accent-blue">{plan.name}</h5>
                            <span className="inline-flex items-center rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-sm text-amber-300">{plan.price}</span>
                          </div>
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
                          {isActive ? (
                            <a
                              href={plan.registrationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary w-full text-center"
                              aria-label={`Register for ${plan.name}`}
                            >
                              Register Now
                            </a>
                          ) : (
                            <button
                              disabled
                              className="w-full py-3 px-6 rounded-md bg-gray-700 text-gray-400 font-semibold cursor-not-allowed border border-gray-600"
                            >
                              Registration Closed
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cross Country Section */}
        <div>
          <div className="mb-6 animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent-blue">{programs.crossCountry.title}</span>
            </h3>
          </div>

          {/* Cross Country Training Groups displayed once */}
          {(programs.crossCountry.seasons?.[0]?.groups?.length) ? (
            <div className="mb-10">
              <div className="mb-3 flex items-baseline justify-between">
                <h6 className="text-lg font-semibold text-gray-200">Training Groups by Age</h6>
                <span className="text-sm text-gray-400">Placement based on age and experience</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {(programs.crossCountry.seasons?.[0]?.groups || []).map((group, groupIndex) => (
                  <div key={`xc-group-card-${groupIndex}`} className="card">
                    <div className="flex flex-col h-full">
                      <h5 className="text-xl font-bold text-accent-blue mb-2">{group.name}</h5>
                      {group.bullets?.length ? (
                        <ul className="space-y-2 mb-2 flex-grow">
                          {group.bullets.map((bullet: string, bulletIndex: number) => (
                            <li key={`xc-group-${groupIndex}-bullet-${bulletIndex}`} className="flex items-start">
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
              <div className="my-10 border-t border-gray-800" />
            </div>
          ) : null}

          {/* Cross Country Season(s) */}
          {programs.crossCountry.seasons?.map((season, seasonIndex) => {
            const isActive = (season as any).active !== false;
            return (
              <div key={`xc-season-${seasonIndex}`} className={`space-y-6 ${!isActive ? 'opacity-75' : ''}`}>
                <div className="mb-4 flex items-baseline gap-3">
                  <h4 className="text-2xl md:text-3xl font-bold text-accent-orange">
                    {season.name}
                    {!isActive && <span className="ml-3 text-lg font-normal text-gray-400">(Registration Closed)</span>}
                  </h4>
                  <span className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800/60 px-2.5 py-0.5 text-xs text-gray-300">{season.dates}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                  {season.plans.map((plan, planIndex) => (
                    <div
                      key={`xc-season-${seasonIndex}-plan-${planIndex}`}
                      className={`card transition-all duration-300 ${isActive ? 'hover:transform hover:-translate-y-2' : 'grayscale'}`}
                    >
                      <div className="flex flex-col h-full">
                        <div className="mb-3 flex items-baseline justify-between">
                          <h5 className="text-xl font-bold text-accent-blue">{plan.name}</h5>
                          <span className="inline-flex items-center rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-sm text-amber-300">{plan.price}</span>
                        </div>
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
                        {isActive ? (
                          <a
                            href={plan.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary w-full text-center"
                            aria-label={`Register for ${plan.name}`}
                          >
                            Register Now
                          </a>
                        ) : (
                          <button
                            disabled
                            className="w-full py-3 px-6 rounded-md bg-gray-700 text-gray-400 font-semibold cursor-not-allowed border border-gray-600"
                          >
                            Registration Closed
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
