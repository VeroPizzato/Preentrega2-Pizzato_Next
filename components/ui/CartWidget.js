"use client"
import Link from "next/link"
import Carrito from "@/public/icons/carrito.png"
import Image from "next/image"

const CartWidget = () => {    
    return (
        <Link href={"/cart"} className="flex ">
            <Image 
                src={Carrito}
                alt="Icono carrito"
                width={50}
                height={30}
            />
            <span className="text-base text-red-900 font-bold">3</span>
        </Link>        
    )
}

export default CartWidget