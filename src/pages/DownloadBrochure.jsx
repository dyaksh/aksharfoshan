import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Download, CheckCircle2, Lock, Eye, ArrowDown } from 'lucide-react'

export default function DownloadBrochure() {
  const [searchParams] = useSearchParams()
  const [isGated, setIsGated] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  // Pre-fill email from query parameter if available (from footer form redirection)
  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setFormData(prev => ({ ...prev, email: emailParam }))
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save lead details
    console.log('Saved B2B Catalog Download Lead:', formData)
    setIsGated(false)
    triggerDownload()
  }

  const triggerDownload = () => {
    // Programmatically trigger brochure download
    const link = document.createElement('a')
    link.href = '/Akshar-foshan-brochure.pdf'
    link.download = 'Akshar-Foshan-Hospitality-Furniture-Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDownloadSuccess(true)
  }

  // Previews of brochure pages
  const brochureSlides = [
    { title: 'Catalog Cover', desc: 'Hospitality Furniture Sourcing & Project Management', image: '/assets/portfolio1-aksharfoshan.jpg' },
    { title: 'Guest Room Casegoods', desc: 'Technical Wood Joints & Veneer Specs', image: '/assets/About (1).png' },
    { title: 'Velvet Soft Seating', desc: 'Upholstery Frames & CAL-117 Foams', image: '/assets/portfolio3_aksharfoshan.jpg' },
    { title: 'IP65 LED Bathroom Mirrors', desc: 'UL Certifications & Anti-fog Plates', image: '/assets/About (5).png' }
  ]

  return (
    <div className="page-transition-wrapper">
      {/* 1. Header */}
      <section className="bg-primary-dark text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Brochure Request
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Download Hospitality FF&E Catalog
          </h1>
          <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
            Gain access to dimensions, workshop processes, custom furniture cases, backlit mirror standards, and sea freight parameters.
          </p>
        </div>
      </section>

      {/* 2. Main Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Form Column (Gated download) */}
          <div className="lg:col-span-5">
            {isGated ? (
              <div className="p-8 rounded-[32px] border border-brandForm-border bg-[#FAF8F5] shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-purple/10 text-primary-purple flex items-center justify-center">
                    <Lock size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-primary-dark">Gated B2B Access</h3>
                    <p className="text-[10px] text-typography-secondary uppercase tracking-widest">Enter details to unlock catalog</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-premium"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Business Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="business@hotel.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-premium"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Company / Hotel Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Hotel Procurement LLC" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-premium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (760) 000-0000" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-premium"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-premium-primary w-full flex items-center justify-center gap-2"
                  >
                    <Download size={14} /> Unlock & Download PDF
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 rounded-[32px] border border-[#DDD3C8] bg-white shadow-xl text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-primary-dark">Download Started</h3>
                  <p className="text-xs text-typography-secondary">
                    Your download of the Akshar Foshan Catalog has begun. If it did not start automatically, please click below.
                  </p>
                </div>
                
                <button 
                  onClick={triggerDownload}
                  className="btn-premium-primary text-xs inline-flex items-center gap-2"
                >
                  <ArrowDown size={14} /> Re-Trigger Download
                </button>
              </div>
            )}
          </div>

          {/* Right Preview Slides Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Eye className="text-primary-purple" size={20} />
              <h3 className="text-lg font-extrabold text-primary-dark">Catalog Preview</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {brochureSlides.map((slide, idx) => (
                <div 
                  key={idx}
                  className="group rounded-[24px] overflow-hidden border border-brandForm-border shadow-sm bg-brandBg-soft"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-dark/20" />
                  </div>
                  <div className="p-4 border-t border-brandForm-border/50 space-y-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#5A35A2] block">
                      {slide.title}
                    </span>
                    <span className="text-[11px] font-bold text-primary-dark block leading-snug">
                      {slide.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
