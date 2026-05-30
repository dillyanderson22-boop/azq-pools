import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-24 md:mt-32">
      {/* Yellow stripe accent — Trades Industrial */}
      <div className="h-1.5 stripe-accent opacity-90" aria-hidden />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20 grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-md bg-[var(--color-accent)] flex items-center justify-center text-white display-bold text-xl">
              AZQ
            </div>
            <div className="leading-tight">
              <div className="display text-xl tracking-wide uppercase">AZ Q Pools</div>
              <div className="text-xs text-[var(--color-muted)] tracking-[0.18em] uppercase mt-0.5">
                Service · Repair · Landscape
              </div>
            </div>
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed max-w-md italic">
            &ldquo;We clean the dirty &amp; fix the broken.&rdquo;
          </p>
          <p className="text-[var(--color-muted)] text-sm mt-4 max-w-md">
            Rick &amp; Melissa Richards — Owner-operated pool service and landscape work across the East Valley since 2015.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="display text-sm uppercase tracking-[0.22em] text-[var(--color-muted)] mb-5">
            Explore
          </h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
            <li><Link href="/work" className="hover:text-[var(--color-accent)] transition-colors">Work</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="display text-sm uppercase tracking-[0.22em] text-[var(--color-muted)] mb-5">
            Contact
          </h4>
          <ul className="space-y-3.5 text-base">
            <li>
              <a href="tel:+14806957665" className="flex items-start gap-3 hover:text-[var(--color-accent)] transition-colors">
                <Phone size={16} strokeWidth={1.7} className="mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                <span><span className="display tracking-wide">(480) 695-POOL</span><br /><span className="text-[var(--color-muted)] text-sm">(480) 695-7665</span></span>
              </a>
            </li>
            <li>
              <a href="mailto:azqpools.net@gmail.com" className="flex items-start gap-3 hover:text-[var(--color-accent)] transition-colors break-all">
                <Mail size={16} strokeWidth={1.7} className="mt-1 flex-shrink-0 text-[var(--color-accent)]" />
                azqpools.net@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} strokeWidth={1.7} className="mt-1 flex-shrink-0 text-[var(--color-accent)]" />
              <address className="not-italic">
                335 W Cullumber Ave<br />Gilbert, AZ 85233
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[var(--color-muted)]">
          <div>© {new Date().getFullYear()} Arizona Quality Pool Service &amp; Repair, LLC</div>
          <a href="https://aydenbuilds.com" className="hover:text-[var(--color-foreground)] transition-colors">
            Site by Ayden Anderson
          </a>
        </div>
      </div>
    </footer>
  )
}
