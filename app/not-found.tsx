import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-[var(--color-background)] relative overflow-hidden">
      <div className="hero-bg-fallback absolute inset-0 opacity-90" aria-hidden />
      <div className="relative">
        <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">404 · This page is broken</div>
        <h1 className="display uppercase font-light text-[clamp(96px,18vw,260px)] leading-[0.9] tracking-tight">
          <span className="text-[var(--color-accent)]">404</span>
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-[var(--color-muted)] max-w-md leading-relaxed">
          We clean the dirty and fix the broken — but this URL is beyond saving.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block px-7 py-4 bg-[var(--color-accent)] text-white display uppercase tracking-[0.18em] text-sm md:text-base hover:bg-[var(--color-warning)] hover:text-[var(--color-background)] transition-colors duration-500"
        >
          Back home
        </Link>
      </div>
    </section>
  )
}
