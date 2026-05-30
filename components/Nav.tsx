'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter] duration-500 ease-[var(--ease-out-quint)] ${
          scrolled ? 'bg-[var(--color-background)]/92 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="AZ Q Pools home">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-white display-bold text-lg md:text-xl">
                AZQ
              </div>
              <div className="hidden sm:block leading-none">
                <div className="display text-base md:text-lg tracking-wide uppercase">
                  AZ Q Pools
                </div>
                <div className="text-[10px] md:text-[11px] text-[var(--color-muted)] tracking-[0.18em] uppercase mt-0.5">
                  Service · Repair · Landscape
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-[0.18em] text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+14806957665"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-warning)] hover:text-[var(--color-background)] text-white text-sm uppercase tracking-[0.15em] display transition-colors duration-500 ease-[var(--ease-out-quint)]"
            >
              <Phone size={15} strokeWidth={2} />
              (480) 695-7665
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-[var(--color-foreground)]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--color-background)] transition-[transform] duration-600 ease-[var(--ease-in-out-quint)] ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!open}
      >
        <div className="h-16 px-5 flex items-center justify-between border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-white display-bold text-lg">
              AZQ
            </div>
            <span className="display text-base uppercase tracking-wide">AZ Q Pools</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>
        <div className="px-5 pt-12 pb-12 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-5xl uppercase leading-none hover:text-[var(--color-accent)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-10 left-5 right-5 space-y-3">
          <a
            href="tel:+14806957665"
            className="block w-full text-center px-6 py-4 bg-[var(--color-accent)] text-white display uppercase tracking-[0.18em] text-lg"
          >
            Call (480) 695-7665
          </a>
          <p className="text-center text-xs text-[var(--color-muted)]">
            335 W Cullumber Ave · Gilbert, AZ
          </p>
        </div>
      </div>
    </>
  )
}
