import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Sparkles, Play, Calendar, Clock, TrendingUp, Building2,
  Bot, ExternalLink
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'
import { LogoMarquee } from '@/components/shared/logo-marquee'

export const Route = createFileRoute('/7')({
  component: Design7,
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
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#6b7f62] to-[#4a5e43] bg-clip-text text-transparent font-[family-name:var(--font-display)]">
        {target % 1 !== 0 ? count.toFixed(1) : Math.round(count)}{suffix}
      </div>
      <div className="text-neutral-400 mt-2 text-sm tracking-wide uppercase">{label}</div>
    </div>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 80; i++) {
        const r = Math.random()
        const color = r < 0.6
          ? 'rgba(74, 94, 67,'      // sage moss
          : r < 0.85
            ? 'rgba(90, 110, 80,'   // muted fern
            : 'rgba(107, 127, 98,'  // pale lichen
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color,
        })
      }
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particles) {
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200 && dist > 0) {
          p.vx += (dx / dist) * 0.02
          p.vy += (dy / dist) * 0.02
        }
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color} ${p.opacity})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i]!.x - particles[j]!.x
          const dy = particles[i]!.y - particles[j]!.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i]!.x, particles[i]!.y)
            ctx.lineTo(particles[j]!.x, particles[j]!.y)
            ctx.strokeStyle = `rgba(74, 94, 67, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

function GlowingOrb({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4a5e43] to-[#6b7f62] blur-xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse" />
      <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#344a2e] to-[#4a5e43] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#4a5e43]/25">
        <Bot className="w-5 h-5" />
        Habla con Nova
        <Sparkles className="w-5 h-5" />
      </div>
    </motion.button>
  )
}

function Design7() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-[#061208] text-white font-[family-name:var(--font-sans)] overflow-x-hidden">
      <ParticleField />

      {/* Sticky Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#061208]/80 backdrop-blur-xl border-b border-[#4a5e43]/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-light.svg" alt="Synnova" className="h-8" />
            <span className="text-lg font-bold tracking-tight">Synnova</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300/70">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 bg-[#344a2e]/20 border border-[#4a5e43]/30 text-[#6b7f62] px-4 py-2 rounded-full text-sm hover:bg-[#344a2e]/30 transition-colors"
          >
            <Bot className="w-4 h-4" />
            Habla con Nova
          </button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a5e43]/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#344a2e]/[0.08] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#4a5e43]/[0.08] rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#4a5e43]/10 border border-[#4a5e43]/20 rounded-full px-4 py-1.5 mb-8 text-sm text-[#6b7f62]">
            <Sparkles className="w-4 h-4" />
            Plataforma de gestion empresarial impulsada por IA
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6 font-[family-name:var(--font-display)]">
            <span className="block">Deja de</span>
            <span className="block bg-gradient-to-r from-[#6b7f62] via-[#4a5e43] to-[#6b7f62] bg-clip-text text-transparent">
              improvisar
            </span>
            <span className="block text-white/85">tu operacion</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Synnova centraliza todas las operaciones de tu negocio en una sola plataforma inteligente.
            Deja atras las hojas de calculo y el caos operativo.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlowingOrb onClick={() => setChatOpen(true)} />
            <button className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors text-sm">
              <Play className="w-4 h-4" />
              Ver demo en 2 minutos
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-[#4a5e43]/40" />
        </motion.div>
      </section>

      {/* Social Proof */}
      <LogoMarquee
        bgColor="#061208"
        className="relative z-10"
        labelClassName="text-center text-sm text-neutral-500 uppercase tracking-widest mb-8"
        logoClassName="h-8 max-w-[120px] object-contain brightness-0 invert opacity-20 hover:opacity-60 transition-all duration-300"
      />

      {/* Stats */}
      <section className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicios" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
              Todo lo que necesitas,{' '}
              <span className="bg-gradient-to-r from-[#6b7f62] to-[#4a5e43] bg-clip-text text-transparent">
                en un solo lugar
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Funcionalidades diseñadas para empresarios que quieren resultados, no complicaciones.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i]!
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="group relative p-6 rounded-2xl border border-[#4a5e43]/10 bg-[#344a2e]/15 hover:bg-[#344a2e]/30 hover:border-[#4a5e43]/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4a5e43]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#344a2e]/20 to-[#4a5e43]/20 flex items-center justify-center mb-4 border border-[#4a5e43]/10 group-hover:border-[#4a5e43]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#6b7f62]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-400/80 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Product Gallery / Preview */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-[#4a5e43]/20 overflow-hidden bg-gradient-to-br from-[#0a1e10] to-[#061208]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,94,67,0.10),transparent_50%)]" />
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-32 rounded-xl bg-[#4a5e43]/5 border border-[#4a5e43]/10 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-[#6b7f62]/40" />
                </div>
                <div className="h-32 rounded-xl bg-[#4a5e43]/5 border border-[#4a5e43]/10 flex items-center justify-center col-span-2">
                  <div className="space-y-2 w-full px-6">
                    <div className="h-3 bg-[#4a5e43]/10 rounded-full w-full" />
                    <div className="h-3 bg-[#4a5e43]/10 rounded-full w-3/4" />
                    <div className="h-3 bg-amber-500/[0.08] rounded-full w-1/2" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 rounded-xl bg-[#4a5e43]/5 border border-[#4a5e43]/10 p-6">
                  <div className="text-xs text-[#6b7f62]/40 uppercase tracking-wider mb-3">Ventas del Mes</div>
                  <div className="text-3xl font-bold text-[#6b7f62]/60">$47.2M</div>
                  <div className="flex items-center gap-1 mt-1 text-xs text-[#6b7f62]/60">
                    <TrendingUp className="w-3 h-3" />
                    +23% vs mes anterior
                  </div>
                  <div className="mt-4 flex gap-1">
                    {[40, 55, 35, 70, 45, 80, 60, 90, 75, 95, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[#344a2e]/20 to-[#4a5e43]/20 rounded-sm" style={{ height: `${h}%`, maxHeight: '60px' }} />
                    ))}
                  </div>
                </div>
                <div className="h-48 rounded-xl bg-[#4a5e43]/5 border border-[#4a5e43]/10 p-6">
                  <div className="text-xs text-[#6b7f62]/40 uppercase tracking-wider mb-3">Tareas Pendientes</div>
                  <div className="space-y-2.5">
                    {['Revisar inventario', 'Aprobar compra #234', 'Facturar cliente XYZ', 'Reportar nomina'].map((task, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full border ${i < 2 ? 'border-[#6b7f62]/40 bg-[#6b7f62]/10' : 'border-[#4a5e43]/20'}`} />
                        <span className="text-xs text-neutral-500">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-display)]"
          >
            Lo que dicen{' '}
            <span className="bg-gradient-to-r from-[#6b7f62] to-[#4a5e43] bg-clip-text text-transparent">
              nuestros clientes
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-[#4a5e43]/10 bg-[#344a2e]/15"
              >
                <p className="text-neutral-300/80 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#344a2e] to-[#4a5e43] flex items-center justify-center text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-[#6b7f62]/40">{t.role} - {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-display)]"
          >
            Preguntas{' '}
            <span className="bg-gradient-to-r from-[#6b7f62] to-[#4a5e43] bg-clip-text text-transparent">
              frecuentes
            </span>
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-[#4a5e43]/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#344a2e]/20 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#4a5e43]/40 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
                Blog &{' '}
                <span className="bg-gradient-to-r from-[#6b7f62] to-[#4a5e43] bg-clip-text text-transparent">
                  Noticias
                </span>
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1 text-sm text-[#6b7f62] hover:text-[#4a5e43] transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-[#4a5e43]/10 bg-[#344a2e]/15 hover:bg-[#344a2e]/25 hover:border-[#4a5e43]/20 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-[#4a5e43]/10 text-[#6b7f62] px-2.5 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{post.date}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[#6b7f62] transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 rounded-3xl border border-[#4a5e43]/20 bg-gradient-to-br from-[#344a2e]/40 to-[#061208] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,94,67,0.10),transparent_70%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-display)]">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
                Habla con Nova y recibe un diagnostico gratuito de tu operacion en menos de 3 minutos.
              </p>
              <GlowingOrb onClick={() => setChatOpen(true)} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="relative z-10 py-24 border-t border-[#4a5e43]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-display)]">Contactanos</h2>
              <p className="text-neutral-400 mb-8">
                ¿Prefieres hablar con un humano? Estamos aqui para ayudarte.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-neutral-300/60 hover:text-neutral-200 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp: +57 300 123 4567
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-300/60 hover:text-neutral-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  hola@synnova.co
                </a>
                <a href="#" className="flex items-center gap-3 text-neutral-300/60 hover:text-neutral-200 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  /synnova-co
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-[#0d1a10]/50 border border-[#4a5e43]/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#4a5e43]/30 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#0d1a10]/50 border border-[#4a5e43]/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#4a5e43]/30 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full bg-[#0d1a10]/50 border border-[#4a5e43]/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#4a5e43]/30 transition-colors"
                />
                <textarea
                  placeholder="¿En que podemos ayudarte?"
                  rows={4}
                  className="w-full bg-[#0d1a10]/50 border border-[#4a5e43]/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-[#4a5e43]/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#344a2e] to-[#4a5e43] text-white py-3 rounded-xl font-semibold hover:from-[#4a5e43] hover:to-[#6b7f62] transition-all"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-[#4a5e43]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-light.svg" alt="Synnova" className="h-6" />
            <span className="text-sm text-neutral-500">© 2026 Synnova. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-6 text-sm text-neutral-600">
            <a href="#" className="hover:text-[#6b7f62] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#6b7f62] transition-colors">Terminos</a>
            <a href="#" className="hover:text-[#6b7f62] transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="forest" />
    </div>
  )
}
