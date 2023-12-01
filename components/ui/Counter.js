"use client"
import Boton from "./Boton"
import { useState, useEffect } from "react";
import { useCartContext } from "@/context/CartContext";

const Counter = ({producto}) => {

    const { addItem, getItem } = useCartContext();

    const [cantidad, setCantidad] = useState(0);
    const [stockDisponible, setStockDisponible]  = useState(producto.stock);

    const onAdd = (quantity) => {     
        addItem(producto, quantity);
        setCantidad(quantity);
        setStockDisponible(stockDisponible - quantity);
    };

    function actualizarStock(itemSlug){
        const producto = getItem(itemSlug); 
        if (producto){
            setStockDisponible(stockDisponible - producto.quantity)
        }
    }

    useEffect(() => {
        actualizarStock(producto.slug);
     }, []);    

    const increase = () => cantidad < stockDisponible && setCantidad(cantidad + 1)
    const decrease = () => cantidad > 1 && setCantidad(cantidad - 1)

    return (
        <div className="flex items-center gap-3">
            <Boton onClick={decrease}>-</Boton>
            <p className="font-bold">{cantidad}</p>
            <Boton onClick={increase}>+</Boton>
            <Boton onClick={() => onAdd()}>Agregar al carrito</Boton>
        </div>
    )
}

export default Counter