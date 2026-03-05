import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: DesignPicker,
})

function DesignPicker() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <img src="/logo.svg" alt="Synnova" className="h-12 mx-auto mb-6 invert" />
          <h1 className="text-4xl font-bold mb-4">Selector de Disenos</h1>
          <p className="text-neutral-400 text-lg">Explora 5 propuestas creativas para la landing page de Synnova</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((d) => (
            <Link
              key={d.id}
              to={`/${d.id}` as '/1'}
              className="group block rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                <img
                  src={d.thumbnail}
                  alt={d.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-neutral-400">/{d.id}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">{d.name}</h3>
                <p className="text-sm text-neutral-500">{d.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const designs = [
  {
    id: '1',
    name: 'Cosmos Oscuro',
    description: 'Futurista oscuro con particulas, bordes brillantes y acentos neon',
    thumbnail: '/thumbnails/design1.png',
  },
  {
    id: '2',
    name: 'Amanecer Calido',
    description: 'Gradientes calidos, curvas organicas y tipografia amigable',
    thumbnail: '/thumbnails/design2.png',
  },
  {
    id: '3',
    name: 'Rejilla Audaz',
    description: 'Cuadriculas audaces, tipografia fuerte y diseno tipo bento',
    thumbnail: '/thumbnails/design3.png',
  },
  {
    id: '4',
    name: 'Cristal Liquido',
    description: 'Glassmorphism, efectos de desenfoque y capas translucidas',
    thumbnail: '/thumbnails/design4.png',
  },
  {
    id: '5',
    name: 'Tierra Viva',
    description: 'Naturaleza y tecnologia, tonos tierra y metaforas de crecimiento',
    thumbnail: '/thumbnails/design5.png',
  },
]
