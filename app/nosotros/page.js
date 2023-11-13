"use client"
import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

// export const metadata = {
//     title: 'Nosotros - Spirit Computacion',
//     description: 'Cómo comienza Spirit Computacion',
// }

export default function Nosotros() {
    const router = useRouter()

    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-blue-600 text-center my-4 font-mono">Nosotros</h1>
                <hr />
                <p className="text-base mt-4 font-mono">SITIO EN CONSTRUCCIÓN</p>

                <div class="font-mono text-lg my-4">
                    <Boton onClick={() => router.back()}> Volver </Boton>
                </div>
            </main>
        </>
    )
}