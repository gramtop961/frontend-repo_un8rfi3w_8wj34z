export default function HelloSection() {
  return (
    <section className="relative isolate mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Hello, world 👋
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/70">
          Welcome! Join the early access list to be the first to know when we launch.
        </p>
      </div>
    </section>
  )
}
