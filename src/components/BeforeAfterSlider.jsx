import { useState, useRef } from 'react'

export default function BeforeAfterSlider({
  beforeImage = '/assets/About (1).png', // default to first workshop photo
  afterImage = '/assets/portfolio1-aksharfoshan.jpg', // default to finished portfolio photo
  beforeLabel = 'Raw Woodwork & MDF Frame',
  afterLabel = 'Finished Custom Guestroom'
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isSliding, setIsSliding] = useState(false)
  const containerRef = useRef(null)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let position = (x / rect.width) * 100
    if (position < 0) position = 0
    if (position > 100) position = 100
    setSliderPosition(position)
  }

  const handleTouchMove = (e) => {
    if (!isSliding) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e) => {
    if (!isSliding) return
    handleMove(e.clientX)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[350px] md:h-[480px] rounded-[32px] overflow-hidden shadow-2xl border border-brandForm-border select-none cursor-ew-resize"
      onMouseDown={() => setIsSliding(true)}
      onMouseUp={() => setIsSliding(false)}
      onMouseLeave={() => setIsSliding(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsSliding(true)}
      onTouchEnd={() => setIsSliding(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Base) */}
      <img 
        src={afterImage} 
        alt="After Finished Product" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute bottom-6 right-6 z-10 px-4 py-2 rounded-full bg-primary-dark/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none border border-white/10">
        {afterLabel}
      </div>

      {/* Before Image (Overlay clipped with sliderPosition) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before Raw Woodwork" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute bottom-6 left-6 z-10 px-4 py-2 rounded-full bg-[#3B1E70]/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slideline divider circle handle */}
        <div className="w-12 h-12 rounded-full bg-white text-primary-dark shadow-xl border-4 border-primary-purple flex items-center justify-center font-extrabold text-sm pointer-events-none select-none">
          ↔
        </div>
      </div>

      {/* Helper text overlay */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-primary-dark/40 backdrop-blur-md text-[9px] font-extrabold text-white uppercase tracking-widest pointer-events-none text-center">
        Slide to compare craftsmanship
      </div>
    </div>
  )
}
