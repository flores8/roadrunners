import { siteContent } from '@/lib/content'

export default function Coaches() {
  const { coaches } = siteContent

  return (
    <section id="coaches" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {coaches.title}
          </h2>
          <p className="text-xl text-gray-300">{coaches.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coaches.list.map((coach, index) => (
            <div key={index} className="card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-accent-orange to-accent-red">
                {coach.image ? (
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-accent-orange mb-1">
                {coach.name}
              </h3>
              {coach.title && (
                <p className="text-accent-blue font-semibold mb-2">{coach.title}</p>
              )}
              {coach.bio && (
                <p className="text-gray-300 leading-relaxed text-left">{coach.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
