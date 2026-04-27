'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const CASES = [
  {
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cases/case-01.png`,
    category: 'LOREM IPSUM',
    title: 'PASCOA LACTA',
    hoverText: 'Crescimento de 40% em receita em relação a 2024.',
  },
  {
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cases/case-02.png`,
    category: 'LOREM IPSUM',
    title: 'POTBELLY SANDWICH SHOP',
    hoverText: 'Atuação de AEO/GEO com ganho exponencial de receita originadas de IA.',
  },
  {
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cases/case-03.png`,
    category: 'LOREM IPSUM',
    title: 'CARNAVAL TRIDENT',
    hoverText: 'Ativações em digital que geraram resultados efetivos de venda.',
  },
  {
    img: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cases/case-04.png`,
    category: 'LOREM IPSUM',
    title: 'CAMINHÃO DA DEDICAÇÃO CASAS BA...',
    hoverText: 'Mais de 288 milhões de impactos nas redes sociais.',
  },
]

function CaseCard({ card, index }: { card: typeof CASES[0], index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: '0', cursor: 'pointer' }}
    >
      {/* Imagem com hover effect */}
      <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '292/398', border: hovered ? '1.5px solid #00ffa6' : '1.5px solid transparent', transition: 'border 300ms ease', boxSizing: 'border-box' }}>
        <img
          src={card.img}
          alt={card.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'filter 300ms ease', filter: hovered ? 'blur(4px) brightness(0.4)' : 'none' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', transition: 'opacity 300ms ease', opacity: hovered ? 0 : 1 }} />
        {/* Texto no hover */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', padding: '24px', opacity: hovered ? 1 : 0, transition: 'opacity 300ms ease' }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.3, textAlign: 'left' }}>{card.hoverText}</p>
        </div>
      </div>

      {/* Info abaixo do card */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px', paddingTop: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.category}</span>
          <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', fontWeight: 700, color: hovered ? '#00ffa6' : '#ffffff', margin: 0, lineHeight: 1.2, textTransform: 'uppercase', transition: 'color 300ms ease' }}>{card.title}</h3>
        </div>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backgroundColor: hovered ? '#00ffa6' : 'transparent', transition: 'background 300ms ease' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke={hovered ? '#070707' : '#ffffff'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function HoverButton({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href="/cases"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '12px',
        fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400,
        textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em',
        borderRadius: '100px', padding: '14px 24px',
        transition: 'all 250ms ease',
        backgroundColor: hovered ? '#ffffff' : 'transparent',
        color: hovered ? '#070707' : '#ffffff',
        border: '1px solid rgba(255,255,255,0.4)',
      }}
    >
      {label}
      <span style={{
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        transition: 'all 250ms ease',
        backgroundColor: hovered ? '#070707' : 'transparent',
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  )
}

export function Cases() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="cases" className="w-full" style={{ backgroundColor: '#070707', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
      <div className="container-jussi py-20 flex flex-col gap-12">

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Nossos Cases
          </span>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.1, margin: 0, textTransform: 'uppercase' }}>
            FOCO EM EXPERIÊNCIA E CRIATIVIDADE.<br />
            <span style={{ color: '#00ffa6', fontWeight: 800 }}>RESULTADOS</span><span style={{ fontWeight: 800 }}> COM DIREÇÃO.</span>
          </h2>
        </div>

        {/* DESKTOP — grid 4 colunas */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'start' }}>
          {CASES.map((card, i) => (
            <CaseCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* MOBILE — carrossel */}
        <div className="lg:hidden flex flex-col gap-6">
          <div
            onScroll={(e) => {
              const el = e.currentTarget
              setActiveCard(Math.round(el.scrollLeft / el.clientWidth))
            }}
            style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory', display: 'flex', gap: '12px', paddingBottom: '8px', scrollbarWidth: 'none', marginLeft: '24px' }}
          >
            {CASES.map((card, i) => (
              <div key={i} style={{ minWidth: 'calc(100vw - 64px)', maxWidth: 'calc(100vw - 64px)', scrollSnapAlign: 'start', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '1/1' }}>
                  <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.category}</span>
                    <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2, textTransform: 'uppercase' }}>{card.title}</h3>
                  </div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ paddingLeft: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            {CASES.map((_, i) => (
              <div key={i} style={{ height: '3px', width: i === activeCard ? '40px' : '24px', backgroundColor: i === activeCard ? '#ffffff' : 'rgba(255,255,255,0.3)', borderRadius: '2px', transition: 'all 300ms ease' }} />
            ))}
          </div>
        </div>

        <div style={{ display: 'none' }}>
          <HoverButton label="VER TODOS OS CASES" />
        </div>

      </div>
    </section>
  )
}