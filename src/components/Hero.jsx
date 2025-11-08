export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Authentic Udupi Flavors, Freshly Served
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Welcome to Udupi Upahara — your neighborhood canteen serving pure-veg South Indian delicacies, crisp dosa, fluffy idli, and aromatic filter coffee.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition-colors">View Menu</a>
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-emerald-700 font-semibold shadow border border-emerald-200 hover:bg-emerald-50 transition-colors">Order/Enquiry</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white shadow-xl border border-emerald-100 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-2xl bg-amber-50 flex items-center justify-center text-amber-800 font-bold text-xl">Dosa</div>
                <div className="rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800 font-bold text-xl">Idli</div>
                <div className="rounded-2xl bg-rose-50 flex items-center justify-center text-rose-800 font-bold text-xl">Vada</div>
                <div className="rounded-2xl bg-sky-50 flex items-center justify-center text-sky-800 font-bold text-xl">Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
