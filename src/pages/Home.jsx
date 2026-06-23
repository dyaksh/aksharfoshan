import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ChevronRight, ArrowRight, ShieldCheck, Truck, Sparkles, Hammer, FileText, CheckCircle2, ChevronDown } from 'lucide-react'

// Import Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null)

  const carouselImages = [
    { path: '/assets/hero.jpg', alt: 'Luxury Hotel Suite FF&E' },
    { path: '/assets/About.jpg', alt: 'Hotel Guestroom Furnishings' },
    { path: '/assets/portfolio1-aksharfoshan.jpg', alt: 'Complete Bedroom Casegoods Package' },
    { path: '/assets/portfolio2_aksharfoshan.jpg', alt: 'Premium Hotel Lobby Millwork' },
    { path: '/assets/portfolio3_aksharfoshan.jpg', alt: 'Bespoke Velvet Seating & Soft Upholstery' },
    { path: '/assets/About (4).png', alt: 'Carpentry & Framework Assembly' }
  ]

  const stats = [
    { value: '13+', label: 'Cooperating Factories in Foshan' },
    { value: '5+', label: 'Years Specialized B2B Sourcing' },
    { value: '360°', label: 'FF&E Sourcing, QC & Logistics' }
  ]

  const clientLogos = [
    { name: 'IHG', path: '/assets/clients/InterContinental_Hotels_Group-Logo.png' },
    { name: 'Marriott', path: '/assets/clients/MarriottLogo.png' },
    { name: 'Hilton', path: '/assets/clients/Hilton.png' },
    { name: 'Choice Hotels', path: '/assets/clients/Choice-hotels.png' },
    { name: 'Wyndham', path: '/assets/clients/wyndham-hotels.png' },
    { name: 'Holiday Inn', path: '/assets/clients/holidayinn.jpg' },
    { name: 'Best Western', path: '/assets/clients/bw.jpg' },
    { name: 'Bismarck Hotel', path: '/assets/clients/bismarck.jpg' },
    { name: 'AmericInn by Wyndham', path: '/assets/clients/american.jpg' },
    { name: 'Hyatt', path: '/assets/clients/hyatt.jpg' }
  ]

  const categories = [
    { title: 'Casegoods', desc: 'Hotel-ready room layout casegoods, wardrobes & headboards', image: '/assets/portfolio1-aksharfoshan.jpg' },
    { title: 'Upholstery & Soft Seating', desc: 'Bespoke lounge sofas, armchairs & sleeper benches', image: '/assets/portfolio3_aksharfoshan.jpg' },
    { title: 'Lighting Fixtures', desc: 'Premium decorative guestroom lamps & public area chandeliers', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80' },
    { title: 'Backlit Mirrors', desc: 'Anti-fog LED mirrors matching US electric certifications', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80' },
    { title: 'Bathroom Scope', desc: 'Shower doors, hardware, and complete bathroom accessories', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80' },
    { title: 'Outdoor Furniture', desc: 'Durable weather-proof hotel patio & poolside seating', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80' }
  ]

  const services = [
    { 
      title: 'Design & Budget Consulting', 
      desc: 'Align project vision, drawings, room requirements, and budget direction before production.', 
      icon: <Sparkles className="text-white w-6 h-6" /> 
    },
    { 
      title: 'Sourcing & Procurement', 
      desc: 'Match FF&E product categories with optimized factories for quality and pricing.', 
      icon: <Hammer className="text-white w-6 h-6" /> 
    },
    { 
      title: 'Quality Control', 
      desc: 'Conduct detailed raw material reviews, finish checks, and final packing inspections.', 
      icon: <ShieldCheck className="text-white w-6 h-6" /> 
    },
    { 
      title: 'FOB / DDP Logistics', 
      desc: 'Coordinate international freight, custom clearances, and direct project-site logistics.', 
      icon: <Truck className="text-white w-6 h-6" /> 
    },
    { 
      title: 'Approval Support', 
      desc: 'Coordinate shop drawings, material samples, and certification documents for smooth reviews.', 
      icon: <FileText className="text-white w-6 h-6" /> 
    },
    { 
      title: 'Warranty Support', 
      desc: 'Deliver post-delivery service, warranty follow-ups, and structural replacement coordination.', 
      icon: <CheckCircle2 className="text-white w-6 h-6" /> 
    }
  ]

  const faqs = [
    { q: 'What type of hotel furniture does Akshar Foshan support?', a: 'Akshar Foshan supports hotel casegoods, upholstery, guest room furniture, lobby furniture, lighting, mirrors, bathroom accessories, outdoor furniture, and custom FF&E product requirements.' },
    { q: 'Can you work from BOQ, drawings, or brand standards?', a: 'Yes. You can share BOQ, floor plans, drawings, moodboards, room references, product lists, or brand standards. The team can help map the requirement into a sourcing and furniture scope.' },
    { q: 'Do you handle sourcing and quality inspection?', a: 'Yes. The project support includes sourcing, procurement coordination, factory follow-up, material review, finish checking, production consistency checks, packing review, and shipment readiness support.' },
    { q: 'Do you support FOB and DDP logistics?', a: 'Yes. We support FOB, CIF, or complete DDP (Delivered Duty Paid) shipping to the United States and international markets, taking care of customs clearance and ocean freight.' },
    { q: 'How can I start an inquiry?', a: 'You can use our online form, email yogin@aksharfoshan.com, or message directly on WhatsApp at +1 (760) 617-0800. Share your project location, product scope, quantity, and reference files.' }
  ]

  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-8 md:pt-16 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-primary-purple/5 to-transparent pointer-events-none rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-[#3B1E70]/10 border border-[#3B1E70]/20 text-[#3B1E70] text-xs font-bold uppercase tracking-widest">
              <span>★</span> Hospitality FF&E Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-dark leading-[1.08]">
              Complete Hospitality Furniture & FF&E Solutions <span className="text-primary-purple">Worldwide</span>
            </h1>
            
            <p className="text-base md:text-lg text-typography-secondary max-w-xl leading-relaxed">
              Akshar Foshan is the trusted project management and sourcing partner, supporting hotel owners, architects, and procurement teams with casegoods, custom seating, lighting, and DDP shipping.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/contact" className="btn-premium-primary">
                Start Inquiry
              </Link>
              <Link to="/download" className="btn-premium-secondary">
                Download Brochure
              </Link>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-brandForm-border/60">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary-purple">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-typography-secondary uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel Column */}
          <div className="lg:col-span-6 w-full h-[350px] md:h-[480px] relative">
            <div className="w-full h-full rounded-[36px] overflow-hidden border border-brandForm-border shadow-2xl bg-white p-[6px] relative">
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full rounded-[30px]"
              >
                {carouselImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="w-full h-full">
                    <img 
                      src={img.path} 
                      alt={img.alt} 
                      className="w-full h-full object-cover" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY CLIENT MARQUEE */}
      <section className="bg-white border-y border-brandForm-border py-12 overflow-hidden relative">
        {/* Luxury gradient edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] md:text-xs font-extrabold text-typography-secondary uppercase tracking-widest mb-8">
            Hospitality Brand-Style Reference Projects
          </p>
          
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex gap-16 items-center">
              {/* First copy of logos */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`logo-1-${idx}`} 
                  className="h-12 md:h-14 w-28 md:w-36 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                >
                  <img 
                    src={logo.path} 
                    alt={`${logo.name} Brand Reference`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
              {/* Second copy of logos for seamless loop */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`logo-2-${idx}`} 
                  className="h-12 md:h-14 w-28 md:w-36 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                >
                  <img 
                    src={logo.path} 
                    alt={`${logo.name} Brand Reference`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-brandBg-soft relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-[36px] overflow-hidden shadow-2xl border border-brandForm-border aspect-[4/3]">
              <img 
                src="/assets/About.jpg" 
                alt="Akshar Foshan hotel furniture room sample"
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Small floating tag */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-brandForm-border p-6 rounded-[24px] shadow-xl max-w-xs hidden md:block">
              <span className="text-3xl font-extrabold text-primary-purple block mb-1">5+ Years</span>
              <span className="text-xs text-typography-secondary font-bold leading-normal">
                Managing hotel installations across the United States.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              About Akshar Foshan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight leading-tight">
              Exclusive International Sales & Project Management Partner
            </h2>
            <p className="text-sm text-typography-secondary leading-relaxed">
              With over 5 years of hospitality experience and a dedicated network of 13+ partner factories across Foshan, China, Akshar Foshan streamlines the entire FF&E supply chain. We deliver reliable, high-quality, custom hotel casegoods and soft seating directly to your project location.
            </p>
            <p className="text-sm text-typography-secondary leading-relaxed">
              We coordinate technical shop drawings, execute double QA checks, package for safe ocean transit, and handle final custom clearance and DDP logistics.
            </p>
            <div className="pt-2">
              <Link to="/about" className="btn-premium-primary inline-flex items-center gap-2">
                Discover Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES */}
      <section className="py-24 bg-white border-t border-brandForm-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Product Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              Explore Our Furniture Scope
            </h2>
            <p className="text-sm text-typography-secondary">
              High-end custom furniture built according to ASTM test guidelines, design standards, and hotel brand specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className="group rounded-[28px] border border-brandForm-border overflow-hidden bg-brandBg-soft shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-extrabold tracking-tight">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-xs text-typography-secondary leading-relaxed">{cat.desc}</p>
                  <Link 
                    to="/products"
                    className="text-xs font-extrabold text-primary-purple uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-accent-indigo"
                  >
                    View details <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-20 bg-brandBg-soft border-t border-brandForm-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              One-Stop Hospitality Solutions
            </h2>
            <p className="text-sm text-typography-secondary">
              We bridge the gap between design concepts and China-based factory execution, supporting clients from mockups to warranty claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-[28px] bg-white border border-brandForm-border hover:border-primary-purple transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between h-[250px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-purple flex items-center justify-center mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-primary-dark mb-2">{srv.title}</h3>
                  <p className="text-xs text-typography-secondary leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WORKSHOP & FACTORIES */}
      <section className="py-20 bg-white border-y border-brandForm-border">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Manufacturing Prowess
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              13+ Cooperating Specialized Factories in Foshan
            </h2>
            <p className="text-sm text-typography-secondary leading-relaxed">
              Foshan, China is the global capital of custom furniture manufacturing. Our network includes 13+ specialized manufacturing facilities focusing on various scopes: MDF cabinetry, solid wood framing, upholstered sofas, backlit mirrors, and commercial metal structures.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary-purple flex-shrink-0" size={18} />
                <div>
                  <span className="text-sm font-bold text-primary-dark block">Double Inspection QA</span>
                  <span className="text-xs text-typography-secondary">Detailed quality inspection before loading.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-primary-purple flex-shrink-0" size={18} />
                <div>
                  <span className="text-sm font-bold text-primary-dark block">ISPM-15 Wood Packing</span>
                  <span className="text-xs text-typography-secondary">Export crates matching US customs standards.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/services" className="btn-premium-primary">
                View Sourcing Workflow
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-[24px] overflow-hidden border border-brandForm-border shadow-md aspect-square">
              <img src="/assets/About (2).png" alt="Workshop production sanding" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[24px] overflow-hidden border border-brandForm-border shadow-md aspect-square mt-6">
              <img src="/assets/About (3).png" alt="Furniture frame assembly" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[24px] overflow-hidden border border-brandForm-border shadow-md aspect-square -mt-6">
              <img src="/assets/About (4).png" alt="Upholstered chair sewing" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[24px] overflow-hidden border border-brandForm-border shadow-md aspect-square">
              <img src="/assets/About (5).png" alt="Finished dining vanity detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO PREVIEW */}
      <section className="py-24 bg-brandBg-soft">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
                Hospitality Project Showcases
              </h2>
            </div>
            <Link to="/clients" className="btn-premium-secondary flex items-center gap-2">
              All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-[32px] overflow-hidden border border-brandForm-border shadow-xl h-[400px] relative bg-white">
              <img src="/assets/portfolio1-aksharfoshan.jpg" alt="Guest room luxury bedroom suite" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brandForm-border">Guest Rooms</span>
                <h3 className="text-2xl font-extrabold">Complete Bedroom Casegoods</h3>
                <p className="text-xs text-gray-300 max-w-md">Solid oak nightstands, panels, writing desks, upholstered headboards, and closet wardrobes.</p>
              </div>
            </div>

            <div className="group rounded-[32px] overflow-hidden border border-brandForm-border shadow-xl h-[400px] relative bg-white">
              <img src="/assets/portfolio2_aksharfoshan.jpg" alt="Hotel lobby seating layout" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brandForm-border">Lobbies & Public Areas</span>
                <h3 className="text-2xl font-extrabold">Premium Lounge Millwork</h3>
                <p className="text-xs text-gray-300 max-w-md">Bespoke luxury sectional sofas, curved reception counters, wood claddings, and lounge armchairs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="py-20 bg-white border-t border-brandForm-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              B2B Client Reviews
            </span>
            <h2 className="text-3xl font-extrabold text-primary-dark">
              What Hotel Operators Say
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="pb-16"
          >
            <SwiperSlide>
              <div className="text-center space-y-6">
                <p className="text-lg md:text-xl italic text-typography-secondary leading-relaxed font-serif">
                  "Sourcing our entire guestroom furniture package from Foshan felt like a risk, but Akshar Foshan handled everything. Their team conducted factory audits, oversaw color-matching mockups, and coordinated DDP freight right to our hotel in Florida. The wood finishes are flawless!"
                </p>
                <div>
                  <h4 className="font-extrabold text-primary-dark text-base">Procurement Director</h4>
                  <p className="text-xs text-typography-secondary">Hilton-Style Hotel Project • Florida, USA</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-center space-y-6">
                <p className="text-lg md:text-xl italic text-typography-secondary leading-relaxed font-serif">
                  "We needed custom banquette seating, LED mirrors, and backlit shower panels for a boutique resort. Akshar Foshan aligned all categories across three factories, checked packing stability, and solved custom clearance documents. Highly recommended B2B partner."
                </p>
                <div>
                  <h4 className="font-extrabold text-primary-dark text-base">Interior Architect & Partner</h4>
                  <p className="text-xs text-typography-secondary">Marriott Autograph-Style Resort • California, USA</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 bg-brandBg-soft border-t border-brandForm-border" id="faqs-sec">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Inquiry Support
            </span>
            <h2 className="text-3xl font-extrabold text-primary-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-brandForm-border rounded-[20px] overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm font-extrabold text-primary-dark">{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-primary-purple transition-transform duration-300 ${activeFaq === idx ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === idx ? 'max-h-[300px] border-t border-brandForm-border/40' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs text-typography-secondary leading-relaxed bg-brandBg-soft/30">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
