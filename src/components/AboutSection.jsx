export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-emerald-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow border border-emerald-100">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">About Udupi Upahara</h2>
              <p className="mt-4 text-gray-600">
                We are a neighborhood canteen rooted in the Udupi tradition. Our kitchen is pure-veg, our ingredients are fresh, and our recipes are time-tested. From breakfast rush to evening snacks, we serve comfort and flavor in every plate.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Pure-veg, hygienic kitchen</li>
                <li>• Daily fresh batter and chutneys</li>
                <li>• Family-friendly and pocket-friendly</li>
              </ul>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-amber-100 via-white to-emerald-100 border border-emerald-100 shadow-inner flex items-center justify-center text-emerald-800 font-bold">
              Since 1998
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
