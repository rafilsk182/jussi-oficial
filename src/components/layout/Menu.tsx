'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

/* ============================================================
   MENU — Jüssi
   Figma Desktop: node 2035:2581 [Desktop] MENU
     Variantes: opaco (#232323) | sem fundo (transparent)
   Figma Mobile:  node 2049:4595 1. menu
   ============================================================ */

interface MenuProps {
  variant?: 'opaco' | 'sem-fundo'
  isHomePage?: boolean   // true → logo é H1 (SEO home); false → logo é link simples
}

const NAV_LINKS = [
  { label: 'Serviços', href: '#capabilities' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Cases',    href: '#cases' },
  { label: 'Contato',  href: '#contact' },
]

export function Menu({ variant = 'sem-fundo', isHomePage = false }: MenuProps) {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeVariant, setActiveVariant] = useState(variant)
  const menuRef = useRef<HTMLElement>(null)

  /* Muda para 'opaco' ao rolar */
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
      setActiveVariant(isScrolled ? 'opaco' : variant)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  /* Fecha menu mobile ao pressionar ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* Trava scroll quando menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isOpaco = activeVariant === 'opaco'

  const navBg = isOpaco
    ? 'bg-[#232323]/95 backdrop-blur-md'
    : 'bg-transparent'

  return (
    <>
      {/* ── HEADER ── */}
      <header
        ref={menuRef}
        role="banner"
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-[350ms] cubic-bezier(0.4,0,0.2,1)',
          navBg,
          scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.06)]' : '',
        ].join(' ')}
      >
        <div className="container-jussi">
          <div className="flex items-center justify-between h-[76px] lg:h-20 border-b border-[#c3c3c3]/20 lg:border-none">

            {/* Logo — H1 na home (SEO), link simples nas demais páginas */}
            {isHomePage ? (
              <h1 className="flex-shrink-0 leading-none">
                <Link
                  href="/"
                  aria-label="Jüssi — The Experience Agency"
                  className="flex transition-opacity duration-[250ms] hover:opacity-70"
                >
                  <LogoJussi className="h-6 lg:h-7 w-auto" />
                </Link>
              </h1>
            ) : (
              <Link
                href="/"
                aria-label="Jüssi — página inicial"
                className="flex-shrink-0 flex transition-opacity duration-[250ms] hover:opacity-70"
              >
                <LogoJussi className="h-6 lg:h-7 w-auto" />
              </Link>
            )}

            {/* Nav desktop */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-8"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'font-sans font-normal text-[16px] text-white',
                    'relative uppercase tracking-[0.08em]',
                    'transition-opacity duration-[250ms]',
                    'hover:opacity-60',
                    'after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px',
                    'after:bg-white after:transition-all after:duration-[250ms]',
                    'hover:after:w-full',
                  ].join(' ')}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Ações desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Seletor de idioma */}
              <div className="flex items-center gap-2 text-[14px] font-sans text-white/60">
                <button
                  className="font-extrabold text-white uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
                  onClick={() => (window as any).setLanguage && (window as any).setLanguage('pt')}>
                  PT
                </button>
                <span className="text-white/30">|</span>
                <button
                  className="font-normal uppercase tracking-[0.08em] transition-opacity hover:opacity-60"
                  onClick={() => (window as any).setLanguage && (window as any).setLanguage('en')}>
                  EN
                </button>
                <div id="google_translate_element" />
              </div>

              <Button variant="primary" size="sm" label="Contato" />
            </div>

            {/* Hamburguer mobile */}
            <button
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] transition-all"
            >
              <span
                className={[
                  'block w-6 h-[1.5px] bg-white transition-all duration-[300ms]',
                  menuOpen ? 'translate-y-[6.5px] rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block w-6 h-[1.5px] bg-white transition-all duration-[300ms]',
                  menuOpen ? 'opacity-0 scale-x-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block w-6 h-[1.5px] bg-white transition-all duration-[300ms]',
                  menuOpen ? '-translate-y-[6.5px] -rotate-45' : '',
                ].join(' ')}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MENU MOBILE (overlay fullscreen) ── */}
      {/* Fundo: #232323 conforme Figma node 2049:4595 */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
        className={[
          'fixed inset-0 z-40 lg:hidden',
          'bg-[#232323] flex flex-col',
          'transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-3',
        ].join(' ')}
      >
        {/* Espaço para o header fixo (76px mobile) */}
        <div className="h-[76px] border-b border-[#c3c3c3]/20 flex-shrink-0" />

        <nav
          aria-label="Menu mobile"
          className="container-jussi flex flex-col flex-1 justify-center gap-8 pb-16"
        >
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={[
                'font-sans font-normal text-[32px] text-white',
                'uppercase tracking-[0.04em]',
                'transition-all duration-[250ms]',
                'hover:opacity-60',
                'border-b border-white/10 pb-6',
                menuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0',
              ].join(' ')}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              {label}
            </Link>
          ))}

          <div
            className={[
              'flex items-center gap-6 pt-4',
              'transition-all duration-[300ms]',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? '280ms' : '0ms' }}
          >
            <Button
              variant="primary"
              size="lg"
              label="Contato"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            />
          </div>

          {/* Idioma mobile */}
          <div
            className={[
              'flex items-center gap-3 text-[14px] text-white/50',
              'transition-all duration-[300ms]',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? '340ms' : '0ms' }}
          >
            <button className="font-extrabold text-white uppercase tracking-[0.08em]">PT</button>
            <span>|</span>
            <button className="uppercase tracking-[0.08em] hover:text-white transition-colors">EN</button>
          </div>
        </nav>
      </div>
    </>
  )
}

