import { socialProofLogos } from './content'

interface LogoMarqueeProps {
  bgColor?: string
  label?: string
  labelClassName?: string
  logoClassName?: string
  className?: string
  speed?: number
  mode?: 'logo' | 'text'
  textClassName?: string
  showFade?: boolean
}

export function LogoMarquee({
  bgColor = '#ffffff',
  label = 'Empresas que confian en Synnova',
  labelClassName = 'text-center text-sm text-neutral-400 uppercase tracking-widest mb-8 font-medium',
  logoClassName = 'h-8 max-w-[120px] object-contain brightness-0 opacity-30 hover:opacity-60 transition-all duration-300',
  className = '',
  speed = 90,
  mode = 'logo',
  textClassName = 'text-xl font-semibold text-neutral-400 hover:text-neutral-600 transition-colors duration-300 select-none',
  showFade = false,
}: LogoMarqueeProps) {
  const doubled = [...socialProofLogos, ...socialProofLogos]

  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      <style>{`
        @keyframes logo-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .logo-marquee-track { animation: logo-marquee ${speed}s linear infinite; }
        .logo-marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {label && <p className={labelClassName}>{label}</p>}

      <div className="relative">
        {showFade && (
          <>
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
            />
          </>
        )}

        <div className="logo-marquee-track flex items-center gap-16 whitespace-nowrap" style={{ width: 'max-content' }}>
          {doubled.map((item, i) =>
            mode === 'text' ? (
              <span key={`${item.name}-${i}`} className={textClassName}>{item.name}</span>
            ) : (
              <img
                key={`${item.name}-${i}`}
                src={item.logo}
                alt={item.name}
                title={item.name}
                className={logoClassName}
                loading="lazy"
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
