import { Utensils, Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Utensils className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">
              Udupi Upahara
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-gray-700 hover:text-emerald-700 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-emerald-700 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</a>
          </nav>
          <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700 transition-colors">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
