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
        <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/fondo-inicio.jpg')"}}>
            <h1 className="text-6xl text-bold text-red-900 text-center my-4 font-mono text-shadow-lg mt-10">Spirit Computacion</h1>
            <h2 className="text-3xl text-center mt-6 font-mono text-shadow-lg">Bienvenidos a Spirit Computacion !</h2>
            <p className="text-4xl text-center my-4 font-mono text-shadow-lg mt-6">
                Encontra en nuestra tienda online toda la tecnología que buscas
            </p>
            <p className="text-2xl font-bold text-center mt-6 font-mono text-shadow-lg">
                Los mejores productos al mejor precio y a un solo click de tu casa
            </p>
        </main>      
    </>
  )
}

