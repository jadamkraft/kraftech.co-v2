const Services = () => {
  const services = [
    {
      title: "RAPID PROTOTYPING",
      description: "From concept to deployed prototype in days, not months. We build functional MVPs that solve real problems, not demos.",
      specs: [
        "Serverless architecture",
        "Edge deployment",
        "Minimal dependencies"
      ]
    },
    {
      title: "WHITE-LABEL VAULTS",
      description: "Secure, HIPAA-compliant data infrastructure that you can brand and deploy independently. Full source code ownership.",
      specs: [
        "End-to-end encryption",
        "Audit logging",
        "Multi-tenant support"
      ]
    },
    {
      title: "ON-SITE CRISIS OPS",
      description: "Forward deployment for critical operations. We embed with your team, understand constraints, and ship solutions that work.",
      specs: [
        "24/7 availability",
        "Direct integration",
        "Documentation-first"
      ]
    }
  ]

  return (
    <section id="services" className="border-b-2 border-stone-900 py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-stone-900 mb-12 text-center">
          CAPABILITIES
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border-2 border-stone-900 bg-stone-50 p-6 flex flex-col"
            >
              <h3 className="font-mono text-2xl font-semibold text-stone-900 mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-stone-900 mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="font-sans space-y-2 text-sm text-stone-900">
                {service.specs.map((spec, specIndex) => (
                  <li key={specIndex} className="border-l-2 border-stone-900 pl-3">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

