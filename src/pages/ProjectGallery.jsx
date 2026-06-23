import { useState } from 'react'
import { X, Search } from 'lucide-react'

export default function ProjectGallery() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = [
    'All',
    'MDF Construction',
    'Custom Furniture',
    'Sofas & Seating',
    'Bathroom Vanities',
    'Tables',
    'Wardrobes',
    'Outdoor Furniture',
    'Residential Furniture'
  ]

  const galleryItems = [
    {
      title: 'MDF Panel Cut & Sizing',
      category: 'MDF Construction',
      image: '/assets/About (1).png',
      tags: ['mdf', 'raw woodwork', 'cutting', 'panels']
    },
    {
      title: 'Veneer Edge Banding',
      category: 'MDF Construction',
      image: '/assets/About (2).png',
      tags: ['veneer', 'edge banding', 'machine', 'drilling']
    },
    {
      title: 'Solid Ash Table Sanding',
      category: 'Custom Furniture',
      image: '/assets/About (3).png',
      tags: ['sanding', 'ash wood', 'tables', 'handcraft']
    },
    {
      title: 'Armchair Cushion Stuffing',
      category: 'Sofas & Seating',
      image: '/assets/About (4).png',
      tags: ['cushions', 'foam', 'upholstery', 'chairs']
    },
    {
      title: 'Mirror LED Wiring & Frame Assembly',
      category: 'Bathroom Vanities',
      image: '/assets/About (5).png',
      tags: ['mirrors', 'backlit', 'vanities', 'led']
    },
    {
      title: 'Plywood Export Crating',
      category: 'Outdoor Furniture',
      image: '/assets/About (6).png',
      tags: ['crating', 'packaging', 'wood crate', 'shipping']
    },
    {
      title: 'Double Queen Bedroom Wardrobes',
      category: 'Wardrobes',
      image: '/assets/portfolio1-aksharfoshan.jpg',
      tags: ['closets', 'wardrobes', 'guestroom', 'veneers']
    },
    {
      title: 'Lounge Velvet Sectional Sofa',
      category: 'Sofas & Seating',
      image: '/assets/portfolio2_aksharfoshan.jpg',
      tags: ['sofas', 'velvet', 'lobby', 'lounge']
    },
    {
      title: 'Interactive Guest Bedroom Vanity',
      category: 'Tables',
      image: '/assets/portfolio1-aksharfoshan.jpg',
      tags: ['vanity console', 'writing desk', 'tables']
    },
    {
      title: 'Bespoke Velvet Wing Armchairs',
      category: 'Custom Furniture',
      image: '/assets/portfolio3_aksharfoshan.jpg',
      tags: ['upholstery', 'chairs', 'lounge', 'velvet']
    },
    {
      title: 'Luxury Villa Dining Set',
      category: 'Residential Furniture',
      image: '/assets/About.jpg',
      tags: ['dining table', 'villa', 'residential', 'chairs']
    }
  ]

  // Filter gallery items based on search query and active tab
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="page-transition-wrapper">
      {/* 1. Header */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Workshop & Production Photos
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Furniture Detail & Quality Gallery
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            Search our manufacturing processes, raw woodwork, custom items, and finished installations.
          </p>
        </div>
      </section>

      {/* 2. Sourcing Filter Bar & Category Tabs */}
      <section className="py-12 bg-white border-b border-[#DDD3C8]">
        <div className="container mx-auto px-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search tags (e.g. veneer, led, foam, tables)..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-5 py-3 rounded-full bg-brandBg-soft border border-brandForm-border focus:border-primary-purple transition-all outline-none text-xs"
              />
            </div>
            
            <div className="text-xs text-typography-secondary font-bold">
              Showing {filteredItems.length} of {galleryItems.length} items
            </div>
          </div>

          {/* Categories Horizontal Tabs */}
          <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap gap-2 pt-2 pb-4 border-t border-brandForm-border/50 md:flex-wrap md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all flex-shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-[#3B1E70] text-white' 
                    : 'bg-brandBg-soft text-typography-secondary border border-brandForm-border/50 hover:bg-brandBg-soft/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grid Layout */}
      <section className="py-20 bg-brandBg-soft">
        <div className="container mx-auto px-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <p className="text-sm text-typography-secondary">No items found matching your filters.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All') }}
                className="btn-premium-primary text-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setLightboxImage(item.image)}
                  className="group bg-white border border-brandForm-border rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#3B1E70]/80 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-widest border border-white/10">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-xs font-bold text-primary-dark group-hover:text-primary-purple transition-colors truncate">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag, tidx) => (
                        <span key={tidx} className="px-2 py-0.5 rounded bg-brandBg-soft border border-brandForm-border/50 text-[9px] text-typography-secondary">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Expanded view" 
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
