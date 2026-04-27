'use client'

import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const contentOpacity = Math.max(0, 1 - scrollY / 500)
  return (
    <section ref={heroRef} id='hero' className='relative w-full flex flex-col' style={{ height: '100dvh' }}>
      <div className='absolute inset-0 z-0 bg-black'>
        <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover hidden lg:block'>
          <source src='/videos/hero_desktop.mp4' type='video/mp4' />
        </video>
        <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover lg:hidden'>
          <source src='/videos/hero_mobile.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0' style={{ backgroundColor: 'rgba(0,0,0,0.65)' }} />
      </div>
      <div className='relative z-10 flex flex-col h-full' style={{ opacity: contentOpacity, transition: 'opacity 80ms linear' }}>
        <div className='h-[76px] lg:h-20 flex-shrink-0' />
        <div className='flex lg:hidden flex-col flex-1 items-center text-center'>
          <div style={{ display: 'flex', alignItems: 'center', width: '80px', height: '7.43px', marginTop: '32px' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#fff', flexShrink: 0 }} />
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#fff', flexShrink: 0, marginLeft: '8px' }} />
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#fff', flexShrink: 0, marginLeft: '44px' }} />
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '52px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95, margin: 0 }}>
              THE<br />EXPERIENCE<br />AGENCY
            </h2>
          </div>
        </div>
        <div className='hidden lg:flex flex-col flex-1 items-center justify-center text-center'>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(64px, 7vw, 96px)', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.92, margin: '0 0 32px 0' }}>
            THE<br />EXPERIENCE<br />AGENCY
          </h2>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '24px', fontWeight: 400, color: '#ffffff', lineHeight: '29px', textAlign: 'center', maxWidth: '500px', margin: 0 }}>
            Há 15 anos, conectando <strong>criatividade, tecnologia e dados</strong> para acelerar negócios.
          </p>
        </div>
        <div className='flex-shrink-0 pb-8 flex justify-center'>
          <div className='animate-bounce' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '54px', height: '48px', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '11px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Deslize</span>
            <svg width='10' height='6' viewBox='0 0 10 6' fill='none'>
              <path d='M1 1L5 5L9 1' stroke='#ffffff' strokeWidth='1.2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}