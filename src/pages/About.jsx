import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Award, Globe, Compass, Landmark, Settings, ArrowRight } from 'lucide-react'

export default function About() {
  const coreActivities = [
    {
      title: 'Technical Translation',
      desc: 'We convert designer sketches, moodboards, and PDFs into highly detailed, construction-ready CAD shop drawings to align dimensions, joint structural designs, and hardware specifications.',
      icon: <Compass className="w-5 h-5 text-white" />
    },
    {
      title: 'Direct Factory Allocation',
      desc: 'Instead of using general middlemen, we allocate different FF&E elements to specialized cooperating factories in our network (e.g. cabinetry to CNC milling plants, sofas to upholstery shops).',
      icon: <Settings className="w-5 h-5 text-white" />
    },
    {
      title: 'Weekly Workshop Audits',
      desc: 'Our dedicated quality assurance managers perform physical weekly audits in the factories—checking wood humidity levels, joinery stability, paint gloss, and box drop limits.',
      icon: <ShieldCheck className="w-5 h-5 text-white" />
    },
    {
      title: 'Turnkey DDP Freight',
      desc: 'We pack items in heavy plywood crates, book container space, clear US custom lines, pay import duties, and coordinate flatbed logistics direct to your hospitality jobsite.',
      icon: <Globe className="w-5 h-5 text-white" />
    }
  ]

  const journeyMilestones = [
    {
      year: 'Phase 1: Inception & Local Sourcing',
      title: 'Deep Roots in Foshan',
      desc: 'Established as a project coordinator inside Foshan, China—the global furniture capital. We built relationships directly with raw material suppliers, CNC milling workshops, and master upholsterers, curating a trusted network of specialized factories.'
    },
    {
      year: 'Phase 2: Engineering & US Standard Alignment',
      title: 'Technical Standards Integration',
      desc: 'Brought on dedicated CAD engineers and introduced rigorous quality checklists to comply with strict US hotel brand requirements, including CAL-117 flame retardants, ASTM wood moisture limits (8-12%), and UL electrical certifications.'
    },
    {
      year: 'Phase 3: Turnkey DDP Logistics',
      title: 'Seamless Global Delivery',
      desc: 'Expanded our operations to manage direct ocean freight and port-to-door delivery. By taking full responsibility for customs clearance and inland trucking, we eliminated sourcing headaches for hoteliers across the United States.'
    }
  ]

  const manufacturingSteps = [
    {
      step: '01',
      title: 'Wood Sourcing & Milling',
      desc: 'We select raw hardwoods and veneers, testing them to ensure moisture levels stay between 8-12% to prevent warping or cracking after delivery.',
      image: '/assets/About (1).png'
    },
    {
      step: '02',
      title: 'CAD Engineering & CNC Machining',
      desc: 'Shop drawings are programmed directly into CNC machines for perfect milling accuracy, mortise cut-outs, and hardware boring.',
      image: '/assets/About (2).png'
    },
    {
      step: '03',
      title: 'Edge Banding & Veneering',
      desc: 'Exposed panel edges are banded under high pressure, and premium natural wood veneers are hot-pressed onto structural panels.',
      image: '/assets/About (3).png'
    },
    {
      step: '04',
      title: 'Structural Assembly',
      desc: 'Master carpenters execute trial assemblies, joining frameworks with heavy dowels, pocket screws, and corner blocks for high contract durability.',
      image: '/assets/About (4).png'
    },
    {
      step: '05',
      title: 'Upholstery & Foam Layering',
      desc: 'Custom sofas and benches are built with double-doweled frames, coil springs, and multi-layer high-density foams meeting CAL-117 standards.',
      image: '/assets/About (7).png'
    },
    {
      step: '06',
      title: 'Electrical & Glass Integration',
      desc: 'Mirror backing plates are fitted with anti-fog heating pads and UL-approved LED strips, and undergo strict ground-wire safety audits.',
      image: '/assets/About (5).png'
    },
    {
      step: '07',
      title: 'Double QA Inspection',
      desc: 'Inspectors review drawer-slide cycles, cabinet door hinges, scratch-free paint finishes, and stone-counter seam tolerances.',
      image: '/assets/About (8).png'
    },
    {
      step: '08',
      title: 'ISPM-15 Export Packing',
      desc: 'Items are wrapped in foam corner guards, sealed in thick cardboard boxes, and loaded into fumigated plywood crates for ocean transit.',
      image: '/assets/About (6).png'
    }
  ]

  return (
    <div className="page-transition-wrapper">
      {/* 1. HERO HEADER */}
      <section className="relative bg-primary-dark text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url('/assets/About.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#5A35A2]/20 border border-[#5A35A2]/30 text-[#5A35A2] text-xs font-bold uppercase tracking-widest">
            ★ Sourcing Story & Process
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.1]">
            From Raw Materials to Final Installation: Who We Are
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            Akshar Foshan is the trusted project management and sourcing partner, acting as your direct bridge to specialized hotel furniture manufacturing plants in Foshan, China.
          </p>
        </div>
      </section>

      {/* 2. WHAT WE ACTUALLY DO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Our Role
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight leading-tight">
              Bridging the Gap Between Design Blueprints & Factory Output
            </h2>
            <p className="text-sm text-typography-secondary leading-relaxed">
              Managing a custom furniture package (FF&E) from overseas is notoriously difficult. Communication gaps, mismatched quality criteria, and shipping damages often derail projects. 
            </p>
            <p className="text-sm text-typography-secondary leading-relaxed">
              We eliminate these pain points. We act as your project managers, engineers, quality auditors, and freight coordinators. Instead of general trading companies, we coordinate directly with 13+ specialized cooperating manufacturing plants in Foshan to ensure each category of furniture is made by its optimized factory.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreActivities.map((act, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-[24px] bg-brandBg-soft border border-brandForm-border shadow-sm space-y-4 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-purple flex items-center justify-center">
                  {act.icon}
                </div>
                <h3 className="text-sm font-extrabold text-primary-dark">{act.title}</h3>
                <p className="text-[11px] text-typography-secondary leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE JOURNEY (TIMELINE) */}
      <section className="py-24 bg-brandBg-soft border-t border-brandForm-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              How We Built Our Sourcing Legacy
            </h2>
            <p className="text-sm text-typography-secondary">
              Over the years, we transitioned from local procurement assistants to a fully integrated global supply chain partner.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-brandForm-border max-w-3xl mx-auto pl-8 md:pl-12 space-y-16">
            {journeyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-[#3B1E70] border-4 border-white shadow-md flex items-center justify-center z-10" />
                
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-primary-purple uppercase tracking-widest block">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-extrabold text-primary-dark">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-typography-secondary leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FURNITURE MAKING PROCESS (DETAILED WORKFLOW) */}
      <section className="py-24 bg-white border-t border-brandForm-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Inside the Workshops
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">
              The Furniture Manufacturing Process
            </h2>
            <p className="text-sm text-typography-secondary">
              A comprehensive breakdown of how raw materials are crafted into premium contract hospitality casegoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingSteps.map((step, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between h-[390px] rounded-[28px] border border-brandForm-border overflow-hidden bg-brandBg-soft shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#3B1E70] text-white flex items-center justify-center text-xs font-bold shadow-md">
                    {step.step}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold text-primary-dark group-hover:text-primary-purple transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-typography-secondary leading-relaxed">
                      {step.desc}
                    </p>
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
