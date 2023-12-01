"use client"
import Link from "next/link"
import Carrito from "@/public/icons/carrito.png"
import Image from "next/image"
import { CartContext } from "@/context/CartContext"
import { useContext, useState } from "react"

const CartWidget = () => {    

    const { totalItems } = useContext(CartContext);
    return (
        <Link href={"/cart"} className="flex ">
            <Image 
                src={Carrito}
                alt="Icono carrito"
                width={50}
                height={30}
            />
            <span className="text-base text-red-900 font-bold">{totalItems()}</span>
        </Link>        
    )
}

export default CartWidget