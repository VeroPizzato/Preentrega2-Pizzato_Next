"use client"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"

const ItemCount = ({ item }) => {
    const {addToCart} = useCartContext()

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        console.log({
            ...item,
            quantity
        })
    }

    return (
        <div className="font-mono text-lg flex flex-col gap-5 mt-6">
            <Counter counter={quantity} setCounter={setQuantity} max={item.stock}/>
            <Boton onClick={handleAdd}>Agregar al carrito</Boton>
        </div>
    )
}

export default ItemCount