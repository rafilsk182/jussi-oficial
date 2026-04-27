'use client'

import { useEffect, useRef, useState } from 'react'

const CERTS = [
  { img: '/certs/cert-01.png', label: 'Certificado Media Buying Professional' },
  { img: '/certs/cert-02.png', label: 'Certificado Marketing Developer' },
  { img: '/certs/cert-03.png', label: 'VTEX Partner Gold' },
  { img: '/certs/cert-04.png', label: 'Google Partner Premier 2023' },
  { img: '/certs/cert-05.png', label: 'Salesforce Summit Partner' },
  { img: '/certs/cert-06.png', label: 'Certificado Media Buying Professional' },
  { img: '/certs/cert-07.png', label: 'Certificado Marketing Developer' },
  { img: '/certs/cert-08.png', label: 'VTEX Partner Gold' },
  { img: '/certs/cert-09.png', label: 'Google Partner Premier 2023' },
]

export function Certifications() {
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
    <section ref={ref} id="certifications" className="w-full" style={{ backgroundColor: '#070707', position: 'relative', overflow: 'hidden', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>

      {/* BG esferas desktop */}
      <img src="/bg-caps-top.png" alt="" aria-hidden="true" className="hidden lg:block" style={{ position: 'absolute', bottom: 0, left: '-80px', width: '340px', height: '340px', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.7, mixBlendMode: 'screen' }} />
      <img src="/bg-caps-top.png" alt="" aria-hidden="true" className="hidden lg:block" style={{ position: 'absolute', bottom: 0, left: '220px', width: '340px', height: '340px', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.7, mixBlendMode: 'screen' }} />
      <img src="/bg-caps-bottom.png" alt="" aria-hidden="true" className="hidden lg:block" style={{ position: 'absolute', bottom: 0, right: '-40px', width: '300px', height: '300px', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.7, mixBlendMode: 'screen' }} />

      {/* BG esferas mobile — duas pela metade na base */}
      <img src="/bg-caps-top.png" alt="" aria-hidden="true" className="lg:hidden" style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '55vw', height: '55vw', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.6, mixBlendMode: 'screen' }} />
      <img src="/bg-caps-bottom.png" alt="" aria-hidden="true" className="lg:hidden" style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '55vw', height: '55vw', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.6, mixBlendMode: 'screen' }} />

      <div className="container-jussi py-20 flex flex-col gap-16" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Nossos Certificados
          </span>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(32px, 3.5vw, 46px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: 0, textTransform: 'uppercase', textAlign: 'center' }}>
            CONHECIMENTO <span style={{ color: '#00ffa6' }}>VALIDADO</span><br />NA PRÁTICA DIÁRIA.
          </h2>
        </div>

        {/* DESKTOP — linha 1 com 5, linha 2 com 4 centralizados */}
        <div className="hidden lg:flex flex-col gap-8 items-center">
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            {CERTS.slice(0, 5).map((cert, i) => (
              <div key={i} style={{ width: '164px', height: '164px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.25)', flexShrink: 0, overflow: 'hidden', backgroundColor: '#1a1a1a', outline: '1px solid rgba(255,255,255,0.25)', outlineOffset: '-1px' }}>
                <img src={cert.img} alt={cert.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            {CERTS.slice(5).map((cert, i) => (
              <div key={i} style={{ width: '164px', height: '164px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.25)', flexShrink: 0, overflow: 'hidden', backgroundColor: '#1a1a1a', outline: '1px solid rgba(255,255,255,0.25)', outlineOffset: '-1px' }}>
                <img src={cert.img} alt={cert.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE — grid 3 cols linha 1, 2 cols linha 2 centralizados */}
        <div className="lg:hidden flex flex-col gap-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {CERTS.slice(0, 3).map((cert, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.25)', overflow: 'hidden', backgroundColor: '#1a1a1a', outline: '1px solid rgba(255,255,255,0.25)', outlineOffset: '-1px' }}>
                  <img src={cert.img} alt={cert.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '11px', fontWeight: 400, color: '#c3c3c3', margin: 0, lineHeight: 1.3, textAlign: 'center' }}>{cert.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '280px', margin: '0 auto' }}>
            {CERTS.slice(3, 5).map((cert, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.25)', overflow: 'hidden', backgroundColor: '#1a1a1a', outline: '1px solid rgba(255,255,255,0.25)', outlineOffset: '-1px' }}>
                  <img src={cert.img} alt={cert.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '11px', fontWeight: 400, color: '#c3c3c3', margin: 0, lineHeight: 1.3, textAlign: 'center' }}>{cert.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}