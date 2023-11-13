"use client"
import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

export default function Nosotros() {
    const router = useRouter()

    return (
        <>
            <main className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('/maquina-escribir.jpg')"}}>
                <h1 className="text-4xl text-red-900 my-4 font-mono ml-4">Nosotros</h1>
                <hr class="border-b border-red-900"/>
                <p className="text-base mt-4 font-mono font-bold ml-4">SITIO EN CONSTRUCCIÓN</p>

                <div class="font-mono text-lg my-4 ml-4">
                    <Boton onClick={() => router.back()}> Volver </Boton>
                </div>
            </main>
        </>
    )
}