import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ArrowRight, MessageCircle, Mail, Linkedin,
  Play, Bot, Plus, Minus
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { socialProofLogos, testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'

export const Route = createFileRoute('/12')({
  component: Design12,
})

const featureIcons = [LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck]

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numericPart = value.replace(/[^0-9.]/g, '')
  const suffix = value.replace(/[0-9.]/g, '')
  const [count, setCount] = useState(0)
  const target = parseFloat(numericPart) || 0

  useEffect(() => {
    if (!isInView) return
    let frame: number
    const duration = 2000
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(target * eased)
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target])

  return (
    <div ref={ref} className="text-center p-8 border" style={{ borderColor: 'rgba(196,122,90,0.15)' }}>
      <div className="text-5xl md:text-7xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#c47a5a' }}>
        {target % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </div>
      <div className="w-8 h-px mx-auto mt-4 mb-3" style={{ background: '#c47a5a' }} />
      <div className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(240,230,214,0.35)' }}>{label}</div>
    </div>
  )
}

function Design12() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#1a1614', color: '#f0e6d6', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');`}</style>

      {/* Thin copper accent line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #c47a5a, transparent)' }} />

      {/* Header -- Centered serif logo */}
      <header className="fixed top-[2px] left-0 right-0 z-50 h-14 flex items-center justify-between px-8 border-b" style={{ background: 'rgba(26,22,20,0.92)', backdropFilter: 'blur(20px)', borderColor: 'rgba(196,122,90,0.1)' }}>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(240,230,214,0.35)' }}>
          <a href="#servicios" className="hover:text-[#c47a5a] transition-colors">Servicios</a>
          <a href="#testimonios" className="hover:text-[#c47a5a] transition-colors">Testimonios</a>
        </nav>
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-lg tracking-[0.1em]" style={{ fontFamily: "'Playfair Display', serif", color: '#c47a5a' }}>Synnova</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(240,230,214,0.35)' }}>
            <a href="#faq" className="hover:text-[#c47a5a] transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-[#c47a5a] transition-colors">Contacto</a>
          </nav>
          <button onClick={() => setChatOpen(true)} className="text-xs tracking-[0.15em] uppercase px-4 py-1.5 border transition-colors hover:bg-[#c47a5a] hover:text-[#1a1614] hover:border-[#c47a5a]" style={{ borderColor: 'rgba(196,122,90,0.25)', color: '#c47a5a' }}>
            Nova
          </button>
        </div>
      </header>

      {/* Hero -- Full-width centered */}
      <section className="min-h-screen pt-20 flex items-center justify-center px-8">
        <motion.div
          initial="hidden" animate="show" variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Decorative rule */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px" style={{ background: '#c47a5a' }} />
            <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: '#c47a5a' }}>Gestion Empresarial</span>
            <div className="w-16 h-px" style={{ background: '#c47a5a' }} />
          </motion.div>

          <motion.h1 variants={fadeUp} className="leading-[0.9] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-black" style={{ color: '#f0e6d6' }}>Deja de</span>
            <span className="block text-6xl md:text-8xl lg:text-9xl italic font-light mt-1" style={{ color: '#c47a5a' }}>improvisar</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 italic font-light" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(240,230,214,0.4)' }}>
            Centraliza todas las operaciones de tu negocio en una sola plataforma inteligente
          </motion.p>

          {/* Decorative rule */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-10">
            <div className="w-24 h-px" style={{ background: 'rgba(196,122,90,0.2)' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#c47a5a' }} />
            <div className="w-24 h-px" style={{ background: 'rgba(196,122,90,0.2)' }} />
          </motion.div>

          <motion.div variants={fadeUp}>
            <button onClick={() => setChatOpen(true)} className="px-10 py-3.5 text-sm tracking-[0.2em] uppercase border-2 transition-all hover:bg-[#c47a5a] hover:text-[#1a1614] hover:border-[#c47a5a]" style={{ fontFamily: "'Playfair Display', serif", borderColor: '#c47a5a', color: '#c47a5a' }}>
              Habla con Nova
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof -- Static with diamond ornaments */}
      <section className="py-10 border-y" style={{ borderColor: 'rgba(196,122,90,0.1)' }}>
        <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {socialProofLogos.map((name, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(240,230,214,0.2)' }}>{name}</span>
              {i < socialProofLogos.length - 1 && (
                <span className="w-1 h-1 rotate-45 inline-block" style={{ background: '#a0634b' }} />
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Stats -- 2x2 bordered grid */}
      <section className="py-28">
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <AnimatedCounter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features -- 3-column editorial cards */}
      <section className="py-24" id="servicios">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
                <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: '#c47a5a' }}>Capacidades</span>
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
                Lo que nos define
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => {
                const Icon = featureIcons[i] || Zap
                return (
                  <motion.div key={i} variants={fadeUp} className="relative pt-8 pb-10 px-8" style={{ borderTop: '2px solid #c47a5a' }}>
                    {/* Watermark number */}
                    <span className="absolute top-4 right-6 text-8xl font-black leading-none pointer-events-none" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(196,122,90,0.06)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative">
                      <Icon className="w-5 h-5 mb-5" style={{ color: '#c47a5a' }} />
                      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>{feature.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,230,214,0.4)' }}>{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery -- Double-rule bordered */}
      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-3 border-2" style={{ borderColor: 'rgba(196,122,90,0.15)' }}
          >
            <div className="border p-1" style={{ borderColor: 'rgba(196,122,90,0.08)' }}>
              <div className="aspect-[16/9] relative" style={{ background: 'linear-gradient(135deg, rgba(196,122,90,0.06), rgba(160,99,75,0.04), rgba(26,22,20,0.5))' }}>
                <div className="absolute inset-8 grid grid-cols-4 grid-rows-3 gap-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="rounded-sm" style={{ background: `rgba(196,122,90,${0.03 + (i % 3) * 0.02})` }} />
                  ))}
                </div>
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#c47a5a' }} />
                  <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(196,122,90,0.4)' }}>Panel de Control</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials -- Decorative quotes */}
      <section className="py-28" id="testimonios">
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
                <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: '#c47a5a' }}>Testimonios</span>
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
              </div>
            </motion.div>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="py-14 border-t text-center" style={{ borderColor: 'rgba(196,122,90,0.08)' }}>
                {/* Oversized quote mark */}
                <span className="text-7xl leading-none font-bold block mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(196,122,90,0.2)' }}>"</span>
                <p className="text-xl md:text-2xl lg:text-3xl italic leading-snug mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
                  {t.text}
                </p>
                <div className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(240,230,214,0.3)' }}>
                  {t.name} — {t.role}, {t.company}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ -- Serif text with accent left border */}
      <section className="py-24" id="faq">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
                <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: '#c47a5a' }}>Preguntas</span>
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
                Preguntas Frecuentes
              </h2>
            </motion.div>
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="border-t" style={{ borderColor: 'rgba(196,122,90,0.08)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center gap-4 py-5 text-left"
                >
                  <span className="flex-1 text-base md:text-lg" style={{ fontFamily: "'Playfair Display', serif", color: openFaq === i ? '#c47a5a' : '#f0e6d6' }}>
                    {faq.question}
                  </span>
                  <span style={{ color: '#c47a5a' }}>
                    {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-4 border-l-2" style={{ borderColor: '#c47a5a' }}>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,230,214,0.4)' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog -- 3-column editorial grid */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
                <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: '#c47a5a' }}>Publicaciones</span>
                <div className="w-12 h-px" style={{ background: '#c47a5a' }} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
                Desde la Redaccion
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <motion.article key={i} variants={fadeUp} className="group cursor-pointer">
                  <div className="aspect-[4/3] mb-5 relative" style={{ background: 'linear-gradient(135deg, rgba(196,122,90,0.06), rgba(160,99,75,0.04))' }}>
                    <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2 py-1" style={{ background: 'rgba(196,122,90,0.12)', color: '#c47a5a' }}>
                      {post.category}
                    </span>
                  </div>
                  <time className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(240,230,214,0.25)' }}>{post.date}</time>
                  <h3 className="text-lg font-bold mt-2 leading-snug group-hover:text-[#c47a5a] transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: 'rgba(240,230,214,0.35)' }}>{post.excerpt}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA -- Elegant band */}
      <section className="py-28">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px" style={{ background: '#c47a5a' }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#c47a5a' }} />
              <div className="w-16 h-px" style={{ background: '#c47a5a' }} />
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
              Tu negocio<br /><span className="italic font-light" style={{ color: '#c47a5a' }}>merece mas</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-24 h-px" style={{ background: 'rgba(196,122,90,0.15)' }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: '#c47a5a' }} />
              <div className="w-24 h-px" style={{ background: 'rgba(196,122,90,0.15)' }} />
            </div>
            <button onClick={() => setChatOpen(true)} className="px-10 py-3.5 text-sm tracking-[0.2em] uppercase border-2 transition-all hover:bg-[#c47a5a] hover:text-[#1a1614] hover:border-[#c47a5a]" style={{ fontFamily: "'Playfair Display', serif", borderColor: '#c47a5a', color: '#c47a5a' }}>
              Comienza con Nova
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact -- Refined split */}
      <section className="py-24" id="contacto">
        <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px" style={{ background: '#c47a5a' }} />
              <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: '#c47a5a' }}>Contacto</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#f0e6d6' }}>
              Escribenos
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(240,230,214,0.4)' }}>
              ¿Tienes preguntas? Nuestro equipo esta listo para ayudarte.
            </p>
            <div className="flex gap-4 mt-8">
              {[Mail, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border transition-colors hover:border-[#c47a5a]" style={{ borderColor: 'rgba(196,122,90,0.15)', color: 'rgba(240,230,214,0.35)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {['Nombre', 'Empresa', 'Email', 'Mensaje'].map((label) => (
              <div key={label}>
                <label className="text-[10px] tracking-[0.3em] uppercase block mb-2" style={{ color: 'rgba(240,230,214,0.3)' }}>{label}</label>
                {label === 'Mensaje' ? (
                  <textarea rows={3} className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none focus:border-[#c47a5a] transition-colors" style={{ borderColor: 'rgba(196,122,90,0.12)', color: '#f0e6d6' }} />
                ) : (
                  <input type={label === 'Email' ? 'email' : 'text'} className="w-full bg-transparent border-b py-2 text-sm outline-none focus:border-[#c47a5a] transition-colors" style={{ borderColor: 'rgba(196,122,90,0.12)', color: '#f0e6d6' }} />
                )}
              </div>
            ))}
            <button className="px-8 py-3 text-xs tracking-[0.2em] uppercase border-2 transition-all hover:bg-[#c47a5a] hover:text-[#1a1614] hover:border-[#c47a5a]" style={{ fontFamily: "'Playfair Display', serif", borderColor: '#c47a5a', color: '#c47a5a' }}>
              Enviar
            </button>
          </div>
        </div>
      </section>

      {/* Footer -- Centered with ornament */}
      <footer className="py-10 border-t" style={{ borderColor: 'rgba(196,122,90,0.08)' }}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: 'rgba(196,122,90,0.3)' }} />
            <div className="w-1 h-1 rotate-45" style={{ background: '#c47a5a' }} />
            <div className="w-6 h-px" style={{ background: 'rgba(196,122,90,0.3)' }} />
          </div>
          <span className="text-xs" style={{ color: 'rgba(240,230,214,0.2)' }}>© 2026 Synnova</span>
          <span className="text-xs italic mx-3" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(196,122,90,0.3)' }}>·</span>
          <span className="text-xs italic" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(196,122,90,0.3)' }}>Cobre Nocturno</span>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="ember" />
    </div>
  )
}
