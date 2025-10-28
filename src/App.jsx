import Header from './components/Header'
import HelloSection from './components/HelloSection'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[40rem] w-[40rem] bg-blue-600/20 blur-3xl rounded-full" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-white font-inter">
      <Background />
      <Header />
      <main>
        <HelloSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}