/* ── Logo oficial Jüssi ── */
function LogoJussi({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="94"
      height="33"
      viewBox="0 0 94 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Jüssi"
    >
      <path d="M93.0183 2.92006C93.0183 1.30713 91.5659 0 89.7738 0C87.9817 0 86.5293 1.30713 86.5293 2.92006C86.5293 4.53298 87.9817 5.84012 89.7738 5.84012C91.5659 5.84012 93.0183 4.53298 93.0183 2.92006Z" fill="white"/>
      <path d="M34.5265 5.84012C36.3186 5.84012 37.771 4.53298 37.771 2.92006C37.771 1.30713 36.3186 0 34.5265 0C32.7344 0 31.282 1.30713 31.282 2.92006C31.2831 4.53298 32.7355 5.84012 34.5265 5.84012Z" fill="white"/>
      <path d="M26.4361 5.84012C28.2282 5.84012 29.6806 4.53298 29.6806 2.92006C29.6806 1.30713 28.2282 0 26.4361 0C24.644 0 23.1916 1.30713 23.1916 2.92006C23.1916 4.53298 24.644 5.84012 26.4361 5.84012Z" fill="white"/>
      <path d="M89.7743 7.50293C88.3173 7.50293 87.1356 8.56543 87.1356 9.87671V29.9771C87.1356 31.2884 88.3173 32.3519 89.7743 32.3519C91.2313 32.3519 92.413 31.2884 92.413 29.9771V9.87671C92.413 8.56543 91.2313 7.50293 89.7743 7.50293Z" fill="white"/>
      <path d="M7.99206 10.1141C7.99206 11.4254 9.17377 12.4879 10.6307 12.4879H13.2694V16.5098V24.0416C13.2694 26.0246 11.4761 27.6386 9.27282 27.6386C7.0695 27.6386 5.27621 26.0246 5.27621 24.0416V21.9208C5.27621 20.6095 4.0945 19.5459 2.63753 19.5459C1.18055 19.5459 0 20.6095 0 21.9208V24.0416C0 27.2903 2.06395 30.1046 5.07581 31.4822C6.33583 32.0596 7.76171 32.3861 9.27282 32.3861C10.7839 32.3861 12.2087 32.0586 13.4698 31.4822C16.4817 30.1036 18.5456 27.2903 18.5456 24.0416V12.4879V9.62792C18.5456 8.58511 17.6058 7.73926 16.4471 7.73926H13.2694H10.6296C9.17261 7.73926 7.99206 8.8028 7.99206 10.1141Z" fill="white"/>
      <path d="M37.0107 7.34961C35.5538 7.34961 34.3721 8.4121 34.3721 9.72338V16.5327V23.6665V24.0417V24.417C34.1624 26.2154 32.4682 27.6231 30.4146 27.6231C28.361 27.6231 26.6668 26.2165 26.4572 24.417V24.0417V23.6665V16.5327V9.72338C26.4572 8.4121 25.2755 7.34961 23.8185 7.34961C22.3615 7.34961 21.1798 8.4121 21.1798 9.72338V24.0417C21.1798 27.3018 23.2668 30.1213 26.3028 31.4823C27.541 32.0369 28.9358 32.351 30.4135 32.351C31.8912 32.351 33.286 32.0369 34.5241 31.4823C37.5601 30.1213 39.6471 27.3007 39.6471 24.0417V9.72338C39.6494 8.4121 38.4677 7.34961 37.0107 7.34961Z" fill="white"/>
      <path d="M64.4467 17.1857C64.4156 11.2937 58.9654 6.55445 52.352 6.79805C46.417 7.01677 41.5681 11.3227 41.2502 16.6611C41.0429 20.1441 42.7325 23.2797 45.4737 25.3083C47.4778 26.7917 50.0439 27.6821 52.8415 27.6821C55.1013 27.6821 57.0881 28.7539 58.2087 30.3617C58.6856 31.0469 59.501 31.4812 60.3994 31.4812H60.5146C62.552 31.4812 63.7971 29.4692 62.7282 27.907C62.0533 26.9202 61.1999 26.0412 60.2093 25.3083C58.2375 23.8488 55.7232 22.9636 52.9786 22.9346C49.7214 22.9003 46.8962 20.7795 46.5472 17.8636C46.1383 14.4408 49.1202 11.5373 52.8415 11.5373C56.3141 11.5373 59.1405 14.0666 59.1716 17.1846C59.1716 17.3069 59.1912 17.4251 59.2234 17.5391C59.349 18.7353 60.4673 19.6724 61.8299 19.6724C63.2765 19.6724 64.449 18.6172 64.449 17.3152C64.449 17.2935 64.4455 17.2717 64.4455 17.2499C64.4444 17.2292 64.4467 17.2085 64.4467 17.1857Z" fill="white"/>
      <path d="M81.2623 13.8672C79.2582 12.3838 76.6921 11.4934 73.8945 11.4934C71.6347 11.4934 69.6479 10.4216 68.5273 8.81385C68.0504 8.12867 67.235 7.69434 66.3355 7.69434H66.2203C64.1817 7.69434 62.9378 9.70635 64.0066 11.2685C64.6815 12.2563 65.535 13.1343 66.5255 13.8672C68.4973 15.3267 71.0116 16.2119 73.7563 16.241C77.0134 16.2752 79.8387 18.396 80.1877 21.3119C80.5966 24.7347 77.6147 27.6392 73.8933 27.6392C70.4208 27.6392 67.5932 25.11 67.5633 21.9919C67.5633 21.8396 67.5356 21.6934 67.4861 21.5555C67.2788 20.4402 66.2042 19.5902 64.9061 19.5902C63.4595 19.5902 62.287 20.6454 62.287 21.9474C62.287 21.9546 62.2882 21.9619 62.2882 21.9691C62.2882 21.9764 62.287 21.9836 62.287 21.9919V22.0116H62.2882C62.332 27.8963 67.7786 32.6252 74.3874 32.3785C80.3201 32.1577 85.1667 27.8528 85.4846 22.5154C85.6931 19.0315 84.0023 15.8958 81.2623 13.8672Z" fill="white"/>
    </svg>
  )
}
