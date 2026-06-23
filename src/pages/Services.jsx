import { Sparkles, Hammer, ShieldCheck, Truck, FileText, CheckCircle2 } from 'lucide-react'

export default function Services() {
  const steps = [
    {
      num: '01',
      title: 'Submit BOQ & Elevation Drawings',
      desc: 'Send us your architectural drawings, bill of quantities (BOQ), material specifications, or hotel brand manuals. Our engineering team reviews requirements to map a sourcing path.',
      duration: 'Timeline: 3-5 days'
    },
    {
      num: '02',
      title: 'Sourcing & Cost Estimation',
      desc: 'We select the most appropriate cooperating factories from our Foshan network. We compile itemized cost sheets covering materials, hardware, and shipping estimates.',
      duration: 'Timeline: 5-7 days'
    },
    {
      num: '03',
      title: 'Shop Drawings & Mockup Prototypes',
      desc: 'Our factories prepare detailed technical shop drawings for your approval. We then manufacture a sample guestroom set (nightstand, headboard, vanity) for physical inspection of colors, joints, and clearances.',
      duration: 'Timeline: 25-30 days'
    },
    {
      num: '04',
      title: 'Mass Production & In-Person QC',
      desc: 'Upon sample approval, mass production begins. Our in-house QC inspectors visit the workshops weekly to test wood moisture levels, drawer slider durability, paint gloss, and transit packaging stability.',
      duration: 'Timeline: 35-45 days'
    },
    {
      num: '05',
      title: 'FOB / DDP Logistics & Loading',
      desc: 'We load shipping containers with export-grade plywood crates. We coordinate customs clearance, import documentation, and final delivery trucking directly to your hotel project site.',
      duration: 'Timeline: 30-40 days transit'
    },
    {
      num: '06',
      title: 'After-Sales & Warranty Support',
      desc: 'We deliver complete warranty packets covering joint failures, paint yellowing, and hardware issues. In case of shipping damage, we coordinate replacements from Foshan immediately.',
      duration: 'Timeline: 2-Year structural warranty'
    }
  ]

  const capabilities = [
    { title: 'ASTM Wood Humidity Testing', desc: 'Ensuring solid wood and veneer moisture content stays between 8-12% to prevent cracking in dry climates.' },
    { title: 'CAL-117 Fire Code Compliance', desc: 'Importing flame-retardant foams and fabrics meeting strict US hotel security standards.' },
    { title: 'Mockup Room Approvals', desc: 'Delivering full guestroom prototypes before launching scale operations.' },
    { title: 'ISPM-15 Plywood Crating', desc: 'Ensuring zero raw wood packaging leaves our Foshan facilities to pass customs inspections.' }
  ]

  return (
    <div className="page-transition-wrapper">
      {/* 1. Page Header */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Our Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Hospitality FF&E Sourcing & Project Management
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            We handle everything from initial shop drawings to in-person factory inspections and doorstep DDP customs clearance.
          </p>
        </div>
      </section>

      {/* 2. Core Service List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Consulting */}
            <div className="p-8 rounded-[24px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-purple flex items-center justify-center">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary-dark">Design & Budget Consulting</h3>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  We align designs with material choices (melamine vs. oak veneer) to reduce fabrication costs without sacrificing beauty.
                </p>
              </div>
            </div>

            {/* Sourcing */}
            <div className="p-8 rounded-[24px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-purple flex items-center justify-center">
                <Hammer className="text-white w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary-dark">Sourcing & Procurement</h3>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  With 13+ cooperating specialized factories, we allocate your guestroom casegoods, lobby metal items, and backlit mirrors to the best facilities.
                </p>
              </div>
            </div>

            {/* Quality Control */}
            <div className="p-8 rounded-[24px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-purple flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary-dark">Quality Control & QA</h3>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  Our QC team reviews joint stabilities, hardware cycles, veneer stitching, and box drop safety in the factories before shipping.
                </p>
              </div>
            </div>

            {/* DDP Logistics */}
            <div className="p-8 rounded-[24px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-purple flex items-center justify-center">
                <Truck className="text-white w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary-dark">FOB / DDP Logistics</h3>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  We manage container bookings, ocean line tracking, customs clearance, import tax processing, and local job-site trucking.
                </p>
              </div>
            </div>

            {/* Approval Support */}
            <div className="p-8 rounded-[24px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-purple flex items-center justify-center">
                <FileText className="text-white w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary-dark">Approval Documentation</h3>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  We supply wood finish samples, stone samples, hardware specifications, and technical details to pass interior designer reviews.
                </p>
              </div>
            </div>

            {/* Warranty Support */}
            <div className="p-8 rounded-[24px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-primary-purple flex items-center justify-center">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-primary-dark">Warranty Coordination</h3>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  We coordinate with Foshan manufacturing plants to replace hardware, supply replacement panels, and honor structural warranties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Procurement Workflow Timeline */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#DDD3C8]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Step-by-Step Flow
            </span>
            <h2 className="text-3xl font-extrabold text-primary-dark tracking-tight">
              Hospitality Sourcing & Execution Timeline
            </h2>
            <p className="text-sm text-typography-secondary">
              How we execute your B2B hotel furniture order from the initial blueprint design to final key handoff.
            </p>
          </div>

          {/* Interactive Timeline Layout */}
          <div className="relative border-l-2 border-brandForm-border md:border-l-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 pl-10 md:pl-0">
            {steps.map((step, idx) => (
              <div key={idx} className="relative space-y-4">
                {/* Number bullet */}
                <div className="absolute -left-[58px] md:left-0 md:-top-4 w-9 h-9 rounded-full bg-[#3B1E70] text-white flex items-center justify-center text-xs font-bold shadow-lg">
                  {step.num}
                </div>
                <div className="md:pt-8 space-y-2">
                  <span className="text-[10px] font-bold text-[#5A35A2] tracking-wider uppercase block">
                    {step.duration}
                  </span>
                  <h3 className="text-lg font-extrabold text-primary-dark">
                    {step.title}
                  </h3>
                  <p className="text-xs text-typography-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tech Standards & Specifications */}
      <section className="py-20 bg-white border-t border-[#DDD3C8]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              B2B Assurance
            </span>
            <h2 className="text-3xl font-extrabold text-[#2B124C]">
              Technical Standards & Quality Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-[20px] bg-[#FAF8F5] border border-[#DDD3C8]/40 space-y-2"
              >
                <span className="text-sm font-extrabold text-primary-dark block">
                  {cap.title}
                </span>
                <p className="text-xs text-typography-secondary leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
