import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Calendar, Bot, Sparkles, Eye
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'

export const Route = createFileRoute('/4')({
  component: Design4,
})

const featureIcons = [LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck]

function MeshGradientBg() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-indigo-50 to-sky-100" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-300/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-200/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
    </div>
  )
}

function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg shadow-violet-500/5 ${hover ? 'hover:bg-white/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}

function Design4() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div className="min-h-screen text-neutral-800 font-[family-name:var(--font-humanist)] overflow-x-hidden">
      <MeshGradientBg />

      {/* Header */}
      <header className="sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <GlassCard className="rounded-2xl" hover={false}>
            <div className="px-6 h-14 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="Synnova" className="h-7" />
                <span className="text-lg font-bold tracking-tight text-neutral-800">Synnova</span>
              </div>
              <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-500 font-medium">
                <a href="#servicios" className="hover:text-violet-600 transition-colors">Servicios</a>
                <a href="#testimonios" className="hover:text-violet-600 transition-colors">Testimonios</a>
                <a href="#faq" className="hover:text-violet-600 transition-colors">FAQ</a>
                <a href="#contacto" className="hover:text-violet-600 transition-colors">Contacto</a>
              </nav>
              <button
                onClick={() => setChatOpen(true)}
                className="relative group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-5 py-2 rounded-xl text-sm font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Bot className="w-4 h-4 relative" />
                <span className="relative">Habla con Nova</span>
              </button>
            </div>
          </GlassCard>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/50 backdrop-blur border border-white/60 rounded-full px-5 py-2 mb-8 text-sm text-violet-600 font-semibold shadow-sm">
            <Sparkles className="w-4 h-4" />
            Gestion empresarial reimaginada
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-6">
            <span className="text-neutral-800">El futuro de</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              tu negocio
            </span>
            <br />
            <span className="text-neutral-800">es transparente</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Una plataforma cristalina que te da visibilidad total sobre cada operacion de tu empresa. Sin sorpresas, sin caos.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setChatOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Bot className="w-5 h-5 relative" />
              <span className="relative">Descubre lo que Nova puede hacer por ti</span>
            </button>
          </motion.div>

          {/* Glass Product Preview */}
          <motion.div variants={fadeUp} className="mt-20">
            <GlassCard className="rounded-3xl max-w-3xl mx-auto" hover={false}>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-violet-400" />
                  <div className="w-3 h-3 rounded-full bg-indigo-400" />
                  <div className="w-3 h-3 rounded-full bg-sky-400" />
                  <div className="ml-4 flex-1 h-7 bg-white/30 rounded-full backdrop-blur" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    { label: 'Ingresos', value: '$47.2M', change: '+23%', color: 'text-violet-600' },
                    { label: 'Clientes', value: '1,234', change: '+12%', color: 'text-indigo-600' },
                    { label: 'Eficiencia', value: '94.7%', change: '+8%', color: 'text-sky-600' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/50 backdrop-blur rounded-xl p-4 border border-white/40">
                      <div className="text-xs text-neutral-400 font-medium mb-1">{s.label}</div>
                      <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-emerald-500 font-semibold">{s.change}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/50 backdrop-blur rounded-xl p-4 border border-white/40 h-28 flex items-end gap-2 px-3">
                  {[30, 50, 40, 65, 55, 80, 60, 85, 70, 90, 75, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-violet-400/60 to-indigo-300/40 rounded-t-sm backdrop-blur" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-neutral-400 font-medium uppercase tracking-widest mb-8">
            Empresas que confian en Synnova
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['Grupo Exito', 'Rappi', 'Bancolombia', 'Nutresa', 'Corona', 'Alpina', 'Totto', 'Juan Valdez'].map((name) => (
              <span key={name} className="text-neutral-300 font-semibold text-lg">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-neutral-400 mt-2 text-sm font-medium">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicios" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Claridad en cada{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">detalle</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Herramientas cristalinas que transforman la complejidad en simplicidad.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i]!
              return (
                <motion.div key={feature.title} variants={fadeUp}>
                  <GlassCard className="rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center mb-4 border border-violet-200/30">
                      <Icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Tu negocio, en{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">alta definicion</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Dashboard Central', desc: 'Vista 360 de tu operacion', icon: Eye, span: 'md:col-span-2' },
              { title: 'Automatizaciones', desc: 'Flujos que trabajan por ti', icon: Zap, span: '' },
              { title: 'Equipo', desc: 'Cada rol, cada permiso', icon: Users, span: '' },
              { title: 'Inteligencia', desc: 'Datos que predicen y sugieren', icon: Sparkles, span: 'md:col-span-2' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={item.span}
              >
                <GlassCard className="rounded-2xl p-8 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-300/20 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
                  <item.icon className="w-8 h-8 text-violet-500 mb-4 relative" />
                  <h3 className="text-xl font-bold mb-2 relative">{item.title}</h3>
                  <p className="text-neutral-500 relative">{item.desc}</p>
                  <div className="mt-6 space-y-2 relative">
                    {[85, 60, 90].map((w, j) => (
                      <div key={j} className="h-2 rounded-full bg-gradient-to-r from-violet-200/40 to-indigo-200/40" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Floating bubbles */}
      <section id="testimonios" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Voces de{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">confianza</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              >
                <GlassCard className="rounded-3xl p-6">
                  <p className="text-neutral-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-400 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-xs text-neutral-400">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Preguntas{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">frecuentes</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <GlassCard key={i} className="rounded-2xl overflow-hidden" hover={false}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-white/20 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-violet-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
                      <div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Blog &{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">Noticias</span>
            </h2>
            <a href="#" className="hidden md:flex items-center gap-1 text-sm text-violet-600 font-semibold hover:text-violet-500 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="rounded-2xl p-6 h-full cursor-pointer">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-violet-100/50 text-violet-600 px-3 py-1 rounded-full font-semibold">{post.category}</span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{post.date}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{post.excerpt}</p>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GlassCard className="rounded-3xl p-12 md:p-16" hover={false}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Descubre la transparencia total
            </h2>
            <p className="text-neutral-500 text-lg mb-8 max-w-xl mx-auto">
              Habla con Nova y ve con claridad como Synnova puede transformar tu operacion.
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-violet-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Bot className="w-5 h-5 relative" />
              <span className="relative">Habla con Nova</span>
              <Sparkles className="w-5 h-5 relative" />
            </button>
          </GlassCard>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contactanos</h2>
              <p className="text-neutral-500 mb-8">Estamos aqui para ti. Elige tu canal favorito.</p>
              <div className="space-y-3">
                {[
                  { icon: MessageCircle, label: 'WhatsApp: +57 300 123 4567', color: 'from-green-400 to-emerald-500' },
                  { icon: Mail, label: 'hola@synnova.co', color: 'from-violet-400 to-indigo-500' },
                  { icon: Linkedin, label: '/synnova-co', color: 'from-blue-400 to-blue-600' },
                ].map(({ icon: Icon, label, color }) => (
                  <a key={label} href="#" className="flex items-center gap-3 text-neutral-600 hover:text-violet-600 transition-colors">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
            <GlassCard className="rounded-2xl p-6" hover={false}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-violet-300 transition-all" />
                  <input type="email" placeholder="Email" className="bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-violet-300 transition-all" />
                </div>
                <input type="text" placeholder="Empresa" className="w-full bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-violet-300 transition-all" />
                <textarea placeholder="¿En que podemos ayudarte?" rows={4} className="w-full bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-violet-300 transition-all resize-none" />
                <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all">
                  Enviar mensaje
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8">
        <div className="max-w-7xl mx-auto px-6">
          <GlassCard className="rounded-2xl px-6 py-4" hover={false}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="Synnova" className="h-6" />
                <span className="text-sm text-neutral-400">© 2026 Synnova. Todos los derechos reservados.</span>
              </div>
              <div className="flex gap-6 text-sm text-neutral-400">
                <a href="#" className="hover:text-violet-600 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Terminos</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Cookies</a>
              </div>
            </div>
          </GlassCard>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="glass" />
    </div>
  )
}
