import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Calendar, Bot, Leaf, Sprout, TreePine, Mountain, Sun
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'
import { LogoMarquee } from '@/components/shared/logo-marquee'

export const Route = createFileRoute('/5')({
  component: Design5,
})

const featureIcons = [LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck]

function OrganicDivider({ color = '#f5f0eb' }: { color?: string }) {
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
      <path d="M0,30 C240,50 480,10 720,30 C960,50 1200,10 1440,30 L1440,60 L0,60 Z" fill={color} />
    </svg>
  )
}

function GrowthTimeline() {
  const steps = [
    { icon: Sprout, title: 'Diagnostico', desc: 'Analizamos tu operacion actual y detectamos oportunidades', color: 'bg-emerald-500' },
    { icon: Leaf, title: 'Implementacion', desc: 'Configuramos Synnova a la medida de tu negocio en 7 dias', color: 'bg-emerald-600' },
    { icon: TreePine, title: 'Crecimiento', desc: 'Tu equipo adopta la plataforma con capacitacion personalizada', color: 'bg-amber-600' },
    { icon: Mountain, title: 'Resultados', desc: 'Ves mejoras en eficiencia y control desde el primer mes', color: 'bg-amber-700' },
  ]

  return (
    <div className="relative">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-emerald-500 to-amber-500 md:-translate-x-px" />
      <div className="space-y-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
              <h3 className="text-xl font-bold text-stone-800 mb-1">{step.title}</h3>
              <p className="text-stone-500 font-medium">{step.desc}</p>
            </div>
            <div className={`relative z-10 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
              <step.icon className="w-6 h-6" />
            </div>
            <div className="md:hidden flex-1">
              <h3 className="text-lg font-bold text-stone-800 mb-1">{step.title}</h3>
              <p className="text-sm text-stone-500">{step.desc}</p>
            </div>
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Design5() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-[family-name:var(--font-humanist)] overflow-x-hidden">
      {/* Subtle texture */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-xl border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Synnova" className="h-8" />
            <span className="text-xl font-bold tracking-tight text-stone-800">Synnova</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-500 font-medium">
            <a href="#servicios" className="hover:text-emerald-700 transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-emerald-700 transition-colors">Testimonios</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-emerald-700 transition-colors">Contacto</a>
          </nav>
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/10"
          >
            <Sprout className="w-4 h-4" />
            Habla con Nova
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-stone-50 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[10%] w-56 h-56 bg-amber-200/20 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative max-w-5xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
                <Leaf className="w-4 h-4" />
                Crecimiento organico para tu empresa
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                Haz crecer
                <br />
                tu negocio
                <br />
                <span className="text-emerald-700">de raiz</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-stone-500 mb-8 leading-relaxed max-w-md">
                Como una semilla que se convierte en arbol, Synnova transforma la operacion de tu negocio paso a paso, de forma natural y sostenible.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <button
                  onClick={() => setChatOpen(true)}
                  className="group flex items-center gap-2 bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl shadow-emerald-900/15 hover:bg-emerald-600 hover:scale-[1.02] transition-all"
                >
                  <Bot className="w-5 h-5" />
                  Planta la semilla
                  <Sprout className="w-5 h-5 group-hover:scale-125 transition-transform" />
                </button>
                <button className="flex items-center gap-2 border-2 border-stone-300 text-stone-600 px-6 py-3.5 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                  Ver demo
                </button>
              </motion.div>
            </div>

            {/* Growth Illustration */}
            <motion.div variants={fadeUp} className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-stone-200/60">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-stone-300" />
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-stone-400 font-semibold uppercase tracking-wider">Crecimiento</div>
                      <div className="text-3xl font-bold text-emerald-700">+147%</div>
                    </div>
                    <Sun className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[20, 25, 30, 28, 35, 42, 40, 55, 60, 65, 78, 90].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-stone-400 font-medium">
                    <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
                    <span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { l: 'Eficiencia', v: '94%', c: 'text-emerald-600' },
                    { l: 'Ahorro', v: '12h/sem', c: 'text-amber-600' },
                    { l: 'Clientes', v: '+340', c: 'text-stone-600' },
                  ].map((s) => (
                    <div key={s.l} className="bg-white rounded-xl p-3 border border-stone-100">
                      <div className="text-[10px] text-stone-400 font-semibold">{s.l}</div>
                      <div className={`text-lg font-bold ${s.c}`}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <LogoMarquee
        bgColor="#ffffff"
        label="Empresas que crecen con Synnova"
        labelClassName="text-center text-sm text-stone-400 font-semibold uppercase tracking-widest mb-6"
      />

      {/* Stats */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-stone-100 shadow-sm">
                <div className="text-4xl font-bold text-emerald-700">{stat.value}</div>
                <div className="text-stone-400 mt-2 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Herramientas que{' '}
              <span className="text-emerald-700">nutren tu operacion</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg max-w-2xl mx-auto">
              Cada funcionalidad es una semilla diseñada para crecer con tu negocio.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = featureIcons[i]!
              const gradients = [
                'from-emerald-500 to-emerald-600',
                'from-amber-500 to-amber-600',
                'from-emerald-600 to-teal-600',
                'from-stone-600 to-stone-700',
                'from-amber-600 to-orange-600',
                'from-emerald-700 to-emerald-800',
              ]
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="group bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tu camino hacia el <span className="text-emerald-700">crecimiento</span>
          </h2>
          <p className="text-center text-stone-500 text-lg mb-16 max-w-2xl mx-auto">
            Un proceso natural de transformacion en 4 etapas.
          </p>
          <GrowthTimeline />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Historias de <span className="text-emerald-700">crecimiento</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Leaf key={j} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  ))}
                </div>
                <p className="text-stone-600 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-stone-400">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Preguntas <span className="text-emerald-700">frecuentes</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-stone-50 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
                      <div className="px-5 pb-5 text-sm text-stone-500 leading-relaxed">{faq.answer}</div>
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
              Blog &{' '}
              <span className="text-emerald-700">Noticias</span>
            </h2>
            <a href="#" className="hidden md:flex items-center gap-1 text-sm text-emerald-700 font-semibold hover:text-emerald-600 transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:border-emerald-200 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">{post.category}</span>
                  <span className="text-xs text-stone-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{post.date}
                  </span>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-emerald-700 transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Planta la semilla de tu transformacion digital
          </h2>
          <p className="text-emerald-200 text-lg mb-8 max-w-xl mx-auto">
            Habla con Nova y descubre como Synnova puede hacer crecer tu negocio de forma natural y sostenible.
          </p>
          <button
            onClick={() => setChatOpen(true)}
            className="group inline-flex items-center gap-3 bg-white text-emerald-800 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            <Bot className="w-6 h-6" />
            Habla con Nova
            <Sprout className="w-5 h-5 text-emerald-500 group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cultivemos una conversacion</h2>
              <p className="text-stone-500 mb-8">
                Estamos listos para ayudarte a hacer crecer tu negocio.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-stone-600 hover:text-emerald-700 transition-colors font-medium">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-green-700" /></div>
                  WhatsApp: +57 300 123 4567
                </a>
                <a href="#" className="flex items-center gap-3 text-stone-600 hover:text-emerald-700 transition-colors font-medium">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center"><Mail className="w-5 h-5 text-amber-700" /></div>
                  hola@synnova.co
                </a>
                <a href="#" className="flex items-center gap-3 text-stone-600 hover:text-emerald-700 transition-colors font-medium">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><Linkedin className="w-5 h-5 text-blue-700" /></div>
                  /synnova-co
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all" />
                  <input type="email" placeholder="Email" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all" />
                </div>
                <input type="text" placeholder="Empresa" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all" />
                <textarea placeholder="¿En que podemos ayudarte?" rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all resize-none" />
                <button type="submit" className="w-full bg-emerald-700 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/10">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Synnova" className="h-6" />
            <span className="text-sm text-stone-400">© 2026 Synnova. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-6 text-sm text-stone-300">
            <a href="#" className="hover:text-emerald-700 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Terminos</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="earth" />
    </div>
  )
}
