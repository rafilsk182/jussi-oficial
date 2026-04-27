'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const AWARDS = [
  {
    logo: '/awards/effie.svg',
    title: 'Effie Awards Brasil',
    desc: 'Lorem Ipsum met dolor cops lorem ipsum.',
  },
  {
    logo: '/awards/rankmyapp.svg',
    title: 'Prêmio RankMyAds',
    desc: 'Estratégia de crescimento sustentável em aquisição de Leads',
  },
  {
    logo: '/awards/mma.svg',
    title: 'MMA Smarties 2025',
    desc: 'Única agência premiada na categoria Retail Media no ano.',
  },
  {
    logo: '/awards/tiktok.svg',
    title: 'TikTok Ad Awards Brasil',
    desc: '"O som tá on" – Melhor Uso de Som.',
  },
]

function HoverButtonMobile() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href="/premios"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400,
        textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em',
        borderRadius: '100px', padding: '18px 24px', width: '100%',
        transition: 'all 250ms ease',
        backgroundColor: hovered ? '#ffffff' : 'transparent',
        color: hovered ? '#070707' : '#ffffff',
        border: '1px solid rgba(255,255,255,0.4)',
      }}
    >
      VER MAIS
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke={hovered ? '#070707' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  )
}

function HoverButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href="/premios"
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
      VER MAIS
      <span style={{
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        transition: 'all 250ms ease',
        backgroundColor: hovered ? '#070707' : 'transparent',
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 2V10M6 10L3 7M6 10L9 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  )
}

export function Awards() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="awards" className="w-full" style={{ backgroundColor: '#070707', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
      <div className="container-jussi py-20 flex flex-col gap-12">

        {/* Linha topo */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* DESKTOP */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: '200px 1fr', alignItems: 'start' }}>
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em', paddingTop: '4px' }}>
            Nossos Prêmios
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 40px' }}>
            {AWARDS.map((award, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <img src={award.logo} alt={award.title} style={{ height: '48px', objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>{award.title}</h3>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.5 }}>{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex flex-col gap-8">
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}>
            Nossos Prêmios
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 32px' }}>
            {AWARDS.map((award, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <img src={award.logo} alt={award.title} style={{ height: '40px', objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>{award.title}</h3>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.5 }}>{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linha rodapé */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* Botão centralizado */}
        {/* Botão desktop centralizado */}
        <div className="hidden lg:flex" style={{ justifyContent: 'center' }}>
          <HoverButton />
        </div>
        {/* Botão mobile full-width */}
        <div className="lg:hidden">
          <HoverButtonMobile />
        </div>

      </div>
    </section>
  )
}