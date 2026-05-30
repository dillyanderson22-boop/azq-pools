import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Check, Droplets, Wrench, Bath, Sparkles, Trees, Zap, Flame, Truck } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'

const wix = (id: string, w = 1600) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${Math.round(w * 0.66)},al_c,q_85,enc_auto/${id}.jpg`

export const metadata: Metadata = {
  title: 'Services | AZ Q Pools — Pool Service, Repair & Landscape · Gilbert',
  description:
    'Weekly pool service, filter cleaning, equipment repair, acid washes, glass-bead tile cleaning, landscape work, lighting, and natural gas pipeline. East Valley, AZ.',
}

type Service = {
  id: string
  n: string
  icon: any
  title: string
  tag: string
  blurb: string
  includes: string[]
  image?: string
}

const services: Service[] = [
  {
    id: 'weekly',
    n: 'A',
    icon: Droplets,
    title: 'Weekly Pool Service',
    tag: 'Chlorine or salt · weekly, monthly, vacation',
    blurb:
      'A real weekly visit — not a five-minute fly-by. We brush, net, empty baskets, balance chemistry, backwash the filter when it needs it, and check the whole system before we leave.',
    includes: [
      'Brushing walls and steps',
      'Netting surface and bottom',
      'Skimmer and pump baskets emptied',
      'Filter backwash as needed',
      'Six-level chemistry test and balance',
      'Equipment inspection and valve check',
      'Salt pool service included',
      'Vacation top-ups and one-time cleans',
    ],
  },
  {
    id: 'filter',
    n: 'B',
    icon: Truck,
    title: 'Pool Filter Cleaning',
    tag: 'Cartridge · DE · sand · grid',
    blurb:
      'Filters get caked up. We take yours apart, hose it down, soak the cartridges or grids if needed, replace what’s damaged, and reassemble it properly. Your pump pressure will drop and your circulation will jump.',
    includes: [
      'Cartridge filter deep clean',
      'DE grid replacement and re-charge',
      'Sand filter media swap',
      'O-ring and gasket inspection',
      'Pressure-test on reassembly',
      'Honest "this filter is done" conversations',
    ],
  },
  {
    id: 'repairs',
    n: 'C',
    icon: Wrench,
    title: 'Equipment Repairs',
    tag: 'Pumps · heaters · salt cells · plumbing',
    blurb:
      'When something stops working, we diagnose it first and quote it second. We don’t guess and swap parts. We partner with Pentair, Hayward, and Jandy directly so the parts come from the right place.',
    includes: [
      'Pump motor and seal replacement',
      'Heater service (gas and electric)',
      'Salt cell diagnostics and swap',
      'Automation install and reprogram',
      'Plumbing leak detection',
      'Multiport and valve rebuilds',
      'Pop-up head replacement',
    ],
  },
  {
    id: 'acid',
    n: 'D',
    icon: Bath,
    title: 'Acid Washes',
    tag: 'Stained plaster · algae · mineral build-up',
    blurb:
      'When your plaster has gone permanently green, gray, or yellow, an acid wash strips the top layer and brings the surface back to white. Done wrong, it eats your plaster. Done right, it adds years to your pool.',
    includes: [
      'Full pool drain and prep',
      'Controlled acid application',
      'Stain neutralization',
      'Plaster condition assessment',
      'Refill and chemistry start-up',
      'Honest "you need re-plaster, not acid" calls when appropriate',
    ],
  },
  {
    id: 'tile',
    n: 'E',
    icon: Sparkles,
    title: 'Glass Bead Tile Cleaning',
    tag: 'Calcium · mineral · waterline scale',
    blurb:
      'Glass-bead blasting is the right way to take calcium and mineral build-up off pool tile without damaging the grout or scratching the tile. We come out with the rig, set up containment, and the tile looks new again.',
    includes: [
      'Glass-bead media blasting',
      'Containment and clean-up',
      'Spa and waterline tile both',
      'No tile damage or scratching',
      'Same-day completion for typical pools',
    ],
  },
  {
    id: 'landscape',
    n: 'F',
    icon: Trees,
    title: 'Landscape Services',
    tag: 'Bobcat MT100 · dump trailer · demo + delivery',
    blurb:
      'Rock removal, boulder delivery, tree planting, stump grinding, patio demolition, block wall removal, trenching for pipes. Our Bobcat MT100 handles up to 1,000-lb boulders. Our dump trailer hauls up to 13,000 lb.',
    includes: [
      'Landscape rock removal and delivery',
      'Heavy boulder placement (up to 1,000 lb)',
      'Tree removal and stump grinding',
      'Patio and block wall demolition',
      'Trenching for underground pipes',
      'Bush, grass, and debris haul-off',
      'Landscape rock screening service',
      '13,000-lb (6.5-ton) dump capacity',
    ],
    image: wix('89fb68_fffa3c33859f4d188c885d971d1ab7da~mv2.jpg', 1400),
  },
  {
    id: 'lighting',
    n: 'G',
    icon: Zap,
    title: 'Landscape Lighting',
    tag: 'Path · accent · feature',
    blurb:
      'Low-voltage path and accent lighting installed clean — runs hidden, transformer sized right, fixtures aimed properly. Done well, it makes the whole yard look ten times more expensive at night.',
    includes: [
      'Path and walkway lights',
      'Accent and uplighting on trees',
      'Pool, fountain, and feature lighting',
      'Transformer install and sizing',
      'Hidden wire runs',
      'Programmable timer and zone setup',
    ],
  },
  {
    id: 'gas',
    n: 'H',
    icon: Flame,
    title: 'Natural Gas Pipeline',
    tag: 'BBQ · fire pits · pool heaters',
    blurb:
      'Running new gas line for a BBQ island, fire pit, or pool heater. Trenched, pressure-tested, code-compliant. We don’t cut corners on gas.',
    includes: [
      'BBQ island gas line',
      'Fire pit and fire feature lines',
      'Pool and spa heater connections',
      'Trenching and proper depth',
      'Pressure testing',
      'Code-compliant install',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-5 md:px-8 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-[var(--color-background)] overflow-hidden">
        <div className="hero-bg-fallback absolute inset-0 opacity-90" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8 md:mb-10">
            <span className="inline-block w-8 md:w-12 h-px bg-[var(--color-accent)]" />
            <span>Services · East Valley</span>
          </div>
          <h1 className="display uppercase font-light text-[clamp(46px,10vw,170px)] leading-[1.02] md:leading-[0.9] tracking-tight">
            Eight things.<br /><span className="text-[var(--color-accent)]">Done right.</span>
          </h1>
          <p className="mt-6 md:mt-10 max-w-2xl text-base md:text-lg lg:text-xl text-[var(--color-muted)] leading-snug">
            Pool service and repair plus full landscape work. Real ranges, honest quotes, owner-operated since 2015.
          </p>
        </div>
      </section>

      {/* Anchor nav — sticky, horizontal scroll on mobile */}
      <RevealSection className="border-y border-[var(--color-border)] py-4 md:py-5 px-5 md:px-8 lg:px-12 bg-[var(--color-background)] sticky top-16 md:top-20 z-30 backdrop-blur-md bg-[var(--color-background)]/95">
        <div className="max-w-[1400px] mx-auto flex items-center gap-x-5 md:gap-x-7 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] overflow-x-auto whitespace-nowrap -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-[var(--color-accent)] transition-colors flex-shrink-0 text-[var(--color-muted)]">
              <span className="text-[var(--color-warning)] mr-1.5 tabular">{s.n}</span>
              {s.title}
            </a>
          ))}
        </div>
      </RevealSection>

      {/* Service sections */}
      {services.map((s, i) => (
        <RevealSection
          key={s.id}
          className={`py-14 md:py-24 lg:py-32 px-5 md:px-8 lg:px-12 ${i % 2 === 0 ? '' : 'bg-[var(--color-surface)]'}`}
        >
          <section id={s.id} className="max-w-[1400px] mx-auto scroll-mt-32">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
              <div className="md:col-span-5">
                <div data-reveal className="flex items-center gap-4 mb-6">
                  <s.icon size={36} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                  <span className="display uppercase text-3xl md:text-4xl text-[var(--color-warning)] tabular tracking-wide">
                    {s.n}
                  </span>
                </div>
                <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] mb-3">
                  {s.tag}
                </div>
                <h2 data-reveal className="display uppercase font-light text-[clamp(28px,4vw,52px)] leading-[1.05] md:leading-[0.98] tracking-tight mb-6">
                  {s.title}
                </h2>
                <p data-reveal className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed">
                  {s.blurb}
                </p>
                <div data-reveal className="mt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-accent)] text-white display uppercase tracking-[0.18em] text-xs md:text-sm hover:bg-[var(--color-warning)] hover:text-[var(--color-background)] transition-colors duration-500"
                  >
                    Quote this service
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-7">
                <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
                  Included
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                  {s.includes.map((it) => (
                    <li key={it} data-reveal className="flex items-start gap-3 text-sm md:text-base leading-snug">
                      <Check size={16} strokeWidth={2} className="mt-1 text-[var(--color-warning)] flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {s.image && (
                  <div data-reveal className="relative aspect-[16/10] overflow-hidden bg-[var(--color-background)] mt-4">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </RevealSection>
      ))}

      {/* Service area band */}
      <RevealSection className="py-14 md:py-24 px-5 md:px-8 lg:px-12 bg-[var(--color-accent-deep)] relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-fallback opacity-50" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto text-center">
          <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-warning)] mb-6">
            Where we work
          </div>
          <p data-reveal className="display uppercase font-light text-white text-2xl md:text-4xl lg:text-5xl leading-snug max-w-5xl mx-auto tracking-wide">
            Gilbert · Chandler · Mesa · Queen Creek · Tempe · Ahwatukee · Apache Junction · Gold Canyon · Phoenix
          </p>
        </div>
      </RevealSection>
    </>
  )
}
