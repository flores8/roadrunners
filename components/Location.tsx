import { siteContent } from '@/lib/content'

export default function Location() {
  const { location } = siteContent

  return (
    <section id="contact" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{location.title}</span>
          </h2>
          <p className="text-xl text-gray-300">{location.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <div className="card h-96 lg:h-auto min-h-[400px]">
            <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-accent-orange mx-auto mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 mb-4">Interactive map placeholder</p>
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  View on Google Maps
                </a>
              </div>
              {/* Replace with actual map embed:
              <iframe
                src="YOUR_GOOGLE_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              */}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-accent-orange mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent-blue mt-1 mr-4 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-light-yellow mb-1">Training Location</p>
                    <p className="text-gray-300">{location.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent-blue mt-1 mr-4 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-light-yellow mb-1">Email</p>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-gray-300 hover:text-accent-orange transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent-blue mt-1 mr-4 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-light-yellow mb-1">Phone</p>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-300 hover:text-accent-orange transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent-blue mt-1 mr-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-light-yellow mb-1">Follow Us</p>
                    <a
                      href={location.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-accent-orange transition-colors"
                    >
                      {location.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-accent-orange/10 border-accent-orange/30">
              <h3 className="text-xl font-bold text-accent-orange mb-3">Ready to Join?</h3>
              <p className="text-gray-300 mb-4">
                Sign up for a free trial practice and see why families love Roadrunners Track Club!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
