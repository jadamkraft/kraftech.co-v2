const Philosophy = () => {
  return (
    <section id="philosophy" className="border-b-2 border-stone-900 py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-stone-900 mb-12">
          THE MONASTIC MINDSET
        </h2>
        <div className="space-y-8 font-sans text-lg leading-relaxed text-stone-900">
          <p>
            Forward deployed engineering is not about building in isolation. It is about embedding directly into the operational environment, understanding constraints at the source, and delivering solutions that function under real-world pressure.
          </p>
          <p>
            The monastic approach rejects the comfort of abstraction layers. We work with raw data, direct integrations, and minimal dependencies. Every line of code serves a purpose. Every architectural decision is traceable to a mission requirement.
          </p>
          <p>
            This is not software for software's sake. This is infrastructure for organizations that operate in crisis conditions, handle sensitive data, and cannot afford downtime. The tools must be reliable, auditable, and maintainable by teams with limited technical resources.
          </p>
          <p className="font-mono text-orange-600 text-xl mt-12">
            Utility over aesthetics. Function over form. Resilience over convenience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy

