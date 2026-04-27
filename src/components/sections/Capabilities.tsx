'use client'
import { BASE_PATH } from '@/lib/basePath'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const CARDS = [
  { num: '01', category: 'ESTRATÉGIA DE MARCA', title: 'IMPACTO CRIATIVO', desc: 'Ideias e narrativas para marcas que precisam ganhar relevância cultural e gerar impacto real no negócio.', tags: ['LOREM', 'IPSUM', 'LOREM IPSUM'] },
  { num: '02', category: 'UX & PRODUTO DIGITAL', title: 'EXPERIÊNCIAS DIGITAIS', desc: 'Experiências digitais centradas no usuário que conectam design, usabilidade e performance de negócio.', tags: ['SEO', 'UX DESIGN', 'GROWTH'] },
  { num: '03', category: 'INFRAESTRUTURA DIGITAL', title: 'TECNOLOGIA APLICADA', desc: 'Soluções digitais e integrações tecnológicas para viabilizar estratégia, escalar operações e aumentar eficiência.', tags: ['AI', 'MARTECH', 'PLATAFORMAS'] },
  { num: '04', category: 'PERFORMANCE DE VENDAS', title: 'DIGITAL COMMERCE', desc: 'Estruturação e otimização de canais digitais para aumentar conversão, receita e integração entre plataformas.', tags: ['FLYWHEEL', 'IPSUM', 'LOREM'] },
  { num: '05', category: 'RELACIONAMENTO & DADOS', title: 'CRM', desc: 'Estratégias de relacionamento baseadas em dados para aumentar retenção, recorrência e personalização em escala.', tags: ['LOREM', 'IPSUM', 'LOREM'] },
  { num: '06', category: 'MÍDIA & PERFORMANCE', title: 'INTELIGÊNCIA DE MÍDIA', desc: 'Planejamento, dados e performance para maximizar eficiência de mídia e acelerar crescimento.', tags: ['LOREM', 'IPSUM', 'LOREM'] },
]

function Tags({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
      {tags.map((tag, j) => (
        <span key={j} style={{ fontFamily: 'Barlow, sans-serif', fontSize: '12px', color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {j > 0 && <span style={{ marginRight: '6px', opacity: 0.5 }}>•</span>}{tag}
        </span>
      ))}
    </div>
  )
}


function HoverButton({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
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
          <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke={hovered ? '#ffffff' : '#ffffff'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  )
}

export function Capabilities() {
  const [activeCard, setActiveCard] = useState(0)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section ref={sectionRef} id="capabilities" className="w-full" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'opacity 700ms ease, transform 700ms ease', backgroundColor: '#111010', position: 'relative', overflow: 'hidden' }}>
      <img src={`${BASE_PATH}/bg-caps-top.png`} alt="" aria-hidden="true" className="hidden lg:block" style={{ position: 'absolute', top: 0, left: 0, width: '413px', height: '414px', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.7, mixBlendMode: 'screen' }} />
      <img src={`${BASE_PATH}/bg-caps-bottom.png`} alt="" aria-hidden="true" className="hidden lg:block" style={{ position: 'absolute', bottom: 0, right: 0, width: '577px', height: '578px', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.7, mixBlendMode: 'screen' }} />
      <img src={`${BASE_PATH}/bg-caps-top.png`} alt="" aria-hidden="true" className="lg:hidden" style={{ position: 'absolute', top: '10vw', left: '-15vw', width: '60vw', height: '60vw', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.55 }} />
      <img src={`${BASE_PATH}/bg-caps-bottom.png`} alt="" aria-hidden="true" className="lg:hidden" style={{ position: 'absolute', bottom: '-5vw', right: '-15vw', width: '70vw', height: '70vw', objectFit: 'cover', pointerEvents: 'none', zIndex: 0, opacity: 0.55 }} />
      <div className="lg:hidden" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(7,7,7,0.75)', zIndex: 0, pointerEvents: 'none' }} />

      <div className="hidden lg:flex flex-col container-jussi py-24 gap-16" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex flex-col items-center text-center gap-8">
          <div style={{ display: 'flex', alignItems: 'center', width: '80px', height: '8px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#00ffa6', flexShrink: 0 }} />
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#00ffa6', flexShrink: 0, marginLeft: '8px' }} />
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#00ffa6', flexShrink: 0, marginLeft: '44px' }} />
          </div>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', color: '#ffffff', lineHeight: 1.1, textTransform: 'uppercase', margin: 0, fontSize: 'clamp(32px, 5vw, 64px)' }}>
            <span style={{ fontWeight: 400 }}>ESTRATÉGIA E EXECUÇÃO</span><br />
            <span style={{ fontWeight: 800 }}>CONECTADAS PARA CRESCER.</span>
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '24px', fontWeight: 400, color: '#ffffff', lineHeight: 1.5, maxWidth: '604px', margin: 0 }}>
            Confira as nossas áreas estratégicas que conectam <strong>criatividade, tecnologia e dados</strong> para acelerar negócios.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {CARDS.map((card, i) => (
            <div key={i} style={{ backgroundColor: '#111111', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '280px', border: '1px solid rgba(195,195,195,0.25)' }}>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '20px', fontWeight: 400, color: '#00ffa6' }}>{card.num}</span>
              <div>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '11px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px 0' }}>{card.category}</p>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>{card.title}</h3>
              </div>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400, color: '#c3c3c3', lineHeight: 1.6, margin: 0, flex: 1 }}>{card.desc}</p>
              <Tags tags={card.tags} />
            </div>
          ))}
        </div>
        <div style={{ display: 'none' }}>
          <Link href="/servicos" className="group" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400, color: '#ffffff', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '100px', padding: '14px 24px', transition: 'background-color 0.25s, color 0.25s, border-color 0.25s' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor='#ffffff'; e.currentTarget.style.color='#070707'; e.currentTarget.style.borderColor='#ffffff'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#ffffff'; e.currentTarget.style.borderColor='rgba(255,255,255,0.4)'; const circle = e.currentTarget.querySelector('.btn-circle') as HTMLElement; if(circle) { circle.style.backgroundColor='transparent'; circle.style.borderColor='rgba(255,255,255,0.4)'; } }}>
            CONHEÇA NOSSOS SERVIÇOS
            <span className="btn-circle" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background-color 0.25s, border-color 0.25s' }}
              onMouseEnter={e => { const btn = e.currentTarget.parentElement; if(btn) { btn.style.backgroundColor='#ffffff'; btn.style.color='#070707'; btn.style.borderColor='#ffffff'; } e.currentTarget.style.backgroundColor='#070707'; e.currentTarget.style.borderColor='#070707'; e.currentTarget.style.color='#ffffff'; }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="lg:hidden py-24 flex flex-col gap-12" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ paddingLeft: '24px', paddingRight: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', color: '#ffffff', lineHeight: 1.1, textTransform: 'uppercase', margin: 0, fontSize: '36px', textAlign: 'center' }}>
            <span style={{ fontWeight: 400 }}>ESTRATÉGIA E EXECUÇÃO</span><br />
            <span style={{ fontWeight: 800 }}>CONECTADAS PARA CRESCER.</span>
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', fontWeight: 400, color: '#ffffff', lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
            Confira as nossas áreas estratégicas que conectam <strong>criatividade, tecnologia e dados</strong> para acelerar negócios.
          </p>
        </div>
        <div onScroll={(e) => { const el = e.currentTarget; setActiveCard(Math.round(el.scrollLeft / (el.clientWidth))) }} style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory', display: 'flex', gap: '12px', paddingBottom: '8px', scrollbarWidth: 'none', marginLeft: '24px' }}>
          {CARDS.map((card, i) => (
            <div key={i} style={{ marginLeft: i === 0 ? '24px' : 0, backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid rgba(195,195,195,0.25)', width: 'calc(100vw - 64px)', minWidth: 'calc(100vw - 64px)', maxWidth: 'calc(100vw - 64px)', scrollSnapAlign: 'start', flexShrink: 0, boxSizing: 'border-box' }}>
              <div>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '11px', fontWeight: 400, color: '#c3c3c3', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px 0' }}>{card.category}</p>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>{card.title}</h3>
              </div>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '14px', fontWeight: 400, color: '#c3c3c3', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              <Tags tags={card.tags} />
            </div>
          ))}
        </div>
        <div style={{ paddingLeft: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}>
          {CARDS.map((_, i) => (
            <div key={i} style={{ height: '3px', width: i === activeCard ? '40px' : '24px', backgroundColor: i === activeCard ? '#ffffff' : 'rgba(255,255,255,0.3)', borderRadius: '2px', transition: 'all 300ms ease' }} />
          ))}
        </div>
        <div style={{ display: 'none' }}>
          <HoverButton href="/servicos" label="CONHEÇA NOSSOS SERVIÇOS" />
        </div>
      </div>
    </section>
  )
}