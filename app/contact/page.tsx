import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | AZ Q Pools — Gilbert, AZ',
  description:
    'Call, text, or email AZ Q Pools for pool service, equipment repair, or landscape work. (480) 695-POOL. 335 W Cullumber Ave, Gilbert, AZ.',
}

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex flex-col justify-end px-5 md:px-8 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-[var(--color-background)] overflow-hidden">
        <div className="hero-bg-fallback absolute inset-0 opacity-90" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8 md:mb-10">
            <span className="inline-block w-8 md:w-12 h-px bg-[var(--color-accent)]" />
            <span>Contact · Gilbert, AZ</span>
          </div>
          <h1 className="display uppercase font-light text-[clamp(46px,10vw,170px)] leading-[1.02] md:leading-[0.9] tracking-tight">
            Call. Text.<br /><span className="text-[var(--color-accent)]">Email.</span>
          </h1>
          <p className="mt-6 md:mt-10 max-w-2xl text-base md:text-lg lg:text-xl text-[var(--color-muted)] leading-snug">
            We answer our own phones. If we miss your call, you get a callback the same business day.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <RevealSection className="py-14 md:py-24 lg:py-32 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-5">
            <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-5">
              Direct line
            </div>
            <a
              data-reveal
              href="tel:+14806957665"
              className="block display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight hover:text-[var(--color-accent)] transition-colors"
            >
              (480) 695-POOL
            </a>
            <div className="mt-2 text-[var(--color-muted)] text-base tabular tracking-wide">
              (480) 695-7665
            </div>

            <div className="mt-10 md:mt-14 space-y-8">
              <InfoRow Icon={Mail} label="Email">
                <a
                  href="mailto:azqpools.net@gmail.com"
                  className="text-lg md:text-xl hover:text-[var(--color-accent)] transition-colors break-all"
                >
                  azqpools.net@gmail.com
                </a>
              </InfoRow>

              <InfoRow Icon={MapPin} label="Mailing Address">
                <address className="not-italic text-lg md:text-xl leading-snug">
                  335 W Cullumber Ave<br />
                  Gilbert, AZ 85233
                </address>
                <a
                  href="https://www.google.com/maps?q=335+W+Cullumber+Ave+Gilbert+AZ"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </InfoRow>

              <InfoRow Icon={Clock} label="Response">
                <div className="text-lg md:text-xl leading-relaxed">
                  Same-day callback policy.<br />
                  <span className="text-[var(--color-muted)] text-base">Continual phone, text & email checks.</span>
                </div>
              </InfoRow>
            </div>
          </div>

          {/* Form */}
          <div data-reveal className="lg:col-span-7">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 md:p-10 lg:p-12">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
                Quote request
              </div>
              <h2 className="display uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight mb-8 md:mb-10 max-w-md leading-tight">
                Tell us what&apos;s broken or dirty.
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Map */}
      <RevealSection className="px-5 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div data-reveal className="overflow-hidden border border-[var(--color-border)] aspect-[16/9] md:aspect-[16/7]">
            <iframe
              title="AZ Q Pools location"
              src="https://www.google.com/maps?q=335+W+Cullumber+Ave+Gilbert+AZ+85233&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </RevealSection>

      {/* Service area band */}
      <RevealSection className="py-14 md:py-24 px-5 md:px-8 lg:px-12 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div data-reveal className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
            Service area
          </div>
          <p data-reveal className="display uppercase font-light text-xl md:text-3xl lg:text-4xl leading-snug max-w-5xl mx-auto tracking-wide">
            Gilbert · Chandler · Mesa · Queen Creek · Tempe · Ahwatukee · Apache Junction · Gold Canyon · Phoenix
          </p>
        </div>
      </RevealSection>
    </>
  )
}

function InfoRow({
  Icon,
  label,
  children,
}: {
  Icon: any
  label: string
  children: React.ReactNode
}) {
  return (
    <div data-reveal>
      <div className="flex items-center gap-2.5 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] mb-3">
        <Icon size={14} strokeWidth={2} className="text-[var(--color-accent)]" />
        {label}
      </div>
      {children}
    </div>
  )
}
