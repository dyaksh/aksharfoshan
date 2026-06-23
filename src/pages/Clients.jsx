import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx'

export default function Clients() {
  return (
    <div className="page-transition-wrapper">
      {/* 1. Header */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Project Showcases
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Our Hospitality Furniture Portfolio
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            A selective look at custom guestroom casegoods, public areas, custom seating, and luxury hotel packages.
          </p>
        </div>
      </section>

      {/* 2. Before/After Comparison Slider Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
              Craftsmanship Comparison
            </span>
            <h2 className="text-3xl font-extrabold text-primary-dark">
              From Workshop Frame to Finished Installation
            </h2>
            <p className="text-sm text-typography-secondary max-w-xl mx-auto">
              Use the slider to see how raw carpentry, sanding, and assembly inside our Foshan cooperating facilities transforms into premium, hotel-ready casegoods.
            </p>
          </div>

          <BeforeAfterSlider 
            beforeImage="/assets/About (1).png"
            afterImage="/assets/portfolio1-aksharfoshan.jpg"
            beforeLabel="Raw Plywood & Veneering Workshop"
            afterLabel="Finished Installation in Guest Suite"
          />
        </div>
      </section>
    </div>
  )
}
