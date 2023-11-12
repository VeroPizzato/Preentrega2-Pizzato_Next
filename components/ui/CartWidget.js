"use client"
import Link from "next/link"
import Carrito from "@/public/icons/carrito.png"
import Image from "next/image"

const CartWidget = () => {    
    return (
        <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center`}>
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