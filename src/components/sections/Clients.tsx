'use client'

import { useEffect, useRef, useState } from 'react'

const LOGOS = [
  { src: '/logos/logo-01.svg' },
  { src: '/logos/logo-02.svg' },
  { src: '/logos/logo-03.svg' },
  { src: '/logos/logo-04.svg' },
  { src: '/logos/logo-05.svg' },
  { src: '/logos/logo-06.svg' },
  { src: '/logos/logo-07.svg' },
  { src: '/logos/logo-08.svg' },
  { src: '/logos/logo-09.svg' },
  { src: '/logos/logo-10.svg' },
  { src: '/logos/logo-11.svg' },
  { src: '/logos/logo-12.svg' },
  { src: '/logos/logo-13.png', noInvert: true },
  { src: '/logos/logo-14.svg' },
  { src: '/logos/logo-15.svg' },
  { src: '/logos/logo-16.svg' },
  { src: '/logos/logo-17.svg' },
  { src: '/logos/logo-18.png' },
  { src: '/logos/logo-19.svg' },
  { src: '/logos/logo-20.svg', noInvert: true },
  { src: '/logos/logo-21.svg' },
]

const LogoJussi = () => (
  <svg width="84" height="30" viewBox="0 0 94 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M93.0183 2.92006C93.0183 1.30713 91.5659 0 89.7738 0C87.9817 0 86.5293 1.30713 86.5293 2.92006C86.5293 4.53298 87.9817 5.84012 89.7738 5.84012C91.5659 5.84012 93.0183 4.53298 93.0183 2.92006Z" fill="white"/>
    <path d="M34.5265 5.84012C36.3186 5.84012 37.771 4.53298 37.771 2.92006C37.771 1.30713 36.3186 0 34.5265 0C32.7344 0 31.282 1.30713 31.282 2.92006C31.2831 4.53298 32.7355 5.84012 34.5265 5.84012Z" fill="white"/>
    <path d="M26.4361 5.84012C28.2282 5.84012 29.6806 4.53298 29.6806 2.92006C29.6806 1.30713 28.2282 0 26.4361 0C24.644 0 23.1916 1.30713 23.1916 2.92006C23.1916 4.53298 24.644 5.84012 26.4361 5.84012Z" fill="white"/>
    <path d="M89.7743 7.50293C88.3173 7.50293 87.1356 8.56543 87.1356 9.87671V29.9771C87.1356 31.2884 88.3173 32.3519 89.7743 32.3519C91.2313 32.3519 92.413 31.2884 92.413 29.9771V9.87671C92.413 8.56543 91.2313 7.50293 89.7743 7.50293Z" fill="white"/>
    <path d="M7.99206 10.1141C7.99206 11.4254 9.17377 12.4879 10.6307 12.4879H13.2694V16.5098V24.0416C13.2694 26.0246 11.4761 27.6386 9.27282 27.6386C7.0695 27.6386 5.27621 26.0246 5.27621 24.0416V21.9208C5.27621 20.6095 4.0945 19.5459 2.63753 19.5459C1.18055 19.5459 0 20.6095 0 21.9208V24.0416C0 27.2903 2.06395 30.1046 5.07581 31.4822C6.33583 32.0596 7.76171 32.3861 9.27282 32.3861C10.7839 32.3861 12.2087 32.0586 13.4698 31.4822C16.4817 30.1036 18.5456 27.2903 18.5456 24.0416V12.4879V9.62792C18.5456 8.58511 17.6058 7.73926 16.4471 7.73926H13.2694H10.6296C9.17261 7.73926 7.99206 8.8028 7.99206 10.1141Z" fill="white"/>
    <path d="M37.0107 7.34961C35.5538 7.34961 34.3721 8.4121 34.3721 9.72338V24.417C34.1624 26.2154 32.4682 27.6231 30.4146 27.6231C28.361 27.6231 26.6668 26.2165 26.4572 24.417V9.72338C26.4572 8.4121 25.2755 7.34961 23.8185 7.34961C22.3615 7.34961 21.1798 8.4121 21.1798 9.72338V24.0417C21.1798 27.3018 23.2668 30.1213 26.3028 31.4823C27.541 32.0369 28.9358 32.351 30.4135 32.351C31.8912 32.351 33.286 32.0369 34.5241 31.4823C37.5601 30.1213 39.6471 27.3007 39.6471 24.0417V9.72338C39.6494 8.4121 38.4677 7.34961 37.0107 7.34961Z" fill="white"/>
    <path d="M64.4467 17.1857C64.4156 11.2937 58.9654 6.55445 52.352 6.79805C46.417 7.01677 41.5681 11.3227 41.2502 16.6611C41.0429 20.1441 42.7325 23.2797 45.4737 25.3083C47.4778 26.7917 50.0439 27.6821 52.8415 27.6821C55.1013 27.6821 57.0881 28.7539 58.2087 30.3617C58.6856 31.0469 59.501 31.4812 60.3994 31.4812H60.5146C62.552 31.4812 63.7971 29.4692 62.7282 27.907C62.0533 26.9202 61.1999 26.0412 60.2093 25.3083C58.2375 23.8488 55.7232 22.9636 52.9786 22.9346C49.7214 22.9003 46.8962 20.7795 46.5472 17.8636C46.1383 14.4408 49.1202 11.5373 52.8415 11.5373C56.3141 11.5373 59.1405 14.0666 59.1716 17.1846C59.349 18.7353 60.4673 19.6724 61.8299 19.6724C63.2765 19.6724 64.449 18.6172 64.449 17.3152C64.4467 17.1857Z" fill="white"/>
    <path d="M81.2623 13.8672C79.2582 12.3838 76.6921 11.4934 73.8945 11.4934C71.6347 11.4934 69.6479 10.4216 68.5273 8.81385C68.0504 8.12867 67.235 7.69434 66.3355 7.69434H66.2203C64.1817 7.69434 62.9378 9.70635 64.0066 11.2685C64.6815 12.2563 65.535 13.1343 66.5255 13.8672C68.4973 15.3267 71.0116 16.2119 73.7563 16.241C77.0134 16.2752 79.8387 18.396 80.1877 21.3119C80.5966 24.7347 77.6147 27.6392 73.8933 27.6392C70.4208 27.6392 67.5932 25.11 67.5633 21.9919C67.2788 20.4402 66.2042 19.5902 64.9061 19.5902C63.4595 19.5902 62.287 20.6454 62.287 21.9474V22.0116H62.2882C62.332 27.8963 67.7786 32.6252 74.3874 32.3785C80.3201 32.1577 85.1667 27.8528 85.4846 22.5154C85.6931 19.0315 84.0023 15.8958 81.2623 13.8672Z" fill="white"/>
  </svg>
)

