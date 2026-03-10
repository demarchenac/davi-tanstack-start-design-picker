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
          <p className="text-neutral-400 text-lg">Explora 13 propuestas creativas para la landing page de Synnova</p>
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
  {
    id: '6',
    name: 'Noir Dorado',
    description: 'Elegancia premium en negro profundo con acentos dorados y tonos champan',
    thumbnail: '/thumbnails/design6.png',
  },
  {
    id: '7',
    name: 'Musgo Profundo',
    description: 'Bosque encantado nocturno con verdes musgo desaturados, particulas terrosas y acentos de liquen',
    thumbnail: '/thumbnails/design7.png',
  },
  {
    id: '8',
    name: 'Resina Ambar',
    description: 'Tonos ambar-marron calidos sobre negro profundo, particulas de resina y acentos de brasa',
    thumbnail: '/thumbnails/design8.png',
  },
  {
    id: '9',
    name: 'Ciruela Electrica',
    description: 'Editorial magazine con tipografia serif, composiciones asimetricas y palette plum/magenta electrico',
    thumbnail: '/thumbnails/design9.png',
  },
  {
    id: '10',
    name: 'Tinta Editorial',
    description: 'Estetica editorial en crema y tinta profunda con acentos bermellon',
    thumbnail: '/thumbnails/design10.png',
  },
  {
    id: '11',
    name: 'Marfil Regio',
    description: 'Editorial calido y prestigioso en crema con borgona y acentos de oro antiguo',
    thumbnail: '/thumbnails/design11.png',
  },
  {
    id: '12',
    name: 'Cobre Nocturno',
    description: 'Editorial nocturno de prestigio con cobre brunido sobre negro calido',
    thumbnail: '/thumbnails/design12.png',
  },
  {
    id: '13',
    name: 'Centro de Cristal',
    description: 'Glassmorphism premium con centro de comando interactivo, carrusel y mockups detallados',
    thumbnail: '/thumbnails/design13.png',
  },
]
