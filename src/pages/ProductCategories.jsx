import { Link } from 'react-router-dom'
import { Sparkles, Check } from 'lucide-react'

export default function ProductCategories() {
  const categories = [
    {
      title: 'Casegoods',
      specs: ['Veneered or melamine panels', 'Soft close DTC/Blum slides', 'Wall cleat anchor system', 'Bespoke wardrobes & paneling'],
      image: '/assets/portfolio1-aksharfoshan.jpg',
      desc: 'Complete hotel guestroom furniture layout packages: headboards, dressers, writing desks, TV units, nightstands, and luggage benches.'
    },
    {
      title: 'Upholstery & Soft Seating',
      specs: ['CAL-117 fire foam standards', 'Double dowelled hardwood frames', 'High-abrasion contract fabrics', 'Sleeper sofa mechanical structures'],
      image: '/assets/portfolio3_aksharfoshan.jpg',
      desc: 'Bespoke seating designed for heavy commercial use: lounge chairs, public lobby sectionals, dining booth benches, and sleeper couches.'
    },
    {
      title: 'Lighting Fixtures',
      specs: ['UL/CUL electrical markings', 'Commercial dimming modules', 'Brass & powder-coated finishes', 'Integrated USB charging sockets'],
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
      desc: 'Decorative hotel lighting: bedside reading lamps, desk lamps, floor lamps, bathroom vanity bars, and grand lobby chandeliers.'
    },
    {
      title: 'Backlit Mirrors',
      specs: ['UL approved LED strips', 'Defogger heating pad options', 'Touch dimmers & clock interfaces', 'Copper-free silver mirrors'],
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80',
      desc: 'Smart LED mirrors matching US voltage and electrical wiring safety certifications.'
    },
    {
      title: 'Shower Doors',
      specs: ['ANSI SGCC tempered glass', '304 stainless steel hinges', 'Waterproof magnetic thresholds', 'Anti-spot glass coatings'],
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
      desc: 'Sliding or pivoting shower enclosures featuring heavy glass thicknesses (8-10mm) and high-cycle rolling systems.'
    },
    {
      title: 'Bathroom Accessories',
      specs: ['Solid brass/SUS304 builds', 'Concealed screw mounts', 'Grab bar weight certifications', 'Corrosion-free finishes'],
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
      desc: 'Hotel hardware collections: towel bars, robe hooks, tissue holders, shower baskets, and commercial ADA-compliant grab bars.'
    },
    {
      title: 'Artwork',
      specs: ['Floating gallery framing', 'Custom canvas prints', 'Acoustic absorption pads', 'Anti-theft security locks'],
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
      desc: 'Framed gallery canvas prints, wall sculptures, and graphic panels customized to match interior designer themes.'
    },
    {
      title: 'Window Treatments',
      specs: ['NFPA 701 fire retardants', 'Motorized track integrations', '99% blackout layer fabrics', 'Double pinch pleat headers'],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      desc: 'Hotel drapery packages: fire-retardant sheers, decorative side panels, blackout curtains, and remote-controlled tracks.'
    },
    {
      title: 'Outdoor Furniture',
      specs: ['UV-proof synthetic wicker', 'Powder-coated aluminum frames', 'Sunbrella acrylic fabrics', 'Quick-dry mesh core foams'],
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
      desc: 'Durable resort and pool furniture: outdoor chaise lounges, barstools, patio dining tables, and sun shades.'
    },
    {
      title: 'Outdoor Lighting',
      specs: ['IP65 waterproof rating', 'Die-cast aluminum housings', 'Warm LED 2700K arrays', 'Corrosion-proof paints'],
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80',
      desc: 'Landscape and exterior path lighting: hotel pathway bollards, wall sconces, step lights, and architectural spotlights.'
    },
    {
      title: 'Carpets & Rugs',
      specs: ['Axminster woven wool/nylon', 'CRI Green Label certified', 'High pile density ratings', 'Custom pattern designs'],
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
      desc: 'Hotel guestroom and public corridor carpets, guestroom area rugs, and heavy-duty entrance carpets.'
    }
  ]

  return (
    <div className="page-transition-wrapper">
      {/* 1. Header */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Comprehensive Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Hotel Product Categories & FF&E Scope
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            All categories are built to contract-grade durability standards, certified for fire safety, and tailored to project design blueprints.
          </p>
        </div>
      </section>

      {/* 2. Grid */}
      <section className="py-20 bg-brandBg-soft">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[32px] border border-brandForm-border shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start justify-between"
              >
                {/* Image Block */}
                <div className="w-full md:w-48 h-48 rounded-[24px] overflow-hidden border border-brandForm-border flex-shrink-0">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Specs Block */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-primary-dark mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-typography-secondary leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#5A35A2] block">
                      Contract Specifications
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {cat.specs.map((spec, sidx) => (
                        <li key={sidx} className="text-[11px] text-typography-secondary flex items-center gap-1.5">
                          <Check size={12} className="text-primary-purple flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link 
                      to={`/contact?scope=${encodeURIComponent(cat.title)}`}
                      className="text-xs font-bold text-[#3B1E70] hover:text-[#5A35A2] flex items-center gap-1"
                    >
                      Inquire on this scope <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
