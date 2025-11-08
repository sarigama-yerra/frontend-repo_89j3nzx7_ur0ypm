import { MapPin, Phone, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-emerald-50 p-8 border border-emerald-100">
            <h3 className="text-2xl font-extrabold text-gray-900">Visit Us</h3>
            <p className="mt-2 text-gray-600">Drop by for a quick bite or a leisurely meal.</p>
            <div className="mt-6 space-y-4 text-gray-700">
              <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-emerald-700 mt-0.5" /> 12, Market Road, Near Bus Stand, Your City</p>
              <p className="flex items-start gap-3"><Phone className="h-5 w-5 text-emerald-700 mt-0.5" /> +91 98765 43210</p>
              <p className="flex items-start gap-3"><Clock className="h-5 w-5 text-emerald-700 mt-0.5" /> Mon–Sun: 7:00 AM – 10:00 PM</p>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-extrabold text-gray-900">Quick Enquiry</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your Name" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input required placeholder="Phone" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input placeholder="Email (optional)" className="sm:col-span-2 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <textarea required placeholder="Your message" rows={4} className="sm:col-span-2 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <button className="mt-6 inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