export function Clients() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="clients" className="w-full" style={{ backgroundColor: '#070707', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
      <div className="container-jussi py-20 flex flex-col gap-16">

        <div className="flex flex-col gap-3 items-center text-center">
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Nossos Clientes
          </span>

          {/* Título desktop — uma linha */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
            <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '40px', fontWeight: 800, color: '#ffffff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>TRUSTED BY LEADING <span style={{ color: '#00ffa6' }}>BRANDS</span> —</span>
              <LogoJussi />
              <span style={{ color: '#00ffa6' }}>.</span>
            </h2>
          </div>

          {/* Título mobile — duas linhas */}
          <div className="lg:hidden">
            <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '32px', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
              TRUSTED BY LEADING<br />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#00ffa6' }}>BRANDS</span>
                <span> —</span>
                <LogoJussi />
                <span style={{ color: '#00ffa6' }}>.</span>
              </span>
            </h2>
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* Grid logos desktop */}
        <div className="hidden lg:flex flex-col gap-12">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '48px 64px', alignItems: 'center' }}>
            {LOGOS.slice(0, 18).map((logo, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', filter: logo.noInvert ? 'none' : 'brightness(0) invert(1)' }}>
                <img src={logo.src} alt={'Logo cliente ' + (i + 1)} style={{ maxWidth: '130px', maxHeight: '44px', objectFit: 'contain', width: '100%' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '64px', alignItems: 'center' }}>
            {LOGOS.slice(18).map((logo, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', filter: logo.noInvert ? 'none' : 'brightness(0) invert(1)' }}>
                <img src={logo.src} alt={'Logo cliente ' + (i + 19)} style={{ maxWidth: '130px', maxHeight: '44px', objectFit: 'contain', width: '100%' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Grid logos mobile */}
        <div className="lg:hidden grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '36px 24px', alignItems: 'center' }}>
          {LOGOS.map((logo, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', filter: logo.noInvert ? 'none' : 'brightness(0) invert(1)' }}>
              <img src={logo.src} alt={'Logo cliente ' + (i + 1)} style={{ maxWidth: '90px', maxHeight: '32px', objectFit: 'contain', width: '100%' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}