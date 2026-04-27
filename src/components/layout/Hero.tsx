'use client'
import { BASE_PATH } from '@/lib/basePath'

import { useEffect, useRef, useState } from 'react'

/* ============================================================
   HERO — Jüssi
   Figma Desktop: node 2035:2690 (1366x768)
   Figma Mobile:  node 2049:4610 (375x686)

   Desktop:
   - Headline "THE EXPERIENCE AGENCY" — 48px, weight 400, #00ffa6, centralizada
   - Subtítulo — 32px, branco, centralizado
   - "DESLIZE" — centralizado no rodapé

   Mobile:
   - Headline "THE EXPERIENCE AGENCY" — 48px, weight 400, #00ffa6, centralizada
   - Sem subtítulo
   - "DESLIZE" — centralizado no rodapé
   ============================================================ */

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const contentOpacity = Math.max(0, 1 - scrollY / 500)

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full flex flex-col"
      style={{ height: '100dvh' }}
    >
      {/* Fundo escuro fallback */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Vídeo desktop */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        >
          <source src={`${BASE_PATH}/videos/hero_desktop.mp4`} type="video/mp4" />
        </video>
        {/* Vídeo mobile */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        >
          <source src={`${BASE_PATH}/videos/hero_mobile.mp4`} type="video/mp4" />
        </video>
        {/* Overlay preto 65% — Rectangle 53 do Figma */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.65)' }} />
      </div>

      {/* Conteúdo sobre o vídeo */}
      <div
        className="relative z-10 flex flex-col h-full"
        style={{ opacity: contentOpacity, transition: 'opacity 80ms linear' }}
      >
        {/* Espaço do menu fixo */}
        <div className="h-[76px] lg:h-20 flex-shrink-0" />

        {/* Área central */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">

          {/* Headline — idêntica em desktop e mobile */}
          <h2
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '48px',
              fontWeight: 400,
              color: '#00ffa6',
              textTransform: 'uppercase',
              letterSpacing: '0em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            THE<br />EXPERIENCE<br />AGENCY
          </h2>

          {/* Subtítulo — só no desktop */}
          <p
            className="hidden lg:block mt-8 text-white/80"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            Conectando criatividade, tecnologia e dados para acelerar neg&oacute;cios.
          </p>

        </div>

        {/* DESLIZE — centralizado no rodapé */}
        <div className="flex-shrink-0 pb-10 flex flex-col items-center gap-2">
          <span
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
            }}
          >
            Deslize
          </span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <line x1="8" y1="0" x2="8" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <path d="M2 9L8 16L14 9" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>
    </section>
  )
}
