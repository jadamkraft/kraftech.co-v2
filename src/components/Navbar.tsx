const Navbar = () => {
  return (
    <nav className="border-b-2 border-stone-900 bg-stone-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-xl font-semibold text-stone-900">
            KRAFT
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#philosophy" className="font-sans text-stone-900 hover:text-orange-600 transition-colors">
              Philosophy
            </a>
            <a href="#case-study" className="font-sans text-stone-900 hover:text-orange-600 transition-colors">
              Case Study
            </a>
            <a href="#services" className="font-sans text-stone-900 hover:text-orange-600 transition-colors">
              Services
            </a>
            <a href="#contact" className="font-sans text-stone-900 hover:text-orange-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

