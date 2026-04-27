import type { Metadata, Viewport } from 'next'
import { Barlow } from 'next/font/google'
import '@/styles/globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: {
    default: 'Jüssi – The Experience Agency',
    template: '%s | Jüssi',
  },
  description:
    'Conectando criatividade, tecnologia e dados para acelerar negócios. Less noise. More direction.',
  keywords: [
    'agência digital',
    'experiência digital',
    'criatividade',
    'tecnologia',
    'dados',
    'marketing digital',
    'Jüssi',
  ],
  authors: [{ name: 'Jüssi' }],
  creator: 'Jüssi',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rafilsk182.github.io/jussi-oficial/',
    siteName: 'Jüssi',
    title: 'Jüssi – The Experience Agency',
    description: 'Conectando criatividade, tecnologia e dados para acelerar negócios.',
    images: [{ url: 'https://rafilsk182.github.io/jussi-oficial/og-image.png', width: 1200, height: 630, alt: 'Jüssi – The Experience Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jüssi – The Experience Agency',
    description: 'Conectando criatividade, tecnologia e dados para acelerar negócios.',
    images: ['https://rafilsk182.github.io/jussi-oficial/og-image.png'],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070707',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body>{children}</body>
    </html>
  )
}
