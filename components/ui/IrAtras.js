"use client"

import { useRouter } from "next/navigation"

const IrAtras = ({...args}) => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} {...args}>
            Volver
        </button>
    )
}

export default IrAtras