import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'

const wix = (id: string, w = 1600) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${Math.round(w * 0.66)},al_c,q_85,enc_auto/${id}.jpg`

export const metadata: Metadata = {
  title: 'Work | AZ Q Pools — Recent Pool & Landscape Projects',
  description:
    'Recent pool service, repair, and landscape projects from AZ Q Pools across Gilbert, Mesa, Chandler, and the East Valley.',
}

type Project = {
  id: string
  title: string
  type: 'Landscape' | 'Pool' | 'Demo' | 'Equipment'
  location: string
  detail: string
  span?: string
}

const projects: Project[] = [
  {
    id: '89fb68_af52671815714594a24a5333efaed949~mv2.jpg',
    title: 'Bobcat MT100 on a Yard Job',
    type: 'Landscape',
    location: 'Gilbert, AZ',
    detail: 'Our rig — pulls 1,000-lb boulders without breaking a sweat.',
    span: 'col-span-2 md:col-span-8 row-span-2 aspect-[16/12] md:aspect-auto',
  },
  {
    id: '89fb68_fffa3c33859f4d188c885d971d1ab7da~mv2.jpg',
    title: 'Full Landscape Clear',
    type: 'Landscape',
    location: 'Chandler, AZ',
    detail: 'Trees, bushes, rock, and grass — gone.',
    span: 'col-span-2 md:col-span-4 aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: '89fb68_8d18790ff65b4f05a33d21c5c7ff4001~mv2.jpg',
    title: 'Rock Screening',
    type: 'Landscape',
    location: 'Mesa, AZ',
    detail: 'Sifted clean rock separated from dirt — ready for the next job.',
    span: 'md:col-span-4 aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: '89fb68_02247033a00c4fc3823cb822553acb47~mv2.jpg',
    title: 'Heavy Boulder Move',
    type: 'Landscape',
    location: 'Queen Creek, AZ',
    detail: 'Close to 1,000 lb — placed exactly where the customer wanted.',
    span: 'md:col-span-4 aspect-square',
  },
  {
    id: '89fb68_43e3301b23744f08b5ad6e81d66f7bc1~mv2.jpg',
    title: 'Patio + Wall Demo',
    type: 'Demo',
    location: 'Tempe, AZ',
    detail: 'Two patio sections, a block retaining wall, and a 1,000-lb boulder removed.',
    span: 'md:col-span-8 aspect-[16/9]',
  },
  {
    id: '89fb68_c0fd961efc5144fd912d876bb72e9ae9~mv2.jpg',
    title: 'Rock Delivery',
    type: 'Landscape',
    location: 'Ahwatukee, AZ',
    detail: '13,000-lb dump trailer — one trip, one drop.',
    span: 'md:col-span-4 aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: '90a441_656dfa98dbb64214b3f375a74e853c11~mv2.jpg',
    title: 'Weekly Service Route',
    type: 'Pool',
    location: 'Gilbert, AZ',
    detail: 'Backyard kept swim-ready, week after week.',
    span: 'md:col-span-4 aspect-[4/3] md:aspect-[4/5]',
  },
  {
    id: '90a441_a58d2bd3d91a482292c18a0fdf698b57~mv2.jpg',
    title: 'Equipment Repair',
    type: 'Equipment',
    location: 'Mesa, AZ',
    detail: 'Pump and filter rebuilt on-site.',
    span: 'md:col-span-4 aspect-square',
  },
]

export default function Work() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex flex-col justify-end px-5 md:px-8 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-[var(--color-background)] overflow-hidden">
        <div className="hero-bg-fallback absolute inset-0 opacity-90" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8 md:mb-10">
            <span className="inline-block w-8 md:w-12 h-px bg-[var(--color-accent)]" />
            <span>Recent work · East Valley</span>
          </div>
          <h1 className="display uppercase font-light text-[clamp(48px,11vw,200px)] leading-[1.02] md:leading-[0.9] tracking-tight">
            Real jobs.<br /><span className="text-[var(--color-accent)]">Real yards.</span>
          </h1>
          <p className="mt-6 md:mt-10 max-w-2xl text-base md:text-lg lg:text-xl text-[var(--color-muted)] leading-snug">
            Selected pool and landscape work from the past year. New photos go up after every project closes out.
          </p>
        </div>
      </section>

      {/* Grid */}
      <RevealSection className="py-12 md:py-20 lg:py-28 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3 lg:gap-4">
          {projects.map((p) => (
            <article
              key={p.id}
              data-reveal
              className={`group relative overflow-hidden bg-[var(--color-surface)] ${p.span}`}
            >
              <Image
                src={wix(p.id, 1400)}
                alt={`${p.title} — ${p.location}`}
                fill
                className="object-cover object-center transition-transform duration-[1.4s] ease-[var(--ease-out-quint)] group-hover:scale-[1.05]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/40 to-transparent opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-end text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] mb-2">
                  <span className="text-[var(--color-warning)]">{p.type}</span>
                  <span className="opacity-40">·</span>
                  <span className="opacity-80">{p.location}</span>
                </div>
                <h3 className="display uppercase text-lg md:text-xl lg:text-2xl tracking-wide leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-snug max-w-md">{p.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-5 md:px-8 lg:px-12 bg-[var(--color-accent-deep)] relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-fallback opacity-50" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto text-center">
          <h2 data-reveal className="display uppercase font-light text-white text-[clamp(40px,7vw,108px)] leading-[1.02] md:leading-[0.95] tracking-tight mb-8 md:mb-12">
            Want yours <br className="md:hidden" /><span className="text-[var(--color-warning)]">on the list?</span>
          </h2>
          <div data-reveal className="inline-flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--color-warning)] text-[var(--color-background)] display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-white transition-colors duration-500"
            >
              Get a quote
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a
              href="tel:+14806957665"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/40 text-white display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-white/10 transition-all duration-500"
            >
              (480) 695-7665
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
