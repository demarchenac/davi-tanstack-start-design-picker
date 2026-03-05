import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Calendar, Bot, Check, Minus, ArrowUpRight, Boxes
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'

export const Route = createFileRoute('/3')({
  component: Design3,
})

const featureIcons = [LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck]

function Design3() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [chatFlipped, setChatFlipped] = useState(false)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <div className="min-h-screen bg-white text-charcoal font-[family-name:var(--font-display)] overflow-x-hidden" style={{ color: '#1f2937' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Synnova" className="h-8" />
            <span className="text-xl font-bold tracking-tight">Synnova</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            <a href="#servicios" className="hover:text-indigo-600 transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-indigo-600 transition-colors">Testimonios</a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-indigo-600 transition-colors">Contacto</a>
          </nav>
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-600 transition-colors"
          >
            <Bot className="w-4 h-4" />
            Habla con Nova
          </button>
        </div>
      </header>

      {/* Hero - Split Screen */}
      <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-6 lg:px-16 py-20">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 rounded-lg px-3 py-1.5 mb-8 text-sm font-bold">
              <Boxes className="w-4 h-4" />
              Plataforma de gestion empresarial
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              Operaciones
              <br />
              <span className="text-indigo-600">bajo control.</span>
              <br />
              <span className="text-emerald-500">Siempre.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-neutral-500 mb-8 leading-relaxed max-w-md">
              La plataforma que reemplaza tus hojas de calculo, documentos dispersos y procesos manuales por un sistema inteligente y centralizado.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3">
              <button
                onClick={() => setChatOpen(true)}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3.5 rounded-lg font-bold hover:bg-indigo-500 transition-colors"
              >
                <Bot className="w-5 h-5" />
                Habla con Nova
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 border-2 border-neutral-200 text-neutral-600 px-6 py-3.5 rounded-lg font-bold hover:border-neutral-300 transition-colors">
                Ver demo
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Interactive card that flips */}
        <div className="relative bg-neutral-50 flex items-center justify-center p-8 lg:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full max-w-lg"
          >
            {/* Bento Preview */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
              <div className="col-span-2 row-span-1 bg-white rounded-xl p-4 border border-neutral-200 shadow-sm">
                <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-2">Ingresos</div>
                <div className="text-2xl font-bold text-neutral-900">$127.4M</div>
                <div className="text-xs text-emerald-500 font-bold">+18% este mes</div>
              </div>
              <div className="col-span-1 row-span-1 bg-indigo-600 rounded-xl p-4 text-white flex flex-col justify-between">
                <BarChart3 className="w-5 h-5 opacity-60" />
                <div>
                  <div className="text-xl font-bold">89</div>
                  <div className="text-[10px] opacity-60">REPORTES</div>
                </div>
              </div>
              <div className="col-span-1 row-span-2 bg-emerald-500 rounded-xl p-4 text-white flex flex-col justify-between">
                <Zap className="w-5 h-5 opacity-60" />
                <div>
                  <div className="text-3xl font-bold">94%</div>
                  <div className="text-[10px] opacity-60 uppercase">Eficiencia</div>
                </div>
              </div>
              <div className="col-span-2 row-span-1 bg-white rounded-xl p-4 border border-neutral-200 shadow-sm">
                <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-3">Actividad Reciente</div>
                <div className="space-y-2">
                  {['Factura #342 aprobada', 'Inventario actualizado', 'Nuevo cliente registrado'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-indigo-400' : 'bg-amber-400'}`} />
                      <span className="text-neutral-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-3 row-span-1 bg-white rounded-xl p-4 border border-neutral-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Rendimiento Semanal</div>
                  <div className="text-xs text-indigo-600 font-bold">Ver mas →</div>
                </div>
                <div className="flex items-end gap-1.5 h-12">
                  {[45, 65, 55, 80, 70, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-indigo-400" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-neutral-100 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-neutral-400 font-bold uppercase tracking-[0.2em] mb-6">
            Empresas que confian en Synnova
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
            {['Grupo Exito', 'Rappi', 'Bancolombia', 'Nutresa', 'Corona', 'Alpina', 'Totto', 'Juan Valdez'].map((name) => (
              <span key={name} className="text-neutral-300 font-bold text-lg">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Funcionalidades que{' '}
              <span className="text-indigo-600">transforman</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-500 text-lg max-w-xl">
              Cada herramienta diseñada para eliminar el caos y darte control total.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i]!
              const sizes = ['lg:col-span-2', '', '', '', '', 'lg:col-span-2']
              const bgs = [
                'bg-indigo-50 border-indigo-100',
                'bg-emerald-50 border-emerald-100',
                'bg-amber-50 border-amber-100',
                'bg-neutral-50 border-neutral-200',
                'bg-rose-50 border-rose-100',
                'bg-neutral-900 border-neutral-800 text-white',
              ]
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${sizes[i]} ${bgs[i]}`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${i === 5 ? 'bg-white/10' : 'bg-white'}`}>
                    <Icon className={`w-5 h-5 ${i === 5 ? 'text-white' : i === 0 ? 'text-indigo-600' : i === 1 ? 'text-emerald-600' : i === 2 ? 'text-amber-600' : i === 4 ? 'text-rose-600' : 'text-neutral-600'}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 5 ? 'text-neutral-400' : 'text-neutral-500'}`}>{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Excel vs <span className="text-indigo-600">Synnova</span>
          </h2>
          <p className="text-center text-neutral-500 mb-12 text-lg">La diferencia es clara.</p>

          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-neutral-50 border-b border-neutral-200">
              <div className="p-4 text-sm font-bold text-neutral-400 uppercase tracking-wider">Funcion</div>
              <div className="p-4 text-sm font-bold text-neutral-400 uppercase tracking-wider text-center">Excel</div>
              <div className="p-4 text-sm font-bold text-indigo-600 uppercase tracking-wider text-center">Synnova</div>
            </div>
            {[
              ['Control de inventario', false, true],
              ['Reportes automaticos', false, true],
              ['Colaboracion en tiempo real', false, true],
              ['Alertas inteligentes', false, true],
              ['Historial de cambios', false, true],
              ['Integraciones nativas', false, true],
            ].map(([feature, excel, synnova], i) => (
              <div key={i} className="grid grid-cols-3 border-b border-neutral-100 last:border-0">
                <div className="p-4 text-sm font-medium">{feature as string}</div>
                <div className="p-4 flex justify-center">
                  {excel ? <Check className="w-5 h-5 text-emerald-500" /> : <Minus className="w-5 h-5 text-neutral-300" />}
                </div>
                <div className="p-4 flex justify-center">
                  <Check className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Resultados <span className="text-emerald-500">reales</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-neutral-200 hover:border-indigo-200 transition-colors"
              >
                <p className="text-neutral-600 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-neutral-400">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Preguntas <span className="text-indigo-600">frecuentes</span>
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm hover:bg-neutral-50 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Blog
            </h2>
            <a href="#" className="hidden md:flex items-center gap-1 text-sm text-indigo-600 font-bold hover:text-indigo-500 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-neutral-200 hover:border-indigo-200 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-md font-bold">{post.category}</span>
                  <span className="text-xs text-neutral-300 font-medium">{post.date}</span>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-indigo-600 transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Listo para dejar de improvisar?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            Habla con Nova y descubre en 3 minutos como Synnova puede transformar tu operacion.
          </p>
          <button
            onClick={() => setChatOpen(true)}
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-500 transition-colors"
          >
            <Bot className="w-6 h-6" />
            Habla con Nova
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contacto</h2>
              <p className="text-neutral-500 mb-8">
                ¿Prefieres hablar directamente? Escogenos por el canal que mas te guste.
              </p>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-neutral-600 font-medium">
                  <MessageCircle className="w-5 h-5 text-green-600" /> WhatsApp: +57 300 123 4567
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-neutral-600 font-medium">
                  <Mail className="w-5 h-5 text-indigo-600" /> hola@synnova.co
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-neutral-600 font-medium">
                  <Linkedin className="w-5 h-5 text-blue-600" /> /synnova-co
                </a>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="border border-neutral-200 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all" />
                <input type="email" placeholder="Email" className="border border-neutral-200 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all" />
              </div>
              <input type="text" placeholder="Empresa" className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all" />
              <textarea placeholder="¿En que podemos ayudarte?" rows={4} className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all resize-none" />
              <button type="submit" className="w-full bg-neutral-900 text-white py-3 rounded-xl font-bold hover:bg-indigo-600 transition-colors">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Synnova" className="h-6" />
            <span className="text-sm text-neutral-400">© 2026 Synnova. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-6 text-sm text-neutral-300 font-medium">
            <a href="#" className="hover:text-neutral-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Terminos</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="light" />
    </div>
  )
}
