'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

const serviceOptions = [
  'Weekly Pool Service',
  'Pool Filter Cleaning',
  'Equipment Repair',
  'Acid Wash',
  'Tile Cleaning',
  'Landscape',
  'Landscape Lighting',
  'Natural Gas Pipeline',
  'Something else',
]

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const params = new URLSearchParams({
      subject: `Quote request — ${form.get('service') || 'general'}`,
      body: `Name: ${form.get('name') || ''}
Phone: ${form.get('phone') || ''}
Email: ${form.get('email') || ''}
Service: ${form.get('service') || ''}
City: ${form.get('city') || ''}

${form.get('message') || ''}`,
    })
    window.location.href = `mailto:azqpools.net@gmail.com?${params.toString()}`
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 600)
  }

  if (sent) {
    return (
      <div className="py-10 text-center">
        <div className="display uppercase text-2xl md:text-3xl mb-3">Email opened.</div>
        <p className="text-[var(--color-muted)] max-w-sm mx-auto leading-relaxed">
          We&apos;ll be in touch the same business day. Prefer the phone?{' '}
          <a href="tel:+14806957665" className="text-[var(--color-accent)] underline">
            (480) 695-7665
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <Field label="City" name="city" placeholder="Gilbert, Mesa..." />
      </div>
      <div>
        <Label>What can we help with?</Label>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {serviceOptions.map((s, i) => (
            <label
              key={s}
              className="group flex items-center gap-2.5 px-3.5 py-3 bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)] has-[:checked]:border-[var(--color-accent)] has-[:checked]:bg-[var(--color-accent-deep)] cursor-pointer transition-colors text-sm"
            >
              <input
                type="radio"
                name="service"
                value={s}
                defaultChecked={i === 0}
                className="accent-[var(--color-accent)]"
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <Label>Tell us about it (optional)</Label>
        <textarea
          name="message"
          rows={4}
          placeholder="Pool age, what's not working, yard size, etc."
          className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none transition-colors resize-none text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-accent)] text-white hover:bg-[var(--color-warning)] hover:text-[var(--color-background)] display uppercase tracking-[0.18em] transition-colors duration-500 disabled:opacity-50"
      >
        <span>{loading ? 'Opening email…' : 'Send quote request'}</span>
        <Send size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-500" />
      </button>
      <p className="text-xs text-[var(--color-muted)] text-center leading-relaxed">
        Submitting opens your email app pre-filled — so nothing gets lost.
      </p>
    </form>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-2.5">{children}</div>
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <Label>{label}{required && <span className="text-[var(--color-warning)] ml-1">*</span>}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none transition-colors text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]"
      />
    </div>
  )
}
