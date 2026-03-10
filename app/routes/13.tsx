import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck,
  ChevronDown, ArrowRight, MessageCircle, Mail, Linkedin,
  Calendar, Bot, Sparkles, Eye, Menu, X, Star, Phone
} from 'lucide-react'
import { NovaChat } from '@/components/shared/nova-chat'
import { testimonials, faqs, stats, blogPosts, features } from '@/components/shared/content'
import { LogoMarquee } from '@/components/shared/logo-marquee'

export const Route = createFileRoute('/13')({
  component: Design13,
})

/* ─── Keyframe Animations ─── */
const CSS_KEYFRAMES = `
@keyframes orbPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.85; }
}
@keyframes ringRotate1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ringRotate2 { from { transform: rotate(120deg); } to { transform: rotate(-240deg); } }
@keyframes ringRotate3 { from { transform: rotate(240deg); } to { transform: rotate(600deg); } }
@keyframes float1 {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-18px) rotate(1deg); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0px) rotate(1deg); }
  50% { transform: translateY(-14px) rotate(-1.5deg); }
}
@keyframes float3 {
  0%, 100% { transform: translateY(0px) rotate(0.5deg); }
  50% { transform: translateY(-20px) rotate(-2deg); }
}
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1); }
  50% { box-shadow: 0 0 30px rgba(139,92,246,0.5), 0 0 90px rgba(139,92,246,0.2); }
}
@keyframes pulseRing {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.6); opacity: 0; }
}
@keyframes typingCursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`

/* ─── Hooks ─── */
function useCountUp(end: number, duration = 2200) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration])
  return { count, ref }
}

/* ─── Reusable Components ─── */
const featureIcons = [LayoutDashboard, Zap, BarChart3, Users, Plug, ShieldCheck]

function MeshGradientBg() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-indigo-100 to-sky-200" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-400/25 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-400/25 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-300/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
    </div>
  )
}

function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/50 backdrop-blur-xl border border-white/60 shadow-lg shadow-violet-500/8 ring-1 ring-white/30 ${hover ? 'hover:bg-white/60 hover:shadow-xl hover:shadow-violet-500/12 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}

/* ─── Mini-Component Mockups (Bento Grid) ─── */
function MiniDashboard() {
  const bars = [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 68]
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2.5 rounded-lg bg-white/50 border border-white/40">
          <div className="text-[10px] text-neutral-500 mb-0.5">Ingresos</div>
          <div className="text-base font-bold text-neutral-800">$48.2K</div>
          <div className="text-[10px] text-emerald-600 font-semibold">+12%</div>
        </div>
        <div className="p-2.5 rounded-lg bg-white/50 border border-white/40">
          <div className="text-[10px] text-neutral-500 mb-0.5">Tareas Hechas</div>
          <div className="text-base font-bold text-neutral-800">87</div>
          <div className="text-[10px] text-violet-600 font-semibold">de 142</div>
        </div>
      </div>
      <div className="flex items-end gap-1 h-[100px] px-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-violet-400/60 to-indigo-300/40" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-neutral-400 mt-1.5 px-1">
        <span>Ene</span><span>Jun</span><span>Dic</span>
      </div>
    </div>
  )
}

