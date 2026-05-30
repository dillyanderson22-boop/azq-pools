import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AZ Q Pools — Pool Service, Repair & Landscape in Gilbert, AZ',
  description:
    'Arizona Quality Pool Service & Repair, LLC. Weekly pool service, equipment repair, acid washes, tile cleaning, landscape work, and natural gas pipeline. Serving Gilbert, Chandler, Mesa, Queen Creek & the East Valley.',
  metadataBase: new URL('https://azq-pools.aydenbuilds.com'),
  openGraph: {
    title: 'AZ Q Pools — Service, Repair & Landscape · Gilbert, AZ',
    description: 'We clean the dirty & fix the broken. Weekly pool service, repairs, acid washes, and landscape work across the East Valley.',
    images: ['/og.jpg'],
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arizona Quality Pool Service & Repair, LLC',
  alternateName: 'AZ Q Pools',
  image: 'https://azq-pools.aydenbuilds.com/og.jpg',
  url: 'https://azq-pools.aydenbuilds.com',
  telephone: '+14806957665',
  email: 'azqpools.net@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '335 W Cullumber Ave',
    addressLocality: 'Gilbert',
    addressRegion: 'AZ',
    postalCode: '85233',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.353,
    longitude: -111.792,
  },
  areaServed: [
    'Gilbert', 'Chandler', 'Ahwatukee', 'Queen Creek',
    'Tempe', 'Mesa', 'Apache Junction', 'Gold Canyon', 'Phoenix',
  ],
  priceRange: '$$',
  slogan: 'We Clean the Dirty & Fix the Broken',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
