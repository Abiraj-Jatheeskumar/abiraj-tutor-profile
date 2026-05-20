import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subjects from './components/Subjects'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body bg-[#030303] min-h-screen selection:bg-[#f59e0b]/30 selection:text-white">
      <Navbar />
      <Hero />
      <Subjects />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
