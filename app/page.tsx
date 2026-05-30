import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, ShieldCheck, Award, Truck, Wrench, Droplets, Sparkles, Trees, Zap, Flame, Bath } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { Counter } from '@/components/Counter'

const wix = (id: string, w = 1600) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${Math.round(w * 0.66)},al_c,q_85,enc_auto/${id}.jpg`

const heroImg = wix('90a441_e3e38f4d8ffa4568b691f30af5f6e199~mv2.jpg', 2200)

const services = [
  { icon: Droplets, title: 'Weekly Pool Service', desc: 'Brush, net, baskets, chemistry, backwash — a real weekly visit.', href: '/services#weekly' },
  { icon: Wrench, title: 'Equipment Repairs', desc: 'Pumps, filters, salt cells, heaters, plumbing leaks.', href: '/services#repairs' },
  { icon: Bath, title: 'Acid Washes', desc: 'Drain, chip, and bring stained plaster back to clean.', href: '/services#acid' },
  { icon: Sparkles, title: 'Glass Bead Tile Cleaning', desc: 'Mineral and calcium build-up taken off without damage.', href: '/services#tile' },
  { icon: Trees, title: 'Landscape Services', desc: 'Rock, boulders, trees, demo — Bobcat MT100 + dump trailer.', href: '/services#landscape' },
  { icon: Zap, title: 'Landscape Lighting', desc: 'Path, accent, and feature lighting installed clean.', href: '/services#lighting' },
  { icon: Flame, title: 'Natural Gas Pipe Line', desc: 'BBQ, fire pits, pool heaters — properly trenched and run.', href: '/services#gas' },
  { icon: Truck, title: 'Filter Cleaning', desc: 'Cartridge, DE, and grid filters — taken apart, washed, rebuilt.', href: '/services#filter' },
]

export default function Home() {
  return (
    <>
      {/* ============ HERO — typography-first, clean dark, no muddy photo overlay ============ */}
      <section className="relative w-full bg-[var(--color-background)] overflow-hidden">
        {/* Subtle radial backdrop for depth — NO photo behind the headline */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, var(--color-accent) 0px, transparent 45%), radial-gradient(circle at 80% 70%, var(--color-accent-deep) 0px, transparent 45%)',
          }}
        />
        {/* Faint grit overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24">
          {/* Kicker */}
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8 md:mb-12">
            <span className="inline-block w-8 md:w-14 h-px bg-[var(--color-accent)]" />
            <span>Est. 2015 · Gilbert, Arizona</span>
          </div>

          {/* Headline — controlled clamp, never wraps awkwardly */}
          <h1 className="display uppercase font-light text-white text-[clamp(40px,9.5vw,156px)] leading-[1] md:leading-[0.92] tracking-[-0.01em]">
            We clean the dirty.<br />
            <span className="text-[var(--color-accent)]">We fix the broken.</span>
          </h1>

          {/* Subhead + CTAs */}
          <div className="mt-8 md:mt-12 lg:mt-14 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
            <p className="md:col-span-6 text-base md:text-lg lg:text-xl text-[var(--color-muted)] leading-snug max-w-xl">
              Weekly pool service, equipment repair, acid washes, tile cleaning, and full landscape work across the East Valley — owner-operated by Rick &amp; Melissa Richards.
            </p>
            <div className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 md:px-7 py-3.5 md:py-4 bg-[var(--color-accent)] text-white text-sm md:text-base uppercase tracking-[0.18em] display hover:bg-[var(--color-warning)] hover:text-[var(--color-background)] transition-colors duration-500 ease-[var(--ease-out-quint)]"
              >
                Get a quote
                <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
              <a
                href="tel:+14806957665"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-3.5 md:py-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-foreground)] text-sm md:text-base uppercase tracking-[0.18em] display hover:bg-[var(--color-surface)] transition-all duration-500"
              >
                <Phone size={16} strokeWidth={2} />
                (480) 695-7665
              </a>
            </div>
          </div>
        </div>

        {/* Full-bleed photo strip BELOW the headline — gives the image room to actually be seen */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/6] overflow-hidden bg-[var(--color-surface)]">
          <Image
            src={heroImg}
            alt="A clean pool, kept that way by AZ Q Pools — Gilbert, AZ"
            fill
            priority
            quality={88}
            className="object-cover"
            sizes="100vw"
          />
          {/* Tight bottom gradient — only fades to dark at edges, photo stays vivid */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[var(--color-background)]/60 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[var(--color-background)]/60 to-transparent" />
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <RevealSection className="border-b border-[var(--color-border)] py-5 md:py-6 px-5 md:px-8 lg:px-12 bg-[var(--color-surface)]">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-3 text-[11px] md:text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span data-reveal className="flex items-center gap-2"><ShieldCheck size={14} strokeWidth={2} className="text-[var(--color-warning)]" /> Licensed &amp; Insured</span>
          <span data-reveal className="flex items-center gap-2"><Award size={14} strokeWidth={2} className="text-[var(--color-warning)]" /> 10+ Years</span>
          <span data-reveal>Family-Owned</span>
          <span data-reveal>Free Quotes</span>
          <span data-reveal className="hidden md:inline">East Valley Wide</span>
        </div>
      </RevealSection>

      {/* ============ WHAT WE DO — 8 services in asymmetric grid ============ */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
            <div>
              <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                01 / What we do
              </div>
              <h2 data-reveal className="display uppercase font-light text-[clamp(36px,7vw,84px)] leading-[1.02] md:leading-[0.95] tracking-tight max-w-3xl">
                Pool work.<br />Yard work.<br />
                <span className="text-[var(--color-accent)]">Done right.</span>
              </h2>
            </div>
            <p data-reveal className="text-base md:text-lg text-[var(--color-muted)] max-w-md leading-relaxed">
              Eight specialties under one roof. We show up, we do the work, we leave the place cleaner than we found it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                data-reveal
                className="group relative bg-[var(--color-background)] hover:bg-[var(--color-surface)] p-7 md:p-8 lg:p-9 flex flex-col gap-5 transition-colors duration-500 ease-[var(--ease-out-quint)] min-h-[220px]"
              >
                <div className="flex items-start justify-between">
                  <s.icon size={28} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-muted)] tabular">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="display uppercase text-xl md:text-2xl mb-2 tracking-wide group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-snug">{s.desc}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all">
                  Learn more <ArrowRight size={12} strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ============ BY THE NUMBERS — Trades Industrial signature counters ============ */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12 bg-[var(--color-surface)] relative overflow-hidden">
        {/* Vertical line accent — line-draw animation */}
        <div aria-hidden className="absolute left-5 md:left-8 lg:left-12 top-0 w-px h-full bg-gradient-to-b from-[var(--color-warning)] via-[var(--color-accent)] to-transparent opacity-30" />

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
            <div>
              <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                02 / By the numbers
              </div>
              <h2 data-reveal className="display uppercase font-light text-[clamp(36px,6vw,76px)] leading-[1.02] md:leading-[0.95] tracking-tight max-w-3xl">
                A decade of <span className="text-[var(--color-accent)]">East Valley pools.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">
            <Stat number={10} suffix="+" label="Years in business" />
            <Stat number={9} label="Cities served" />
            <Stat number={1000} suffix=" lb" label="Heavy lift on our Bobcat" />
            <Stat number={13000} suffix=" lb" label="Dump trailer capacity" />
          </div>
        </div>
      </RevealSection>

      {/* ============ WHY US — owner story ============ */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
              03 / Why us
            </div>
            <h2 data-reveal className="display uppercase font-light text-[clamp(34px,5.5vw,68px)] leading-[1.02] md:leading-[0.95] tracking-tight mb-8 md:mb-10">
              Rick &amp; Melissa <span className="text-[var(--color-accent)]">show up.</span>
            </h2>
            <div data-reveal className="space-y-5 text-base md:text-lg leading-relaxed text-[var(--color-muted)] max-w-xl">
              <p>
                We&apos;re a family company — owned and run by Rick &amp; Melissa Richards out of Gilbert. We answer our own phones, write our own quotes, and stand behind every job.
              </p>
              <p>
                That means we don&apos;t over-promise, we don&apos;t under-deliver, and we don&apos;t leave a mess behind. If we&apos;re not the right fit for a job, we&apos;ll tell you who is.
              </p>
              <p className="text-[var(--color-foreground)] italic text-xl md:text-2xl pl-5 border-l-2 border-[var(--color-accent)]">
                &ldquo;We clean the dirty &amp; fix the broken.&rdquo;
              </p>
            </div>
          </div>
          <div data-reveal className="md:col-span-5 order-1 md:order-2 relative aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
            <Image
              src={wix('89fb68_af52671815714594a24a5333efaed949~mv2.jpg', 1400)}
              alt="Bobcat MT100 — AZ Q Pools landscape work"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-1">Our rig</div>
              <div className="display text-xl uppercase">Bobcat MT100</div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============ RECENT WORK ============ */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12 bg-[var(--color-surface)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                04 / Recent work
              </div>
              <h2 data-reveal className="display uppercase font-light text-[clamp(36px,6.5vw,84px)] leading-[1.02] md:leading-[0.95] tracking-tight">
                Real jobs. <span className="text-[var(--color-accent)]">Real yards.</span>
              </h2>
            </div>
            <Link
              href="/work"
              data-reveal
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] hover:text-[var(--color-accent)] transition-colors"
            >
              See the gallery
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              { id: '89fb68_fffa3c33859f4d188c885d971d1ab7da~mv2.jpg', label: 'Landscape Removal' },
              { id: '89fb68_8d18790ff65b4f05a33d21c5c7ff4001~mv2.jpg', label: 'Rock Screening' },
              { id: '89fb68_02247033a00c4fc3823cb822553acb47~mv2.jpg', label: 'Heavy Boulders' },
              { id: '89fb68_43e3301b23744f08b5ad6e81d66f7bc1~mv2.jpg', label: 'Patio Demo' },
              { id: '89fb68_c0fd961efc5144fd912d876bb72e9ae9~mv2.jpg', label: 'Rock Delivery' },
              { id: '89fb68_af52671815714594a24a5333efaed949~mv2.jpg', label: 'Bobcat MT100' },
            ].map((p, i) => (
              <div
                key={p.id}
                data-reveal
                className={`group relative overflow-hidden bg-[var(--color-background)] aspect-[4/3] ${
                  i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2 md:aspect-auto' : ''
                }`}
              >
                <Image
                  src={wix(p.id, 1200)}
                  alt={p.label}
                  fill
                  className="object-cover object-center transition-transform duration-[1.2s] ease-[var(--ease-out-quint)] group-hover:scale-[1.05]"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/85 via-[var(--color-background)]/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-0.5">Project</div>
                  <div className="display text-base md:text-lg uppercase">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ============ SERVICE AREA ============ */}
      <RevealSection className="py-14 md:py-24 px-5 md:px-8 lg:px-12 border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto">
          <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6 text-center">
            Service Area
          </div>
          <p data-reveal className="display uppercase text-center text-2xl md:text-4xl lg:text-5xl leading-snug text-[var(--color-foreground)] max-w-5xl mx-auto tracking-wide">
            Gilbert · Chandler · Mesa · Queen Creek · Tempe · Ahwatukee · Apache Junction · Gold Canyon · Phoenix
          </p>
        </div>
      </RevealSection>

      {/* ============ FINAL CTA ============ */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12 bg-[var(--color-accent-deep)] relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-fallback opacity-50" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto text-center">
          <h2 data-reveal className="display uppercase font-light text-white text-[clamp(40px,7.5vw,108px)] leading-[1.02] md:leading-[0.95] tracking-tight mb-6 md:mb-10">
            Got a pool? <br className="md:hidden" /><span className="text-[var(--color-warning)]">Got a yard?</span>
          </h2>
          <p data-reveal className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-snug">
            Call, text, or email — we&apos;ll come out, take a look, and give you a real number in writing.
          </p>
          <div data-reveal className="inline-flex flex-wrap gap-3 md:gap-4 justify-center">
            <a
              href="tel:+14806957665"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-warning)] text-[var(--color-background)] display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-white transition-colors duration-500"
            >
              <Phone size={18} strokeWidth={2.2} />
              (480) 695-POOL
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/40 text-white display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-white/10 hover:border-white transition-all duration-500"
            >
              Email us
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </RevealSection>
    </>
  )
}

function Stat({ number, suffix = '', label }: { number: number; suffix?: string; label: string }) {
  return (
    <div data-reveal className="bg-[var(--color-surface)] p-6 md:p-8 lg:p-10">
      <div className="display uppercase font-light text-[var(--color-accent)] text-3xl md:text-5xl lg:text-6xl tabular tracking-tight mb-3">
        <Counter target={number} suffix={suffix} />
      </div>
      <div className="text-xs md:text-sm text-[var(--color-muted)] uppercase tracking-[0.2em] leading-snug">
        {label}
      </div>
    </div>
  )
}
