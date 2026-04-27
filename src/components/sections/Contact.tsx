'use client'
import { BASE_PATH } from '@/lib/basePath'

import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="contact" className="w-full" style={{ backgroundColor: '#232323', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 700ms ease, transform 700ms ease' }}>
      <div className="container-jussi py-20">

        {/* DESKTOP — duas colunas */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Coluna esquerda */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Contrate um serviço!
              </span>
              <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '64px', fontWeight: 800, color: '#ffffff', lineHeight: 1.0, margin: 0, textTransform: 'uppercase' }}>
                LIBERE O POTENCIAL DO SEU NEGÓCIO COM A <span style={{ color: '#00ffa6' }}>GENTE.</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>E-MAIL</span>
                <a href="mailto:jussi@jussi.com.br" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', fontWeight: 400, color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase' }}>JUSSI@JUSSI.COM.BR</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>ENDEREÇO</span>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.4, textTransform: 'uppercase' }}>WPP CAMPUS<br />Av. Mofarrej, 971 - Vila Leopoldina, São Paulo - SP</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>SIGA A JUSSI</span>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <a href="https://instagram.com/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/instagram.svg`} alt="Instagram" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                  <a href="https://linkedin.com/company/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/linkedin.svg`} alt="LinkedIn" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                  <a href="https://open.spotify.com/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/spotify.svg`} alt="Spotify" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                  <a href="https://medium.com/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/medium.svg`} alt="Medium" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita — formulário */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="text"
              placeholder="Nome"
              style={{ width: '100%', height: '67px', backgroundColor: '#ffffff', borderRadius: '16px', border: 'none', padding: '0 24px', fontFamily: 'Barlow, sans-serif', fontSize: '18px', color: '#070707', outline: 'none', boxSizing: 'border-box' }}
            />
            <input
              type="email"
              placeholder="E-mail"
              style={{ width: '100%', height: '67px', backgroundColor: '#ffffff', borderRadius: '16px', border: 'none', padding: '0 24px', fontFamily: 'Barlow, sans-serif', fontSize: '18px', color: '#070707', outline: 'none', boxSizing: 'border-box' }}
            />
            <textarea
              placeholder="Mensagem"
              rows={6}
              style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: '16px', border: 'none', padding: '20px 24px', fontFamily: 'Barlow, sans-serif', fontSize: '18px', color: '#070707', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
            />
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', padding: '14px 24px', border: '1px solid rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 250ms ease', backgroundColor: hovered ? '#ffffff' : 'transparent', color: hovered ? '#070707' : '#ffffff', alignSelf: 'flex-start' }}
            >
              ENVIAR MENSAGEM
              <span style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 250ms ease', backgroundColor: hovered ? '#070707' : 'transparent' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE — coluna única */}
        <div className="lg:hidden flex flex-col gap-12">

          {/* Texto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Contrate um serviço!
            </span>
            <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '40px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: 0, textTransform: 'uppercase' }}>
              LIBERE O POTENCIAL DO SEU NEGÓCIO COM A <span style={{ color: '#00ffa6' }}>GENTE.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>E-MAIL</span>
                <a href="mailto:jussi@jussi.com.br" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 400, color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase' }}>JUSSI@JUSSI.COM.BR</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>ENDEREÇO</span>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.4, textTransform: 'uppercase' }}>WPP CAMPUS<br />Av. Mofarrej, 971 - Vila Leopoldina, SP</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '13px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>SIGA A JUSSI</span>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <a href="https://instagram.com/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/instagram.svg`} alt="Instagram" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                  <a href="https://linkedin.com/company/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/linkedin.svg`} alt="LinkedIn" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                  <a href="https://open.spotify.com/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/spotify.svg`} alt="Spotify" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                  <a href="https://medium.com/jussi" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <img src={`${BASE_PATH}/social/medium.svg`} alt="Medium" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input type="text" placeholder="Nome" style={{ width: '100%', height: '56px', backgroundColor: '#ffffff', borderRadius: '12px', border: 'none', padding: '0 20px', fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#070707', outline: 'none', boxSizing: 'border-box' }} />
            <input type="email" placeholder="E-mail" style={{ width: '100%', height: '56px', backgroundColor: '#ffffff', borderRadius: '12px', border: 'none', padding: '0 20px', fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#070707', outline: 'none', boxSizing: 'border-box' }} />
            <textarea placeholder="Mensagem" rows={5} style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: '12px', border: 'none', padding: '16px 20px', fontFamily: 'Barlow, sans-serif', fontSize: '16px', color: '#070707', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '100px', padding: '16px 24px', border: '1px solid rgba(255,255,255,0.4)', cursor: 'pointer', backgroundColor: 'transparent', color: '#ffffff', width: '100%' }}>
              ENVIAR MENSAGEM
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}