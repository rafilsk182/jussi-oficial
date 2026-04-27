import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
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
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame, .skiptranslate { display: none !important; }
          body { top: 0 !important; }
          #google_translate_element { display: none; }
        `}} />
      </head>
      <body>
        {children}
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'pt',
              includedLanguages: 'en',
              autoDisplay: false
            }, 'google_translate_element');
          }
          window.setLanguage = function(lang) {
            if (lang === 'pt') {
              // Voltar ao português original
              var frame = document.querySelector('.goog-te-banner-frame');
              if (frame) {
                var restore = frame.contentDocument.querySelector('.goog-te-banner-restore');
                if (restore) { restore.click(); return; }
              }
              // Fallback: usar cookie do Google Translate
              var expires = new Date();
              expires.setFullYear(expires.getFullYear() - 1);
              document.cookie = 'googtrans=; expires=' + expires.toUTCString() + '; path=/';
              document.cookie = 'googtrans=; expires=' + expires.toUTCString() + '; path=/; domain=' + location.hostname;
              location.reload();
            } else {
              var select = document.querySelector('#google_translate_element select');
              if (select) {
                select.value = lang;
                select.dispatchEvent(new Event('change'));
              }
            }
          }
        `}</Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <div id="google_translate_element" style={{ display: 'none' }} />
      </body>
    </html>
  )
}
