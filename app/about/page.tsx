import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'

const wix = (id: string, w = 1600) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${Math.round(w * 0.66)},al_c,q_85,enc_auto/${id}.jpg`

export const metadata: Metadata = {
  title: 'About | AZ Q Pools — Rick & Melissa Richards · Gilbert, AZ',
  description:
    'AZ Q Pools is family-owned by Rick & Melissa Richards in Gilbert, AZ. Pool service, repair, and landscape work done by a small crew that answers the phone.',
}

const values = [
  { t: 'We answer the phone', d: 'If we miss a call, you get a callback the same business day. No call center. No bot.' },
  { t: 'We give written quotes', d: 'Before anything starts, you get a written number. No "we’ll figure it out as we go."' },
  { t: 'We clean up after ourselves', d: 'Hauled away. Swept. Trash gone. The job ends when your space looks better than it started.' },
  { t: 'We say no when we should', d: 'If we’re not the right crew for a job, we’ll tell you who is. Honest beats clever every time.' },
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[78vh] flex flex-col justify-end px-5 md:px-8 lg:px-12 pt-24 md:pt-32 pb-14 md:pb-20 bg-[var(--color-background)] overflow-hidden">
        <div className="hero-bg-fallback absolute inset-0 opacity-90" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8 md:mb-10">
            <span className="inline-block w-8 md:w-12 h-px bg-[var(--color-accent)]" />
            <span>About AZ Q Pools</span>
          </div>
          <h1 className="display uppercase font-light text-[clamp(40px,8vw,140px)] leading-[1.02] md:leading-[0.9] tracking-tight max-w-5xl">
            A small crew.<br /><span className="text-[var(--color-accent)]">Big standards.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 lg:gap-20">
          <div data-reveal className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Owner-operated
            </div>
            <h2 className="display uppercase text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-light">
              Rick &amp; Melissa <span className="text-[var(--color-accent)]">Richards.</span>
            </h2>
            <p className="mt-6 text-base text-[var(--color-muted)] leading-relaxed max-w-sm">
              Gilbert-based. Family-run since 2015. Service, repair, and landscape under one roof.
            </p>
          </div>
          <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-[var(--color-muted)]">
            <p data-reveal>
              AZ Q Pools is Arizona Quality Pool Service &amp; Repair, LLC. We&apos;re a small, owner-operated business based in Gilbert, Arizona, and we&apos;ve been keeping East Valley pools clean since 2015.
            </p>
            <p data-reveal>
              The business is run by Rick &amp; Melissa Richards. Rick handles most of the route, equipment work, and landscape jobs. Melissa runs the office, scheduling, and billing. There&apos;s no &ldquo;customer service team&rdquo; — when you call, you&apos;re talking to one of us.
            </p>
            <p data-reveal>
              We started AZ Q Pools because we got tired of seeing the same problems on every route in town: rushed visits, missed weeks, mystery line items, and equipment work that didn&apos;t fix the actual problem. We do it differently — show up, do the work, leave the place clean, and stand behind it.
            </p>
            <p data-reveal>
              We added landscape work a few years in because most pool customers ended up asking for it: boulder removal, rock delivery, patio demolition, lighting, gas pipeline for fire pits and grills. With our Bobcat MT100 and a 13,000-lb dump trailer, we can take on yard work that other pool guys can&apos;t touch.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Image break — Bobcat */}
      <RevealSection className="relative w-full">
        <div data-reveal className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/7] w-full overflow-hidden bg-[var(--color-surface)]">
          <Image
            src={wix('89fb68_af52671815714594a24a5333efaed949~mv2.jpg', 2400)}
            alt="Bobcat MT100 — AZ Q Pools heavy equipment"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/40 to-transparent" />
          <div className="absolute bottom-5 md:bottom-12 left-5 md:left-12 right-5">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
              Our rig
            </div>
            <div className="display uppercase text-2xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Bobcat MT100 + 13,000 lb dump trailer
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Values */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
            <div>
              <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                How we work
              </div>
              <h2 data-reveal className="display uppercase font-light text-[clamp(34px,5.5vw,68px)] leading-[1.02] md:leading-[0.95] tracking-tight max-w-3xl">
                Four <span className="text-[var(--color-accent)]">rules.</span>
              </h2>
            </div>
            <p data-reveal className="max-w-md text-[var(--color-muted)] leading-relaxed">
              These aren&apos;t marketing — they&apos;re what makes every AZ Q Pools job run the same way, every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-border)]">
            {values.map((v, i) => (
              <div key={v.t} data-reveal className="bg-[var(--color-background)] p-7 md:p-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)] tabular mb-4">
                  0{i + 1}
                </div>
                <h3 className="display uppercase text-xl md:text-2xl tracking-wide mb-3">{v.t}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Trust */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12 bg-[var(--color-surface)]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
              Credentials
            </div>
            <h2 data-reveal className="display uppercase font-light text-[clamp(32px,4.5vw,56px)] leading-[1.02] md:leading-[0.95] tracking-tight">
              Real business. <span className="text-[var(--color-accent)]">Real coverage.</span>
            </h2>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              'Arizona Quality Pool Service & Repair, LLC',
              'Fully insured for residential service',
              'Bonded for landscape and demo work',
              'Family-owned and operated since 2015',
              'Free written quotes on any job',
              'Same-day callback policy',
            ].map((line) => (
              <div key={line} data-reveal className="flex items-start gap-3">
                <Check size={18} strokeWidth={2} className="mt-1 text-[var(--color-warning)] flex-shrink-0" />
                <p className="text-[var(--color-foreground)] leading-snug">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 data-reveal className="display uppercase font-light text-[clamp(40px,6.5vw,96px)] leading-[1.02] md:leading-[0.95] tracking-tight max-w-4xl mx-auto mb-8 md:mb-12">
            Let&apos;s <span className="text-[var(--color-accent)]">get to work.</span>
          </h2>
          <div data-reveal className="inline-flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-accent)] text-white display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-[var(--color-warning)] hover:text-[var(--color-background)] transition-colors duration-500"
            >
              Get a quote
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a
              href="tel:+14806957665"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[var(--color-border)] display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-[var(--color-surface)] transition-all duration-500"
            >
              <Phone size={16} strokeWidth={2} />
              (480) 695-7665
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
