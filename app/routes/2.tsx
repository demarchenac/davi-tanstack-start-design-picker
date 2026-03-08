import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Heart, Star, Sun, Calendar, Bot, Quote, Smile
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'
import { LogoMarquee } from '@/components/shared/logo-marquee'

export const Route = createFileRoute('/2')({
  component: Design2,
})

const featureIcons = [LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck]

function WaveDivider({ flip = false, color = '#fff7ed' }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

function Design2() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-orange-50/50 text-stone-800 font-[family-name:var(--font-rounded)] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Synnova" className="h-8" />
            <span className="text-xl font-extrabold text-stone-800 tracking-tight">Synnova</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-500 font-semibold">
            <a href="#servicios" className="hover:text-orange-600 transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-orange-600 transition-colors">Testimonios</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-orange-600 transition-colors">Contacto</a>
          </nav>
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-105 transition-all"
          >
            <Smile className="w-4 h-4" />
            Habla con Nova
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-400 via-rose-400 to-amber-400 pt-20 pb-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-[10%] w-72 h-72 bg-yellow-300 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-rose-300 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-5 py-2 mb-8 text-sm text-white font-semibold">
            <Sun className="w-4 h-4" />
            La herramienta que tu negocio merece
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 drop-shadow-sm">
            Tu negocio merece{' '}
            <span className="relative inline-block">
              claridad
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 Q150,16 200,8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" />
              </svg>
            </span>
            , no caos
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Deja de estresarte con hojas de calculo y procesos manuales.
            Synnova organiza tu operacion para que tu te enfoques en crecer.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setChatOpen(true)}
              className="group flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Bot className="w-6 h-6" />
              Nova quiere conocerte
              <Heart className="w-5 h-5 text-rose-500 group-hover:scale-125 transition-transform" />
            </button>
          </motion.div>

          {/* Product Mockup */}
          <motion.div
            variants={fadeUp}
            className="mt-16 relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-3xl mx-auto border border-orange-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-4 flex-1 h-7 bg-orange-50 rounded-full" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1 space-y-2">
                  {['Dashboard', 'Ventas', 'Inventario', 'Equipo', 'Reportes'].map((item, i) => (
                    <div key={item} className={`text-xs px-3 py-2 rounded-lg font-semibold ${i === 0 ? 'bg-orange-100 text-orange-600' : 'text-stone-400 hover:bg-orange-50'}`}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="col-span-3 bg-orange-50/50 rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'Ventas Hoy', value: '$2.4M', color: 'text-orange-600' },
                      { label: 'Ordenes', value: '142', color: 'text-rose-600' },
                      { label: 'Clientes', value: '89', color: 'text-amber-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="text-[10px] text-stone-400 font-semibold">{stat.label}</div>
                        <div className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-sm h-24 flex items-end gap-1.5 px-2">
                    {[30, 45, 35, 60, 50, 75, 55, 80, 70, 90, 65, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-orange-400 to-amber-300 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <WaveDivider color="#fff7ed" />

      {/* Social Proof */}
      <LogoMarquee
        bgColor="#fff7ed"
        label="Mas de 500 empresas ya confian en nosotros"
        labelClassName="text-center text-sm text-stone-400 font-bold uppercase tracking-widest mb-6"
      />

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-stone-400 mt-2 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="servicios" className="bg-orange-50/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">
              Hecho para <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">simplificar tu vida</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg max-w-2xl mx-auto font-medium">
              No necesitas ser experto en tecnologia. Synnova se adapta a ti, no al reves.
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
              const colors = [
                'from-orange-400 to-amber-400',
                'from-rose-400 to-pink-400',
                'from-amber-400 to-yellow-400',
                'from-pink-400 to-rose-400',
                'from-orange-500 to-rose-500',
                'from-amber-500 to-orange-500',
              ]
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-orange-100 hover:border-orange-200"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Asi se ve el <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">control total</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Dashboard Intuitivo', desc: 'Toda tu operacion en un vistazo', icon: LayoutDashboard },
              { title: 'Reportes Automaticos', desc: 'Sin esperar a fin de mes', icon: BarChart3 },
              { title: 'Gestion de Equipo', desc: 'Cada quien sabe que hacer', icon: Users },
              { title: 'Integraciones', desc: 'Conecta las herramientas que ya usas', icon: Plug },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-8 border border-orange-100 overflow-hidden group"
              >
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200/30 to-rose-200/30 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <item.icon className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-extrabold mb-2">{item.title}</h3>
                <p className="text-stone-500 font-medium">{item.desc}</p>
                <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">
                  <div className="space-y-2">
                    {[80, 60, 95, 45].map((w, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-300" />
                        <div className="h-2 rounded-full bg-orange-100" style={{ width: `${w}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="bg-gradient-to-br from-orange-400 via-rose-400 to-amber-400 py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 drop-shadow-sm">
            Historias de empresarios como tu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/95 backdrop-blur p-6 rounded-3xl shadow-lg"
              >
                <Quote className="w-8 h-8 text-orange-300 mb-3" />
                <p className="text-stone-700 leading-relaxed mb-6 font-medium">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-white font-extrabold shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-extrabold">{t.name}</div>
                    <div className="text-sm text-stone-400 font-semibold">{t.role} - {t.company}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            ¿Tienes <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">preguntas</span>?
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-orange-50/50 rounded-2xl border border-orange-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold hover:bg-orange-50 transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
                      <div className="px-5 pb-5 text-sm text-stone-500 leading-relaxed font-medium">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-orange-50/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Nuestro <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Blog</span>
            </h2>
            <a href="#" className="hidden md:flex items-center gap-1 text-sm text-orange-500 font-bold hover:text-orange-600 transition-colors">
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
                className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-orange-100 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold">{post.category}</span>
                  <span className="text-xs text-stone-300 font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{post.date}
                  </span>
                </div>
                <h3 className="font-extrabold mb-2 group-hover:text-orange-600 transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed font-medium">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-12 md:p-16 rounded-[2rem] border border-orange-200">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Empieza tu transformacion hoy
            </h2>
            <p className="text-stone-500 text-lg mb-8 max-w-xl mx-auto font-medium">
              Habla con Nova y descubre como Synnova puede cambiar la forma en que manejas tu negocio.
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all"
            >
              <Bot className="w-6 h-6" />
              Habla con Nova
              <Heart className="w-5 h-5 group-hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-orange-50/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Hablemos</h2>
              <p className="text-stone-500 mb-8 font-medium">
                Estamos aqui para resolver todas tus dudas. Elige el canal que prefieras.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-stone-500 hover:text-orange-600 transition-colors font-semibold">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-green-600" /></div>
                  WhatsApp: +57 300 123 4567
                </a>
                <a href="#" className="flex items-center gap-3 text-stone-500 hover:text-orange-600 transition-colors font-semibold">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center"><Mail className="w-5 h-5 text-orange-600" /></div>
                  hola@synnova.co
                </a>
                <a href="#" className="flex items-center gap-3 text-stone-500 hover:text-orange-600 transition-colors font-semibold">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><Linkedin className="w-5 h-5 text-blue-600" /></div>
                  /synnova-co
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" className="bg-white border border-orange-200 rounded-2xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all font-medium" />
                  <input type="email" placeholder="Email" className="bg-white border border-orange-200 rounded-2xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all font-medium" />
                </div>
                <input type="text" placeholder="Empresa" className="w-full bg-white border border-orange-200 rounded-2xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all font-medium" />
                <textarea placeholder="¿En que podemos ayudarte?" rows={4} className="w-full bg-white border border-orange-200 rounded-2xl px-4 py-3 text-sm placeholder:text-stone-300 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none font-medium" />
                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-2xl font-extrabold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Synnova" className="h-6" />
            <span className="text-sm text-stone-400 font-semibold">© 2026 Synnova. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-6 text-sm text-stone-300 font-semibold">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terminos</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="warm" />
    </div>
  )
}
