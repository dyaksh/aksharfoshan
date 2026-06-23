import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Import Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Clients from './pages/Clients.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import ProductCategories from './pages/ProductCategories.jsx'
import ProjectGallery from './pages/ProjectGallery.jsx'
import DownloadBrochure from './pages/DownloadBrochure.jsx'

// Scroll to Top on Page Navigation
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brandBg-soft text-typography-primary font-avenir antialiased">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-[84px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductCategories />} />
            <Route path="/gallery" element={<ProjectGallery />} />
            <Route path="/download" element={<DownloadBrochure />} />
            <Route path="*" element={<Home />} /> {/* Fallback route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}