function MiniWorkflow() {
  const nodes = [
    { label: 'Nuevo Lead', color: 'text-violet-600 border-violet-200/60 bg-violet-50/50', x: '2%', y: '15%' },
    { label: 'Calificar', color: 'text-purple-600 border-purple-200/60 bg-purple-50/50', x: '28%', y: '55%' },
    { label: 'Asignar', color: 'text-indigo-600 border-indigo-200/60 bg-indigo-50/50', x: '54%', y: '15%' },
    { label: 'Seguimiento', color: 'text-emerald-600 border-emerald-200/60 bg-emerald-50/50', x: '78%', y: '55%' },
  ]
  return (
    <div className="relative h-[180px] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160">
        <path d="M 70 45 Q 95 75 140 90" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M 185 90 Q 210 55 245 45" stroke="rgba(99,102,241,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M 290 45 Q 315 75 345 90" stroke="rgba(16,185,129,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
      </svg>
      {nodes.map((n, i) => (
        <div key={i} className={`absolute px-3 py-2 rounded-lg border text-[11px] font-semibold whitespace-nowrap ${n.color}`} style={{ left: n.x, top: n.y }}>
          {n.label}
        </div>
      ))}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[9px] text-neutral-400">
        <span>Disparador</span><span>Acción</span><span>Acción</span><span>Acción</span>
      </div>
    </div>
  )
}

function MiniTeamHub() {
  const members = [
    { name: 'Alex M.', role: 'Líder', color: 'bg-violet-500', status: 'online' },
    { name: 'Sarah K.', role: 'Diseño', color: 'bg-pink-500', status: 'online' },
    { name: 'James L.', role: 'Dev', color: 'bg-indigo-500', status: 'online' },
    { name: 'Nina P.', role: 'Marketing', color: 'bg-amber-500', status: 'away' },
    { name: 'David R.', role: 'Ventas', color: 'bg-emerald-500', status: 'online' },
    { name: 'Lisa T.', role: 'Soporte', color: 'bg-purple-500', status: 'offline' },
  ]
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {members.map((m, i) => (
          <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/50 border border-white/40 min-w-[110px]">
            <div className="relative">
              <div className={`w-7 h-7 rounded-full ${m.color} flex items-center justify-center text-[10px] font-bold text-white`}>{m.name[0]}</div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-2 border-white ${m.status === 'online' ? 'bg-emerald-400' : m.status === 'away' ? 'bg-amber-400' : 'bg-neutral-300'}`} />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-neutral-700 leading-tight">{m.name}</div>
              <div className="text-[9px] text-neutral-400">{m.role}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 px-3 py-2 rounded-lg bg-emerald-50/60 border border-emerald-200/40 text-[11px] text-emerald-700 font-medium">
        5 de 6 miembros del equipo activos
      </div>
    </div>
  )
}

function MiniAnalytics() {
  const points = [20, 35, 28, 50, 42, 65, 55, 70, 62, 85, 75, 90]
  const maxVal = 100
  return (
    <div>
      <svg viewBox="0 0 300 120" className="w-full h-[120px]">
        {[0, 30, 60, 90].map((y) => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
        ))}
        <defs>
          <linearGradient id="d13AreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`M 0 ${120 - (points[0]! / maxVal) * 110} ${points.map((p, i) => `L ${(i / (points.length - 1)) * 300} ${120 - (p / maxVal) * 110}`).join(' ')} L 300 120 L 0 120 Z`}
          fill="url(#d13AreaGrad)"
        />
        <path
          d={`M ${points.map((p, i) => `${(i / (points.length - 1)) * 300} ${120 - (p / maxVal) * 110}`).join(' L ')}`}
          fill="none" stroke="#8b5cf6" strokeWidth="2"
        />
        {points.map((p, i) => (
          <circle key={i} cx={(i / (points.length - 1)) * 300} cy={120 - (p / maxVal) * 110} r="3" fill="#8b5cf6" />
        ))}
      </svg>
      <div className="flex justify-between text-[9px] text-neutral-400 mt-1.5">
        <span>Ene</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dic</span>
      </div>
      <div className="flex gap-2 mt-3">
        {[
          { val: '+24%', label: 'Crecimiento', color: 'text-emerald-600' },
          { val: '$12.4K', label: 'MRR', color: 'text-violet-600' },
          { val: '92%', label: 'Retención', color: 'text-amber-600' },
        ].map((m, i) => (
          <div key={i} className="flex-1 p-1.5 rounded-md bg-white/50 border border-white/40 text-center">
            <div className={`text-sm font-bold ${m.color}`}>{m.val}</div>
            <div className="text-[9px] text-neutral-400">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniClientPortal() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-amber-500 text-[10px] font-bold text-white flex items-center justify-center">A</div>
          <span className="text-[13px] font-semibold text-neutral-700">Portal Acme Corp</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50/60 border border-emerald-200/40 text-emerald-600 font-semibold">Activo</span>
      </div>
      {[
        { name: 'Rediseño de Marca', progress: 65 },
        { name: 'Campaña Social', progress: 90 },
        { name: 'Lanzamiento Web', progress: 20 },
      ].map((p, i) => (
        <div key={i} className="mb-2 p-2.5 rounded-lg bg-white/50 border border-white/40">
          <div className="flex justify-between mb-1.5">
            <span className="text-[12px] font-semibold text-neutral-700">{p.name}</span>
            <span className="text-[10px] text-violet-500 font-medium">{p.progress}%</span>
          </div>
          <div className="h-1 rounded-full bg-violet-100/60">
            <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400" style={{ width: `${p.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function MiniCalendar() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const dates = [
    [24, 25, 26, 27, 28, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
  ]
  const eventDates = [4, 7, 11, 15, 18]
  const today = 10
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[13px] font-bold text-neutral-700">Marzo 2026</span>
        <div className="flex gap-1">
          <div className="w-5 h-5 rounded-md bg-white/60 border border-white/40 flex items-center justify-center text-[10px] text-neutral-400 cursor-pointer">{'<'}</div>
          <div className="w-5 h-5 rounded-md bg-white/60 border border-white/40 flex items-center justify-center text-[10px] text-neutral-400 cursor-pointer">{'>'}</div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
        {days.map((d, i) => (
          <div key={i} className="text-[9px] font-semibold text-neutral-400 py-1">{d}</div>
        ))}
      </div>
      {dates.map((week, wi) => (
        <div key={wi} className="grid grid-cols-7 gap-0.5 text-center">
          {week.map((d, di) => {
            const isToday = d === today && wi > 0
            const hasEvent = eventDates.includes(d) && (wi > 0 || d > 20)
            const isPrevMonth = wi === 0 && d > 20
            return (
              <div key={di} className="relative py-1 rounded-md" style={{
                background: isToday ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : 'transparent',
                color: isPrevMonth ? '#cbd5e1' : isToday ? '#fff' : '#64748b',
                fontSize: 11,
                fontWeight: isToday ? 700 : 400,
              }}>
                {d}
                {hasEvent && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500" />}
              </div>
            )
          })}
        </div>
      ))}
      <div className="mt-2.5 px-2.5 py-2 rounded-lg bg-violet-50/60 border border-violet-200/30 text-[10px] text-violet-600 font-medium flex justify-between">
        <span>Reunión de equipo</span><span>9:00 AM</span>
      </div>
    </div>
  )
}

/* ─── Tab Content Components (Product Showcase) ─── */
function TabDashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: 'Ingresos Mensuales', value: '$48,219', change: '+12.3%' },
          { label: 'Proyectos Activos', value: '24', change: '+3 esta semana' },
          { label: 'Uso del Equipo', value: '87%', change: '+5%' },
          { label: 'Satisfacción', value: '4.8/5', change: 'Estable' },
        ].map((m, i) => (
          <div key={i} className="p-3.5 rounded-xl bg-white/50 border border-white/40">
            <div className="text-[11px] text-neutral-500 mb-1">{m.label}</div>
            <div className="text-xl font-bold text-neutral-800 mb-0.5">{m.value}</div>
            <div className="text-[11px] text-emerald-600 font-medium">{m.change}</div>
          </div>
        ))}
      </div>
      <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">Actividad Reciente</h4>
      <div className="flex flex-col gap-1.5">
        {[
          { text: 'Sarah completó "Wireframe de inicio"', time: 'hace 2 min', color: 'bg-emerald-400' },
          { text: 'Nuevo cliente incorporado: TechFlow Inc.', time: 'hace 18 min', color: 'bg-violet-400' },
          { text: 'Factura #1042 pagada — $3,200', time: 'hace 1 hora', color: 'bg-amber-400' },
          { text: 'Retrospectiva del Sprint 14 programada', time: 'hace 2 horas', color: 'bg-indigo-400' },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/40 border border-white/30">
            <div className={`w-2 h-2 rounded-full ${a.color} shrink-0`} />
            <span className="text-[13px] text-neutral-700 flex-1">{a.text}</span>
            <span className="text-[11px] text-neutral-400 whitespace-nowrap">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TabWorkflows() {
  const steps = [
    { label: 'Solicitud', type: 'Disparador', color: 'text-violet-600 border-violet-200/60 bg-violet-50/50' },
    { label: 'Asignar', type: 'Acción', color: 'text-purple-600 border-purple-200/60 bg-purple-50/50' },
    { label: 'Crear Tarea', type: 'Acción', color: 'text-indigo-600 border-indigo-200/60 bg-indigo-50/50' },
    { label: 'Notificar', type: 'Acción', color: 'text-sky-600 border-sky-200/60 bg-sky-50/50' },
    { label: 'Progreso', type: 'Monitor', color: 'text-emerald-600 border-emerald-200/60 bg-emerald-50/50' },
    { label: 'Actualizar', type: 'Salida', color: 'text-amber-600 border-amber-200/60 bg-amber-50/50' },
  ]
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-5 flex-wrap">
        <span className="text-sm font-semibold text-neutral-800">Flujo de Onboarding</span>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50/60 border border-emerald-200/40 text-emerald-600 text-[11px] font-semibold">Activo</span>
        <span className="ml-auto text-[11px] text-neutral-400">Última ejecución: hace 3 horas</span>
      </div>
      <div className="flex items-center flex-wrap gap-0">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center">
            <div className={`px-3.5 py-2.5 rounded-xl border text-center min-w-[80px] ${s.color}`}>
              <div className="text-[12px] font-semibold mb-0.5">{s.label}</div>
              <div className="text-[9px] text-neutral-400">{s.type}</div>
            </div>
            {i < steps.length - 1 && (
              <svg width="28" height="20" viewBox="0 0 28 20" className="shrink-0">
                <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
                <polygon points="20,5 28,10 20,15" fill="rgba(139,92,246,0.2)" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-5 flex-wrap">
        {[
          { label: 'Ejecuciones', value: '1,247' },
          { label: 'Tasa de Éxito', value: '99.2%' },
          { label: 'Promedio', value: '2.4 min' },
        ].map((s, i) => (
          <div key={i} className="px-3.5 py-2.5 rounded-lg bg-white/50 border border-white/40">
            <div className="text-[10px] text-neutral-400">{s.label}</div>
            <div className="text-base font-bold text-neutral-800">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TabAnalytics() {
  const data = [72, 55, 88, 42, 95, 68, 80]
  const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm font-semibold text-neutral-800">Rendimiento Semanal</span>
        <div className="flex gap-1.5">
          {['Ingresos', 'Tareas', 'Tiempo'].map((f, i) => (
            <span key={i} className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${i === 0 ? 'bg-violet-50/60 border-violet-200/40 text-violet-600' : 'border-transparent text-neutral-400'}`}>{f}</span>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-3 h-[180px] px-2">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="text-[10px] font-semibold text-violet-600">{d}%</div>
            <div className="w-full rounded-md bg-gradient-to-t from-violet-500 to-indigo-300/50" style={{ height: `${d * 1.5}px` }} />
            <div className="text-[10px] text-neutral-400">{labels[i]}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {[
          { label: 'Productividad', value: '71%', color: 'text-violet-600' },
          { label: 'Completadas', value: '182', color: 'text-emerald-600' },
          { label: 'Horas Ahorradas', value: '24.5h', color: 'text-indigo-600' },
        ].map((m, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-white/50 border border-white/40 text-center">
            <div className={`text-lg font-bold ${m.color}`}>{m.value}</div>
            <div className="text-[10px] text-neutral-400 mt-0.5">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TabTeam() {
  const team = [
    { name: 'Alex Martinez', role: 'Líder de Proyecto', status: 'online', tasks: 8, color: 'bg-violet-500' },
    { name: 'Sarah Kim', role: 'Diseñadora UI/UX', status: 'online', tasks: 5, color: 'bg-pink-500' },
    { name: 'James Liu', role: 'Dev Full-Stack', status: 'online', tasks: 12, color: 'bg-indigo-500' },
    { name: 'Nina Patel', role: 'Líder de Marketing', status: 'away', tasks: 6, color: 'bg-amber-500' },
    { name: 'David Rivera', role: 'Gerente de Ventas', status: 'online', tasks: 9, color: 'bg-emerald-500' },
    { name: 'Lisa Thompson', role: 'Líder de Soporte', status: 'offline', tasks: 3, color: 'bg-purple-500' },
  ]
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-neutral-800">Miembros del Equipo (12)</span>
        <span className="text-[11px] text-emerald-600 font-medium">9 en línea</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {team.map((m, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/50 border border-white/40">
            <div className="relative shrink-0">
              <div className={`w-9 h-9 rounded-full ${m.color} flex items-center justify-center font-bold text-sm text-white`}>{m.name[0]}</div>
              <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${m.status === 'online' ? 'bg-emerald-400' : m.status === 'away' ? 'bg-amber-400' : 'bg-neutral-300'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-neutral-700 truncate">{m.name}</div>
              <div className="text-[11px] text-neutral-400">{m.role}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-violet-600">{m.tasks}</div>
              <div className="text-[9px] text-neutral-400">tareas</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
function Design13() {
  const [chatOpen, setChatOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState<'Dashboard' | 'Workflows' | 'Analytics' | 'Team'>('Dashboard')
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [showSticky, setShowSticky] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowSticky(window.scrollY > 900)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const id = setInterval(() => setCarouselIdx((i) => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  // Mouse tracking in hero
  const handleHeroMouse = useCallback((e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  // Smooth scroll
  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Form handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  // Counter hooks for stats
  const stat1 = useCountUp(73, 2200)
  const stat2 = useCountUp(12, 2000)
  const stat3 = useCountUp(24, 2200)
  const stat4 = useCountUp(500, 2500)

  return (
    <div className="min-h-screen text-neutral-800 font-[family-name:var(--font-humanist)] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: CSS_KEYFRAMES }} />
      <MeshGradientBg />

      {/* ══════ NAVIGATION (from Ref #01 — light glass) ══════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(139,92,246,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 cursor-pointer">
            <img src="/logo.svg" alt="Synnova" className="h-7" />
            <span className="text-lg font-bold tracking-tight text-neutral-800">Synnova</span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Servicios', href: '#servicios' },
              { label: 'Producto', href: '#producto' },
              { label: 'Testimonios', href: '#testimonios' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contacto', href: '#contacto' },
            ].map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-sm text-neutral-500 hover:text-violet-600 transition-colors cursor-pointer font-medium">
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => scrollTo('#contacto')} className="text-sm text-neutral-400 hover:text-violet-600 transition-colors cursor-pointer">
              Iniciar sesión
            </button>
            <div className="w-px h-5 bg-neutral-200" />
            <button
              onClick={() => setChatOpen(true)}
              className="relative group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Bot className="w-4 h-4 relative" />
              <span className="relative">Habla con Nova</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)' }}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {['Servicios', 'Producto', 'Testimonios', 'FAQ', 'Contacto'].map((label) => (
              <button key={label} onClick={() => scrollTo(`#${label.toLowerCase()}`)} className="text-left text-base text-neutral-600 hover:text-violet-600 transition-colors cursor-pointer">
                {label}
              </button>
            ))}
            <hr className="border-violet-200/40 my-2" />
            <button onClick={() => { setChatOpen(true); setMobileMenuOpen(false) }} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-500 cursor-pointer">
              Habla con Nova
            </button>
          </div>
        </div>
      </nav>

      {/* ══════ HERO (from Ref #01 — light glass) ══════ */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouse}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
      >
        {/* Mouse-tracking gradient */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.06), transparent 60%)` }}
        />

        <motion.div initial="hidden" animate="show" variants={stagger} className="relative z-10 max-w-6xl mx-auto">
          {/* Hero layout: text left, orb right on desktop */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-white/60 rounded-full px-5 py-2 mb-8 text-sm text-violet-600 font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                Gestión empresarial reimaginada
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
                <span className="text-neutral-800">El futuro de</span>
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">tu negocio</span>
                <br />
                <span className="text-neutral-800">es transparente</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-neutral-500 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
                Una plataforma cristalina que te da visibilidad total sobre cada operación de tu empresa. Sin sorpresas, sin caos.
              </motion.p>

              {/* CTA pair */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button onClick={() => setChatOpen(true)} className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02] transition-all overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Bot className="w-5 h-5 relative" />
                  <span className="relative">Prueba gratis</span>
                </button>
                <button onClick={() => scrollTo('#producto')} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-violet-600 border border-violet-300/50 hover:bg-violet-50/50 transition-all cursor-pointer">
                  <Eye className="w-5 h-5" />
                  Ver el producto
                </button>
              </motion.div>
            </div>

            {/* Right: Nova AI Orb — dramatic anchor */}
            <motion.div variants={fadeUp} className="relative flex-shrink-0 flex flex-col items-center">
              <button onClick={() => setChatOpen(true)} className="relative cursor-pointer" style={{ width: 260, height: 260 }}>
                {/* Ring 1 */}
                <div className="absolute rounded-full" style={{ width: 200, height: 200, top: '50%', left: '50%', marginTop: -100, marginLeft: -100, border: '2px solid rgba(139,92,246,0.2)', animation: 'ringRotate1 8s linear infinite' }}>
                  <div className="absolute w-3 h-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50 -top-1.5 left-1/2 -ml-1.5" />
                </div>
                {/* Ring 2 */}
                <div className="absolute rounded-full" style={{ width: 230, height: 230, top: '50%', left: '50%', marginTop: -115, marginLeft: -115, border: '1.5px solid rgba(99,102,241,0.15)', animation: 'ringRotate2 12s linear infinite' }}>
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50 -top-1 left-1/2 -ml-1" />
                </div>
                {/* Ring 3 */}
                <div className="absolute rounded-full" style={{ width: 260, height: 260, top: '50%', left: '50%', marginTop: -130, marginLeft: -130, border: '1px solid rgba(139,92,246,0.1)', animation: 'ringRotate3 16s linear infinite' }}>
                  <div className="absolute w-2 h-2 rounded-full bg-violet-300 shadow-lg shadow-violet-300/50 -top-1 left-1/2 -ml-1" />
                </div>
                {/* Core orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 35% 35%, #a78bfa, #8b5cf6 40%, #6366f1 70%, #4338ca)', animation: 'orbPulse 3s ease-in-out infinite', boxShadow: '0 0 60px rgba(139,92,246,0.5), 0 0 120px rgba(99,102,241,0.25), inset 0 0 40px rgba(255,255,255,0.2)' }}>
                  <Bot className="w-14 h-14 text-white drop-shadow-lg" />
                </div>
              </button>
              <p className="text-lg font-bold text-violet-600 mb-1 mt-2">Asistente IA Nova</p>
              <p className="text-sm text-neutral-500 max-w-xs text-center">Nuestra IA analizará tu negocio en 2 minutos</p>
            </motion.div>
          </div>

          {/* Floating dashboard cards */}
          <motion.div variants={fadeUp} className="relative w-full max-w-4xl mx-auto h-56 sm:h-64 mt-14 hidden lg:block">
            {/* Revenue card — left */}
            <div className="absolute left-[2%] top-0 w-64 sm:w-72 rounded-2xl p-5 bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl shadow-violet-500/10 ring-1 ring-white/30" style={{ animation: 'float1 6s ease-in-out infinite' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-neutral-500">Ingresos Mensuales</span>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50/60 px-2 py-0.5 rounded-full">+23%</span>
              </div>
              <p className="text-3xl font-bold text-neutral-800 mb-3">$47.2M</p>
              <div className="flex items-end gap-1 h-12">
                {[35, 42, 38, 55, 48, 62, 58, 72, 68, 78, 74, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-violet-500/50 to-indigo-300/30" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            {/* Tasks card — right */}
            <div className="absolute right-[2%] top-6 w-60 sm:w-68 rounded-2xl p-5 bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl shadow-violet-500/10 ring-1 ring-white/30" style={{ animation: 'float2 7s ease-in-out 0.5s infinite' }}>
              <div className="text-xs font-medium text-neutral-500 mb-3">Tareas Activas</div>
              <div className="space-y-2.5">
                {['Onboarding de cliente — Q1', 'Revisar borrador propuesta', 'Actualizar facturación'].map((task, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded border-2 shrink-0 ${i === 0 ? 'border-violet-400 bg-violet-100/50' : 'border-neutral-300'}`} />
                    <span className={`text-sm ${i === 0 ? 'text-neutral-700 font-medium' : 'text-neutral-400'}`}>{task}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Team card — center, slightly lower */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 sm:top-6 w-56 sm:w-64 rounded-2xl p-5 bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl shadow-violet-500/10 ring-1 ring-white/30" style={{ animation: 'float3 8s ease-in-out 1s infinite' }}>
              <div className="text-xs font-medium text-neutral-500 mb-3">Actividad del Equipo</div>
              <div className="flex -space-x-2.5 mb-3">
                {['bg-violet-500', 'bg-indigo-500', 'bg-amber-500', 'bg-rose-500', 'bg-emerald-500'].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ${c} shadow-sm`}>
                    {['CR', 'AG', 'MO', 'RM', 'JL'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-neutral-500">
                <span className="text-emerald-600 font-semibold">5 en línea</span> — 12 tareas hoy
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════ SOCIAL PROOF ══════ */}
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm border-y border-white/40" />
        <div className="relative">
          <div className="pb-3">
          <LogoMarquee
            bgColor="transparent"
            labelClassName="text-center text-xs text-neutral-500 font-semibold uppercase tracking-[0.2em] mb-6 pt-8"
            mode="text"
            textClassName="text-xl font-extrabold text-neutral-800/35 hover:text-violet-600/60 transition-colors duration-300 select-none"
          />
          </div>
        </div>
      </div>

      {/* ══════ AI CHAT PREVIEW (from Ref #04) ══════ */}
      <section className="relative py-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3">
              Conoce a <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">Nova</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-500">Tu asistente de IA que entiende tu negocio.</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard className="rounded-2xl overflow-hidden" hover={false}>
              {/* Chat header */}
              <div className="px-6 py-4 border-b border-white/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-400 flex items-center justify-center text-base font-bold text-white shadow-lg shadow-violet-500/20">N</div>
                <div>
                  <div className="text-base font-bold">Nova AI</div>
                  <div className="text-xs text-emerald-600 font-medium">En línea</div>
                </div>
              </div>
              {/* Messages */}
              <div className="px-6 py-5 flex flex-col gap-4">
                <div className="self-end max-w-[80%]">
                  <div className="px-5 py-3 rounded-2xl rounded-br-sm bg-violet-100/60 border border-violet-200/40 text-[15px] text-neutral-700 leading-relaxed">
                    Necesito ayuda organizando las tareas de mi equipo
                  </div>
                </div>
                <div className="self-start max-w-[85%]">
                  <div className="px-5 py-3 rounded-2xl rounded-bl-sm bg-white/60 border border-white/40 text-[15px] text-neutral-600 leading-relaxed">
                    Veo que estás gestionando <span className="text-violet-600 font-semibold">12 miembros del equipo</span> en <span className="text-indigo-600 font-semibold">3 proyectos</span>. Déjame crear un flujo de trabajo personalizado que asigne tareas automáticamente
                    <span className="inline-block w-0.5 h-5 bg-violet-500 ml-0.5 align-middle" style={{ animation: 'typingCursor 1s step-end infinite' }} />
                  </div>
                </div>
              </div>
              {/* CTA */}
              <div className="px-5 pb-5 text-center">
                <button onClick={() => setChatOpen(true)} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 cursor-pointer hover:scale-[1.02] transition-transform">
                  <Bot className="w-4 h-4" />
                  Inicia tu conversación con Nova
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ══════ FEATURES BENTO GRID (from Ref #04) ══════ */}
      <section id="servicios" className="relative py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
              Todo lo que necesitas,<br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">integrado a la perfección</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-500 text-lg max-w-lg mx-auto">
              Seis módulos poderosos trabajando juntos en un solo centro de comando.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Panel de Operaciones', desc: 'KPIs en tiempo real, seguimiento de ingresos y resúmenes de tareas de un vistazo.', Mini: MiniDashboard },
              { title: 'Constructor de Flujos', desc: 'Automatización con arrastrar y soltar para procesos repetitivos.', Mini: MiniWorkflow },
              { title: 'Centro de Equipo', desc: 'Mira quién está trabajando en qué con actualizaciones de estado en vivo.', Mini: MiniTeamHub },
              { title: 'Analíticas', desc: 'Gráficos y reportes hermosos que de verdad tienen sentido.', Mini: MiniAnalytics },
              { title: 'Portal de Clientes', desc: 'Dale a tus clientes una experiencia de autoservicio con tu marca.', Mini: MiniClientPortal },
              { title: 'Calendario Inteligente', desc: 'Reuniones, fechas límite e hitos programados por IA.', Mini: MiniCalendar },
            ].map((card, i) => (
              <motion.div key={card.title} variants={fadeUp}>
                <GlassCard className="rounded-2xl overflow-hidden h-full">
                  <div className="p-5 sm:p-6 min-h-[220px]">
                    <card.Mini />
                  </div>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-white/30 pt-4">
                    <h3 className="text-lg font-bold text-neutral-800 mb-1.5">{card.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{card.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════ STATS (from Ref #04 — animated gradient borders) ══════ */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ref: stat1.ref, value: `${stat1.count}%`, label: stats[0]!.label },
              { ref: stat2.ref, value: `${stat2.count}h`, label: stats[1]!.label },
              { ref: stat3.ref, value: `${(stat3.count / 10).toFixed(1)}x`, label: stats[2]!.label },
              { ref: stat4.ref, value: `${stat4.count}+`, label: stats[3]!.label },
            ].map((stat, i) => (
              <div key={i} ref={stat.ref} className="relative rounded-2xl p-[1.5px]" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1, #8b5cf6)', backgroundSize: '300% 300%', animation: 'gradientShift 4s ease infinite' }}>
                <div className="bg-white/60 backdrop-blur-xl rounded-[14px] p-6 sm:p-7 text-center h-full">
                  <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500 font-medium leading-snug">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PRODUCT SHOWCASE TABS (from Ref #04) ══════ */}
      <section id="producto" className="relative py-24">
        <div className="max-w-[1060px] mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-3">
              Míralo en{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">acción</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-500 text-lg">Explora las pantallas que tu equipo usará todos los días.</motion.p>
          </motion.div>

          {/* Tab bar */}
          <div className="flex justify-center gap-1.5 mb-8 flex-wrap p-1.5 bg-white/30 backdrop-blur-lg rounded-2xl border border-white/40 w-fit mx-auto">
            {([['Dashboard', 'Panel'], ['Workflows', 'Flujos'], ['Analytics', 'Analíticas'], ['Team', 'Equipo']] as const).map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key as typeof activeTab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${activeTab === key ? 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-500/20' : 'text-neutral-400 hover:text-violet-600 hover:bg-white/40'}`}
              >{label}</button>
            ))}
          </div>

          {/* Mockup frame */}
          <GlassCard className="rounded-2xl overflow-hidden" hover={false}>
            {/* macOS title bar */}
            <div className="px-4 py-3 border-b border-white/30 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-neutral-400 font-mono">synnova.app/{activeTab.toLowerCase()}</span>
            </div>
            <div className="p-5 sm:p-6 min-h-[300px]">
              {activeTab === 'Dashboard' && <TabDashboard />}
              {activeTab === 'Workflows' && <TabWorkflows />}
              {activeTab === 'Analytics' && <TabAnalytics />}
              {activeTab === 'Team' && <TabTeam />}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ══════ TESTIMONIALS CAROUSEL (from Ref #04) ══════ */}
      <section id="testimonios" className="relative py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-3">
              Voces de{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">confianza</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-500 text-lg">Escucha a los equipos que transformaron sus operaciones.</motion.p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${carouselIdx * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="min-w-full px-4">
                  <GlassCard className="rounded-2xl relative overflow-hidden" hover={false}>
                    {/* Gradient top bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 to-indigo-400 rounded-t-2xl" />
                    <div className="p-8 sm:p-10 pt-10 sm:pt-12">
                      {/* Stars */}
                      <div className="flex gap-1.5 mb-5">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 italic">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-400 flex items-center justify-center text-white text-base font-bold shadow-lg shadow-violet-500/20">
                          {t.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-base text-neutral-800">{t.name}</div>
                          <div className="text-sm text-neutral-500">{t.role} · {t.company}</div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2.5 mt-7">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCarouselIdx(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === carouselIdx ? 'w-8 bg-gradient-to-r from-violet-500 to-indigo-400 shadow-md shadow-violet-500/20' : 'w-2.5 bg-violet-200/60 hover:bg-violet-300/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section id="faq" className="relative py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-violet-100/50 border border-violet-200/30 rounded-full px-4 py-1.5 mb-5 text-xs text-violet-600 font-semibold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              Resolvemos tus dudas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Preguntas{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">frecuentes</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <GlassCard key={i} className="rounded-2xl overflow-hidden" hover={false}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 pr-4">
                    <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-200/30 flex items-center justify-center text-xs font-bold text-violet-500 shrink-0">{i + 1}</span>
                    <span>{faq.question}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${openFaq === i ? 'bg-violet-100/60 rotate-180' : 'bg-white/40'}`}>
                    <ChevronDown className="w-5 h-5 text-violet-500" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BLOG (from Ref #04 — gradient top bars) ══════ */}
      <section className="relative py-24">
        <div className="max-w-[1060px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Desde el{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">blog</span>
            </h2>
            <p className="text-neutral-500 text-lg">Ideas sobre operaciones, automatización y crecimiento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => {
              const gradients = [
                'from-violet-500 to-indigo-400',
                'from-indigo-500 to-sky-400',
                'from-purple-500 to-violet-400',
              ]
              const patterns = [
                'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.15), transparent 60%), radial-gradient(circle at 70% 60%, rgba(99,102,241,0.12), transparent 50%)',
                'radial-gradient(circle at 60% 30%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(circle at 30% 70%, rgba(56,189,248,0.12), transparent 50%)',
                'radial-gradient(circle at 40% 60%, rgba(168,85,247,0.15), transparent 60%), radial-gradient(circle at 70% 30%, rgba(139,92,246,0.12), transparent 50%)',
              ]
              return (
                <motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <GlassCard className="rounded-2xl overflow-hidden h-full cursor-pointer">
                    {/* Abstract gradient thumbnail */}
                    <div className="relative h-28 overflow-hidden" style={{ background: patterns[i] }}>
                      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradients[i]}`} />
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                      {/* Decorative shapes */}
                      <div className={`absolute top-4 right-6 w-16 h-16 rounded-xl bg-gradient-to-br ${gradients[i]} opacity-20 rotate-12`} />
                      <div className={`absolute bottom-6 left-8 w-10 h-10 rounded-full bg-gradient-to-br ${gradients[i]} opacity-15`} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[11px] bg-violet-100/50 text-violet-600 px-3 py-1 rounded-full font-semibold">{post.category}</span>
                        <span className="text-[11px] text-neutral-400">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-neutral-800 mb-2 leading-snug">{post.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </GlassCard>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative rounded-3xl p-[1.5px]" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1, #8b5cf6)', backgroundSize: '300% 300%', animation: 'gradientShift 4s ease infinite' }}>
          <div className="bg-white/50 backdrop-blur-xl rounded-[22px] p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Descubre la transparencia total</h2>
            <p className="text-neutral-500 text-lg mb-8 max-w-xl mx-auto">
              Habla con Nova y ve con claridad cómo Synnova puede transformar tu operación.
            </p>
            <button onClick={() => setChatOpen(true)} className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-violet-500/20 overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Bot className="w-5 h-5 relative" />
              <span className="relative">Habla con Nova</span>
              <Sparkles className="w-5 h-5 relative" />
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* ══════ CONTACT (from Ref #01 — 5-col grid) ══════ */}
      <section id="contacto" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              ¿Listo para{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">empezar</span>?
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              Comienza tu prueba gratuita o habla con Nova y descubre lo que Synnova puede hacer por tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <GlassCard className="rounded-2xl p-6 sm:p-8" hover={false}>
                <h3 className="text-xl font-bold text-neutral-800 mb-6">Envíanos un mensaje</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nombre" required className="bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200 transition-all" />
                    <input type="email" placeholder="Correo electrónico" required className="bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200 transition-all" />
                  </div>
                  <input type="text" placeholder="Empresa" className="w-full bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200 transition-all" />
                  <textarea placeholder="Cuéntanos sobre tu negocio..." rows={4} required className="w-full bg-white/50 backdrop-blur border border-white/40 rounded-xl px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200 transition-all resize-none" />
                  <div className="pt-2">
                    <button type="submit" className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-10 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02] transition-all cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative">{formSubmitted ? '¡Mensaje enviado!' : 'Enviar mensaje'}</span>
                      <ArrowRight className="w-4 h-4 relative" />
                    </button>
                  </div>
                </form>
              </GlassCard>
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Nova CTA card */}
              <GlassCard className="rounded-2xl p-6 text-center relative overflow-hidden" hover={false}>
                <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(139,92,246,0.3), transparent 70%)' }} />
                <div className="relative z-10">
                  <button onClick={() => setChatOpen(true)} className="relative w-16 h-16 mx-auto mb-4 cursor-pointer">
                    <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(139,92,246,0.2)', animation: 'ringRotate1 6s linear infinite' }}>
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-violet-400 -top-0.5 left-1/2 -ml-0.5" />
                    </div>
                    <div className="absolute inset-2 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 35% 35%, #8b5cf6, #6366f1 70%)', animation: 'orbPulse 3s ease-in-out infinite', boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}>
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  </button>
                  <h4 className="text-lg font-bold text-neutral-800 mb-2">Habla con Nova</h4>
                  <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                    Nuestra IA analizará tus operaciones y te mostrará cómo Synnova te ayuda — en solo 2 minutos.
                  </p>
                  <button onClick={() => setChatOpen(true)} className="w-full py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all hover:scale-[1.02] border border-violet-300/50 text-violet-600 bg-violet-50/30" style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}>
                    Iniciar consulta con IA
                  </button>
                </div>
              </GlassCard>

              {/* Contact channels */}
              <GlassCard className="rounded-2xl p-6" hover={false}>
                <h4 className="text-sm font-bold text-neutral-800 mb-4">Otras formas de contactarnos</h4>
                <div className="space-y-3">
                  {[
                    { icon: MessageCircle, label: 'WhatsApp', value: 'Chatea con nuestro equipo', iconBg: 'bg-emerald-50 border-emerald-200/40', iconColor: 'text-emerald-500' },
                    { icon: Mail, label: 'Correo', value: 'hola@synnova.co', iconBg: 'bg-violet-50 border-violet-200/40', iconColor: 'text-violet-500' },
                    { icon: Linkedin, label: 'LinkedIn', value: 'Síguenos para novedades', iconBg: 'bg-blue-50 border-blue-200/40', iconColor: 'text-blue-500' },
                  ].map(({ icon: Icon, label, value, iconBg, iconColor }) => (
                    <a key={label} href="#" className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-white/30 hover:bg-white/60 transition-all group">
                      <div className={`w-9 h-9 rounded-lg ${iconBg} border flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${iconColor}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-neutral-700 group-hover:text-violet-600 transition-colors">{label}</p>
                        <p className="text-[11px] text-neutral-400">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="relative py-12">
        <div className="max-w-7xl mx-auto px-6">
          <GlassCard className="rounded-3xl p-8 md:p-10" hover={false}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
              <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
                <div className="flex items-center gap-2.5 mb-4">
                  <img src="/logo.svg" alt="Synnova" className="h-7" />
                  <span className="text-lg font-bold tracking-tight">Synnova</span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">La plataforma todo en uno para pequeños negocios que quieren crecer sin el caos.</p>
              </div>
              {[
                { title: 'Producto', links: ['Funciones', 'Precios', 'Integraciones', 'Novedades', 'API'] },
                { title: 'Empresa', links: ['Nosotros', 'Blog', 'Empleos', 'Prensa', 'Contacto'] },
                { title: 'Recursos', links: ['Centro de Ayuda', 'Comunidad', 'Plantillas', 'Webinars', 'Estado'] },
                { title: 'Legal', links: ['Privacidad', 'Términos', 'Seguridad', 'GDPR', 'Cookies'] },
              ].map((col) => (
                <div key={col.title}>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{col.title}</p>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link}><a href="#" className="text-sm text-neutral-500 hover:text-violet-600 transition-colors">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-white/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-400">© 2026 Synnova. Todos los derechos reservados.</p>
              <div className="flex gap-6 text-sm text-neutral-400">
                <a href="#" className="hover:text-violet-600 transition-colors">Privacidad</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Términos</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Cookies</a>
              </div>
            </div>
          </GlassCard>
        </div>
      </footer>

      {/* ══════ STICKY AI CTA ══════ */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        <button onClick={() => setChatOpen(true)} className="relative w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white flex items-center justify-center shadow-xl shadow-violet-500/30 cursor-pointer hover:scale-110 transition-transform">
          <div className="absolute inset-[-4px] rounded-full border-2 border-violet-400/50" style={{ animation: 'pulseRing 2s ease-out infinite' }} />
          <Bot className="w-6 h-6" />
        </button>
      </div>

      <NovaChat isOpen={chatOpen} onClose={() => setChatOpen(false)} theme="glass" />
    </div>
  )
}
