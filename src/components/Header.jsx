import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600/20 p-2">
            <Rocket className="h-5 w-5 text-blue-400" />
          </div>
          <span className="font-semibold tracking-tight">HelloApp</span>
        </div>
        <nav className="text-sm text-white/70 hidden sm:flex gap-6">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#waitlist" className="hover:text-white">Waitlist</a>
        </nav>
      </div>
    </header>
  )
}
