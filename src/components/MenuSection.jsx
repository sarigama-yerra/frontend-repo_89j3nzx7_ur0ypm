const items = [
  { name: 'Masala Dosa', desc: 'Crisp dosa with spiced potato filling', price: '₹90', tag: 'Chef’s Special' },
  { name: 'Idli Vada Combo', desc: '2 idlis + 1 vada with sambar & chutney', price: '₹70', tag: 'Popular' },
  { name: 'Set Dosa', desc: 'Soft, buttery dosas served with veg curry', price: '₹85' },
  { name: 'Pongal', desc: 'Comforting moong dal and rice porridge', price: '₹75' },
  { name: 'Poori Sagu', desc: 'Fluffy pooris with veg sagu', price: '₹80' },
  { name: 'Filter Coffee', desc: 'Strong, aromatic, served frothy', price: '₹30', tag: 'Signature' },
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Menu</h2>
            <p className="mt-2 text-gray-600">Freshly prepared vegetarian South Indian classics.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700">Order Now</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{it.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
                </div>
                {it.tag && (
                  <span className="shrink-0 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-1">{it.tag}</span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-emerald-700 font-extrabold">{it.price}</span>
                <button className="rounded-lg border border-emerald-200 text-emerald-700 px-3 py-1.5 text-sm font-semibold hover:bg-emerald-50">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
