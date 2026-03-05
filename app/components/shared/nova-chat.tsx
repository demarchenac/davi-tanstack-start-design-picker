import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, User } from 'lucide-react'

interface NovaChatProps {
  isOpen: boolean
  onClose: () => void
  theme?: 'dark' | 'light' | 'glass' | 'warm' | 'earth'
}

interface Message {
  role: 'nova' | 'user'
  text: string
}

const CONVERSATION_FLOW = [
  { question: 'Hola, soy Nova, la asistente inteligente de Synnova. Estoy aqui para ayudarte a descubrir como transformar la operacion de tu negocio. ¿Como te llamas?', field: 'name' },
  { question: '¡Mucho gusto, {name}! Cuentame, ¿cual es el nombre de tu empresa?', field: 'company' },
  { question: 'Excelente. ¿A que correo electronico te puedo enviar un diagnostico gratuito de tu operacion?', field: 'email' },
  { question: 'Perfecto. Por ultimo, ¿cual es tu numero de WhatsApp para que un asesor te contacte con los resultados?', field: 'phone' },
  { question: '¡Listo, {name}! Ya tengo toda tu informacion. En las proximas 24 horas recibiras en {email} un diagnostico personalizado con recomendaciones para optimizar las operaciones de {company}. ¡Fue un placer hablar contigo!', field: 'done' },
]

const themeStyles: Record<string, { container: string; header: string; bubble: string; novaBubble: string; input: string; button: string }> = {
  dark: {
    container: 'bg-[#0a0e27] border-blue-500/30',
    header: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white',
    bubble: 'bg-[#1a1f3d] text-white',
    novaBubble: 'bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-blue-100 border border-blue-500/20',
    input: 'bg-[#1a1f3d] border-blue-500/30 text-white placeholder:text-blue-300/40',
    button: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400',
  },
  warm: {
    container: 'bg-amber-50 border-orange-200',
    header: 'bg-gradient-to-r from-orange-500 to-rose-500 text-white',
    bubble: 'bg-white text-neutral-800 border border-orange-100',
    novaBubble: 'bg-gradient-to-r from-orange-50 to-rose-50 text-neutral-800 border border-orange-200',
    input: 'bg-white border-orange-200 text-neutral-800 placeholder:text-neutral-400',
    button: 'bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:from-orange-400 hover:to-rose-400',
  },
  light: {
    container: 'bg-white border-indigo-200',
    header: 'bg-gradient-to-r from-indigo-600 to-emerald-500 text-white',
    bubble: 'bg-neutral-100 text-neutral-800',
    novaBubble: 'bg-gradient-to-r from-indigo-50 to-emerald-50 text-neutral-800 border border-indigo-100',
    input: 'bg-neutral-100 border-neutral-200 text-neutral-800 placeholder:text-neutral-400',
    button: 'bg-gradient-to-r from-indigo-600 to-emerald-500 text-white hover:from-indigo-500 hover:to-emerald-400',
  },
  glass: {
    container: 'bg-white/10 backdrop-blur-xl border-white/20',
    header: 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white',
    bubble: 'bg-white/10 backdrop-blur text-white',
    novaBubble: 'bg-white/15 backdrop-blur text-white border border-white/10',
    input: 'bg-white/10 backdrop-blur border-white/20 text-white placeholder:text-white/40',
    button: 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:from-violet-500 hover:to-indigo-400',
  },
  earth: {
    container: 'bg-stone-50 border-emerald-200',
    header: 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white',
    bubble: 'bg-white text-stone-800 border border-stone-200',
    novaBubble: 'bg-gradient-to-r from-emerald-50 to-amber-50 text-stone-800 border border-emerald-200',
    input: 'bg-white border-stone-200 text-stone-800 placeholder:text-stone-400',
    button: 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white hover:from-emerald-500 hover:to-amber-500',
  },
}

export function NovaChat({ isOpen, onClose, theme = 'dark' }: NovaChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState<Record<string, string>>({})
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const styles = themeStyles[theme] ?? themeStyles.dark!

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([{ role: 'nova', text: CONVERSATION_FLOW[0]!.question }])
        setIsTyping(false)
      }, 800)
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen, isTyping])

  const fillTemplate = (text: string, data: Record<string, string>) => {
    return text.replace(/\{(\w+)\}/g, (_, key: string) => data[key] ?? '')
  }

  const handleSend = () => {
    if (!input.trim() || step >= CONVERSATION_FLOW.length - 1) return

    const currentFlow = CONVERSATION_FLOW[step]!
    const newUserData = { ...userData, [currentFlow.field]: input.trim() }
    setUserData(newUserData)

    setMessages((prev) => [...prev, { role: 'user', text: input.trim() }])
    setInput('')

    const nextStep = step + 1
    setStep(nextStep)

    if (nextStep < CONVERSATION_FLOW.length) {
      setIsTyping(true)
      setTimeout(() => {
        const nextFlow = CONVERSATION_FLOW[nextStep]!
        setMessages((prev) => [
          ...prev,
          { role: 'nova', text: fillTemplate(nextFlow.question, newUserData) },
        ])
        setIsTyping(false)
      }, 1000 + Math.random() * 500)
    }
  }

  const isDone = step >= CONVERSATION_FLOW.length - 1 && messages.length > 1

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-3rem)] rounded-2xl border shadow-2xl flex flex-col overflow-hidden z-50 ${styles.container}`}
        >
          {/* Header */}
          <div className={`px-5 py-4 flex items-center justify-between shrink-0 ${styles.header}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Nova</div>
                <div className="text-xs opacity-80">Asistente IA de Synnova</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'nova' ? 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white' : 'bg-neutral-600 text-white'}`}>
                    {msg.role === 'nova' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === 'user' ? styles.bubble : styles.novaBubble}`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className={`rounded-2xl px-4 py-3 ${styles.novaBubble}`}>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-current opacity-40 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-current opacity-40 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-current opacity-40 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 shrink-0">
            {!isDone ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    step === 0
                      ? 'Escribe tu nombre...'
                      : step === 1
                        ? 'Nombre de tu empresa...'
                        : step === 2
                          ? 'tu@email.com'
                          : 'Tu numero de WhatsApp...'
                  }
                  className={`flex-1 rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${styles.input}`}
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className={`rounded-xl px-4 py-3 transition-all disabled:opacity-40 disabled:cursor-not-allowed ${styles.button}`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className={`text-center text-sm py-2 rounded-xl ${styles.novaBubble}`}>
                Conversacion finalizada. ¡Gracias!
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
