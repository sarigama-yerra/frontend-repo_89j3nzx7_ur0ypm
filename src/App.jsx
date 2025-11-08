import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Udupi Upahara. All rights reserved.</p>
          <div className="text-sm text-gray-600">Made with love for authentic South Indian cuisine.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
