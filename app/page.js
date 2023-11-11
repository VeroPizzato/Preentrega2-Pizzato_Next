
export const metadata = {
  title: 'Spirit Computacion',
  description: 'App de tienda de computacion',
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
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 my-4">Spirit Computacion</h1>
        <hr />
        <p className="text-xl text-center mt-4">Bienvenidos a nuestra tienda online</p>

      </main>
    </>
  )
}