"use client"
import Boton from "./Boton"
import { useState, useEffect } from "react";
import { useCartContext } from "@/context/CartContext";
import Cart from "@/app/cart/page"

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
    const decrease = () => cantidad > 0 && setCantidad(cantidad - 1)

    return (
        <div className="font-mono text-lg flex flex-col gap-5 mt-6">
            <div className="flex items-center justify-center gap-3 mx-auto">       
                <Boton onClick={decrease}>-</Boton>
                <p className="font-bold">{cantidad}</p>
                <Boton onClick={increase}>+</Boton>       
            </div>            
            <Boton onClick={() => onAdd(cantidad)}>Agregar al carrito</Boton>              
        </div>        
    )
}

export default Counter