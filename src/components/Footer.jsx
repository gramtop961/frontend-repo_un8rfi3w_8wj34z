export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-white/60 flex items-center justify-between">
        <p>© {new Date().getFullYear()} HelloApp. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
