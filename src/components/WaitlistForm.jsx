import { useState } from 'react'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [loading, setLoading] = useState(false)

  const backend = import.meta.env.VITE_BACKEND_URL

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'idle', message: '' })

    if (!backend) {
      setStatus({ type: 'error', message: 'Backend URL not configured.' })
      return
    }

    if (!name.trim() || !email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name and email.' })
      return
    }

    try {
      setLoading(true)
      const res = await fetch(`${backend}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.detail || 'Something went wrong')
      }

      setStatus({ type: 'success', message: "You're on the list! We'll be in touch soon." })
      setName('')
      setEmail('')
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Failed to join waitlist.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-4 pb-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
        <h2 className="text-xl sm:text-2xl font-semibold">Join the waitlist</h2>
        <p className="mt-1 text-white/70 text-sm">No spam. Just launch updates.</p>
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="col-span-1 sm:col-span-2 rounded-lg bg-white/5 px-4 py-3 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="col-span-1 sm:col-span-2 rounded-lg bg-white/5 px-4 py-3 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="col-span-1 inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-3 font-medium disabled:opacity-60"
          >
            {loading ? 'Joining...' : 'Join waitlist'}
          </button>
        </form>
        {status.message && (
          <div
            className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}
            role="status"
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  )
}
