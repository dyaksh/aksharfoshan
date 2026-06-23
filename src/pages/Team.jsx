export default function Team() {
  const executiveTeam = [
    {
      name: 'Yogin Patel',
      role: 'Chief Executive Officer (CEO)',
      desc: 'A seasoned multi-property hotelier, Yogin Patel founded Divine Procurement with a sharp eye for hospitality operations and brand compliance. With properties spanning several U.S. states and affiliations with Hilton, IHG, Marriott, and Choice Hotels, he ensures every project meets exacting brand standards—delivering seamless, on-brand results every time.',
      image: 'https://hotelprocurement.net/wp-content/uploads/2025/02/Yogin-Patel.png'
    },
    {
      name: 'Riten Patel (Ron)',
      role: 'Chief Development Officer (CDO)',
      desc: 'A seasoned professional with deep experience in hotel operations, real estate development, and convenience store ventures across the Southeastern U.S. Known for his strategic vision and hands-on leadership, he excels in everything from site acquisition to daily operations, consistently delivering strong results.',
      image: 'https://hotelprocurement.net/wp-content/uploads/2025/07/PHOTO-2025-07-26-09-50-17-e1753743141121.jpg'
    },
    {
      name: 'Alex Penzin',
      role: 'Manager',
      desc: 'With over 15 years of hospitality experience across leading brands including Accor, Wyndham, Hyatt, and Banyan Tree, Alex brings operational excellence from economy to luxury segments. At Divine Procurement, he leads daily operations, ensuring every project stays on track and runs smoothly from start to finish.',
      image: 'https://hotelprocurement.net/wp-content/uploads/2025/02/profile-pic-1.png'
    },
    {
      name: 'Aadi Bhat',
      role: 'Designer & Architect',
      desc: 'Aadi is a hospitality design expert with over 5 years of experience in 3D visualization and smart space planning. Her work with IHG, Hilton, and Marriott showcases her ability to blend creativity with strict brand adherence—resulting in spaces that are both functional and visually captivating.',
      image: 'https://hotelprocurement.net/wp-content/uploads/2025/02/aadi-bhat-designer-for-website.png'
    },
    {
      name: 'Yadhyra Muñoz Schlegel',
      role: 'Designer & Architect',
      desc: 'Yadhyra specializes in layout optimization, ADA-compliant design, and harmonious color palettes. With expertise in CAD and 3D visualization, she produces detailed construction documentation and elegant, on-budget solutions. Her client-focused mindset and precision consistently drive high-impact results.',
      image: 'https://hotelprocurement.net/wp-content/uploads/2025/02/Yadhyra-Munoz-Schlegel.png'
    }
  ]

  const departments = [
    {
      title: 'Wood Sourcing & Milling Division',
      role: 'Raw Material Selection',
      desc: 'Controls raw logs, veneer selections, and runs moisture level tests ensuring all stock meets ASTM 8-12% humidity standards.',
      image: '/assets/About (1).png'
    },
    {
      title: 'CAD Engineering & Shop Drawings',
      role: 'Design & Fitment Alignment',
      desc: 'Converts designers’ sketch blueprints into high-fidelity shop elevations and mockups matching US wall anchor rules.',
      image: '/assets/About (2).png'
    },
    {
      title: 'Production Line Supervisors',
      role: 'Manufacturing Flow',
      desc: 'Oversees CNC routing, mortise joint carving, and edge banding processes across cooperating factory lines.',
      image: '/assets/About (3).png'
    },
    {
      title: 'Upholstery & Soft Seating Team',
      role: 'Velvet, Leather & Foam Selection',
      desc: 'Manages fabric stitching, CAL-117 flame retardant foams layer checks, and coil spring cushion configurations.',
      image: '/assets/About (4).png'
    },
    {
      title: 'Backlit Mirror & Glass Inspection',
      role: 'Hardware & Certification',
      desc: 'Verifies LED backing, runs anti-fog checks, and matches UL/CSA electrical criteria for US hospitality delivery.',
      image: '/assets/About (5).png'
    },
    {
      title: 'Export Packaging & Crating Unit',
      role: 'Safety & Damage Prevention',
      desc: 'Secures casegoods with foam edge guards, wraps furniture inside heavy cartons, and builds ISPM-15 fumigated plywood crates.',
      image: '/assets/About (6).png'
    },
    {
      title: 'Project & Sourcing Management',
      role: 'B2B Client Coordination',
      desc: 'Acts as client success contacts, aligning BOQs, organizing mockup evaluations, and hosting digital workshop inspects.',
      image: '/assets/About (7).png'
    },
    {
      title: 'Quality Assurance & Audit Inspectors',
      role: 'Final Check & Certification',
      desc: 'Executes final double inspection audits on drawer slide smoothness, scratch-free paints, and stone-counter seams before loading.',
      image: '/assets/About (8).png'
    }
  ]

  return (
    <div className="page-transition-wrapper">
      {/* 1. Header */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Our Backbone
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Meet the Project & Production Teams
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            Discover the actual engineering divisions, quality inspectors, and logistics coordinators executing your hotel FF&E orders in Foshan, China.
          </p>
        </div>
      </section>

      {/* 2. Divine Team Section (Added) */}
      <section className="py-24 bg-white border-b border-brandForm-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#5A35A2] tracking-tight">
              The Divine Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
            {executiveTeam.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                {/* Gold ring circle headshot */}
                <div className="relative w-36 h-36 rounded-full border-[4px] border-[#D97706]/40 p-1 bg-[#FEF3C7] shadow-md overflow-hidden flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-primary-dark">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#3B1E70] block mt-1">
                    {member.role}
                  </span>
                  <p className="text-[11px] text-typography-secondary leading-relaxed mt-3 max-w-[240px] mx-auto">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Departments Grid */}
      <section className="py-20 bg-brandBg-soft">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              In-House Divisions
            </span>
            <h2 className="text-3xl font-extrabold text-primary-dark">
              Production & QA Infrastructure
            </h2>
            <p className="text-sm text-typography-secondary">
              We connect client-facing project managers in the US with technical workshop supervisors in Mainland China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {departments.map((dept, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-[28px] border border-brandForm-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={dept.image} 
                    alt={dept.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-primary-dark/0 transition-colors" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#5A35A2] block">
                      {dept.role}
                    </span>
                    <h3 className="text-sm font-extrabold text-primary-dark">
                      {dept.title}
                    </h3>
                    <p className="text-[11px] text-typography-secondary leading-relaxed pt-1">
                      {dept.desc}
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
