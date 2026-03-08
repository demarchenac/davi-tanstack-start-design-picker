import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Sparkles, Play, Calendar, Clock, TrendingUp, Building2,
  Bot, ExternalLink, Plus, Minus
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'
import { LogoMarquee } from '@/components/shared/logo-marquee'

export const Route = createFileRoute('/10')({
  component: Design10,
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
    <div ref={ref} className="text-center">
      <div className="text-6xl md:text-8xl font-light tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
        {target % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </div>
      <div className="mt-3 text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(26,26,26,0.35)' }}>{label}</div>
    </div>
  )
}

function Design10() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const blogScrollRef = useRef<HTMLDivElement>(null)

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#f5f0e8', color: '#1a1a1a', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
        .blog-scroll-10::-webkit-scrollbar { display: none; }
        .blog-scroll-10 { -ms-overflow-style: none; scrollbar-width: none; scroll-snap-type: x mandatory; }
        .blog-scroll-10 > * { scroll-snap-align: start; }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-8 border-b" style={{ background: 'rgba(245,240,232,0.92)', backdropFilter: 'blur(20px)', borderColor: 'rgba(26,26,26,0.08)' }}>
        <div className="flex items-center gap-2">
          <span className="text-sm tracking-[0.15em] uppercase" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#e63946' }}>Synnova</span>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(26,26,26,0.25)' }}>Editorial</span>
        </div>
        <button onClick={() => setChatOpen(true)} className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-[#e63946]" style={{ color: 'rgba(26,26,26,0.4)' }}>
          Habla con Nova
        </button>
      </header>

      {/* Hero -- Asymmetric 2-column */}
      <section className="min-h-screen pt-12 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial="hidden" animate="show" variants={stagger}
            className="md:col-span-3"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: '#e63946' }}>Edicion 2026 -- Gestion Empresarial</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="leading-[0.9] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="block text-7xl md:text-9xl font-black" style={{ color: '#1a1a1a' }}>Deja de</span>
              <span className="block text-7xl md:text-9xl font-black italic" style={{ color: '#e63946' }}>improvisar</span>
              <span className="block text-4xl md:text-5xl font-light mt-2" style={{ color: 'rgba(26,26,26,0.35)' }}>tu operacion empresarial</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed max-w-lg mb-10" style={{ color: 'rgba(26,26,26,0.45)' }}>
              Synnova centraliza todas las operaciones de tu negocio en una sola plataforma inteligente. Deja atras las hojas de calculo y el caos operativo.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-8">
              <button onClick={() => setChatOpen(true)} className="px-8 py-3 text-sm tracking-[0.15em] uppercase font-medium transition-all hover:shadow-[0_0_40px_rgba(230,57,70,0.2)]" style={{ background: '#e63946', color: '#f5f0e8' }}>
                Habla con Nova
              </button>
              <span className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#e63946] transition-colors" style={{ color: 'rgba(26,26,26,0.35)' }}>
                <Play className="w-3 h-3" /> Ver demo
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 hidden md:block"
          >
            <div className="aspect-[3/4] border relative" style={{ borderColor: 'rgba(26,26,26,0.1)', background: 'linear-gradient(135deg, rgba(230,57,70,0.03), rgba(26,26,26,0.02))' }}>
              <div className="absolute top-6 left-6 right-6 bottom-6 border" style={{ borderColor: 'rgba(26,26,26,0.06)' }}>
                <div className="absolute inset-4 flex flex-col justify-between p-6">
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 rounded-full" style={{ background: 'rgba(26,26,26,0.08)' }} />
                    <div className="h-2 w-1/2 rounded-full" style={{ background: 'rgba(230,57,70,0.08)' }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-square rounded-sm" style={{ background: `rgba(26,26,26,${0.03 + i * 0.015})` }} />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded-full" style={{ background: 'rgba(26,26,26,0.05)' }} />
                    <div className="h-1.5 w-2/3 rounded-full" style={{ background: 'rgba(230,57,70,0.05)' }} />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 text-[10px] tracking-[0.3em] uppercase" style={{ background: '#1a1a1a', color: '#f5f0e8' }}>
                Dashboard
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof -- Marquee */}
      <LogoMarquee
        bgColor="#f5f0e8"
        label=""
        className="py-8"
      />

      {/* Stats -- 4-column with vertical rules */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-0"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="py-8 md:py-0" style={{ borderLeft: i > 0 ? '1px solid rgba(26,26,26,0.08)' : 'none' }}>
                <AnimatedCounter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features -- Alternating magazine spreads */}
      <section className="py-24" id="servicios">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-20">
              <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: '#e63946' }}>Capacidades</span>
              <h2 className="text-5xl md:text-7xl font-black mt-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
                Lo que <span className="italic" style={{ color: '#e63946' }}>transforma</span>
              </h2>
            </motion.div>
            {features.map((feature, i) => {
              const Icon = featureIcons[i] || Zap
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={i} variants={fadeUp}
                  className="py-12 border-t flex flex-col md:flex-row items-start gap-8"
                  style={{ borderColor: 'rgba(26,26,26,0.06)', flexDirection: isEven ? 'row' : 'row-reverse' }}
                >
                  <div className="md:w-1/6 flex-shrink-0">
                    <span className="text-6xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(230,57,70,0.12)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:w-3/6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>{feature.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.4)' }}>{feature.description}</p>
                  </div>
                  <div className="md:w-2/6 flex justify-end">
                    <div className="w-16 h-16 flex items-center justify-center border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                      <Icon className="w-6 h-6" style={{ color: '#e63946' }} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Product Gallery -- Full-bleed with pull quote */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative border p-1" style={{ borderColor: 'rgba(26,26,26,0.1)' }}
          >
            <div className="aspect-[16/9] relative" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.03), rgba(230,57,70,0.02), rgba(245,240,232,0.5))' }}>
              <div className="absolute inset-8 grid grid-cols-4 grid-rows-3 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="rounded-sm" style={{ background: `rgba(26,26,26,${0.02 + (i % 4) * 0.01})` }} />
                ))}
              </div>
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: '#e63946' }} />
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(26,26,26,0.3)' }}>Panel de Control Synnova</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-12 max-w-sm p-6" style={{ background: '#f5f0e8', border: '1px solid rgba(26,26,26,0.1)' }}>
              <p className="text-lg italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", color: '#e63946' }}>
                "Control total en una sola pantalla"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials -- Pull quotes */}
      <section className="py-32" id="testimonios">
        <div className="max-w-[1000px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="py-16 border-t flex gap-8" style={{ borderColor: 'rgba(26,26,26,0.06)' }}>
                <div className="w-1 flex-shrink-0" style={{ background: '#e63946' }} />
                <div>
                  <p className="text-2xl md:text-3xl lg:text-4xl italic leading-snug mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(230,57,70,0.08)', color: '#e63946' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1a1a1a' }}>{t.name}</div>
                      <div className="text-xs" style={{ color: 'rgba(26,26,26,0.35)' }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" id="faq">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-16">
              <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: '#e63946' }}>Preguntas</span>
              <h2 className="text-5xl md:text-6xl font-black mt-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
                FAQ
              </h2>
            </motion.div>
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="border-t" style={{ borderColor: 'rgba(26,26,26,0.06)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center gap-6 py-6 text-left group"
                >
                  <span className="text-3xl font-light flex-shrink-0 w-12" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(230,57,70,0.2)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-lg" style={{ fontFamily: "'Playfair Display', serif", color: openFaq === i ? '#e63946' : '#1a1a1a' }}>
                    {faq.question}
                  </span>
                  <span style={{ color: '#e63946' }}>
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
                      <p className="pb-6 pl-18 text-base leading-relaxed ml-[72px]" style={{ color: 'rgba(26,26,26,0.4)' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog -- Horizontal scroll */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: '#e63946' }}>Publicaciones</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
                  Desde la <span className="italic" style={{ color: '#e63946' }}>redaccion</span>
                </h2>
              </div>
              <ArrowRight className="w-5 h-5" style={{ color: 'rgba(26,26,26,0.25)' }} />
            </motion.div>
          </motion.div>
          <div ref={blogScrollRef} className="blog-scroll-10 flex gap-6 overflow-x-auto pb-4">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="min-w-[320px] md:min-w-[400px] flex-shrink-0 border p-6 group cursor-pointer hover:border-[#e63946]/30 transition-colors"
                style={{ borderColor: 'rgba(26,26,26,0.06)', background: 'rgba(26,26,26,0.02)' }}
              >
                <div className="aspect-[4/3] mb-6 relative" style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.04), rgba(230,57,70,0.03))' }}>
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] uppercase px-2 py-1" style={{ background: 'rgba(230,57,70,0.08)', color: '#e63946' }}>
                    {post.category}
                  </span>
                </div>
                <time className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(26,26,26,0.25)' }}>{post.date}</time>
                <h3 className="text-xl font-bold mt-3 leading-tight group-hover:text-[#e63946] transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
                  {post.title}
                </h3>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: 'rgba(26,26,26,0.35)' }}>{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- Full-height statement */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span style={{ color: '#1a1a1a' }}>Tu negocio</span><br />
            <span className="italic" style={{ color: '#e63946' }}>merece mas</span>
          </h2>
          <button onClick={() => setChatOpen(true)} className="px-12 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all hover:shadow-[0_0_60px_rgba(230,57,70,0.15)]" style={{ background: '#1a1a1a', color: '#f5f0e8' }}>
            Comienza ahora con Nova
          </button>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-24" id="contacto">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: '#e63946' }}>Contacto</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
              Escribenos
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(26,26,26,0.4)' }}>
              ¿Tienes preguntas? Nuestro equipo esta listo para ayudarte a dar el siguiente paso.
            </p>
            <div className="flex gap-4 mt-8">
              {[Mail, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border transition-colors hover:border-[#e63946]" style={{ borderColor: 'rgba(26,26,26,0.1)', color: 'rgba(26,26,26,0.35)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {['Nombre', 'Empresa', 'Email', 'Mensaje'].map((label) => (
              <div key={label}>
                <label className="text-[10px] tracking-[0.3em] uppercase block mb-2" style={{ color: 'rgba(26,26,26,0.3)' }}>{label}</label>
                {label === 'Mensaje' ? (
                  <textarea rows={3} className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none focus:border-[#e63946] transition-colors" style={{ borderColor: 'rgba(26,26,26,0.1)', color: '#1a1a1a' }} />
                ) : (
                  <input type={label === 'Email' ? 'email' : 'text'} className="w-full bg-transparent border-b py-2 text-sm outline-none focus:border-[#e63946] transition-colors" style={{ borderColor: 'rgba(26,26,26,0.1)', color: '#1a1a1a' }} />
                )}
              </div>
            ))}
            <button className="px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium mt-4 hover:shadow-[0_0_30px_rgba(230,57,70,0.12)] transition-all" style={{ background: '#1a1a1a', color: '#f5f0e8' }}>
              Enviar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: 'rgba(26,26,26,0.06)' }}>
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <span className="text-xs" style={{ color: 'rgba(26,26,26,0.2)' }}>© 2026 Synnova</span>
          <span className="text-xs italic" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(230,57,70,0.3)' }}>Tinta Editorial</span>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="warm" />
    </div>
  )
}
