
export const metadata = {
  title: 'Spirit Computacion',
  description: 'App de tienda de computacion, descuentos y ofertas imperdibles en artículos de Computación. Comprá y Pagá en cuotas con todas las tarjetas. Envíos a todo el país. Asesoramiento Online.',
  keywords: ['Spirit Computacion', 'Monitores', 'Notebooks', 'Gabinetes', 'Componentes'],
  openGraph: {
    title: 'Spirit Computacion',
    description: 'La mejor tienda de computacion',
    type: 'article',
    publishedTime: '2023-11-13T00:00:00.000Z',
    authors: ['Verizzato'],
  },
}

export default function Home() {
  return (
    <>
        <div className="bg-cover bg-center h-screen w-full overflow-hidden" style={{backgroundImage: "url('/fondo3.jpg')"}}>
          <h1 className="text-6xl text-red-900 text-center my-4 font-mono">Spirit Computacion</h1>
           
          <h2 className="text-3xl text-bold text-center mt-4 font-mono">Bienvenidos a Spirit Computacion !</h2>

          <p className="text-4xl text-center my-4 font-mono">
              Encontra en nuestra tienda online toda la tecnología que buscas
          </p>
          <p className="text-2xl text-bold text-center mt-4 font-mono">
              Los mejores productos al mejor precio y a un solo click de tu casa
          </p>
        </div>
    </>
  )
}