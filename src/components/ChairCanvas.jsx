import React, { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

// Detect WebGL support helper
function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}

// React Error Boundary for WebGL/Canvas crashes
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Canvas WebGL error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Armchair Model Group
function Armchair(props) {
  const groupRef = useRef()

  // Slowly rotate the model over time
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* 4 Elegant Slender Legs (Golden Brass Metallic) */}
      {/* Front Left */}
      <mesh position={[-0.7, -1, 0.7]} rotation={[0.1, 0, -0.1]}>
        <cylinderGeometry args={[0.04, 0.02, 1.2, 16]} />
        <meshPhysicalMaterial color="#C5A059" metalness={0.9} roughness={0.15} clearcoat={1} />
      </mesh>
      {/* Front Right */}
      <mesh position={[0.7, -1, 0.7]} rotation={[0.1, 0, 0.1]}>
        <cylinderGeometry args={[0.04, 0.02, 1.2, 16]} />
        <meshPhysicalMaterial color="#C5A059" metalness={0.9} roughness={0.15} clearcoat={1} />
      </mesh>
      {/* Back Left */}
      <mesh position={[-0.7, -1, -0.7]} rotation={[-0.1, 0, -0.1]}>
        <cylinderGeometry args={[0.04, 0.02, 1.2, 16]} />
        <meshPhysicalMaterial color="#C5A059" metalness={0.9} roughness={0.15} clearcoat={1} />
      </mesh>
      {/* Back Right */}
      <mesh position={[0.7, -1, -0.7]} rotation={[-0.1, 0, 0.1]}>
        <cylinderGeometry args={[0.04, 0.02, 1.2, 16]} />
        <meshPhysicalMaterial color="#C5A059" metalness={0.9} roughness={0.15} clearcoat={1} />
      </mesh>

      {/* Main Seat Frame (Golden ring underneath cushion) */}
      <mesh position={[0, -0.4, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.92, 0.92, 0.1, 32]} />
        <meshPhysicalMaterial color="#A98341" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Luxurious Upholstered Cushion (Deep Royal Purple Velvet) */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.35, 32]} />
        <meshPhysicalMaterial 
          color="#3B1E70" 
          roughness={0.85} 
          metalness={0.1}
          sheen={1}
          sheenRoughness={0.5}
          sheenColor="#5A35A2"
        />
      </mesh>

      {/* Curved Padded Backrest (Elegant horseshoe shape) */}
      {/* Curved base box */}
      <mesh position={[0, 0.45, -0.55]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[1.3, 0.9, 0.25]} />
        <meshPhysicalMaterial 
          color="#3B1E70" 
          roughness={0.85}
          metalness={0.1}
          sheen={1}
          sheenRoughness={0.5}
          sheenColor="#5A35A2"
        />
      </mesh>

      {/* Left Backrest Wing */}
      <mesh position={[-0.6, 0.45, -0.2]} rotation={[0.1, 0.8, -0.05]}>
        <boxGeometry args={[0.8, 0.9, 0.22]} />
        <meshPhysicalMaterial 
          color="#3B1E70" 
          roughness={0.85}
          metalness={0.1}
          sheen={1}
          sheenColor="#5A35A2"
        />
      </mesh>

      {/* Right Backrest Wing */}
      <mesh position={[0.6, 0.45, -0.2]} rotation={[0.1, -0.8, 0.05]}>
        <boxGeometry args={[0.8, 0.9, 0.22]} />
        <meshPhysicalMaterial 
          color="#3B1E70" 
          roughness={0.85}
          metalness={0.1}
          sheen={1}
          sheenColor="#5A35A2"
        />
      </mesh>

      {/* Left Armrest Accent (Metallic Brass) */}
      <mesh position={[-0.8, 0.1, 0.2]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.8]} />
        <meshPhysicalMaterial color="#C5A059" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Right Armrest Accent (Metallic Brass) */}
      <mesh position={[0.8, 0.1, 0.2]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[0.08, 0.04, 0.8]} />
        <meshPhysicalMaterial color="#C5A059" metalness={0.9} roughness={0.15} />
      </mesh>
    </group>
  )
}

export default function ChairCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    setHasWebGL(detectWebGL())
  }, [])

  const fallbackUI = (
    <div className="w-full h-[400px] md:h-[550px] relative rounded-[32px] overflow-hidden border border-brandForm-border bg-white shadow-xl flex items-center justify-center p-6 group">
      {/* Background radial soft light for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-primary-purple/5 to-transparent pointer-events-none rounded-full blur-3xl scale-75" />
      
      {/* Armchair Static Image Fallback */}
      <img 
        src="/assets/grey-comfortable-armchair-isolated-white-background.jpg" 
        alt="Premium Hotel Armchair Custom Layout" 
        className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Interactive Specs Watermark */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-5 py-2.5 rounded-full bg-primary-dark/85 backdrop-blur-md border border-white/10 text-[9px] font-extrabold text-[#FAF8F5] uppercase tracking-widest text-center shadow-lg">
        Akshar Foshan Premium Armchair Specimen
      </div>
    </div>
  )

  if (!hasWebGL) {
    return fallbackUI
  }

  return (
    <div className="w-full h-[400px] md:h-[550px] relative cursor-grab active:cursor-grabbing">
      {/* Background radial soft light for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-primary-purple/5 to-transparent pointer-events-none rounded-full blur-3xl scale-75" />

      <CanvasErrorBoundary fallback={fallbackUI}>
        <Canvas 
          shadows 
          camera={{ position: [0, 1.5, 4.2], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Stage environment="luxury" intensity={0.5} contactShadow={{ opacity: 0.4, blur: 2 }} adjustCamera={false}>
              <Armchair position={[0, -0.3, 0]} scale={1.15} />
            </Stage>
            <OrbitControls 
              enableZoom={false} 
              maxPolarAngle={Math.PI / 2 + 0.1} 
              minPolarAngle={Math.PI / 4} 
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>

      {/* Small UI Help Tag */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest pointer-events-none shadow-md">
        Drag to Rotate 3D Model
      </div>
    </div>
  )
}
