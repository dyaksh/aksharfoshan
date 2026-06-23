import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react'

// Zod Validation Schema
const contactSchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  company: zod.string().min(2, 'Company/Hotel name is required'),
  phone: zod.string().min(6, 'Please enter a valid contact phone number'),
  location: zod.string().min(3, 'Project location is required'),
  productScope: zod.string().min(1, 'Please select your primary product requirement'),
  quantity: zod.string().min(1, 'Please enter approximate quantity'),
  timeline: zod.string().min(1, 'Please select your project timeline'),
  message: zod.string().min(10, 'Message must be at least 10 characters long')
})

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    // Simulate submission to B2B dashboard
    await new Promise((resolve) => setTimeout(resolve, 1800))
    console.log('Submitted B2B Inquiry:', data, 'Attached file:', selectedFile?.name)
    setIsSuccess(true)
    reset()
    setSelectedFile(null)
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="page-transition-wrapper">
      {/* 1. Header */}
      <section className="bg-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-l from-primary-purple/10 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5A35A2]">
            Start Your Inquiry
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Connect with a Project Manager
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
            Send us your BOQ, specification sheets, or design drawings. Our team will review and contact you with quotes immediately.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold text-primary-purple uppercase tracking-widest block">
                Office Information
              </span>
              <h2 className="text-2xl font-extrabold text-primary-dark">
                Aksha (Foshan) Hotel Furniture Co., Ltd.
              </h2>
              <p className="text-xs text-typography-secondary leading-relaxed">
                Our manufacturing plant and showroom are based in Gaoming District, Foshan. All international sales, logistics coordination, and drawings approvals are processed through our primary channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary-dark block">Headquarters</span>
                  <span className="text-xs text-typography-secondary leading-relaxed">
                    No. 29, Sanling Road, Hecheng Sub-district, Gaoming District, Foshan City, Guangdong, China
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary-dark block">Call or WhatsApp</span>
                  <a href="tel:+17606170800" className="text-xs text-primary-purple hover:underline font-semibold block">
                    Tel: +1 (760) 617-0800
                  </a>
                  <a href="https://wa.me/17606170800" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-purple hover:underline font-semibold block">
                    WhatsApp: +1 (760) 617-0800
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary-dark block">Email Sourcing</span>
                  <a href="mailto:yogin@aksharfoshan.com" className="text-xs text-primary-purple hover:underline font-semibold">
                    yogin@aksharfoshan.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Simulation Embed Card */}
            <div className="border border-brandForm-border rounded-[28px] overflow-hidden shadow-sm h-64 bg-brandBg-soft relative flex flex-col justify-end p-6">
              {/* Fallback styling for maps */}
              <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <span className="text-xs font-bold block">Foshan Showroom & Factory</span>
                <span className="text-[10px] text-gray-300">Sanling Road, Gaoming District, Foshan</span>
                <a 
                  href="https://maps.google.com/?q=No.+29+Sanling+Road+Hecheng+Gaoming+Foshan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-white uppercase tracking-widest inline-flex items-center gap-1 pt-2 hover:underline"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            {isSuccess ? (
              <div className="p-8 rounded-[32px] border border-brandForm-border bg-white text-center space-y-6 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-extrabold text-primary-dark">Inquiry Submitted Successfully</h3>
                <p className="text-xs text-typography-secondary leading-relaxed max-w-md mx-auto">
                  Thank you for submitting your hotel furniture specifications. A project manager will review your details, coordinate with the drawing engineering teams, and email you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="btn-premium-primary text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 rounded-[32px] border border-brandForm-border bg-white shadow-xl space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-primary-dark">FF&E Sourcing Form</h3>
                  <p className="text-xs text-typography-secondary">Provide details below to calculate manufacturing timelines and budget costs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Contact Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="input-premium"
                      {...register('name')}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="business@hotel.com" 
                      className="input-premium"
                      {...register('email')}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Company / Hotel Name</label>
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="input-premium"
                      {...register('company')}
                    />
                    {errors.company && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.company.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="+1 (760) 000-0000" 
                      className="input-premium"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Project Location</label>
                    <input 
                      type="text" 
                      placeholder="City, State" 
                      className="input-premium"
                      {...register('location')}
                    />
                    {errors.location && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.location.message}
                      </span>
                    )}
                  </div>

                  {/* Scope dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Product Requirement</label>
                    <select 
                      className="input-premium py-[14px]"
                      {...register('productScope')}
                    >
                      <option value="">Select Category</option>
                      <option value="Casegoods">Casegoods & Headboards</option>
                      <option value="Upholstery">Upholstery & Benches</option>
                      <option value="Lighting">Lighting Fixtures</option>
                      <option value="Mirrors">LED Backlit Mirrors</option>
                      <option value="Bathroom">Shower Doors & Accessories</option>
                      <option value="Outdoor">Outdoor Furniture</option>
                      <option value="Complete Package">Complete FF&E Package</option>
                    </select>
                    {errors.productScope && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.productScope.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Quantity */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Approximate Quantity / Scope</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 120 guestrooms" 
                      className="input-premium"
                      {...register('quantity')}
                    />
                    {errors.quantity && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.quantity.message}
                      </span>
                    )}
                  </div>

                  {/* Timeline */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Project Timeline</label>
                    <select 
                      className="input-premium py-[14px]"
                      {...register('timeline')}
                    >
                      <option value="">Select Timeline</option>
                      <option value="Immediate">Immediate Sourcing (1-3 months)</option>
                      <option value="Planning">Planning phase (3-6 months)</option>
                      <option value="Future">Future Construction (6-12 months)</option>
                    </select>
                    {errors.timeline && (
                      <span className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.timeline.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary">Tell us about your requirement</label>
                  <textarea 
                    placeholder="Provide details about veneers, brands specs, hardware expectations..." 
                    className="input-premium min-h-[120px] resize-y"
                    {...register('message')}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message.message}
                    </span>
                  )}
                </div>

                {/* File Uploader */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-typography-secondary block">Attach Drawings / BOQ (PDF/Zip)</label>
                  <div className="border-2 border-dashed border-brandForm-border/80 rounded-2xl p-4 text-center hover:bg-brandBg-soft transition-colors cursor-pointer relative">
                    <input 
                      type="file" 
                      accept=".pdf,.zip,.xlsx,.xls,.dwg"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <div className="text-xs text-typography-secondary">
                      {selectedFile ? (
                        <span className="text-primary-purple font-bold">Selected: {selectedFile.name} ({Math.round(selectedFile.size/1024)} KB)</span>
                      ) : (
                        <span>Drag & drop files here or <span className="underline text-primary-purple font-bold">Browse</span></span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-premium-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send size={14} /> Send Sourcing Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
