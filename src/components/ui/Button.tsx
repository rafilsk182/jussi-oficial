'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

/* ============================================================
   BOTÃO — Jüssi
   Figma: node 2035:1627 [DESKTOP] BOTÃO
   Variantes: Default | Hover | SEM TEXTO G | SEM TEXTO P |
              SEM TEXTO G HOVER | SEM TEXTO P HOVER
   Responsivo: desktop + mobile
   ============================================================ */

type ButtonVariant = 'primary' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg' | 'icon-sm' | 'icon-lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  label?: string
  icon?: React.ReactNode
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size    = 'md',
      label,
      icon,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    /* --- Classes base --- */
    const base = [
      'inline-flex items-center justify-center gap-2',
      'font-sans font-normal uppercase tracking-[0.08em]',
      'border border-transparent',
      'transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
      'cursor-pointer select-none',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
      'disabled:opacity-40 disabled:cursor-not-allowed',
    ].join(' ')

    /* --- Variante visual --- */
    const variants: Record<ButtonVariant, string> = {
      primary: [
        'bg-[#070707] text-white border-white/20',
        'hover:bg-white hover:text-[#070707] hover:border-transparent',
        'active:scale-[0.97]',
      ].join(' '),
      ghost: [
        'bg-transparent text-white border-white/30',
        'hover:bg-white hover:text-[#070707] hover:border-transparent',
        'active:scale-[0.97]',
      ].join(' '),
    }

    /* --- Tamanhos (desktop) / responsivos (mobile first) --- */
    const sizes: Record<ButtonSize, string> = {
      sm:      'h-9 px-4 text-[13px] rounded-full',
      md:      'h-11 px-6 text-[14px] rounded-full',
      lg:      'h-13 px-8 text-[16px] rounded-full',
      'icon-sm': 'h-9 w-9 rounded-full p-0',       // SEM TEXTO P
      'icon-lg': 'h-13 w-13 rounded-full p-0',      // SEM TEXTO G
    }

    const classes = [base, variants[variant], sizes[size], className].join(' ')

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {label && <span>{label}</span>}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariant, ButtonSize }
