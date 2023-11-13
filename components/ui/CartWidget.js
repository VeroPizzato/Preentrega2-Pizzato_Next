"use client"
import Link from "next/link"
import Carrito from "@/public/icons/carrito.png"
import Image from "next/image"

const CartWidget = () => {    
    return (
        <Link href={"/cart"} className={`text-base p-3 flex items-center font-bold text-red-900`}>
            <Image 
                src={Carrito}
                alt="Icono carrito"
                width={30}
                height={30}
            />
            <span>3</span>
        </Link>
    )
}

export default CartWidget