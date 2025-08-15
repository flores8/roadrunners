import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/lib/content'

// Load Open Sans variable font
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  metadataBase: new URL(siteContent.seo.url),
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.url,
    siteName: 'Roadrunners Track Club',
    images: [
      {
        url: siteContent.seo.image,
        width: 1200,
        height: 630,
        alt: 'Roadrunners Track Club',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.image],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsClub',
              name: 'Roadrunners Track Club',
              description: siteContent.seo.description,
              url: siteContent.seo.url,
              logo: `${siteContent.seo.url}/images/logo.png`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Stadium Way',
                addressLocality: 'Runner City',
                addressRegion: 'RC',
                postalCode: '12345',
                addressCountry: 'US',
              },
              email: siteContent.location.email,
              telephone: siteContent.location.phone,
              sameAs: [
                siteContent.location.instagramLink,
                siteContent.footer.socialLinks[1]?.url || '',
              ],
              sport: 'Track and Field',
            }),
          }}
        />
      </head>
      <body className={`${openSans.className} bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
