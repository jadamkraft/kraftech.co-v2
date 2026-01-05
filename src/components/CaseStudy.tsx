import { ExternalLink } from 'lucide-react'

const CaseStudy = () => {
  return (
    <section id="case-study" className="border-b-2 border-stone-900 py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-stone-900 mb-12">
          THE DIGITAL HEARTH
        </h2>
        <div className="border-2 border-stone-900 bg-stone-50 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-mono text-2xl font-semibold text-stone-900 mb-4">
                SPECIFICATIONS
              </h3>
              <ul className="font-sans space-y-3 text-stone-900">
                <li className="border-l-2 border-stone-900 pl-4">
                  <strong>Type:</strong> Voice-to-Action Application
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  <strong>Compliance:</strong> HIPAA-compliant
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  <strong>Architecture:</strong> Serverless, edge-deployed
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  <strong>Latency:</strong> &lt;200ms response time
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  <strong>Uptime:</strong> 99.9% SLA
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-2xl font-semibold text-stone-900 mb-4">
                CAPABILITIES
              </h3>
              <ul className="font-sans space-y-3 text-stone-900">
                <li className="border-l-2 border-stone-900 pl-4">
                  Real-time voice transcription
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  Secure PHI handling
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  Automated workflow triggers
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  Audit trail generation
                </li>
                <li className="border-l-2 border-stone-900 pl-4">
                  Multi-tenant isolation
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-stone-900 pt-8">
            <h3 className="font-mono text-xl font-semibold text-stone-900 mb-4">
              IMPACT
            </h3>
            <p className="font-sans text-stone-900 leading-relaxed">
              Architected to process thousands of voice interactions daily, converting spoken requests into actionable workflows while maintaining strict HIPAA compliance. The system is built for zero-downtime deployments and provides complete auditability for regulatory requirements.
            </p>
          </div>
          <div className="border-t-2 border-stone-900 pt-8 mt-8">
            <a
              href="https://digitalhearth.care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-stone-900 bg-stone-900 text-stone-50 px-6 py-3 font-mono font-semibold hover:bg-orange-600 transition-colors"
            >
              [ VISIT LIVE PLATFORM ]
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy

