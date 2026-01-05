import { useForm } from '@formspree/react'

const Footer = () => {
  const [state, handleSubmit] = useForm('mqeaogoa')

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
            {state.succeeded ? (
              <p className="font-mono text-stone-900 font-semibold">
                MESSAGE TRANSMITTED.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase mb-1 text-stone-900">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-2 border-stone-900 p-3 rounded-none focus:ring-0 focus:bg-stone-200 text-stone-900 font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase mb-1 text-stone-900">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-2 border-stone-900 p-3 rounded-none focus:ring-0 focus:bg-stone-200 text-stone-900 font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase mb-1 text-stone-900">
                    PROJECT BRIEF
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-2 border-stone-900 p-3 rounded-none focus:ring-0 focus:bg-stone-200 text-stone-900 font-sans resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="border-2 border-stone-900 bg-stone-900 text-stone-50 px-8 py-3 font-mono font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'TRANSMITTING...' : 'SUBMIT'}
                </button>
              </form>
            )}
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
