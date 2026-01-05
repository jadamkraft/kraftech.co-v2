import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import CaseStudy from './components/CaseStudy'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <Philosophy />
      <CaseStudy />
      <Services />
      <Footer />
    </div>
  )
}

export default App

