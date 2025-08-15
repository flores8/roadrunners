import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import WhatToExpect from '@/components/WhatToExpect'
import Schedule from '@/components/Schedule'
import Coaches from '@/components/Coaches'
import Testimonials from '@/components/Testimonials'
import FAQs from '@/components/FAQs'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Programs />
      <WhatToExpect />
      <Schedule />
      <Coaches />
      <Testimonials />
      <FAQs />
      <Location />
      <Footer />
    </main>
  )
}
