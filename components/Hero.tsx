'use client'

import { siteContent } from '@/lib/content'

export default function Hero() {
  const { hero } = siteContent

  const scrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('programs')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(33, 31, 54, 0.8), rgba(33, 31, 54, 0.9)), url('${hero.backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="w-40 h-40 mx-auto mb-8 flex items-center justify-center">
            <img 
              src="/images/roadrunners-logo-on-dark.svg" 
              alt="Roadrunners Track Club" 
              className="w-full h-full object-contain drop-shadow-2xl" 
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">{hero.headline}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={scrollToPrograms}
              className="btn-primary text-lg"
              aria-label="Scroll to programs section"
            >
              {hero.cta1.text}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-light-yellow"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
