const Footer = () => {
  return (
    <footer id="contact" className="border-t-2 border-stone-900 py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-mono text-2xl font-semibold text-stone-900 mb-4">
              KRAFT DIGITAL SOLUTIONS
            </h3>
            <p className="font-sans text-stone-900 mb-4">
              Forward deployed engineering for non-profits.
            </p>
            <p className="font-sans text-stone-900">
              Resilient AI architecture and secure tools for mission-critical operations.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xl font-semibold text-stone-900 mb-4">
              CONNECT
            </h3>
            <ul className="font-sans space-y-2 text-stone-900">
              <li>
                <a href="mailto:contact@kraftech.co" className="hover:text-orange-600 transition-colors">
                  contact@kraftech.co
                </a>
              </li>
              <li>
                <a href="https://kraftech.co" className="hover:text-orange-600 transition-colors">
                  kraftech.co
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-stone-900 pt-8">
          <p className="font-sans text-sm text-stone-900 text-center">
            © {new Date().getFullYear()} Kraft Digital Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

