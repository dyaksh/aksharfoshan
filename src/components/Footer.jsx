import { Link, useNavigate } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, MessageSquare, Send } from 'lucide-react'

export default function Footer() {
  const navigate = useNavigate()

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Redirect to brochure download page with pre-filled email
    const email = e.target.email.value
    navigate(`/download?email=${encodeURIComponent(email)}`)
  }

  return (
    <footer className="bg-primary-dark text-gray-300 border-t border-primary-purple/10 pt-16 pb-8 relative overflow-hidden">
      {/* Visual luxury accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-purple/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#5A35A2]/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Footer Top Call to Action Banner */}
        <div className="border border-brandForm-border/10 rounded-[30px] p-8 md:p-12 mb-16 bg-white/[0.02] backdrop-blur-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Ready to start your hotel FF&E project?
            </h3>
            <p className="text-sm text-gray-400 max-w-xl">
              Get in touch with our team of procurement managers and custom hotel furniture manufacturers in Foshan.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-[#3B1E70] text-white hover:bg-[#5A35A2] text-sm font-extrabold tracking-wider uppercase transition-all shadow-lg hover:shadow-primary-purple/30 active:scale-95 flex items-center gap-2"
          >
            Start Inquiry <span>→</span>
          </Link>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-[2px]">
                <img src="/logo.png" alt="Akshar Foshan Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-white font-extrabold tracking-tight text-lg block">Akshar Foshan</span>
                <span className="text-[9px] font-bold text-[#5A35A2] uppercase tracking-widest">Hospitality FF&E</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Exclusive international sales and project management partner for a leading hospitality furniture manufacturing network based in Foshan, China.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/aksharfoshan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5A35A2] hover:text-white flex items-center justify-center text-gray-400 transition-all border border-white/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/akshar-foshan-furniture/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5A35A2] hover:text-white flex items-center justify-center text-gray-400 transition-all border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://wa.me/17606170800" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5A35A2] hover:text-white flex items-center justify-center text-gray-400 transition-all border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#5A35A2] hover:text-white flex items-center justify-center text-gray-400 transition-all border border-white/10"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-widest text-xs mb-6">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="text-sm hover:text-white transition-colors">Services</Link>
              <Link to="/clients" className="text-sm hover:text-white transition-colors">Clients</Link>
              <Link to="/team" className="text-sm hover:text-white transition-colors">Meet the Team</Link>
            </div>
          </div>

          {/* Product Scope */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-widest text-xs mb-6">Product Scope</h4>
            <div className="flex flex-col gap-3">
              <Link to="/products" className="text-sm hover:text-white transition-colors">Casegoods & Closets</Link>
              <Link to="/products" className="text-sm hover:text-white transition-colors">Upholstery & Soft Seating</Link>
              <Link to="/products" className="text-sm hover:text-white transition-colors">Lighting Fixtures</Link>
              <Link to="/products" className="text-sm hover:text-white transition-colors">Backlit Mirrors</Link>
              <Link to="/products" className="text-sm hover:text-white transition-colors">Shower Doors & Glass</Link>
              <Link to="/products" className="text-sm hover:text-white transition-colors">Carpets & Rugs</Link>
            </div>
          </div>

          {/* Brochure Sign up */}
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-widest text-xs mb-6">Request Brochure</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Enter your corporate email address to gain access to our custom product catalogs and manufacturing workshop documentation.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                name="email"
                placeholder="Business Email" 
                required
                className="flex-grow px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#5A35A2] focus:bg-white/10"
              />
              <button 
                type="submit" 
                className="w-10 h-10 rounded-full bg-[#3B1E70] text-white hover:bg-[#5A35A2] flex items-center justify-center transition-all flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Block */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Akshar Foshan. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/download" className="hover:text-white transition-colors">Download Brochure</Link>
            <a href="https://wa.me/17606170800" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Direct</a>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
