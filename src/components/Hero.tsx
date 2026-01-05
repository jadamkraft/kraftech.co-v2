const Hero = () => {
  return (
    <section className="border-b-2 border-stone-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight">
          RESILIENT AI<br />
          FOR THE FRONT LINES
        </h1>
        <p className="font-sans text-xl md:text-2xl text-stone-900 max-w-2xl mx-auto">
          Forward deployed engineering for mission-critical sectors. High-level architecture and secure AI tools for mission-critical operations.
        </p>
        <div className="mt-12">
          <a 
            href="#case-study" 
            className="inline-block border-2 border-stone-900 bg-orange-600 text-stone-50 px-8 py-4 font-mono font-semibold hover:bg-orange-700 transition-colors"
          >
            VIEW THE PROOF
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

