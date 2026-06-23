import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Download, MessageSquare } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary-dark/95 backdrop-blur-md shadow-xl py-3 border-b border-primary-purple/10 text-white' 
            : 'bg-transparent py-5 text-typography-primary'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden p-[2px] transition-transform duration-500 group-hover:scale-105 border border-brandForm-border">
              <img 
                src="/logo.png" 
                alt="Akshar Foshan Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-base font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-primary-dark'}`}>
                Akshar Foshan
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#5A35A2]">
                Hospitality FF&E
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `text-xs font-extrabold uppercase tracking-widest transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5A35A2] after:transition-all after:duration-300 hover:after:w-full ${
                    isActive 
                      ? 'text-[#5A35A2] after:w-full' 
                      : isScrolled ? 'text-gray-300 hover:text-white' : 'text-typography-secondary hover:text-primary-purple'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/download" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-[#3B1E70] text-white hover:bg-[#2B124C] hover:shadow-lg active:scale-95"
            >
              <Download size={14} />
              Brochure
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-brandForm-border hover:bg-brandBg-soft text-inherit hover:text-primary-purple hover:border-[#3B1E70]"
            >
              <MessageSquare size={14} />
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full border transition-all ${
              isScrolled 
                ? 'border-gray-800 text-white hover:bg-gray-800' 
                : 'border-brandForm-border text-primary-dark hover:bg-brandBg-soft'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Full-Screen Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-primary-dark/98 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navItems.map((item, idx) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `text-xl font-extrabold uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                  isActive 
                    ? 'text-[#5A35A2]' 
                    : 'text-gray-300 hover:text-white'
                }`
              }
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.name}
            </NavLink>
          ))}
          
          <div className="flex flex-col gap-4 mt-8 w-64">
            <button 
              onClick={() => {
                setIsOpen(false)
                navigate('/download')
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all bg-[#3B1E70] text-white hover:bg-[#2B124C]"
            >
              <Download size={16} />
              Download Brochure
            </button>
            <button 
              onClick={() => {
                setIsOpen(false)
                navigate('/contact')
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all border border-brandForm-border text-white hover:bg-white/10"
            >
              <MessageSquare size={16} />
              Start Inquiry
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
