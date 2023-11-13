"use client"
import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

export default function Nosotros() {
    const router = useRouter()

    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-red-900 text-center my-4 font-mono">Nosotros</h1>
                <hr class="border-b border-red-900"/>
                <p className="text-base mt-4 font-mono font-bold">SITIO EN CONSTRUCCIÓN</p>

                <div class="font-mono text-lg my-4">
                    <Boton onClick={() => router.back()}> Volver </Boton>
                </div>
            </main>
        </>
    )
}